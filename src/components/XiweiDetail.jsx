import './XiweiDetail.css'

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

function CoverModule({ project }) {
  return (
    <div className="xw-cover reveal">
      <div className="xw-cover__art" aria-hidden>
        <img className="xw-cover__img" src="images/xiwei/手机加载页1.png" alt="锡味寻踪加载页封面" />
      </div>
      <div className="xw-cover__info">
        <h2 className="xw-cover__title">{project.title}</h2>
        <span className="xw-cover__en">{project.en}</span>
        <p className="xw-cover__tag">{project.tagline}</p>
        <div className="xw-cover__tags">
          {project.tags.map((t) => (
            <span key={t} className="xw-cover__tag-chip">{t}</span>
          ))}
        </div>
        <dl className="xw-cover__meta">
          <div><dt>设计周期</dt><dd>{project.year}</dd></div>
          <div><dt>我的角色</dt><dd>{project.role}</dd></div>
          <div><dt>项目类型</dt><dd>{project.type}</dd></div>
          <div><dt>使用工具</dt><dd>{project.tools}</dd></div>
        </dl>
      </div>
    </div>
  )
}

function PitchModule({ m, project }) {
  return (
    <div className="xw-pitch reveal">
      <Head m={m} />
      <div className="xw-pitch__frame">
        <p className="xw-pitch__body">
          <span className="xw-pitch__highlight">{project.tagline}</span>
          {' '}——{m.body}
        </p>
      </div>
    </div>
  )
}

function OverviewModule({ m }) {
  return (
    <div className="xw-overview reveal">
      <Head m={m} />
      <div className="xw-overview__text">
        <p>{m.body}</p>
      </div>
    </div>
  )
}

function GoalsModule({ m }) {
  return (
    <div className="xw-goals reveal">
      <Head m={m} />
      <div className="xw-goals__grid">
        {m.goals.map((g, i) => (
          <article key={i} className="xw-goal-card">
            <span className="xw-goal-card__tag">{g.tag}</span>
            <p className="xw-goal-card__desc">{g.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function ScreensModule({ m }) {
  return (
    <div className="xw-screens reveal">
      <Head m={m} />
      <div className="xw-screens__grid">
        {m.screens.map((s, i) => (
          <article key={s.tag} className="xw-screen-card">
            <div className="xw-screen-card__head">
              <span className="xw-screen-card__tag">{s.tag}</span>
              <span className="xw-screen-card__num">{s.name}</span>
            </div>
            <div className="xw-screen-card__art">
              {s.image ? (
                <img
                  src={s.image}
                  alt={s.name}
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="xw-screen-card__ink" />
              )}
            </div>
            <div className="xw-screen-card__body">
              <p className="xw-screen-card__desc">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function HighlightsModule({ m }) {
  return (
    <div className="xw-highlights reveal">
      <Head m={m} />
      <div className="xw-highlights__list">
        {m.highlights.map((h, i) => (
          <article key={i} className="xw-highlight-card">
            <span className="xw-highlight-card__num">0{i + 1}</span>
            <div>
              <h5 className="xw-highlight-card__title">{h.tag}</h5>
              <p className="xw-highlight-card__desc">{h.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function SummaryModule({ m }) {
  return (
    <div className="xw-summary reveal">
      <Head m={m} />
      <div className="xw-summary__body">
        {m.body.split('\n').filter(Boolean).map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>
    </div>
  )
}

function AwardsModule({ m }) {
  return (
    <div className="xw-awards reveal">
      <Head m={m} />
      <div className="xw-awards__list">
        {m.awards.map((a, i) => (
          <article key={a.title} className="xw-awards__item">
            <div className="xw-awards__head">
              <span className="xw-awards__rank">0{i + 1}</span>
              <div className="xw-awards__meta">
                <span className="xw-awards__level">{a.level}</span>
                <h3 className="xw-awards__title">{a.title}</h3>
              </div>
            </div>
            <div className="xw-awards__card">
              <img className="xw-awards__cert" src={a.cert} alt={`${a.title}证书`} />
              <figcaption className="xw-awards__caption">
                <span className="xw-awards__work">{a.work}</span>
                <span className="xw-awards__group">{a.group} · {a.unit}</span>
              </figcaption>
            </div>
            <figure className="xw-awards__preview">
              <img src={a.preview} alt={`${a.work}作品`} />
            </figure>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function XiweiDetail({ project }) {
  return (
    <div className="xw">
      {project.modules.map((m) => {
        const props = { m, project }
        if (m.kind === 'cover') return <CoverModule key={m.num} project={project} />
        if (m.kind === 'pitch') return <PitchModule {...props} />
        if (m.kind === 'overview') return <OverviewModule {...props} />
        if (m.kind === 'goals') return <GoalsModule {...props} />
        if (m.kind === 'screens') return <ScreensModule {...props} />
        if (m.kind === 'highlights') return <HighlightsModule {...props} />
        if (m.kind === 'summary') return <SummaryModule {...props} />
        return null
      })}
    </div>
  )
}
