import './GuangdianDetail.css'

// 模块头（复用 global css 里的 .module-head 样式）
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

// 模块 1：封面（左侧信息 + 右侧产品拆解图）
function CoverModule({ project }) {
  return (
    <div className="gd-cover reveal">
      <div className="gd-cover__info">
        <h2 className="gd-cover__title">{project.title}</h2>
        <span className="gd-cover__en">{project.en}</span>
        <p className="gd-cover__tagline">{project.tagline}</p>
        <div className="gd-cover__tags">
          {project.tags.map((t) => (
            <span key={t} className="gd-cover__tag-chip">{t}</span>
          ))}
        </div>
        <dl className="gd-cover__meta">
          <div><dt>设计周期</dt><dd>{project.year}</dd></div>
          <div><dt>我的角色</dt><dd>{project.role}</dd></div>
          <div><dt>项目类型</dt><dd>{project.type}</dd></div>
          <div><dt>使用工具</dt><dd>{project.tools}</dd></div>
        </dl>
        <a
          className="gd-cover__demo"
          href="https://conniewang7k7k-cmyk.github.io/guangdian-prototype/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="体验逛点设计原型"
        >
          <span className="gd-cover__demo-text">点击体验设计原型</span>
          <span className="gd-cover__demo-arrow" aria-hidden>↗</span>
        </a>
      </div>
      <div
        className="gd-cover__art"
        aria-hidden
      >
        {/* 主视觉：启动页 PNG */}
        <img
          className="gd-cover__screen"
          src="./images/guangdian/启动页.png"
          alt="逛点启动页"
          draggable="false"
        />
      </div>
    </div>
  )
}

// 模块 2：电梯演讲
function PitchModule({ m, project }) {
  return (
    <div className="gd-pitch reveal">
      <Head m={m} />
      <div className="doodle-frame">
        <span className="doodle-sticker" style={{ top: -22, left: 28 }}>ELEVATOR</span>
        <p className="gd-pitch__body">
          <span className="gd-pitch__highlight">{project.tagline}</span>
          {' '}——{m.body.split('——')[0].includes('面向') ? m.body : m.body}
        </p>
      </div>
    </div>
  )
}

