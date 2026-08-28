// 网站文案/数据集中管理
// 结构按用户给的"作品集最终架构"：Home / Works / About / Contact

export const SITE = {
  name: '汪康妮',
  enName: 'WANG KANGNI',
  email: '2629889585@qq.com',
  wechat: 'kangni_nini_20',
  phone: '+86 138 0556 2883',
  city: '杭州',
  intent: '期望坐标 · 上海 / 杭州 / 苏州',
  nav: [
    { id: 'home', label: 'HOME', num: '01' },
    { id: 'works', label: 'WORKS', num: '02' },
    { id: 'about', label: 'ABOUT', num: '03' },
    { id: 'contact', label: 'CONTACT', num: '04' },
  ],
}

// ========================================================================
// HOME — 头部 Hero + 项目预览 + 简要技能
// ========================================================================

export const HERO = {
  titleZh: 'UI/UX Designer',
  titleYo: '2026',
  titleEn: 'Portfolio.',
  subtitle: 'Focus on AI Product & Game UI Design',
  intro:
    '擅长年轻化 AI 产品、国风游戏界面、完整端到端 UX 流程，\n把"想打开"这件事做成设计的小目标。',
  cta: '看作品',
}

export const WORKS_PREVIEW = {
  eyebrow: '// 02 — 精选作品',
  title: '两个完整项目，\n一组 AI 创作作品',
  intro:
    '主项目《逛点》交付完整 PRD × 12 页高保真原型，副项目《锡味寻踪》是无锡非遗美食水墨游戏 UI；另外一组 AI 视频作品把"设计之外"的另一种能力带出来。',
}

export const SKILLS_QUICK = [
  {
    label: 'Design',
    items: ['Figma', 'MasterGo', 'UI Design', 'Game UI', 'UX Research'],
  },
  {
    label: 'AI Capability',
    items: ['AI 产品设计', 'AI 视觉辅助', 'AI 视频生成与脚本策划'],
  },
]

// 首页作品筛选 —— 网格重排动画的筛选项
export const WORKS_FILTERS = [
  { id: 'all', label: '全部', count: 4 },
  { id: 'design', label: 'AI 产品', count: 1 },
  { id: 'game', label: '游戏 UI', count: 1 },
  { id: 'award', label: '获奖作品', count: 1 },
  { id: 'ai', label: 'AI 创作', count: 1 },
]

// ========================================================================
// PROJECTS — 完整项目详情（10 模块 + 8 模块）
// ========================================================================

