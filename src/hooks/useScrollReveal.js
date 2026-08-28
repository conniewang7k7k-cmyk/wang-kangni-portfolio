import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal
 * 滚动显现 —— 元素进入视口时自动淡入并伴随位移
 *
 * @param {object} options
 *   - threshold     触发阈值（0-1），默认 0.12
 *   - rootMargin    IO rootMargin，默认 '0px 0px -10% 0px'（提前一截）
 *   - once          是否只触发一次，默认 true
 *   - delay         额外延迟（ms）
 *
 * 用法：
 *   const [ref, visible] = useScrollReveal()
 *   <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} />
 *
 * 也可配合 <Reveal> 组件使用 —— 已经内置。
 */
export default function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  delay = 0,
} = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 首屏判断：元素在 mount 时已经在视口里（包括首屏可视 + 页面足够高时）
    const rect = el.getBoundingClientRect()
    const inViewportNow = rect.top < window.innerHeight && rect.bottom > 0
    if (inViewportNow) {
      const t = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(t)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => setVisible(true), delay)
            } else {
              setVisible(true)
            }
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    // 安全网：3 秒后无论 IO 是否触发都强制可见（防止 headless / 旧浏览器卡死）
    const safety = setTimeout(() => setVisible(true), 3000)
    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [threshold, rootMargin, once, delay])

  return [ref, visible]
}