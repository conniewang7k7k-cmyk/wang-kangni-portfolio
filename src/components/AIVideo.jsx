import { useRef, useState } from 'react'
import './AIVideo.css'

function WorkCard({ w, i }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handleClick = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <article className={`aiv-work aiv-work--${w.ratio.replace(':', 'x')}`}>
      <div
        className={`aiv-work__frame${playing ? ' is-playing' : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={playing ? `暂停 ${w.zh}` : `播放 ${w.zh}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick()
          }
        }}
      >
        <video
          ref={videoRef}
          className="aiv-work__video"
          src={w.src}
          poster={w.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        />
        <span className="aiv-work__play" aria-hidden>
          {playing ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="7" y="5" width="3.5" height="14" rx="1.4" fill="currentColor" />
              <rect x="13.5" y="5" width="3.5" height="14" rx="1.4" fill="currentColor" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.2L18.5 12L8 18.8V5.2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="aiv-work__ratio">{w.ratio}</span>
        {w.award && <span className="aiv-work__award">{w.award}</span>}
      </div>
      <div className="aiv-work__meta">
        <h4 className="aiv-work__title">{w.zh}</h4>
        <span className="aiv-work__en">{w.en}</span>
      </div>
    </article>
  )
}

export default function AIVideo({ project }) {
  return (
    <div className="aiv">
      {/* 大封面 */}
      <div className="aiv__cover reveal">
        <div className="aiv__cover-bg" aria-hidden />
        <div className="aiv__cover-content">
          <span className="aiv__cover-tag">EXTRA · AI MOTION</span>
          <h2 className="aiv__cover-title">{project.title}</h2>
          <span className="aiv__cover-en">{project.en}</span>
          <p className="aiv__cover-meta">{project.tagline}</p>
        </div>
        <div className="aiv__cover-deco">
          <div className="aiv__cover-chip">
            <span className="aiv__cover-chip-num">217</span>
            <span className="aiv__cover-chip-label">SHIPPED</span>
          </div>
          <div className="aiv__cover-chip aiv__cover-chip--alt">
            <span className="aiv__cover-chip-num">94%</span>
            <span className="aiv__cover-chip-label">PASS</span>
          </div>
        </div>
      </div>

      {/* 能力概述 */}
      <section className="aiv__overview reveal">
        <div className="aiv__overview-text">
          <span className="eyebrow">// ABILITY OVERVIEW</span>
          <p className="aiv__overview-body">{project.overview}</p>
        </div>
      </section>

      {/* 4 大核心技能 */}
      <section className="aiv__skills reveal">
        <header className="aiv__head">
          <span className="eyebrow">// 04 CORE SKILLS</span>
          <h3 className="aiv__head-title">实战技能矩阵</h3>
        </header>
        <div className="aiv__skills-grid">
          {project.skills.map((s, i) => (
            <article key={i} className="aiv-skill">
              <span className="aiv-skill__tag">{s.tag}</span>
              <h4 className="aiv-skill__title">{s.title}</h4>
              <p className="aiv-skill__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4 件作品 */}
      <section className="aiv__works reveal">
        <header className="aiv__head">
          <span className="eyebrow">// 04 SHIPMENTS</span>
          <h3 className="aiv__head-title">真实作品 · 217 段成片中精选</h3>
        </header>
        <div className="aiv__works-grid">
          {project.works.map((w, i) => (
            <WorkCard key={i} w={w} i={i} />
          ))}
        </div>
      </section>

      {/* 展示形式：脚本/原片/成片对比 */}
      <section className="aiv__samples reveal">
        <header className="aiv__head">
          <span className="eyebrow">// 04 SHOWCASE</span>
          <h3 className="aiv__head-title">从脚本到成片 · 完整链路</h3>
        </header>
        <div className="aiv__samples-list">
          {project.samples.map((s, i) => (
            <article key={i} className="aiv-sample">
              <span className="aiv-sample__num">0{i + 1}</span>
              <h4 className="aiv-sample__label">{s.label}</h4>
              <p className="aiv-sample__desc">{s.desc}</p>
              <div className="aiv-sample__bar">
                <span style={{ width: `${30 + i * 25}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 工具栏 */}
      <section className="aiv__tools reveal">
        <span className="aiv__tools-label">主要工具</span>
        <ul className="aiv__tools-list">
          {['即梦 AI', '可灵 AI', 'DeepSeek', 'Hunyuan3D', '3ds Max', 'After Effects', '剪映', 'SONY 实拍'].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