export const PROJECT_GUANGDIAN = {
  id: 'guangdian',
  title: '逛点',
  en: 'GUANGDIAN · AI SHORT TRIP PLANNER',
  tagline: '面向 18–30 岁的 AI 短途打卡规划工具',
  coverLabel: 'PROJECT 01',
  year: '2026.07 — 2026.08',
  role: '产品策划 · UI/UX 设计师 · 视觉设计',
  type: '可交互概念原型 · 未上线 Demo',
  tools: 'Figma · MasterGo · Procreate',
  color: '#F5B82E',
  colorDark: '#1A1A1A',
  bg: 'linear-gradient(135deg, #FFE893 0%, #F5B82E 100%)',
  tags: ['#AI 产品设计', '#移动端 UI', '#UX 全流程', '#概念原型', '#可交互 Demo'],
  // 用于首页分类筛选
  category: 'design',
  isDark: false,
  // 首页卡媒体填充
  previewMedia: { type: 'image', src: 'images/guangdian/启动页.png', alt: '逛点启动页' },

  // 11 个模块
  modules: [
    {
      num: '01',
      en: 'PROJECT COVER',
      zh: '项目封面',
      kind: 'cover',
    },
    {
      num: '02',
      en: '10s ELEVATOR PITCH',
      zh: '10s 电梯演讲',
      kind: 'pitch',
      body:
        '4 步向导（选场景 → 导点位 → AI 生成 → 确认行程）将 1–2 小时 Citywalk 规划缩短至 5 分钟。本人独立完成端到端设计，产出可交互验证 Demo。',
    },
    {
      num: '03',
      en: 'OVERVIEW & BACKGROUND',
      zh: '项目概述 & 设计背景',
      kind: 'overview',
      points: [
        { label: '场景', text: '聚焦 1–2 小时短时出行（Citywalk / 看展 / 扫街）' },
        { label: '机制', text: '"AI 一键生成路线 + 风险预警 + 足迹分享"三段闭环' },
        { label: '痛点', text: '解决年轻人城市漫游规划难、记录难、分享难' },
        { label: '成果', text: '本项目为可交互概念原型，已落地 9 个核心模块' },
      ],
    },
    {
      num: '04',
      en: 'CORE PAIN POINTS',
      zh: '核心痛点',
      kind: 'pains',
      pains: [
        {
          icon: '搜索',
          title: '攻略信息分散',
          desc: '小红书、抖音、马蜂窝多平台拼接',
          tone: 'cream',
          refs: [
            { tag: '发现 01', text: '在小红书搜"周末去哪"，笔记太多，要点进好几篇才拼出一条路线' },
            { tag: '发现 02', text: '同一家店在小红书和抖音的玩法不一样，得两边都刷' },
            { tag: '发现 03', text: '身边同学规划一次出行，要在 3、4 个 app 之间来回切' },
          ],
        },
        {
          icon: '耗时',
          title: '整理耗时 1–2h',
          desc: '人工筛选 · 路线拼凑 · 决策成本极高',
          tone: 'soft',
          refs: [
            { tag: '发现 01', text: '自己试过规划一次 Citywalk，光选点就花了快一个半小时' },
            { tag: '发现 02', text: '同学吐槽最烦的是"选好点还得算怎么走不绕路"' },
            { tag: '发现 03', text: '好几次因为懒得做攻略，最后就去了家附近公园' },
          ],
        },
        {
          icon: '同质',
          title: '攻略同质化严重',
          desc: '热门路线千篇一律，缺乏个性',
          tone: 'warm',
          refs: [
            { tag: '发现 01', text: '武康路、安福路的路线，刷到的基本都长得一样' },
            { tag: '发现 02', text: '热门打卡点排队的人很多，实际体验没想象中好' },
            { tag: '发现 03', text: '不少同学想要"人少一点"的路线，但不知道去哪找' },
          ],
        },
        {
          icon: '时长',
          title: '无法适配时长',
          desc: '半天/2 小时/通勤碎片各有差异',
          tone: 'lime',
          refs: [
            { tag: '发现 01', text: '有人只有 2 小时午休想出门，现有攻略大多是"玩一整天"' },
            { tag: '发现 02', text: '通勤路上想顺路逛一下，但攻略都不考虑从哪出发' },
            { tag: '发现 03', text: '不同空闲时间想要的路线差别很大，现成攻略没法选' },
          ],
        },
        {
          icon: '记录',
          title: '打卡记录粗糙',
          desc: '截图拼接，无统一视觉风格',
          tone: 'deep',
          refs: [
            { tag: '发现 01', text: '大家基本都是截图拼一下发朋友圈，没有统一的样子' },
            { tag: '发现 02', text: '过段时间回看，经常记不清哪张图是哪个点' },
            { tag: '发现 03', text: '现有旅行 app 的记录模板不好看，懒得再整理' },
          ],
        },
        {
          icon: '分享',
          title: '分享缺少仪式感',
          desc: '九宫格照片 + 位置定位，单调乏味',
          tone: 'cyan',
          refs: [
            { tag: '发现 01', text: '朋友圈发九宫格旅行照，点赞好像越来越少了' },
            { tag: '发现 02', text: '看到好看的旅行海报、手账风格，同学都愿意存下来' },
            { tag: '发现 03', text: '截图发完就完了，很少有人会再编辑美化' },
          ],
        },
      ],
    },
    {
      num: '05',
      en: 'TARGET USERS',
      zh: '目标用户',
      kind: 'users',
      personas: [
        {
          tag: '学生群体',
          zh: '小敏',
          en: 'XIAOMIN',
          age: '21',
          loc: '北京 · 大三在读',
          role: '视觉传达专业',
          goal: '周末短途漫游',
          desc: '追求好玩、省时、高颜值打卡记录',
          avatar: 'images/guangdian/users/xiaomin.png',
          points: ['预算敏感', '审美在线', '社交活跃'],
          color: 'yellow',
        },
        {
          tag: '都市青年',
          zh: '阿楠',
          en: 'ANAN',
          age: '28',
          loc: '上海 · 互联网产品',
          role: '大厂打工人',
          goal: '碎片时间出行',
          desc: '拒绝复杂攻略，追求高效轻量化规划',
          avatar: 'images/guangdian/users/anan.png',
          points: ['时间稀缺', '效率优先', '注重质感'],
          color: 'cyan',
        },
        {
          tag: '旅行爱好者',
          zh: '阿瑶',
          en: 'AYAO',
          age: '32',
          loc: '成都 · 自由职业',
          role: '旅行博主 / 摄影师',
          goal: '城市深度探索',
          desc: '愿意为独特路线与小众场景花时间',
          avatar: 'images/guangdian/users/ayao.png',
          points: ['追求独特', '愿意深挖', '内容输出'],
          color: 'brick',
        },
      ],
    },
    {
      num: '06',
      en: 'DESIGN PROCESS',
      zh: '设计全流程',
      kind: 'process',
      steps: [
        '用户研究',
        '竞品分析',
        '信息架构',
        '需求定义 (EARS)',
        '高保真设计',
        '设计系统',
        '可交互原型',
      ],
    },
    {
      num: '07',
      en: 'KEY FEATURES',
      zh: '核心功能设计',
      kind: 'features',
      features: [
        {
          tag: 'F1',
          title: 'AI 一键行程生成',
          desc: '5 分钟快速输出个性化短途路线',
          role: '核心入口 · AI Agent',
          detail: [
            '输入起点 / 时长 / 偏好',
            'LLM 解析语义偏好向量',
            'POI 检索 + 路线约束求解',
            '输出可调整的双方案',
          ],
        },
        {
          tag: 'F2',
          title: '双方案对比',
          desc: '智能生成两套路线，支持用户择优出行',
          role: '决策辅助 · 视图',
          detail: [
            '方案 A · 节奏舒缓',
            '方案 B · 强度适中',
            '同屏左右对照',
            '一键收藏到我的路线',
          ],
        },
        {
          tag: 'F3',
          title: '分步时长计算',
          desc: '点位停留与路程耗时清晰可视化',
          role: '信息呈现 · 时间轴',
          detail: [
            '点位停留 + 路程耗时',
            '进度条实时渲染',
            '步行 / 公交 / 骑行三态',
            '总时长校验提示',
          ],
        },
        {
          tag: 'F4',
          title: '多风格足迹海报',
          desc: '极简 / 胶片 / 杂志三种模板，适配社交分享',
          role: '社交裂变 · 模板',
          detail: [
            '极简 · 排版感',
            '胶片 · 复古颗粒',
            '杂志 · 大标题',
            '一键存图 / 分享',
          ],
        },
        {
          tag: 'F5',
          title: '年轻化 IP 体系',
          desc: 'IP 形象融入首页金刚区、瓷片区，强化品牌记忆',
          role: '品牌资产 · IP',
          detail: [
            '首页金刚区 IP 头像',
            '空状态 IP 引导',
            '瓷片区 IP 互动',
            '表情包衍生延展',
          ],
        },
      ],
    },
    {
      num: '08',
      en: 'KEY SCREENS',
      zh: '核心页面',
      kind: 'screens',
      screens: [
        {
          tag: 'SC1',
          name: '首页 · 金刚区',
          desc: 'IP 形象入口 + 智能快捷入口，降低用户决策成本',
          image: 'images/guangdian/screens/sc1-home.png',
        },
        {
          tag: 'SC2',
          name: '创建行程',
          desc: '4 步向导：选场景 → 导点位 → AI 生成 → 行程确认，5 分钟搞定',
          image: 'images/guangdian/screens/sc2-create.png',
        },
        {
          tag: 'SC3',
          name: '双方案对比',
          desc: '同屏对照两套方案，支持一键收藏择优出行',
          image: 'images/guangdian/screens/sc3-compare.png',
        },
        {
          tag: 'SC4',
          name: '路线时间轴',
          desc: '分步时长可视化，点位停留 + 路程耗时清晰呈现',
          image: 'images/guangdian/screens/sc4-timeline.png',
        },
        {
          tag: 'SC5',
          name: '足迹海报',
          desc: '极简 / 胶片 / 杂志三模板，一键生成社交分享图',
          image: 'images/guangdian/screens/sc5-poster.png',
        },
        {
          tag: 'SC6',
          name: '行程中心',
          desc: '我的路线 · 历史行程 · 收藏点位，统一管理出行资产',
          image: 'images/guangdian/screens/sc6-trips.png',
        },
      ],
    },
    {
      num: '09',
      en: 'DESIGN SYSTEM',
      zh: '设计系统',
      kind: 'system',
      systems: [
        { name: '色彩规范', en: 'COLOR', desc: '从 12+ 黄色变体、8 灰 4 奶油收敛为统一色板' },
        { name: '字体规范', en: 'TYPOGRAPHY', desc: '统一 7 档字号阶梯，固化字重与行高' },
        { name: '圆角 & 透明度', en: 'RADIUS', desc: '固化 5 档圆角与控件三态透明度' },
        { name: '组件示例', en: 'COMPONENTS', desc: '按钮 / 标签 / 输入 / 卡片 / 进度条' },
        { name: '图标规范', en: 'ICONS', desc: '用语义命名替代哈希 SVG' },
      ],
      children: [
        {
          num: '9.1',
          en: 'COLOR SYSTEM',
          zh: '色彩规范',
          kind: 'system-color',
          intro: '从 12+ 黄色变体、8 灰 4 奶油收敛为统一色板。品牌色与暖黄 IP 调性一致。',
          brands: [
            { name: '按钮主黄', hex: '#FAC11E', use: '主按钮 / 关键行动点' },
            { name: '渐变亮端', hex: '#FFDA70', use: '金刚区渐变 / 高光' },
            { name: '黄色文字', hex: '#B8850C', use: '强调黄字 / 链接' },
          ],
          functionals: [
            { name: '信息蓝', hex: '#137DFF', use: '金刚区蓝 / 信息图标' },
            { name: '成功绿', hex: '#66D13B', use: '绿色图标 / 进度条' },
            { name: '地标红', hex: '#FF5A5F', use: '地图地标 / 警示' },
          ],
          neutrals: [
            { name: '页面底 Cream', hex: '#FAF7F0', use: '页面背景' },
            { name: '边框 Cream', hex: '#F0E6CF', use: '卡片描边 / 分割线' },
            { name: '文字主色', hex: '#1A1A2E', use: '标题 / 正文' },
            { name: '文字次要', hex: '#6B6B8A', use: '次要文字 / 图标（全站最高频）' },
            { name: 'Grey-1', hex: '#EBEBEB', use: '极浅底 / 占位' },
            { name: 'Grey-2', hex: '#D9D9D9', use: '浅灰底' },
            { name: 'Grey-3', hex: '#C9C9C9', use: '边框 / 分割' },
            { name: 'Grey-4', hex: '#949494', use: '禁用文字' },
            { name: 'Grey-5', hex: '#666666', use: '辅助文字' },
            { name: 'White', hex: '#FFFFFF', use: '卡片 / 浮层底' },
          ],
        },
        {
          num: '9.2',
          en: 'TYPOGRAPHY',
          zh: '字体规范',
          kind: 'system-type',
          scale: [
            { name: 'Display', use: '标语 / 大标题', sample: '城市短途，随心打卡', px: 32, weight: 800, lh: '130%', wname: 'Bold' },
            { name: 'H1', use: '页面标题', sample: '创建你的专属行程', px: 24, weight: 500, lh: '135%', wname: 'Medium' },
            { name: 'H2', use: '区块标题', sample: '今日推荐路线', px: 20, weight: 800, lh: '140%', wname: 'Heavy' },
            { name: 'H3', use: '卡片标题', sample: '外滩历史漫步', px: 16, weight: 700, lh: '145%', wname: 'Bold' },
            { name: 'Body', use: '正文', sample: '沿着黄浦江畔，串联起 6 个值得停留的城市角落。', px: 14, weight: 400, lh: '150%', wname: 'Regular' },
            { name: 'Caption', use: '辅助说明', sample: '步行约 1.2km · 预计 25 分钟', px: 12, weight: 400, lh: '150%', wname: 'Regular' },
            { name: 'Mini', use: '标签 / 角标', sample: 'FREE · 免费', px: 11, weight: 800, lh: '140%', wname: 'Heavy' },
          ],
        },
        {
          num: '9.3',
          en: 'RADIUS & OPACITY',
          zh: '圆角 & 透明度',
          kind: 'system-radius',
          intro: '固化 5 档圆角（基准 12px），消除 15.97 / 19 等浮点异常值。',
          radii: [
            { name: 'R1', px: 4, use: '小标签' },
            { name: 'R2', px: 8, use: '输入框' },
            { name: 'R3', px: 12, use: '卡片 / 按钮' },
            { name: 'R4', px: 16, use: '大卡片' },
            { name: 'R5', px: 24, use: '头像 / 大图' },
          ],
          opacity: {
            intro: '透明度三态',
            states: [
              { name: '禁用', value: 40, use: 'Disabled' },
              { name: '按压', value: 80, use: 'Pressed' },
              { name: '遮罩', value: 60, use: 'Overlay' },
            ],
          },
        },
        {
          num: '9.4',
          en: 'COMPONENTS',
          zh: '组件示例',
          kind: 'system-uikit',
          components: [
            {
              name: '按钮 Button',
              desc: '主按钮（品牌黄）/ 幽灵（白底边框）/ 禁用（黑底 40% 透明）',
              items: [
                { variant: 'primary', text: '开始打卡' },
                { variant: 'ghost', text: '查看详情' },
                { variant: 'disabled', text: '已结束' },
              ],
            },
            {
              name: '标签 Tag',
              desc: '品牌黄胶囊 / 评分 + 数字 / 重磅热门',
              items: [
                { variant: 'tag-image', text: '咖啡', image: '/images/guangdian/tags/tag1.svg' },
                { variant: 'tag-image', text: '4.8', image: '/images/guangdian/tags/tag2.svg' },
                { variant: 'tag-image', text: '热门', image: '/images/guangdian/tags/tag3.svg' },
              ],
            },
            {
              name: '输入框 Input',
              desc: '搜索栏 · 状态对照',
              items: [
                { variant: 'input-image', text: '搜索栏1', image: '/images/guangdian/search/search1.svg' },
                { variant: 'input-image', text: '搜索栏2', image: '/images/guangdian/search/search2.svg' },
              ],
            },
            {
              name: '卡片 Card',
              desc: '白色卡片，奶油描边',
              items: [
                { variant: 'card-image', text: '卡片', image: '/images/guangdian/card/card.svg' },
              ],
            },
            {
              name: '进度条 Progress',
              desc: '进度展示',
              items: [
                { variant: 'progress-image', text: '进度', image: '/images/guangdian/progress/progress.svg' },
              ],
            },
          ],
        },
        {
          num: '9.5',
          en: 'ICONS',
          zh: '图标规范',
          kind: 'system-icons',
          icons: ['1', '2', '3', '4', '5', '6', '7', '8'],
        },
      ],
    },
    {
      num: '14',
      en: 'FOOTNOTE',
      zh: '底部备注',
      kind: 'footnote',
      body:
        '本作品为可交互概念原型验证版本，非线上正式产品。设计规范基于 24 个高保真页面反向盘点与收敛，所有视觉输出及原型交互均为本人独立完成。',
    },

  ],
}

