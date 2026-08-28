import { useEffect, useRef } from 'react'

/**
 * 3D 倾斜动效 hook
 *
 * 监听传入 ref 的 mousemove，计算鼠标在元素中的相对坐标（-0.5 ~ 0.5），
 * 在该元素应用 `transform: rotateX(...) rotateY(...) translateZ(...)`，
 * 形成"鼠标驱动的透视倾斜"。
 *
 * 额外支持的调试参数：URL ?tilt=1 时强制以最大倾斜角显示（仅 ?tiltsides 计算不同方向），
 * 便于截图查看效果。
 *
 * @param {Object} opts
 * @param {number} opts.max - 最大倾斜角度（度），默认 8
 * @param {number} opts.scale - hover 时容器放大倍数，默认 1.02
 * @param {number} opts.speed - 鼠标离开后回正时长（ms），默认 600
 * @param {number} opts.perspective - 透视距离（px），默认 1200
 * @param {number} opts.index - 卡片序号（用于 ?tilt=1 调试模式下错开倾斜方向）
 */
export default function use3DTilt({
  max = 8,
  scale = 1.02,
  speed = 600,
  perspective = 1200,
  index = 0,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 调试模式：URL ?tilt=N 时强制以最大倾斜显示，N 是卡片序号（用于错开方向）
    if (
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).has('tilt')
    ) {
      // 三种方向：右上 / 正中 / 左下
      const presets = [
        { rx: -0.5, ry: 0.5 },   // 鼠标在右上 → 卡片左上仰起
        { rx: 0.0, ry: 0.0 },    // 中央
        { rx: 0.5, ry: -0.5 },   // 鼠标在左下
      ]
      const p = presets[index % presets.length]
      const rotateY = p.ry * max * 2
      const rotateX = -p.rx * max * 2
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
      el.style.setProperty('--tilt-strength', '1')
      // 立即体现，没有 transition
      el.style.transition = 'none'
      return
    }

    // 尊重用户偏好：系统开了减少动效，跳过 3D 倾斜
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let raf = 0
    let lastX = 0
    let lastY = 0
    let isHover = false

    const setTilt = (rx, ry) => {
      // rotateX 用负号：鼠标在顶部 → 卡片顶部向相机倾斜
      const rotateY = ry * max * 2
      const rotateX = -rx * max * 2
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHover ? scale : 1})`

      // 倾斜越大 → 浮起越深
      const tiltStrength = Math.min(1, Math.hypot(rx, ry) * 2)
      el.style.setProperty('--tilt-strength', tiltStrength.toFixed(3))
    }

    const onEnter = () => {
      isHover = true
      el.style.transition = `transform 180ms ease-out`
    }

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      lastX = (e.clientX - cx) / rect.width
      lastY = (e.clientY - cy) / rect.height
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setTilt(lastX, lastY))
    }

    const onLeave = () => {
      isHover = false
      cancelAnimationFrame(raf)
      el.style.transition = `transform ${speed}ms cubic-bezier(0.22, 1, 0.36, 1)`
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`
      el.style.setProperty('--tilt-strength', '0')
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [max, scale, speed, perspective, index])

  return ref
}
