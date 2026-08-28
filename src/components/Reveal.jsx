import { Children, cloneElement, isValidElement } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Reveal.css'

/**
 * <Reveal> — 滚动显现容器
 *
 * Props:
 *   - as         HTML 标签，默认 'div'
 *   - variant    'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur'
 *                默认 'fade-up'
 *   - delay      ms，延迟触发（用于做阶梯进入）
 *   - threshold  触发阈值
 *   - once       是否只触发一次，默认 true
 *   - className  额外 className
 *   - style      内联样式
 *   - children
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'fade-up',
  delay = 0,
  threshold,
  once = true,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, visible] = useScrollReveal({ threshold, once, delay })

  const cls = [
    'reveal',
    `reveal--${variant}`,
    visible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  )
}

/**
 * <RevealGroup> —— 一组元素阶梯显现的容器
 *
 * 用法：
 *   <RevealGroup stagger={120}>
 *     <RevealItem>...</RevealItem>
 *     <RevealItem>...</RevealItem>
 *     ...
 *   </RevealGroup>
 *
 * 子项共享同一个父容器，但每个子项独立触发 IO + delay。
 */
export function RevealGroup({ stagger = 100, className = '', children, as: Tag = 'div', ...rest }) {
  return (
    <Tag className={className} {...rest}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child
        if (child.type === RevealItem) {
          return cloneElement(child, {
            key: child.key ?? `ri-${i}`,
            _delay: i * stagger,
          })
        }
        // 普通子项 → 包装一层 Reveal
        return (
          <Reveal key={child.key ?? `rg-${i}`} delay={i * stagger}>
            {child}
          </Reveal>
        )
      })}
    </Tag>
  )
}

/**
 * <RevealItem> —— RevealGroup 的子项（自带 delay 阶梯）
 */
export function RevealItem({
  variant = 'fade-up',
  _delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, visible] = useScrollReveal({ delay: _delay, once: true })
  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}