export const PROJECT_XIWEI = {
  id: 'xiwei',
  title: '锡味寻踪',
  en: 'XIWEI XUNZONG · INK WUXI GAME UI',
  tagline: '面向 6–12 岁儿童的无锡美食文化教育游戏 UI',
  coverLabel: 'PROJECT 02',
  year: '2025.12 — 2026.02',
  role: '游戏策划 · UI 设计师 · 视觉/插画',
  type: '毕业设计 · 文化科普游戏 UI',
  tools: 'Figma · Procreate · PS · AE',
  color: '#5C4A2E',
  colorDark: '#1A1A1A',
  bg: 'linear-gradient(135deg, #E8E2D2 0%, #B8A98A 100%)',
  tags: ['# 游戏 UI', '#国风设计', '#文化科普', '#儿童教育', '#毕业设计'],
  // 用于首页分类筛选
  category: 'game',
  // 浅色背景，前景色用 dark
  isDark: false,
  // 首页卡媒体填充
  previewMedia: { type: 'image', src: 'images/xiwei/手机加载页1.png', alt: '锡味寻踪加载页' },

  // 8 个模块
  modules: [
    {
      num: '01',
      en: 'PROJECT COVER',
      zh: '项目封面',
      kind: 'cover',
    },
    {
      num: '02',
      en: '10s ELEVATOR PITCH',
      zh: '10s 电梯演讲',
      kind: 'pitch',
      body:
        '面向 6-12 岁儿童的无锡美食文化科普教育游戏，以国风水墨视觉为核心，通过剧情对话、食材收集、知识答题等玩法，让孩子在游戏中了解无锡非遗美食文化。本人独立完成从世界观设定、界面设计、图标插画到交互原型的完整游戏 UI 设计。',
    },
    {
      num: '03',
      en: 'OVERVIEW & BACKGROUND',
      zh: '项目概述 & 设计背景',
      kind: 'overview',
      body:
        '无锡饮食文化源远流长——惠山油酥、无锡小笼、酱排骨、清水面筋，每道小吃都承载江南匠心。然而，传统美食科普多以图文长文呈现，文化记忆难以自然传递到下一代。为此，《锡味寻踪》以游戏化叙事重构知识：水墨江南视觉铺陈江南气韵，剧情闯关串联食材采集、食谱拼图与烹饪挑战，让儿童在互动中理解非遗美食的历史与制作工序。整个产品覆盖主菜单、剧情对话、收藏图鉴、答题挑战、奖励结算五大模块，所有画面与图标均由独立完成，让家乡的味道成为孩子看得见、记得住的童年记忆。',
    },
    {
      num: '04',
      en: 'DESIGN GOALS',
      zh: '设计目标',
      kind: 'goals',
      goals: [
        {
          tag: '视觉',
          desc: '打造统一的国风水墨游戏视觉体系，贴合江南文化调性',
        },
        {
          tag: '交互',
          desc: '适配儿童操作习惯，界面简洁直观，降低学习成本',
        },
        {
          tag: '内容',
          desc: '将美食知识融入游戏玩法，实现寓教于乐',
        },
      ],
    },
    {
      num: '05',
      en: 'KEY SCREENS',
      zh: '核心界面展示',
      kind: 'screens',
      screens: [
        { tag: 'SC01', name: '登录页',      desc: '卷轴 + 山水底图，强化国风氛围', image: 'images/xiwei/手机登录页.webp' },
        { tag: 'SC02', name: '加载页',      desc: '金墨 LOGO + 加载进度条',         image: 'images/xiwei/手机加载页1.webp' },
        { tag: 'SC03', name: '开始游戏',     desc: '水墨封面 + 用户/设置/公告入口',  image: 'images/xiwei/手机开始游戏2.webp' },
        { tag: 'SC04', name: '游戏主页面',   desc: '玩家角色 + 任务/活动/成就/好友',  image: 'images/xiwei/手机主页面.webp' },
        { tag: 'SC05', name: '科普对话环节', desc: 'NPC 演绎江南美食文化典故',        image: 'images/xiwei/手机科普环节.webp' },
        { tag: 'SC06', name: '游戏启程页',   desc: '关卡起始仪式 + 食材订单',         image: 'images/xiwei/手机游戏启程.webp' },
        { tag: 'SC07', name: '食材背包',     desc: '主食 / 馅料 / 调味一目了然',         image: 'images/xiwei/手机游戏背包.webp' },
        { tag: 'SC08', name: '成就收集',     desc: '解锁式美食图鉴，鼓励关卡探索',     image: 'images/xiwei/手机游戏成就.webp' },
        { tag: 'SC09', name: '城市地图',     desc: '无锡景点串联关卡剧情',            image: 'images/xiwei/手机游戏地图.webp' },
        { tag: 'SC10', name: '好友社交',     desc: '邀请助阵 + 寻味互动',            image: 'images/xiwei/手机游戏好友.webp' },
        { tag: 'SC11', name: '游戏活动',     desc: '趣味答题+任务集成页',              image: 'images/xiwei/手机游戏活动.webp' },
        { tag: 'SC12', name: '每日签到',     desc: '七天一周期 + 阶梯奖励',           image: 'images/xiwei/手机游戏任务-每日签到.webp' },
        { tag: 'SC13', name: '锡味秘籍',     desc: '任务进度可视化',                  image: 'images/xiwei/手机游戏任务-锡味秘籍.webp' },
        { tag: 'SC14', name: '限时任务',     desc: '稀缺奖励限时解锁',                image: 'images/xiwei/手机游戏任务-限时任务.webp' },
        { tag: 'SC15', name: '游戏商城',     desc: '道具兑换 + 礼包促销',            image: 'images/xiwei/手机游戏商城.webp' },
        { tag: 'SC16', name: '升级系统',     desc: '器具等级 + 技能加成',            image: 'images/xiwei/手机游戏升级.webp' },
        { tag: 'SC17', name: '游戏胜利',     desc: '三星奖励 + 完美达成',            image: 'images/xiwei/手机游戏胜利.webp' },
        { tag: 'SC18', name: '游戏失败',     desc: '再来一次 + 三星目标',            image: 'images/xiwei/手机游戏失败.webp' },
        { tag: 'SC19', name: '游戏用户',     desc: '用户档案 + 技能列表',            image: 'images/xiwei/手机游戏用户.webp' },
        { tag: 'SC20', name: '员工招募',     desc: '师傅招募 + 角色展示',            image: 'images/xiwei/手机游戏员工.webp' },
      ],
    },
    {
      num: '06',
      en: 'DESIGN HIGHLIGHTS',
      zh: '设计亮点',
      kind: 'highlights',
      highlights: [
        {
          tag: '视觉风格统一',
          desc: '全程采用水墨国画笔法，从控件、弹窗到场景保持一致的江南美学',
        },
        {
          tag: '游戏化叙事',
          desc: '以寻味之旅为主线，将知识科普融入剧情与玩法',
        },
        {
          tag: '儿童友好设计',
          desc: '大按钮、清晰层级、温和配色，适配目标用户认知与操作习惯',
        },
      ],
    },

    {
      num: '07',
      en: 'PROJECT SUMMARY',
      zh: '项目总结',
      kind: 'summary',
      body:
        '本项目完成了一款文化教育类游戏的完整 UI 设计，从世界观、界面布局、手绘图标到交互动效逐帧打磨，探索国风视觉在儿童教育产品中的落地方式。\n设计贯穿视觉、交互、内容三条主线，覆盖主菜单、剧情对话、收藏图鉴、答题挑战、奖励结算五大模块，确保每一屏呈现一致的水墨江南气质。\n后续可在玩法丰富度、关卡交互、多端适配方向持续迭代。',
    },
  ],
}

