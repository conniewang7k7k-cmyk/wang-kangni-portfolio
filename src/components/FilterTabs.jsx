import Ripple from './Ripple'
import './FilterTabs.css'

/**
 * 筛选 Tabs —— 用于作品分类切换
 *
 * Props:
 *   - filters    [{ id, label, count }]  筛选项
 *   - active     当前激活的 id
 *   - onChange   (id) => void
 */
export default function FilterTabs({ filters, active, onChange }) {
  return (
    <div className="filter-tabs" role="tablist">
      {filters.map((f) => {
        const isActive = f.id === active
        return (
          <Ripple
            key={f.id}
            as="button"
            role="tab"
            aria-selected={isActive}
            className={`filter-tab ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange(f.id)}
            rippleColor="var(--color-yellow-300)"
          >
            <span className="filter-tab__label">{f.label}</span>
            {typeof f.count === 'number' && (
              <span className="filter-tab__count">{f.count}</span>
            )}
            {isActive && <span className="filter-tab__bar" aria-hidden />}
          </Ripple>
        )
      })}
    </div>
  )
}