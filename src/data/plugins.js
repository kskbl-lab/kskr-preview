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
      { id: 'neon-glow', name: 'NeonGlow', nameZh: '霓虹发光', status: 'coming' },
    ]
  },
  {
    id: 'distortion',
    name: '画面扭曲',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M3 12c0 2.2 3.6 4 8 4s8-1.8 8-4"/><path d="M3 12c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>`,
    plugins: [
      { id: 'wave-blur', name: 'WaveBlurring', nameZh: '波形模糊', status: 'active' },
      { id: 'ripple', name: 'RippleWarp', nameZh: '涟漪扭曲', status: 'coming' },
      { id: 'liquid', name: 'LiquidMorph', nameZh: '液态变形', status: 'coming' },
      { id: 'glitch', name: 'GlitchWarp', nameZh: '故障扭曲', status: 'coming' },
    ]
  },
  {
    id: 'blur',
    name: '模糊',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6" opacity=".5"/><circle cx="12" cy="12" r="9" opacity=".25"/></svg>`,
    plugins: [
      { id: 'motion-blur', name: 'MotionBlur', nameZh: '运动模糊', status: 'coming' },
      { id: 'depth-blur', name: 'DepthBlur', nameZh: '景深模糊', status: 'coming' },
      { id: 'radial-blur', name: 'RadialBlur', nameZh: '径向模糊', status: 'coming' },
      { id: 'bokeh', name: 'BokehBlur', nameZh: '散景模糊', status: 'coming' },
    ]
  },
  {
    id: 'text',
    name: '文本',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    plugins: [
      { id: 'text-glitch', name: 'TextGlitch', nameZh: '文字故障', status: 'coming' },
      { id: 'text-reveal', name: 'TextReveal', nameZh: '文字揭示', status: 'coming' },
      { id: 'kinetic-type', name: 'KineticType', nameZh: '动态字体', status: 'coming' },
      { id: 'neon-text', name: 'NeonText', nameZh: '霓虹文字', status: 'coming' },
    ]
  },
  {
    id: 'generate',
    name: '生成',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    plugins: [
      { id: 'particle-gen', name: 'ParticleGen', nameZh: '粒子生成', status: 'coming' },
      { id: 'noise-field', name: 'NoiseField', nameZh: '噪声场', status: 'coming' },
      { id: 'fractal', name: 'FractalGen', nameZh: '分形生成', status: 'coming' },
      { id: 'grid-gen', name: 'GridGen', nameZh: '网格生成', status: 'coming' },
    ]
  }
]

// 当前激活插件（wave-blur 有实现）
export const activePluginId = 'wave-blur'