// ========================================================================
// 获奖经历（独立项目）
// ========================================================================

export const PROJECT_AWARDS = {
  id: 'awards',
  title: '获奖经历',
  en: 'AWARDS & HONORS · 5 PRIZED WORKS',
  tagline: '5 项赛事奖项 · 覆盖游戏 UI、插画、视频、科普公益',
  coverLabel: 'PROJECT 03',
  year: '2022.10 — 2025.06',
  role: '设计师 · 视觉/插画 · 视频',
  type: '赛事获奖作品集 · 5 项',
  tools: 'Procreate · PS · AE · Figma',
  color: '#B8860B',
  colorDark: '#1A1A1A',
  bg: 'linear-gradient(135deg, #F5E9C8 0%, #B8860B 100%)',
  tags: ['#赛事获奖', '#游戏 UI', '#插画', '#视频动画', '#科普公益'],
  // 用于首页分类筛选
  category: 'award',
  isDark: false,
  // 首页卡媒体填充（5 张作品图拼贴预览）
  previewMedia: { type: 'image', src: 'images/awards/work-1.jpg', alt: '获奖作品《酱排骨消消乐》' },

  // 6 个模块
  modules: [
    {
      num: '01',
      en: 'PROJECT COVER',
      zh: '项目封面',
      kind: 'cover',
    },
    {
      num: '01',
      en: 'AWARD LIST',
      zh: '奖项一览',
      kind: 'awards',
      photos: [
        { src: 'images/awards/cert-1-orient.jpg', alt: '东方设计奖·三等奖' },
        { src: 'images/awards/cert-2-times.jpg',   alt: '时报金犊奖·入围' },
        { src: 'images/awards/cert-3-icad.jpg',    alt: 'ICAD·铜奖' },
        { src: 'images/awards/cert-4-jiangsu.jpg', alt: '江苏省科普公益·三等奖' },
        { src: 'images/awards/cert-5-ccsda.jpg',   alt: '东方创意之星·铜奖' },
        { src: 'images/awards/extra-1.jpg',        alt: '迅火星号·森林灭火克星' },
        { src: 'images/awards/extra-2.jpg',        alt: '海豚迅卫·智能溺水救生机器人' },
        { src: 'images/awards/extra-3.jpg',        alt: '睿搜震行者·地震搜救机器设计' },
      ],
    },
    {
      num: '01',
      en: 'JIANGLONG SHOWCASE',
      zh: '酱排骨消消乐 · 作品展示',
      kind: 'works',
      workName: '酱排骨消消乐',
      workEn: 'Small Traditional Games of Intangible Cultural Heritage',
      workTagline: '传统非遗类小游戏 · 颜色规范 / 界面详情 / 特色功能',
      photos: [
        { src: 'images/guangdian/jiangpaigu/p1.jpg', alt: '酱排骨消消乐 · 设计说明与项目概述' },
        { src: 'images/guangdian/jiangpaigu/p4.jpg', alt: '酱排骨消消乐 · 颜色规范与游戏框架' },
        { src: 'images/guangdian/jiangpaigu/p5.jpg', alt: '酱排骨消消乐 · 界面详情' },
        { src: 'images/guangdian/jiangpaigu/p6.jpg', alt: '酱排骨消消乐 · 特色功能与高保真画面' },
      ],
    },
    {
      num: '02',
      en: 'PROJECT SUMMARY',
      zh: '项目总结',
      kind: 'summary',
      body:
        '5 项赛事奖项见证了从大一到大四的成长轨迹——从单一海报到完整游戏 UI，从静态插画到动态视频，从个人表达走向社会议题。\n每一份获奖证书背后都是一次从概念到落地的完整推演——前期主题调研、风格参考、构图小稿，中期线稿精修、上色调整、海报与展板适配，后期打印输出、答辩讲解、展演复盘，每一个环节都被赛制严格拷问。\n获奖从来不是终点，而是新一程的起点。它让我学会在多元主题之间快速切换：既能驾驭水墨国风，也能尝试机械概念；既能绘制静态插画，也能剪辑动态短片；既服务商业赛事，也回应社会议题。\n未来希望继续把获奖经验沉淀为可复用的设计方法论——一套同时兼顾美学表达、商业落地与社会价值的系统方法，在更多元的项目和场景中反复验证、迭代进化。',
    },
  ],
}