// 模块 3：概述（分点表达）
function OverviewModule({ m }) {
  return (
    <div className="gd-overview reveal">
      <Head m={m} />
      <div className="gd-overview__layout">
        <div className="gd-overview__text">
          {m.points.map((p, i) => (
            <p key={i} className="gd-overview__point">
              <span className="gd-overview__point-label">{p.label}：</span>
              <span className="gd-overview__point-text">{p.text}</span>
            </p>
          ))}
        </div>
        <div className="gd-overview__sticky">
          <div className="gd-overview__badge">
            <span className="gd-overview__badge-num">2026</span>
            <span className="gd-overview__badge-label">DESIGN PROJECT</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 模块 4：痛点（便签墙 - 6 个大头针便签）
function PainsModule({ m }) {
  return (
    <div className="gd-pains reveal">
      <Head m={m} />
      <div className="gd-pains__wall">
        {m.pains.map((p, i) => (
          <article
            key={i}
            className={`gd-note gd-note--${p.tone} gd-note--pos-${i % 6}`}
            style={{ '--note-rot': `${(i % 3 - 1) * 2.5}deg` }}
          >
            <span className="gd-note__pin" aria-hidden>
              <span className="gd-note__pin-ball" />
              <span className="gd-note__pin-stem" />
            </span>
            <span className="gd-note__logo" aria-hidden>
              <span className="gd-note__logo-mark">P</span>
            </span>
            <span className="gd-note__num">0{i + 1}</span>
            <span className="gd-note__icon">{p.icon}</span>
            <h4 className="gd-note__title">{p.title}</h4>
            <p className="gd-note__desc">{p.desc}</p>
            {p.refs && (
              <div className="gd-note__refs" aria-hidden>
                {p.refs.map((r, j) => (
                  <div
                    key={j}
                    className={`gd-note__ref gd-note__ref--${p.tone}`}
                  >
                    <span className="gd-note__ref-tag">{r.tag}</span>
                    <span className="gd-note__ref-text">{r.text}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

// 模块 5：目标用户（六边形人物卡 - 3 人）
function UsersModule({ m }) {
  return (
    <div className="gd-users reveal">
      <Head m={m} />
      <div className="gd-users__grid">
        {m.personas.map((p, i) => (
          <article key={i} className={`gd-hex gd-hex--${p.color}`}>
            <div className="gd-hex__avatar">
              {p.avatar && (
                <img className="gd-hex__avatar-img" src={p.avatar} alt={p.zh} />
              )}
            </div>
            <div className="gd-hex__body">
              <span className="gd-hex__tag">{p.tag}</span>
              <h4 className="gd-hex__name">
                <span className="gd-hex__name-zh">{p.zh}</span>
                <span className="gd-hex__name-en">{p.en}</span>
              </h4>
              <dl className="gd-hex__meta">
                <div><dt>年龄</dt><dd>{p.age} 岁</dd></div>
                <div><dt>位置</dt><dd>{p.loc}</dd></div>
                <div><dt>身份</dt><dd>{p.role}</dd></div>
                <div><dt>目标</dt><dd>{p.goal}</dd></div>
              </dl>
              <p className="gd-hex__desc">{p.desc}</p>
              <ul className="gd-hex__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

// 模块 6：设计全流程（横向 stepper）
function ProcessModule({ m }) {
  return (
    <div className="gd-process reveal">
      <Head m={m} />
      <div className="gd-process__flow">
        {m.steps.map((s, i) => (
          <div key={i} className="gd-process__step">
            <span className="gd-process__num">0{i + 1}</span>
            <span className="gd-process__label">{s}</span>
            {i < m.steps.length - 1 && <span className="gd-process__arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

// 模块 7：核心功能（5 张统一卡 · 悬停展开详情）
function FeaturesModule({ m }) {
  return (
    <div className="gd-features reveal">
      <Head m={m} />
      <div className="gd-features__grid">
        {m.features.map((f, i) => (
          <article key={f.tag} className={`gd-feature gd-feature--${i === 0 ? 'main' : 'mini'} gd-feature--${f.tag.toLowerCase()}`}>
            <div className="gd-feature__shade" aria-hidden />
            <span className="gd-feature__tag">{f.tag}</span>
            <h5 className="gd-feature__title">{f.title}</h5>
            <p className="gd-feature__desc">{f.desc}</p>
            <ul className="gd-feature__detail">
              {f.detail.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="gd-feature__meta">
              <span className="gd-feature__meta-dot" />
              <span>{f.role}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

// 模块 8：核心页面（6 张真实截图，无手机外壳）
function ScreensModule({ m }) {
  return (
    <div className="gd-screens reveal">
      <Head m={m} />
      <div className="gd-screens__grid">
        {m.screens.map((s) => (
          <article key={s.tag} className={`gd-sc gd-sc--${s.variant || 'image'}`}>
            <div className="gd-sc__head">
              <span className="gd-sc__tag">{s.tag}</span>
              <h5 className="gd-sc__name">{s.name}</h5>
            </div>
            <div className="gd-sc__frame">
              {s.image && (
                <img className="gd-sc__phone-img" src={s.image} alt={s.name} loading="lazy" />
              )}
            </div>
            <p className="gd-sc__desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

// 模块 9：设计系统总览（内嵌 9.1-9.5 子模块）
function SystemModule({ m }) {
  return (
    <div className="gd-system reveal">
      <Head m={m} />
      <ul className="gd-system__list">
        {m.systems.map((s, i) => (
          <li key={s.name} className="gd-system__item">
            <span className="gd-system__num">0{i + 1}</span>
            <span className="gd-system__label">{s.name}</span>
            <span className="gd-system__en">{s.en}</span>
            <span className="gd-system__desc">{s.desc}</span>
          </li>
        ))}
      </ul>
      {m.children && m.children.length > 0 && (
        <div className="gd-system__children">
          {m.children.map((c) => {
            if (c.kind === 'system-color') return <SystemColorModule key={c.num} m={c} />
            if (c.kind === 'system-type') return <SystemTypeModule key={c.num} m={c} />
            if (c.kind === 'system-radius') return <SystemRadiusModule key={c.num} m={c} />
            if (c.kind === 'system-uikit') return <SystemUIKitModule key={c.num} m={c} />
            if (c.kind === 'system-icons') return <SystemIconsModule key={c.num} m={c} />
            return null
          })}
        </div>
      )}
    </div>
  )
}

// 模块 9.1：色彩规范
function SystemColorModule({ m }) {
  return (
    <div className="gd-sys gd-sys--color reveal">
      <Head m={m} />
      {m.intro && <p className="gd-sys__intro">{m.intro}</p>}
      <SysSwatchGroup title="品牌主色 · BRAND" items={m.brands} />
      <SysSwatchGroup title="辅助功能色 · FUNCTIONAL" items={m.functionals} />
      <SysSwatchGroup title="中性色 · NEUTRAL" items={m.neutrals} />
    </div>
  )
}

function SysSwatchGroup({ title, items }) {
  return (
    <div className="gd-sys__group">
      <h4 className="gd-sys__group-title">{title}</h4>
      <div className="gd-sys__swatches">
        {items.map((c) => (
          <div key={c.hex} className="gd-sys__swatch">
            <div className="gd-sys__swatch-chip" style={{ background: c.hex }} />
            <div className="gd-sys__swatch-info">
              <span className="gd-sys__swatch-name">{c.name}</span>
              <span className="gd-sys__swatch-hex">{c.hex.toUpperCase()}</span>
              <span className="gd-sys__swatch-use">{c.use}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 模块 9.2：字体规范
function SystemTypeModule({ m }) {
  return (
    <div className="gd-sys gd-sys--type reveal">
      <Head m={m} />
      {m.intro && <p className="gd-sys__intro">{m.intro}</p>}
      <h4 className="gd-sys__group-title">字号阶梯 · SCALE</h4>
      <div className="gd-sys__type-list">
        {m.scale.map((s) => (
          <div key={s.name} className="gd-sys__type-row">
            <div className="gd-sys__type-label">
              <b>{s.name}</b>
              <span>{s.use}</span>
            </div>
            <div
              className="gd-sys__type-preview"
              style={{ fontSize: `${s.px}px`, fontWeight: s.weight, lineHeight: s.lh }}
            >{s.sample}</div>
            <div className="gd-sys__type-spec">
              {s.px}px · {s.wname}<br />行高 {s.lh}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 模块 9.3：圆角 & 透明度
function SystemRadiusModule({ m }) {
  return (
    <div className="gd-sys gd-sys--radius reveal">
      <Head m={m} />
      {m.intro && <p className="gd-sys__intro">{m.intro}</p>}
      <div className="gd-sys__radii">
        {m.radii.map((r) => (
          <div key={r.name} className="gd-sys__radius">
            <div className="gd-sys__radius-box" style={{ borderRadius: `${r.px}px` }} />
            <span className="gd-sys__radius-name">{r.name} · {r.px}px</span>
            <span className="gd-sys__radius-use">{r.use}</span>
          </div>
        ))}
      </div>
      <div className="gd-sys__opacity">
        <h4 className="gd-sys__group-title">{m.opacity.intro}</h4>
        <div className="gd-sys__opacity-row">
          {m.opacity.states.map((o) => (
            <div key={o.name} className="gd-sys__opacity-item">
              <div className="gd-sys__opacity-sq" style={{ opacity: o.value / 100 }} />
              <span className="gd-sys__opacity-label">{o.name} {o.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 模块 9.4：组件示例
function SystemUIKitModule({ m }) {
  return (
    <div className="gd-sys gd-sys--uikit reveal">
      <Head m={m} />
      {m.intro && <p className="gd-sys__intro">{m.intro}</p>}
      <div className="gd-sys__comp-grid">
        {m.components.map((c) => (
          <div key={c.name} className="gd-sys__comp">
            <h4 className="gd-sys__comp-title">{c.name}</h4>
            <p className="gd-sys__comp-desc">{c.desc}</p>
            <div className="gd-sys__comp-body">
              {c.items.map((it, i) => (
                <UIKitSample key={i} item={it} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function UIKitSample({ item }) {
  const v = item.variant
  if (v === 'primary')  return <button className="ui-btn ui-btn--primary">{item.text}</button>
  if (v === 'ghost')    return <button className="ui-btn ui-btn--ghost">{item.text}</button>
  if (v === 'disabled') return <button className="ui-btn ui-btn--disabled" disabled>{item.text}</button>
  if (v === 'tag')      return <span className="ui-tag">{item.text}</span>
  if (v === 'tag-image') return <img className="ui-tag-image" src={item.image} alt={item.text} />
  if (v === 'input')    return (
    <div className="ui-input">
      <span className="ui-input__icon">⌕</span>
      <span className="ui-input__value">{item.text}</span>
    </div>
  )
  if (v === 'input-image') return <img className="ui-input-image" src={item.image} alt={item.text} />
  if (v === 'card')     return (
    <div className="ui-card">
      <div className="ui-card__tt">{item.title}</div>
      <div className="ui-card__ds">{item.meta}</div>
    </div>
  )
  if (v === 'card-image') return <img className="ui-card-image" src={item.image} alt={item.text} />
  if (v === 'progress') return (
    <div className="ui-progress-wrap">
      <div className="ui-progress"><i style={{ width: `${item.percent}%` }} /></div>
      <span className="ui-progress__label">{item.text}</span>
    </div>
  )
  if (v === 'progress-image') return <img className="ui-progress-image" src={item.image} alt={item.text} />
  return null
}

// 模块 9.5：图标规范
function SystemIconsModule({ m }) {
  return (
    <div className="gd-sys reveal">
      <Head m={m} />
      <div className="gd-sys__icon-frame">
        <div className="gd-sys__icon-grid">
          {m.icons.map((n) => (
            <div key={n} className="gd-sys__icon-cell">
              <img
                className="gd-sys__icon-img"
                src={`/images/guangdian/icons/icon-${n}.svg`}
                alt={`图标 ${n}`}
              />
              <span className="gd-sys__icon-name">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 模块 10：总结
function SummaryModule({ m }) {
  if (!m.body) {
    return (
      <div className="gd-summary reveal">
        <Head m={m} />
      </div>
    )
  }
  return (
    <div className="gd-summary reveal">
      <Head m={m} />
      <div className="gd-summary__body">
        {m.body.split('。').filter(Boolean).map((s, i) => (
          <p key={i}>{s}。</p>
        ))}
      </div>
    </div>
  )
}

// 模块 11：脚注
function FootnoteModule({ m }) {
  return (
    <div className="gd-footnote reveal">
      <p className="gd-footnote__body">{m.body}</p>
      <div className="gd-footnote__sign">
        <span>— 独立完成 · 仅作设计作品集展示 —</span>
      </div>
    </div>
  )
}

export default function GuangdianDetail({ project }) {
  return (
    <div className="gd">
      {project.modules.map((m) => {
        const props = { m, project }
        if (m.kind === 'cover') return <CoverModule key={m.num} project={project} />
        if (m.kind === 'pitch') return <PitchModule {...props} />
        if (m.kind === 'overview') return <OverviewModule {...props} />
        if (m.kind === 'pains') return <PainsModule {...props} />
        if (m.kind === 'users') return <UsersModule {...props} />
        if (m.kind === 'process') return <ProcessModule {...props} />
        if (m.kind === 'features') return <FeaturesModule {...props} />
        if (m.kind === 'screens') return <ScreensModule {...props} />
        if (m.kind === 'system') return <SystemModule {...props} />
        if (m.kind === 'system-color') return <SystemColorModule {...props} />
        if (m.kind === 'system-type') return <SystemTypeModule {...props} />
        if (m.kind === 'system-radius') return <SystemRadiusModule {...props} />
        if (m.kind === 'system-uikit') return <SystemUIKitModule {...props} />
        if (m.kind === 'system-icons') return <SystemIconsModule {...props} />
        if (m.kind === 'summary') return <SummaryModule {...props} />
        if (m.kind === 'footnote') return <FootnoteModule {...props} />
        return null
      })}
    </div>
  )
}
