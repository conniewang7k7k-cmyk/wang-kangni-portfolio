import { PROJECT_GUANGDIAN, PROJECT_XIWEI, PROJECT_AWARDS, AI_VIDEO } from '../data/content'
import GuangdianDetail from './GuangdianDetail'
import XiweiDetail from './XiweiDetail'
import AwardsDetail from './AwardsDetail'
import AIVideo from './AIVideo'
import './Works.css'

// 项目区块通用 wrapper
function ProjectBlock({ id, badge, children, ribbon }) {
  return (
    <section id={id} className="works-section">
      {ribbon && (
        <div className="ribbon-band ribbon-band--dark" aria-hidden>
          <div className="ribbon-band__track">
            <span>{ribbon}</span>
            <span>{ribbon}</span>
            <span>{ribbon}</span>
            <span>{ribbon}</span>
            <span>{ribbon}</span>
            <span>{ribbon}</span>
          </div>
        </div>
      )}
      <div className="container">
        <header className="ws-head reveal">
          <span className="eyebrow">{badge}</span>
        </header>
        {children}
      </div>
    </section>
  )
}

export default function Works() {
  return (
    <>
      <ProjectBlock
        id="project-guangdian"
        badge={`// ${PROJECT_GUANGDIAN.coverLabel} — 逛点`}
        ribbon="PROJECT 01 · GUANGDIAN · AI SHORT TRIP PLANNER"
      >
        <GuangdianDetail project={PROJECT_GUANGDIAN} />
      </ProjectBlock>

      <ProjectBlock
        id="project-xiwei"
        badge={`// ${PROJECT_XIWEI.coverLabel} — 锡味寻踪`}
        ribbon="PROJECT 02 · XIWEI XUNZONG · INK WUXI GAME UI"
      >
        <XiweiDetail project={PROJECT_XIWEI} />
      </ProjectBlock>

      <ProjectBlock
        id="project-awards"
        badge={`// ${PROJECT_AWARDS.coverLabel} — 获奖经历`}
        ribbon="PROJECT 03 · AWARDS & HONORS · 5 PRIZED WORKS"
      >
        <AwardsDetail project={PROJECT_AWARDS} />
      </ProjectBlock>

      <ProjectBlock
        id="project-ai-video"
        badge={`// ${AI_VIDEO.coverLabel} — AI 视频内容创作`}
        ribbon="EXTRA · AI MOTION · PRACTICE · 217 SHIPMENTS · 94% PASS"
      >
        <AIVideo project={AI_VIDEO} />
      </ProjectBlock>
    </>
  )
}