// ========================================================================
// AI 视频内容创作（实习技能，实战）
// ========================================================================

export const AI_VIDEO = {
  id: 'ai-video',
  title: 'AI 视频内容创作',
  en: 'AI MOTION · PRACTICE',
  tagline: '实习实战 · 217 条成品 · 94% 过审率',
  coverLabel: 'EXTRA · PRACTICE',
  bg: 'linear-gradient(135deg, #1F1F1F 0%, #0F0F0F 100%)',
  color: '#FF6B35',
  colorLight: '#F5B82E',
  tags: ['#AI 视频', '#脚本策划', '#内容运营', '#实习实战'],
  // 用于首页分类筛选
  category: 'ai',
  // 深色背景卡片，前景色需用 light
  isDark: true,
  // 首页卡媒体填充（视频）
  previewMedia: { type: 'video', src: 'video/芋盒系列动画.mp4', alt: '芋盒系列动画' },

  // 能力概述
  overview:
    '依托实习实战经验，熟练掌握 AI 视频生成、短视频脚本撰写、内容策划、成片优化全流程。可独立完成从选题策划、文案脚本撰写、AI 工具批量生片、剪辑调色、画面优化的完整工作链路，擅长结合 AI 工具高效产出年轻化、商业化短视频内容。',

  // 4 个核心实战技能
  skills: [
    {
      tag: '01',
      title: '视频脚本创作',
      desc: '独立撰写分镜脚本、口播文案，贴合平台流量逻辑',
    },
    {
      tag: '02',
      title: 'AI 视频生成',
      desc: '熟练运用主流 AI 视频工具，精准把控画面风格与镜头语言',
    },
    {
      tag: '03',
      title: '后期精修落地',
      desc: '二次剪辑、调色、配乐、字幕包装，输出商业化成片',
    },
    {
      tag: '04',
      title: '内容适配优化',
      desc: '适配抖音、小红书等主流新媒体平台传播需求',
    },
  ],

  // 6 件真实作品（视频成片）
  works: [
    {
      src: 'videos/cn-traverse.mp4',
      poster: 'videos/posters/cn-traverse.jpg',
      zh: '穿越 · 回到那一天',
      en: 'TRAVERSE · BACK TO THAT DAY',
      ratio: '9:16',
      duration: '中文版',
      tone: '历史感 × 短动画',
      award: '原创动画短片',
    },
    {
      src: 'videos/yuh-cool-towel.mp4',
      poster: 'videos/posters/yuh-cool-towel.jpg',
      zh: '芋盒凉感毛巾 · 夏日新品',
      en: 'YUH · COOL-FEEL TOWEL',
      ratio: '9:16',
      duration: '产品广告',
      tone: '凉感蓝 × 夏日氛围',
      award: '新品上市',
    },
    {
      src: 'videos/yuh-series.mp4',
      poster: 'videos/posters/yuh-series.jpg',
      zh: '芋盒品牌 · 系列动画',
      en: 'YUH SERIES · BRAND ANIMATION',
      ratio: '9:16',
      duration: '品牌系列',
      tone: '年轻化 × 一致调性',
      award: '品牌专项',
    },
    {
      src: 'videos/english-subtitle.mp4',
      poster: 'videos/posters/english-subtitle.jpg',
      zh: '海外版 · 英文配字',
      en: 'ENGLISH SUBTITLE EDITION',
      ratio: '16:9',
      duration: '字幕包装',
      tone: '国际版 × 全球传播',
      award: '海外适配',
    },
    {
      src: 'videos/domestic-animation.mp4',
      poster: 'videos/posters/domestic-animation.jpg',
      zh: '国内版 · 动画短片',
      en: 'DOMESTIC ANIMATION',
      ratio: '16:9',
      duration: '国风动画',
      tone: '水墨写意 × 现代剪影',
      award: '原创动画',
    },
    {
      src: 'videos/medicine-618.mp4',
      poster: 'videos/posters/medicine-618.jpg',
      zh: '药品 618 · 小程序促销',
      en: 'MEDICINE 618 · MINI-PROGRAM',
      ratio: '16:9',
      duration: '电商运营',
      tone: '健康蓝 × 转化设计',
      award: '实战投放',
    },
  ],

  // 配套展示：脚本 vs 成片对比
  samples: [
    { label: '脚本片段', desc: '「开场 3 秒强冲击 / 主体动作 / 关键信息压字幕」三段式分镜' },
    { label: 'AI 原片', desc: '可灵 AI 一稿成片，含 6 次镜头调度' },
    { label: '精修成片', desc: '剪映二次精剪 + 调色 + 字幕 + BGM，9:16 竖版投放' },
  ],
}

