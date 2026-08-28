import { useEffect, useMemo, useRef, useState } from 'react'
import {
  WORKS_PREVIEW,
  SKILLS_QUICK,
  WORKS_FILTERS,
  WORKS_ALL,
} from '../data/content'
import Ripple from './Ripple'
import Reveal, { RevealGroup, RevealItem } from './Reveal'
import FilterTabs from './FilterTabs'
import use3DTilt from '../hooks/use3DTilt'
import './WorksPreview.css'

/**
 * 项目卡 —— 透视倾斜版本
 * - 外层 `<article>` 负责 FLIP 重排的 translate（避免和 3D 倾斜 transform 冲突）
 * - 内层 `.wpcard__inner` 跑 3D 倾斜动画
 * - 文字层级加 `.tilt-child`，通过 CSS 变量 --tilt-strength 自动 translateZ 浮起
 * - 暗色卡（AI 视频）整体反色，使用浅色前景
 */
function ProjectCard({ project, idx, flipKey, total }) {
  const tiltRef = use3DTilt({ max: 7, scale: 1.015, speed: 700, index: idx })
  const num = `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  const handleClick = () => {
    const id = `project-${project.id}`
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <article
      className={`wpcard elev-0 ${project.isDark ? 'wpcard--dark' : ''}`}
      style={{
        '--pc-bg': project.bg,
        '--pc-color': project.color,
      }}
      data-flip-key={flipKey}
    >
      <div className="wpcard__inner" ref={tiltRef}>
        <Ripple
          as="button"
          className="wpcard__btn has-shine"
          onClick={handleClick}
          rippleColor="var(--color-yellow-300)"
        >
          <div className="wpcard__num">{num}</div>
          <div className="wpcard__meta">
            <div className="wpcard__cat tilt-child">
              <span className="blink-dot" />
              <span>{project.category === 'design' ? 'AI PRODUCT' : project.category === 'game' ? 'GAME UI' : 'AI MOTION'}</span>
            </div>
            <h3 className="wpcard__title tilt-child">{project.title}</h3>
            <span className="wpcard__en tilt-child">{project.en}</span>
            <p className="wpcard__tagline tilt-child">{project.tagline}</p>
            <div className="wpcard__tags tilt-child">
              {(project.tags || []).map((t) => (
                <span key={t} className="wpcard__tag">{t}</span>
              ))}
            </div>
            <span className="wpcard__cta tilt-child">
              进入项目 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
        </Ripple>
      </div>
    </article>
  )
}

export default function WorksPreview() {
  const [active, setActive] = useState('all')
  const cardsRef = useRef(null)

  // 读取 URL 参数初始化筛选（方便调试 / 截图）
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const f = params.get('filter')
    if (f && ['all', 'design', 'game', 'ai'].includes(f)) {
      setActive(f)
    }
  }, [])

  // 根据 active 过滤项目 —— useMemo 缓存
  const visible = useMemo(() => {
    if (active === 'all') return WORKS_ALL
    return WORKS_ALL.filter((p) => p.category === active)
  }, [active])

  // 网格重排：先记录当前所有卡片位置 → 切换 visible → 下一帧执行 FLIP
  const firstRects = useRef(new Map())
  const capture = () => {
    if (!cardsRef.current) return
    cardsRef.current.querySelectorAll('[data-flip-key]').forEach((el) => {
      const k = el.dataset.flipKey
      firstRects.current.set(k, el.getBoundingClientRect())
    })
  }

  useEffect(() => {
    // DOM 更新后下一帧，记录新坐标，然后对比 + 平移
    requestAnimationFrame(() => {
      const els = cardsRef.current?.querySelectorAll('[data-flip-key]') || []
      els.forEach((el) => {
        const k = el.dataset.flipKey
        const first = firstRects.current.get(k)
        if (!first) return
        const last = el.getBoundingClientRect()
        const dx = first.left - last.left
        const dy = first.top - last.top
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return
        el.style.transition = 'none'
        el.style.transform = `translate(${dx}px, ${dy}px)`
        requestAnimationFrame(() => {
          el.style.transition = 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1)'
          el.style.transform = 'translate(0, 0)'
          setTimeout(() => {
            el.style.transition = ''
            el.style.transform = ''
          }, 720)
        })
      })
      // 记录最新位置作为下次 first
      firstRects.current = new Map()
      els.forEach((el) => {
        firstRects.current.set(el.dataset.flipKey, el.getBoundingClientRect())
      })
    })
  }, [active])

  const handleChange = (id) => {
    if (id === active) return
    capture()  // 切换前先记录当前位置作为 first
    setActive(id)
  }

  return (
    <section id="works" className="works-preview section tech-grid-bg">
      <div className="container">
        {/* 板块头 */}
        <RevealGroup stagger={120} className="wp__head">
          <div>
            <span className="eyebrow">{WORKS_PREVIEW.eyebrow}</span>
            <h2 className="section-title">
              <span style={{ whiteSpace: 'pre-line' }}>
                {WORKS_PREVIEW.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {i === 0 ? line : <><br /><em>{line}</em></>}
                  </span>
                ))}
              </span>
            </h2>
          </div>
          <p className="wp__intro">{WORKS_PREVIEW.intro}</p>
        </RevealGroup>

        {/* 分类筛选 */}
        <Reveal variant="fade-up" delay={200}>
          <FilterTabs
            filters={WORKS_FILTERS}
            active={active}
            onChange={handleChange}
          />
        </Reveal>

        {/* 项目卡网格 —— FLIP 重排 */}
        <div className="wp__cards" ref={cardsRef}>
          {visible.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              total={visible.length}
              flipKey={project.id}
            />
          ))}
        </div>

        {/* 简约 Skills 双列 */}
        <Reveal variant="fade-up">
          <div className="wp__skills">
            {SKILLS_QUICK.map((s) => (
              <div key={s.label} className="wp__skill">
                <h4 className="wp__skill-title">{s.label}</h4>
                <div className="wp__skill-items">
                  {s.items.map((it) => (
                    <span key={it} className="wp__skill-chip">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}