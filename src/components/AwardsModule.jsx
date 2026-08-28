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

export default function AwardsModule({ m }) {
  return (
    <div className="xw-awards">
      <Head m={m} />
      <div className="xw-awards__gallery">
        {m.photos.map((p) => (
          <figure key={p.src} className="xw-awards__photo">
            <img src={p.src} alt={p.alt} decoding="async" />
          </figure>
        ))}
      </div>
    </div>
  )
}
