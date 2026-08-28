import { ABOUT, SITE, CONTACT } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__inner">
          {/* 左：标题 + self intro */}
          <div className="about__left">
            <span className="eyebrow">{ABOUT.eyebrow}</span>
            <h2 className="section-title">
              <em>数字媒体艺术</em> 应届生，
              <br />
              专注 <em>UI/UX</em> 与 <em>游戏界面</em>
            </h2>
            <p className="about__intro">{ABOUT.intro}</p>
          </div>

          {/* 右：人像 */}
          <div className="about__right">
            <div className="about__portrait">
              <img
                className="about__portrait-img"
                src="images/about/portrait.jpg"
                alt="人像照片"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 技能栈 — 黄底网格 */}
        <div className="about__skills reveal">
          <h3 className="about__skills-title">技能栈</h3>
          <div className="about__skills-grid">
            {ABOUT.skills.map((s) => (
              <span key={s} className="about__skill-chip">{s}</span>
            ))}
          </div>
        </div>

        {/* 求职意向 + 联系方式 — 双卡 */}
        <div className="about__bottom">
          <article className="about-card reveal">
            <h4 className="about-card__title">{ABOUT.intent.role}</h4>
            <ul className="about-card__list">
              {ABOUT.intent.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>

          <article className="about-card about-card--dark reveal">
            <h4 className="about-card__title">联系方式</h4>
            <ul className="about-card__contact">
              <li>
                <span>Email</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <span>WeChat</span>
                <span>{CONTACT.wechat}</span>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              </li>
              <li>
                <span>City</span>
                <span>{SITE.city} · {SITE.intent}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
