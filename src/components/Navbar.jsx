import { useEffect, useState } from 'react'
import { SITE, ABOUT } from '../data/content'
import Ripple from './Ripple'
import './Navbar.css'

/**
 * Navbar — 含三个动效：
 *  1. Scroll Shadow：滚动时实时计算 shadow alpha/blur 写入 CSS 变量
 *  2. Hover Shadow：.nav__email 等关键按钮带 elev-warm 浮雕
 *  3. Button Ripple：email CTA 用 Ripple 组件包裹
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [open, setOpen] = useState(false)

  // 实时把滚动距离映射为 shadow 强度（写入 :root CSS 变量）
  useEffect(() => {
    let ticking = false
    const update = () => {
      const y = window.scrollY
      const alpha = Math.min(0.18, y / 600)
      const blur = Math.min(40, 8 + y / 8)
      const sy = Math.min(8, y / 80)
      document.documentElement.style.setProperty('--scroll-shadow-alpha', alpha.toFixed(3))
      document.documentElement.style.setProperty('--scroll-shadow-blur', `${blur.toFixed(1)}px`)
      document.documentElement.style.setProperty('--scroll-shadow-y', `${sy.toFixed(2)}px`)
      setScrolled(y > 40)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver 高亮当前 section
  useEffect(() => {
    const ids = SITE.nav.map((n) => n.id)
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav__inner container">
          <a
            href="#home"
            className="nav__logo"
            onClick={(e) => handleClick(e, 'home')}
          >
            <span className="nav__logo-text">
              <strong>{SITE.name}</strong>
              <em>{SITE.enName}</em>
            </span>
          </a>

          <nav className="nav__menu" aria-label="主导航">
            {SITE.nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`nav__link ${activeId === n.id ? 'is-active' : ''}`}
                onClick={(e) => handleClick(e, n.id)}
              >
                <span className="nav__link-label">{n.label}</span>
              </a>
            ))}
          </nav>

          <Ripple
            as="a"
            href={`mailto:${ABOUT.contact.email}`}
            className="nav__email"
            rippleColor="var(--color-yellow-300)"
          >
            {ABOUT.contact.email}
          </Ripple>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="菜单"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
          {SITE.nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="nav__drawer-link"
              onClick={(e) => handleClick(e, n.id)}
            >
              <span>{n.num}</span>
              <span>{n.label}</span>
            </a>
          ))}
        </div>
      </header>

      {/* Scroll Shadow 弥散带：navbar 下方 28px 高渐变，增强层次 */}
      <div className="nav-shadow-band" aria-hidden />
    </>
  )
}
