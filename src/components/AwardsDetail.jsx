import AwardsModule from './AwardsModule'
import './AwardsDetail.css'

// 模块头（与全站 .module-head 标准样式一致）
function Head({ m }) {
  return (
    <header className="module-head reveal">
      <span className="module-head__num">{m.num}</span>
      <div className="module-head__title">
        <span className="module-head__en">{m.en}</span>
        <span className="module-head__zh">{m.zh}</span>
      </div>
    </header>
  )
}

// 模块 1：封面（左侧信息 + 右侧证书独立展示）
function CoverModule({ project }) {
  return (
    <div className="ad-cover reveal">
      <div className="ad-cover__bg" aria-hidden />
      <div className="ad-cover__inner">
        <div className="ad-cover__info">
          <h2 className="ad-cover__title">{project.title}</h2>
          <span className="ad-cover__en">{project.en}</span>
          <p className="ad-cover__tagline">{project.tagline}</p>
          <div className="ad-cover__tags">
            {project.tags.map((t) => (
              <span key={t} className="ad-cover__tag-chip">{t}</span>
            ))}
          </div>
          <dl className="ad-cover__meta">
            <div><dt>参赛周期</dt><dd>{project.year}</dd></div>
            <div><dt>我的角色</dt><dd>{project.role}</dd></div>
            <div><dt>项目类型</dt><dd>{project.type}</dd></div>
            <div><dt>使用工具</dt><dd>{project.tools}</dd></div>
          </dl>
          <div className="ad-cover__stats">
            <div className="ad-cover__stat">
              <span className="ad-cover__stat-num">5</span>
              <span className="ad-cover__stat-label">项赛事奖项</span>
            </div>
            <div className="ad-cover__stat">
              <span className="ad-cover__stat-num">5</span>
              <span className="ad-cover__stat-label">件独立作品</span>
            </div>
            <div className="ad-cover__stat">
              <span className="ad-cover__stat-num">3</span>
              <span className="ad-cover__stat-label">年参赛周期</span>
            </div>
          </div>
        </div>
        <figure className="ad-cover__cert">
          <img src="images/awards/cover-ccsda.jpg" alt="第六届东方创意之星创新设计大赛获奖证书" />
          <figcaption className="ad-cover__cert-caption">
            <span className="ad-cover__cert-mark">CCSDA · 2025</span>
            <span className="ad-cover__cert-title">第六届东方创意之星 · 省赛 · 铜奖 · 《灾情搜救迅行者》</span>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

// 模块 3：项目总结
function SummaryModule({ m }) {
  return (
    <div className="ad-summary reveal">
      <Head m={m} />
      <div className="ad-summary__body">
        {m.body.split('\n').filter(Boolean).map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>
    </div>
  )
}

// 模块 2：作品展示（如酱排骨消消乐全图）
function WorksModule({ m }) {
  return (
    <div className="ad-works reveal">
      <Head m={m} />
      <div className="ad-works__intro">
        <h3 className="ad-works__title">
          <span className="ad-works__title-zh">{m.workName}</span>
          <span className="ad-works__title-en">{m.workEn}</span>
        </h3>
        <p className="ad-works__tagline">{m.workTagline}</p>
      </div>
      <div className="ad-works__gallery">
        {m.photos.map((p) => (
          <figure key={p.src} className="ad-works__photo">
            <img src={p.src} alt={p.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function AwardsDetail({ project }) {
  return (
    <div className="ad">
      {project.modules.map((m) => {
        const props = { m, project }
        if (m.kind === 'cover') return <CoverModule key={m.num} project={project} />
        if (m.kind === 'awards') return <AwardsModule m={m} />
        if (m.kind === 'works') return <WorksModule m={m} />
        if (m.kind === 'summary') return <SummaryModule {...props} />
        return null
      })}
    </div>
  )
}