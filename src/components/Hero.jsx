import { HERO, SITE } from '../data/content'
import Ripple from './Ripple'
import './Hero.css'

function ScrollHint() {
  return (
    <div className="hero__scroll">
      <span>SCROLL</span>
      <span className="hero__scroll-arrow" />
    </div>
  )
}

export default function Hero() {
  // 平滑滚动到作品区
  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // 调试模式（?debug=1）：用于截图，缩短 hero 高度
  const isDebug =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('debug') === '1'

  return (
    <section id="home" className={`hero tech-grid-bg ${isDebug ? 'is-debug' : ''}`}>
      {/* 装饰元素：弯曲 ribbon（左上） + 砖红色 doodle 圆圈 + 黄圆 + 红贴纸 */}
      <div className="hero__decor" aria-hidden>
        <div className="hero__ring hero__ring--tl"></div>
        <div className="hero__ring hero__ring--br"></div>
        <div className="hero__sun"></div>
        <div className="hero__sticker">2026&nbsp;PORTFOLIO</div>
        {/* 阳光洒下来动效：斜射光束 + 漂浮光斑 */}
        <div className="hero__rays">
          <span className="hero__ray hero__ray--main" />
          <span className="hero__ray hero__ray--a" />
          <span className="hero__ray hero__ray--b" />
          <span className="hero__ray hero__ray--c" />
        </div>
        <div className="hero__dust">
          <span className="hero__grain" style={{ '--d': '0s',   '--x': '12%', '--y': '60%', '--s': '6px' }} />
          <span className="hero__grain" style={{ '--d': '1.2s', '--x': '28%', '--y': '78%', '--s': '4px' }} />
          <span className="hero__grain" style={{ '--d': '0.6s', '--x': '45%', '--y': '40%', '--s': '8px' }} />
          <span className="hero__grain" style={{ '--d': '1.8s', '--x': '60%', '--y': '72%', '--s': '5px' }} />
          <span className="hero__grain" style={{ '--d': '2.4s', '--x': '75%', '--y': '50%', '--s': '7px' }} />
          <span className="hero__grain" style={{ '--d': '0.9s', '--x': '88%', '--y': '68%', '--s': '4px' }} />
          <span className="hero__grain" style={{ '--d': '3.0s', '--x': '38%', '--y': '85%', '--s': '5px' }} />
          <span className="hero__grain" style={{ '--d': '1.5s', '--x': '52%', '--y': '52%', '--s': '3px' }} />
        </div>
      </div>

      <div className="container hero__inner">
        {/* 顶部一行：标牌 + 日期 */}
        <div className="hero__meta reveal">
          <span className="hero__meta-pill">
            <span className="hero__dot" /> 2026 · {SITE.city}
          </span>
          <span className="hero__meta-line">
            // A YOUNG DESIGNER&apos;S CASE STUDIES · UI / UX / GAME UI / AI MOTION
          </span>
        </div>

        {/* 主标题：三层（混排） */}
        <h1 className="hero__title reveal">
          <span className="hero__line">
            <span className="hero__word">{HERO.titleZh}</span>
          </span>
          <span className="hero__line hero__line--mix">
            <span className="hero__year">{HERO.titleYo}</span>
            <span className="hero__word hero__word--accent">{HERO.titleEn}</span>
          </span>
        </h1>

        {/* 副标题 + 一句话 */}
        <div className="hero__sub reveal">
          <h2 className="hero__subtitle">{HERO.subtitle}</h2>
          <p className="hero__intro">{HERO.intro}</p>
        </div>

        {/* CTA：看作品 / 发邮件 — 都用 Ripple 包裹 */}
        <div className="hero__cta-row reveal">
          <Ripple
            as="button"
            className="hero__btn hero__btn--primary has-shine"
            onClick={() => handleClick('works')}
            rippleColor="var(--color-yellow-300)"
          >
            <span>{HERO.cta}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Ripple>
          <Ripple
            as="a"
            href={`mailto:${SITE.email}`}
            className="hero__btn hero__btn--ghost"
            rippleColor="var(--color-yellow-500)"
          >
            <span>Say Hello</span>
          </Ripple>
        </div>

        <ScrollHint />
      </div>
    </section>
  )
}
