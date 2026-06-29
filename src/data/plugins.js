// 插件分类数据
export const categories = [
  {
    id: 'light',
    name: '光效',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    plugins: [
      { id: 'lens-flare', name: 'LensFlare', nameZh: '镜头光晕', status: 'coming' },
      { id: 'light-leak', name: 'LightLeak', nameZh: '漏光效果', status: 'coming' },
      { id: 'glow-bloom', name: 'GlowBloom', nameZh: '辉光绽放', status: 'coming' },
      { id: 'neon-glow',  name: 'NeonGlow',  nameZh: '霓虹发光', status: 'coming' },
    ]
  },
  {
    id: 'distortion',
    name: '画面扭曲',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>`,
    plugins: [
      { id: 'wave-blur', name: 'WaveBlurring', nameZh: '波形模糊',  status: 'active' },
      { id: 'ripple',    name: 'RippleWarp',   nameZh: '涟漪扭曲',  status: 'coming' },
      { id: 'liquid',    name: 'LiquidMorph',  nameZh: '液态变形',  status: 'coming' },
      { id: 'glitch',    name: 'GlitchWarp',   nameZh: '故障扭曲',  status: 'coming' },
    ]
  },
  {
    id: 'blur-mosaic',
    name: '模糊/马赛克',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="4" height="4"/><rect x="10" y="3" width="4" height="4"/><rect x="17" y="3" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/><rect x="17" y="10" width="4" height="4"/><rect x="3" y="17" width="4" height="4"/><rect x="10" y="17" width="4" height="4"/><rect x="17" y="17" width="4" height="4"/></svg>`,
    plugins: [
      { id: 'directional-blur',  name: 'Directional Blur',  nameZh: '定向模糊',     status: 'active' },
      { id: 'radial-blur',       name: 'Radial Blur',       nameZh: '径向模糊',     status: 'active' },
      { id: 'basic-mosaic',      name: 'Basic Mosaic',      nameZh: '基础马赛克',   status: 'active' },
      { id: 'blur-mosaic-fx',    name: 'Blur Mosaic',       nameZh: '模糊马赛克',   status: 'active' },
      { id: 'brick-mosaic',      name: 'Brick Mosaic',      nameZh: '砖块马赛克',   status: 'active' },
      { id: 'colorful-mosaic-1', name: 'Colorful MosaicI',  nameZh: '彩色马赛克 I', status: 'active' },
      { id: 'colorful-mosaic-2', name: 'Colorful MosaicII', nameZh: '彩色马赛克 II',status: 'active' },
      { id: 'colorful-mosaic-3', name: 'Colorful MosaicIII',nameZh: '彩色马赛克 III',status: 'active' },
      { id: 'glass-mosaic-1',    name: 'Glass MosaicI',     nameZh: '玻璃马赛克 I', status: 'active' },
      { id: 'glass-mosaic-2',    name: 'Glass MosaicII',    nameZh: '玻璃马赛克 II',status: 'active' },
      { id: 'hexagon-mosaic',    name: 'Hexagon Mosaic',    nameZh: '六边形马赛克', status: 'active' },
      { id: 'star-mosaic',       name: 'Star Mosaic',       nameZh: '星形马赛克',   status: 'active' },
    ]
  },
  {
    id: 'text',
    name: '文本',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    plugins: [
      { id: 'text-glitch',  name: 'TextGlitch',  nameZh: '文字故障', status: 'coming' },
      { id: 'text-reveal',  name: 'TextReveal',  nameZh: '文字揭示', status: 'coming' },
      { id: 'kinetic-type', name: 'KineticType', nameZh: '动态字体', status: 'coming' },
      { id: 'neon-text',    name: 'NeonText',    nameZh: '霓虹文字', status: 'coming' },
    ]
  },
  {
    id: 'filter',
    name: '滤镜',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>`,
    plugins: [
      { id: 'engrave',         name: 'Engrave',        nameZh: '雕刻',     status: 'active' },
      { id: 'newsprint',       name: 'Newsprint',      nameZh: '报纸印刷', status: 'active' },
      { id: 'cartoon',         name: 'Cartoon',        nameZh: '卡通',     status: 'active' },
      { id: 'film-soft-light', name: 'FilmSoftLight',  nameZh: '胶片柔光', status: 'active' },
      { id: 'comic',           name: 'Comic',          nameZh: '漫画',     status: 'active' },
    ]
  },
  {
    id: 'stylize',
    name: '风格化',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    plugins: [
      { id: 'oil-paint',    name: 'OilPaint',    nameZh: '油画效果', status: 'coming' },
      { id: 'sketch',       name: 'Sketch',      nameZh: '素描效果', status: 'coming' },
      { id: 'halftone',     name: 'Halftone',    nameZh: '半调效果', status: 'coming' },
      { id: 'watercolor',   name: 'Watercolor',  nameZh: '水彩效果', status: 'coming' },
      { id: 'glitch-art',   name: 'GlitchArt',  nameZh: '故障艺术', status: 'coming' },
    ]
  },
  {
    id: 'generate',
    name: '生成',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    plugins: [
      { id: 'particle-gen', name: 'ParticleGen', nameZh: '粒子生成', status: 'coming' },
      { id: 'noise-field',  name: 'NoiseField',  nameZh: '噪声场',   status: 'coming' },
      { id: 'fractal',      name: 'FractalGen',  nameZh: '分形生成', status: 'coming' },
      { id: 'grid-gen',     name: 'GridGen',     nameZh: '网格生成', status: 'coming' },
    ]
  }
]

export const activePluginId = 'wave-blur'
