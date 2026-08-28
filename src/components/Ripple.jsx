import { useEffect, useRef, useState } from 'react'
import './Ripple.css'

/**
 * 按钮点击波纹效果
 *
 * 用法：
 *   <Ripple as="button" className="..." onClick={...}>按钮文字</Ripple>
 *   <Ripple as="a" href="...">链接文字</Ripple>
 *
 * 每次点击会在按钮内动态生成一个圆形 span，
 * 以鼠标落点为圆心扩散，800ms 内淡出消失。
 */
export default function Ripple({
  as: Tag = 'button',
  className = '',
  children,
  rippleColor = 'currentColor',
  rippleDuration = 800,
  ...rest
}) {
  const ref = useRef(null)
  const [ripples, setRipples] = useState([])

  // 清理已结束的 ripple
  useEffect(() => {
    if (!ripples.length) return
    const timers = ripples.map((r) =>
      setTimeout(() => {
        setRipples((arr) => arr.filter((x) => x.id !== r.id))
      }, rippleDuration)
    )
    return () => timers.forEach(clearTimeout)
  }, [ripples, rippleDuration])

  const handleMouseDown = (e) => {
    const el = ref.current
    if (!el) return

    // 鼠标在按钮内的相对坐标
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // 取按钮最长边作为波纹最大半径
    const size = Math.max(rect.width, rect.height) * 1.4

    const id = Date.now() + Math.random()
    setRipples((arr) => [...arr, { id, x, y, size }])
  }

  return (
    <Tag
      ref={ref}
      className={`ripple-host ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={(e) => {
        // 触屏：把 touch 当作 mouseDown
        const t = e.touches[0]
        if (!t) return
        handleMouseDown({ clientX: t.clientX, clientY: t.clientY })
      }}
      {...rest}
    >
      {children}
      <span className="ripple-layer" aria-hidden>
        {ripples.map((r) => (
          <span
            key={r.id}
            className="ripple-circle"
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              background: rippleColor,
              animationDuration: `${rippleDuration}ms`,
            }}
          />
        ))}
      </span>
    </Tag>
  )
}