// 首页作品集合 —— 顺序就是筛选为「全部」时的展示顺序
// 放在 AI_VIDEO 之后以避免 TDZ 报错
export const WORKS_ALL = [PROJECT_GUANGDIAN, PROJECT_XIWEI, PROJECT_AWARDS, AI_VIDEO]

// ========================================================================
// ABOUT — 关于我
// ========================================================================

export const ABOUT = {
  title: '关于我',
  eyebrow: '// 03 — ABOUT',
  intro:
    '数字媒体艺术应届生，专注 UI/UX 与游戏界面设计，擅长 AI 产品设计与国风视觉表达，拥有 AI 视频内容创作实习实战经验。',
  skills: [
    'Figma',
    'MasterGo',
    'UX 全流程设计',
    '游戏 UI 设计',
    'AI 辅助设计',
    'AI 视频生成与脚本策划',
    '视频后期剪辑',
  ],
  intent: {
    role: '求职意向',
    items: ['UI/UX 设计师', '游戏 UI 设计师', '视觉设计师'],
  },
  contact: {
    email: '2629889585@qq.com',
    wechat: 'kangni_nini_20',
  },
}

export const CONTACT = {
  email: '2629889585@qq.com',
  wechat: 'kangni_nini_20',
  phone: '+86 138 0556 2883',
}
