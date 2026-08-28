import { CONTACT } from '../data/content'
import Ripple from './Ripple'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* 装饰光晕 */}
      <div className="contact__glow contact__glow--1" aria-hidden />
      <div className="contact__glow contact__glow--2" aria-hidden />

      <div className="container contact__inner">
        <span className="contact__eyebrow">// 04 — CONTACT</span>

        <h2 className="contact__title">
          <span className="contact__line">Let&apos;s</span>
          <span className="contact__line contact__line--italic">work&nbsp;together.</span>
        </h2>

        <p className="contact__lead">
          欢迎来找 <em>汪康妮</em> 聊设计、聊 AI 工具、聊短视频制作，
          <br />
          或者只是想 say hello 👋
        </p>

        <Ripple
          as="a"
          href={`mailto:${CONTACT.email}`}
          className="contact__mail"
          rippleColor="var(--color-yellow-400)"
        >
          <span>{CONTACT.email}</span>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Ripple>

        <div className="contact__ways">
          <div className="contact__way">
            <span className="contact__way-label">WeChat</span>
            <span className="contact__way-val">{CONTACT.wechat}</span>
          </div>
          <div className="contact__way">
            <span className="contact__way-label">Phone</span>
            <a href={`tel:${CONTACT.phone}`} className="contact__way-val">{CONTACT.phone}</a>
          </div>
        </div>

        <footer className="contact__footer">
          <span>© 2026 汪康妮 · WANG KANGNI</span>
          <span>N 30°15′ · E 120°10′ · 杭州</span>
          <span>Made with Vite + React</span>
        </footer>
      </div>
    </section>
  )
}
