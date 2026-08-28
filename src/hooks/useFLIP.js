import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

/**
 * useFLIP —— 让网格/列表在重排时，卡片从旧坐标平滑飞到新坐标
 *
 * 原理（FLIP = First · Last · Invert · Play）：
 *   1. First  记录重排前每个 item 的位置 rect
 *   2. Last   让 React 完成布局更新，记录重排后的 rect
 *   3. Invert 对每个 item 应用 transform: translate(原-新) 让它视觉上保持在原位
 *   4. Play   再用 transition 把 transform 归零 → 平滑飞入
 *
 * 用法：
 *   const flipRef = useFLIP()
 *   <div ref={flipRef}>{items.map(...)}</div>
 *   // 父组件改变 items 顺序/筛选时，调用 ref.current.play()
 *
 * 也可以把 play 暴露成回调，配合 React state 切换时调用。
 */
export default function useFLIP({
  duration = 600,      // 动画时长 ms
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',  // 缓动
  fade = true,         // 是否同时淡入淡出新增/移除的元素
} = {}) {
  const containerRef = useRef(null)
  // 用 Map 保存每个 item 的上一次 DOM 引用
  const itemsRef = useRef(new Map())
  const firstRectsRef = useRef(new Map())

  const register = useCallback((key) => (node) => {
    if (node) itemsRef.current.set(key, node)
    else itemsRef.current.delete(key)
  }, [])

  // 第一次记录每个 item 的位置 —— 在每次 render 提交后、下次 layout 前
  const capture = useCallback(() => {
    const rects = new Map()
    itemsRef.current.forEach((node, key) => {
      rects.set(key, node.getBoundingClientRect())
    })
    firstRectsRef.current = rects
  }, [])

  // 执行 FLIP 动画
  const play = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    requestAnimationFrame(() => {
      const newItems = new Map()  // 这一帧还存在的 item
      const removedKeys = []

      itemsRef.current.forEach((node, key) => {
        if (!node.isConnected) {
          removedKeys.push(key)
          return
        }
        const last = node.getBoundingClientRect()
        const first = firstRectsRef.current.get(key)

        if (first) {
          const dx = first.left - last.left
          const dy = first.top - last.top
          // 距离过小就跳过（避免抖动）
          if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
            // 关闭 transition，立即跳到旧位置
            node.style.transition = 'none'
            node.style.transform = `translate(${dx}px, ${dy}px)`
            // 强制 reflow
            // eslint-disable-next-line no-unused-expressions
            node.offsetHeight
            // 下一帧启用 transition 飞回原位
            requestAnimationFrame(() => {
              node.style.transition = `transform ${duration}ms ${easing}`
              node.style.transform = 'translate(0, 0)'
              // 动画结束后清理
              setTimeout(() => {
                node.style.transition = ''
                node.style.transform = ''
              }, duration + 30)
            })
          }
        }
        newItems.set(key, node)
      })

      // 新进入的元素淡入（first 为空说明是新增）
      itemsRef.current.forEach((node, key) => {
        if (!firstRectsRef.current.has(key) && node.isConnected && fade) {
          node.style.transition = 'none'
          node.style.opacity = '0'
          node.style.transform = 'translateY(16px) scale(0.98)'
          requestAnimationFrame(() => {
            node.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`
            node.style.opacity = '1'
            node.style.transform = 'translateY(0) scale(1)'
            setTimeout(() => {
              node.style.transition = ''
              node.style.opacity = ''
              node.style.transform = ''
            }, duration + 30)
          })
        }
      })

      // 离场元素（已在 React 中被移除但 DOM 还在卸载中）淡出 —— 实际由父组件控制 exit-anim
      // 此处不处理 removedKeys，因为 React 已经把节点卸载了
    })
  }, [duration, easing, fade])

  // 用 useLayoutEffect 确保在浏览器绘制前捕获 First 坐标
  useLayoutEffect(() => {
    capture()
  })

  // 监听父组件 size 变化（窗口 resize 时也重排）
  useEffect(() => {
    const onResize = () => {
      capture()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [capture])

  return { containerRef, register, capture, play }
}