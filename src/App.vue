<template>
  <div class="app" :class="'theme-' + currentTheme">
    <TopBar :currentTheme="currentTheme" @set-theme="setTheme" />
    <div class="app-body">
      <Sidebar @select-plugin="onSelectPlugin" />
      <ParamPanel
        v-if="currentPluginData"
        :plugin="currentPluginData"
        :params="currentParams"
        v-model="paramValues"
        :compareMode="compareMode"
        @reset="resetParams"
        @upload="handleImageUpload"
        @toggle-compare="toggleCompare"
      />
      <PreviewArea
        ref="previewArea"
        :compareMode="compareMode"
        :hasImage="hasImage"
        :isWebGL="isWebGL"
        :showingOriginal="showingOriginal"
        :imageWidth="imgW"
        :imageHeight="imgH"
        :currentCategory="currentCategoryName"
        :currentPlugin="currentPluginData?.name || ''"
        @upload="handleImageUpload"
        @toggle-original="toggleOriginal"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import TopBar from './components/TopBar.vue'
import Sidebar from './components/Sidebar.vue'
import ParamPanel from './components/ParamPanel.vue'
import PreviewArea from './components/PreviewArea.vue'
import { categories } from './data/plugins.js'

import WaveBlurringEffect         from './effects/WaveBlurringEffect.js'
import { BasicMosaicEffect }      from './effects/BasicMosaicEffect.js'
import { BlurMosaicEffect }       from './effects/BlurMosaicEffect.js'
import { BrickMosaicEffect }      from './effects/BrickMosaicEffect.js'
import { ColorfulMosaic1Effect }  from './effects/ColorfulMosaic1Effect.js'
import { ColorfulMosaic2Effect }  from './effects/ColorfulMosaic2Effect.js'
import { ColorfulMosaic3Effect }  from './effects/ColorfulMosaic3Effect.js'
import { GlassMosaic1Effect }     from './effects/GlassMosaic1Effect.js'
import { GlassMosaic2Effect }     from './effects/GlassMosaic2Effect.js'
import { HexagonMosaicEffect }    from './effects/HexagonMosaicEffect.js'
import { StarMosaicEffect }       from './effects/StarMosaicEffect.js'
import { RadialBlurEffect }       from './effects/RadialBlurEffect.js'
import { DirectionalBlurEffect }  from './effects/DirectionalBlurEffect.js'
import { EngraveEffect }          from './effects/EngraveEffect.js'
import { NewsprintEffect }        from './effects/NewsprintEffect.js'
import { CartoonEffect }          from './effects/CartoonEffect.js'
import { FilmSoftLightEffect }    from './effects/FilmSoftLightEffect.js'
import { ComicEffect }            from './effects/ComicEffect.js'
import { CCLensEffect }           from './effects/CCLensEffect.js'
import { RippleEffect }           from './effects/RippleEffect.js'
import { WaveWarpEffect }         from './effects/WaveWarpEffect.js'
import { TwirlDistortEffect }     from './effects/TwirlDistortEffect.js'
import { EdgeGlowEffect }         from './effects/EdgeGlowEffect.js'
import { EnlargementEffect }      from './effects/EnlargementEffect.js'
import { ShaftLightEffect }       from './effects/ShaftLightEffect.js'
import { OverallGlowEffect }      from './effects/OverallGlowEffect.js'

// ── 主题 ──────────────────────────────────────
const currentTheme = ref('dark')
function setTheme(t) { currentTheme.value = t }

// ── 状态 ──────────────────────────────────────
const selectedPluginId = ref('wave-blur')
const compareMode      = ref(false)
const showingOriginal  = ref(false)  // 对比模式：当前显示的是原图还是效果
const hasImage         = ref(false)
const isWebGL          = ref(true)   // 当前插件是否使用 WebGL canvas
const previewArea      = ref(null)
const imgW             = ref(0)
const imgH             = ref(0)

let effect    = null
let sourceImg = null

// ── 插件元数据 ──────────────────────────────────────
const PLUGINS_META = {
  'wave-blur': {
    name: 'WaveBlurring', nameZh: '波形模糊',
    EffectClass: null,
    defaults: { horizontalChromatic: 70, distortion: 50, speed: 60, size: 60, blur: 60 },
    params: [
      { key: 'horizontalChromatic', label: 'AdjustHorizontalChromatic', desc: '水平色差强度', min: 0, max: 100 },
      { key: 'distortion',          label: 'AdjustDistortion',          desc: '扭曲程度',     min: 0, max: 100 },
      { key: 'speed',               label: 'AdjustSpeed',               desc: '动画速度',     min: 0, max: 100 },
      { key: 'size',                label: 'AdjustSize',                desc: '波形尺寸',     min: 0, max: 100 },
      { key: 'blur',                label: 'AdjustBlur',                desc: '模糊强度',     min: 0, max: 100 },
    ]
  },
  'directional-blur': {
    name: 'Directional Blur', nameZh: '定向模糊',
    EffectClass: DirectionalBlurEffect,
    defaults: { length: 30, direction: 0 },
    params: [
      { key: 'length',    label: 'Blur Length',    desc: '模糊长度', min: 0, max: 100 },
      { key: 'direction', label: 'Blur Direction', desc: '模糊方向（角度，0=水平）', min: 0, max: 360, step: 1 },
    ]
  },
  'radial-blur': {
    name: 'Radial Blur', nameZh: '径向模糊',
    EffectClass: RadialBlurEffect,
    defaults: { mode: 0, intensity: 30, center: 50 },
    params: [
      { key: 'mode',      label: 'Mode',      desc: '0 = 旋转模糊  /  1 = 缩放模糊', min: 0, max: 1, step: 1 },
      { key: 'intensity', label: 'Intensity', desc: '模糊强度', min: 0, max: 100 },
      { key: 'center',    label: 'Center',    desc: '中心位置 (0=左上  100=右下)', min: 0, max: 100 },
    ]
  },
  'basic-mosaic': {
    name: 'Basic Mosaic', nameZh: '基础马赛克',
    EffectClass: BasicMosaicEffect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '马赛克块大小', min: 1, max: 100 }]
  },
  'blur-mosaic-fx': {
    name: 'Blur Mosaic', nameZh: '模糊马赛克',
    EffectClass: BlurMosaicEffect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '模糊程度', min: 1, max: 100 }]
  },
  'brick-mosaic': {
    name: 'Brick Mosaic', nameZh: '砖块马赛克',
    EffectClass: BrickMosaicEffect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '砖块大小', min: 1, max: 100 }]
  },
  'colorful-mosaic-1': {
    name: 'Colorful MosaicI', nameZh: '彩色马赛克 I',
    EffectClass: ColorfulMosaic1Effect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '晶格大小', min: 1, max: 100 }]
  },
  'colorful-mosaic-2': {
    name: 'Colorful MosaicII', nameZh: '彩色马赛克 II',
    EffectClass: ColorfulMosaic2Effect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '气泡大小', min: 1, max: 100 }]
  },
  'colorful-mosaic-3': {
    name: 'Colorful MosaicIII', nameZh: '彩色马赛克 III',
    EffectClass: ColorfulMosaic3Effect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '三角片大小', min: 1, max: 100 }]
  },
  'glass-mosaic-1': {
    name: 'Glass MosaicI', nameZh: '玻璃马赛克 I',
    EffectClass: GlassMosaic1Effect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '玻璃格大小', min: 1, max: 100 }]
  },
  'glass-mosaic-2': {
    name: 'Glass MosaicII', nameZh: '玻璃马赛克 II',
    EffectClass: GlassMosaic2Effect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '磨砂格大小', min: 1, max: 100 }]
  },
  'hexagon-mosaic': {
    name: 'Hexagon Mosaic', nameZh: '六边形马赛克',
    EffectClass: HexagonMosaicEffect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '六边形大小', min: 1, max: 100 }]
  },
  'star-mosaic': {
    name: 'Star Mosaic', nameZh: '星形马赛克',
    EffectClass: StarMosaicEffect,
    defaults: { intensity: 50 },
    params: [{ key: 'intensity', label: 'Intensity', desc: '星形大小', min: 1, max: 100 }]
  },
  'engrave': {
    name: 'Engrave', nameZh: '雕刻',
    EffectClass: EngraveEffect,
    defaults: { strength: 2.9 },
    params: [{ key: 'strength', label: 'Strength', desc: '雕刻强度', min: 0, max: 10, step: 0.1 }]
  },
  'newsprint': {
    name: 'Newsprint', nameZh: '报纸印刷',
    EffectClass: NewsprintEffect,
    defaults: { colorModel: 2, pattern: 2, period: 12.7, angle: 75, antiAlias: 16, turbulence: 0, blocksize: -1, angleBoost: 0 },
    params: [
      { key: 'colorModel', label: 'ColorModel',  desc: '颜色模式 (0=黑白 1=彩色 2=灰度半调)', min: 0, max: 2, step: 1 },
      { key: 'pattern',    label: 'Pattern',     desc: '图案类型 (0=圆点 1=线条 2=方块)',      min: 0, max: 2, step: 1 },
      { key: 'period',     label: 'Period',      desc: '网格周期大小',  min: 1, max: 30, step: 0.1 },
      { key: 'angle',      label: 'Angle',       desc: '网格旋转角度',  min: 0, max: 180, step: 1 },
      { key: 'turbulence', label: 'Turbulence',  desc: '扰动变形',      min: 0, max: 5, step: 0.1 },
      { key: 'blocksize',  label: 'Blocksize',   desc: '图案缩放 (-2~2)', min: -2, max: 2, step: 0.1 },
      { key: 'angleBoost', label: 'AngleBoost',  desc: '额外角度叠加',  min: 0, max: 5, step: 0.1 },
    ]
  },
  'cartoon': {
    name: 'Cartoon', nameZh: '卡通',
    EffectClass: CartoonEffect,
    defaults: { render: 2, detailRadius: 10.6, detailThreshold: 10, shadingSteps: 10, shadingSmoothness: 10, edgeThreshold: 1, edgeWidth: 2.5, edgeOpacity: 0.26 },
    params: [
      { key: 'render',            label: 'Render',            desc: '渲染模式 (0=仅填色 1=仅边缘 2=填色+边缘)', min: 0, max: 2, step: 1 },
      { key: 'detailRadius',      label: 'DetailRadius',      desc: '细节平滑半径', min: 1, max: 30, step: 0.1 },
      { key: 'detailThreshold',   label: 'DetailThreshold',   desc: '细节阈值',     min: 0, max: 20, step: 0.1 },
      { key: 'shadingSteps',      label: 'ShadingSteps',      desc: '色阶数量',     min: 2, max: 16, step: 1 },
      { key: 'shadingSmoothness', label: 'ShadingSmoothness', desc: '色阶过渡平滑', min: 0, max: 20, step: 0.1 },
      { key: 'edgeThreshold',     label: 'EdgeThreshold',     desc: '边缘检测阈值', min: 0, max: 5, step: 0.1 },
      { key: 'edgeWidth',         label: 'EdgeWidth',         desc: '边缘线宽度',   min: 0, max: 8, step: 0.1 },
      { key: 'edgeOpacity',       label: 'EdgeOpacity',       desc: '边缘线透明度', min: 0, max: 1, step: 0.01 },
    ]
  },
  'film-soft-light': {
    name: 'FilmSoftLight', nameZh: '胶片柔光',
    EffectClass: FilmSoftLightEffect,
    defaults: { lightColor: 50, lightRange: 73, lightIntensity: 50 },
    params: [
      { key: 'lightColor',     label: 'LightColor',     desc: '光色偏移 (0=冷蓝 100=暖橙)', min: 0, max: 100 },
      { key: 'lightRange',     label: 'LightRange',     desc: '光晕扩散范围',               min: 0, max: 100 },
      { key: 'lightIntensity', label: 'LightIntensity', desc: '光晕强度',                   min: 0, max: 100 },
    ]
  },
  'comic': {
    name: 'Comic', nameZh: '漫画',
    EffectClass: ComicEffect,
    defaults: { comicType: 0, color1: 300, color2: 300, gridNum: 0.14 },
    params: [
      { key: 'comicType', label: 'ComicType', desc: '漫画类型 (0=黑白 1=彩色)', min: 0, max: 1, step: 1 },
      { key: 'color1',    label: 'Color1',    desc: '高光色相 (0-360°)',        min: 0, max: 360, step: 1 },
      { key: 'color2',    label: 'Color2',    desc: '阴影色相 (0-360°)',        min: 0, max: 360, step: 1 },
      { key: 'gridNum',   label: 'GridNum',   desc: '网格密度',                 min: 0, max: 1, step: 0.01 },
    ]
  },
  // ── 画面扭曲 ─────────────────────────────────────
  'cc-lens': {
    name: 'CCLens', nameZh: '鱼眼',
    EffectClass: CCLensEffect,
    defaults: { centerX: 0.5, centerY: 0.39, size: 76, convergence: 20 },
    params: [
      { key: 'centerX',     label: 'CenterX',     desc: '镜头中心 X',           min: 0, max: 1, step: 0.01 },
      { key: 'centerY',     label: 'CenterY',     desc: '镜头中心 Y',           min: 0, max: 1, step: 0.01 },
      { key: 'size',        label: 'Size',        desc: '镜头大小',             min: 0, max: 200 },
      { key: 'convergence', label: 'Convergence', desc: '汇聚 (+凸起 / -凹陷)', min: -100, max: 100 },
    ]
  },
  'ripple': {
    name: 'Ripple', nameZh: '波纹',
    EffectClass: RippleEffect,
    defaults: { radius: 100, waveSpeed: 4.9, waveWidth: 55.1, waveHeight: 1.0, wavePhase: 0 },
    params: [
      { key: 'radius',      label: '半径',      desc: '波纹影响半径',     min: 0,   max: 200 },
      { key: 'waveWidth',   label: '波形宽度',  desc: '相邻波峰间距',     min: 1,   max: 100, step: 0.1 },
      { key: 'waveHeight',  label: '波形高度',  desc: '波纹位移幅度',     min: 0,   max: 5, step: 0.1 },
      { key: 'wavePhase',   label: '波纹相',    desc: '波纹起始相位 (°)', min: 0,   max: 360, step: 1 },
    ]
  },
  'wave-warp': {
    name: 'WaveWarp', nameZh: '波形变形',
    EffectClass: WaveWarpEffect,
    defaults: { waveType: 0, waveHeight: 10, waveWidth: 40, direction: 90, waveSpeed: 1.0, phase: 0 },
    params: [
      { key: 'waveType',   label: '波浪类型',  desc: '0=正弦 1=方波 2=三角', min: 0, max: 2, step: 1 },
      { key: 'waveHeight', label: '波形高度',  desc: '位移幅度',             min: 0, max: 100, step: 0.5 },
      { key: 'waveWidth',  label: '波形宽度',  desc: '波长（像素比）',       min: 1, max: 200, step: 1 },
      { key: 'direction',  label: '方向',      desc: '波形传播方向 (°)',     min: 0, max: 360, step: 1 },
      { key: 'phase',      label: '相位',      desc: '波形起始相位 (°)',     min: 0, max: 360, step: 1 },
    ]
  },
  'twirl-distort': {
    name: 'TwirlDistort', nameZh: '旋转扭曲',
    EffectClass: TwirlDistortEffect,
    defaults: { centerX: 0.5, centerY: 0.5, radius: 80, angle: 120, smoothness: 60 },
    params: [
      { key: 'centerX',    label: 'CenterX',    desc: '旋转中心 X',     min: 0, max: 1, step: 0.01 },
      { key: 'centerY',    label: 'CenterY',    desc: '旋转中心 Y',     min: 0, max: 1, step: 0.01 },
      { key: 'radius',     label: 'Radius',     desc: '影响半径',       min: 0, max: 200 },
      { key: 'angle',      label: 'Angle',      desc: '扭曲角度 (°)',   min: -360, max: 360, step: 1 },
      { key: 'smoothness', label: 'Smoothness', desc: '边缘过渡平滑度', min: 0, max: 100 },
    ]
  },
  // ── 光效 ─────────────────────────────────────
  'edge-glow': {
    name: 'EdgeGlow', nameZh: '边缘辉光',
    EffectClass: EdgeGlowEffect,
    defaults: { glowCenterX: 0.5, glowCenterY: 0.5, glowIntensity: 50, glowDensity: 60 },
    params: [
      { key: 'glowCenterX',  label: 'GlowCenterX', desc: '光源中心 X',    min: 0, max: 1, step: 0.01 },
      { key: 'glowCenterY',  label: 'GlowCenterY', desc: '光源中心 Y',    min: 0, max: 1, step: 0.01 },
      { key: 'glowIntensity',label: 'Intensity',   desc: '辉光亮度',      min: 0, max: 100 },
      { key: 'glowDensity',  label: 'Density',     desc: '辉光扩散密度',  min: 0, max: 100 },
    ]
  },
  'enlargement': {
    name: 'Enlargement', nameZh: '局部放大',
    EffectClass: EnlargementEffect,
    defaults: { shape: 0, centerX: 0.5, centerY: 0.5, magnification: 108, size: 154, feather: 71 },
    params: [
      { key: 'shape',         label: 'Shape',         desc: '形状 (0=圆形 1=方形)', min: 0, max: 1, step: 1 },
      { key: 'centerX',       label: 'CenterX',       desc: '放大中心 X',           min: 0, max: 1, step: 0.01 },
      { key: 'centerY',       label: 'CenterY',       desc: '放大中心 Y',           min: 0, max: 1, step: 0.01 },
      { key: 'magnification', label: 'Magnification', desc: '放大倍数 (%)',          min: 50, max: 400 },
      { key: 'size',          label: 'Size',          desc: '镜头大小',             min: 0, max: 300 },
      { key: 'feather',       label: 'Feather',       desc: '边缘羽化',             min: 0, max: 100 },
    ]
  },
  'shaft-light': {
    name: 'ShaftLight', nameZh: '光柱',
    EffectClass: ShaftLightEffect,
    defaults: { threshold: 0.2, strength: 1.82, length: 1.0, centerX: 0.5, centerY: 0.5 },
    params: [
      { key: 'threshold', label: 'Threshold', desc: '亮度提取阈值',  min: 0,   max: 1, step: 0.01 },
      { key: 'strength',  label: 'Strength',  desc: '光柱强度',      min: 0,   max: 5, step: 0.01 },
      { key: 'length',    label: 'Length',    desc: '光线延伸长度',  min: 0,   max: 2, step: 0.01 },
      { key: 'centerX',   label: 'CenterX',   desc: '光源中心 X',   min: 0,   max: 1, step: 0.01 },
      { key: 'centerY',   label: 'CenterY',   desc: '光源中心 Y',   min: 0,   max: 1, step: 0.01 },
    ]
  },
  'overall-glow': {
    name: 'OverallGlow', nameZh: '泛光',
    EffectClass: OverallGlowEffect,
    defaults: { threshold: 60, glowRadius: 40, glowStrength: 60, glowColor: 0 },
    params: [
      { key: 'threshold',   label: 'Threshold',   desc: '高光提取阈值',           min: 0, max: 100 },
      { key: 'glowRadius',  label: 'GlowRadius',  desc: '光晕扩散半径',           min: 0, max: 100 },
      { key: 'glowStrength',label: 'GlowStrength',desc: '光晕强度',               min: 0, max: 100 },
      { key: 'glowColor',   label: 'GlowColor',   desc: '光晕色调 (0=白 1=暖 2=冷)', min: 0, max: 2, step: 1 },
    ]
  },
}

const currentPluginData  = computed(() => PLUGINS_META[selectedPluginId.value] || null)
const currentParams      = computed(() => currentPluginData.value?.params || [])
const currentCategoryName = computed(() => {
  for (const cat of categories) {
    if (cat.plugins.find(p => p.id === selectedPluginId.value)) return cat.name
  }
  return ''
})

const paramValues = ref({ ...PLUGINS_META['wave-blur'].defaults })

watch(paramValues, (v) => {
  effect?.updateParams(v)
  effectCmp?.updateParams(v)
}, { deep: true })

onMounted(() => {
  nextTick(() => {
    initEffect('wave-blur')
    loadDefaultImage()
  })
})

function makeEffect(pluginId, canvas) {
  const meta = PLUGINS_META[pluginId]
  if (!meta || !canvas) return null
  if (pluginId === 'wave-blur') {
    const e = new WaveBlurringEffect(canvas, null)
    e.init()
    return e
  } else if (meta.EffectClass) {
    return new meta.EffectClass(canvas)
  }
  return null
}

// 获取当前插件应该用的 canvas（WebGL 或 2D）
function getEffectCanvas() {
  const pa = previewArea.value
  if (!pa) return null
  return isWebGL.value ? pa.webglCanvas : pa.canvas2d
}

function initEffect(pluginId) {
  effect?.destroy?.()
  effect = null

  isWebGL.value = (pluginId === 'wave-blur')

  const canvas = getEffectCanvas()
  effect = makeEffect(pluginId, canvas)
  if (sourceImg) effect?.loadImage(sourceImg)

  if (compareMode.value) {
    drawOriginal()
  }
}

function drawOriginal() {
  const oc = previewArea.value?.originalCanvas
  if (!oc || !sourceImg) return
  oc.width  = imgW.value || sourceImg.naturalWidth || 900
  oc.height = imgH.value || sourceImg.naturalHeight || 600
  oc.getContext('2d').drawImage(sourceImg, 0, 0, oc.width, oc.height)
}

function loadDefaultImage() {
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = '/demo.jpg'
  img.onload  = () => setImage(img)
  img.onerror = () => createPlaceholder()
}

function createPlaceholder() {
  const c = document.createElement('canvas')
  c.width = 900; c.height = 600
  const ctx = c.getContext('2d')
  const g = ctx.createLinearGradient(0, 0, 900, 600)
  g.addColorStop(0, '#101010'); g.addColorStop(1, '#1c1c1c')
  ctx.fillStyle = g; ctx.fillRect(0, 0, 900, 600)
  ctx.strokeStyle = 'rgba(255,255,255,.03)'; ctx.lineWidth = 1
  for (let x = 0; x <= 900; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 600); ctx.stroke() }
  for (let y = 0; y <= 600; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(900, y); ctx.stroke() }
  const radial = ctx.createRadialGradient(450, 300, 20, 450, 300, 260)
  radial.addColorStop(0, 'rgba(255,255,255,.06)'); radial.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = radial; ctx.fillRect(0, 0, 900, 600)
  ctx.fillStyle = 'rgba(255,255,255,.18)'
  ctx.font = 'bold 36px "Space Grotesk", sans-serif'
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText('KSkr', 450, 278)
  ctx.font = '15px "Inter", sans-serif'; ctx.fillStyle = 'rgba(255,255,255,.08)'
  ctx.fillText('上传图片以开始预览', 450, 326)
  const img = new Image()
  img.onload = () => setImage(img)
  img.src = c.toDataURL()
}

function setImage(img) {
  sourceImg = img
  imgW.value = img.naturalWidth  || img.width  || 900
  imgH.value = img.naturalHeight || img.height || 600
  hasImage.value = true
  nextTick(() => {
    effect?.loadImage(img)
    if (compareMode.value) drawOriginal()
  })
}

function handleImageUpload(e) {
  const file = e?.target?.files?.[0] || e?.dataTransfer?.files?.[0] || e?.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (evt) => {
    const img = new Image()
    img.onload = () => setImage(img)
    img.src = evt.target.result
  }
  reader.readAsDataURL(file)
}

function resetParams() {
  paramValues.value = { ...(currentPluginData.value?.defaults || {}) }
}

function toggleCompare() {
  compareMode.value = !compareMode.value
  showingOriginal.value = false
  if (compareMode.value && sourceImg) {
    nextTick(() => drawOriginal())
  }
}

function toggleOriginal() {
  showingOriginal.value = !showingOriginal.value
  // 切换到原图时，确保 originalCanvas 有内容
  if (showingOriginal.value && sourceImg) drawOriginal()
}

function onSelectPlugin(plugin) {
  selectedPluginId.value = plugin.id
  const meta = PLUGINS_META[plugin.id]
  if (meta) paramValues.value = { ...meta.defaults }
  nextTick(() => initEffect(plugin.id))
}
</script>

<style>
/* ── 主题 CSS 变量 ─────────────────────────── */
.theme-dark {
  --app-bg:        #080808;
  --topbar-bg:     #0d0d0d;
  --sidebar-bg:    #0d0d0d;
  --panel-bg:      #0a0a0a;
  --canvas-bg:     #080808;
  --toolbar-bg:    #0a0a0a;
  --ctrl-bg:       #111;
  --ctrl-hover:    #151515;
  --ctrl-active:   #1a1a1a;
  --border:        #1e1e1e;
  --border-hover:  #333;
  --text-primary:  #e0e0e0;
  --text-dim:      #888;
  --text-muted:    #444;
  --upload-bg:     rgba(10,10,10,0.85);
  --grid-line:     rgba(255,255,255,0.015);
  --scrollbar:     #222;
  --logo-rest:     #444;
}

.theme-gray {
  --app-bg:        #2e2e2e;
  --topbar-bg:     #242424;
  --sidebar-bg:    #272727;
  --panel-bg:      #252525;
  --canvas-bg:     #2e2e2e;
  --toolbar-bg:    #242424;
  --ctrl-bg:       #333;
  --ctrl-hover:    #3a3a3a;
  --ctrl-active:   #404040;
  --border:        #3a3a3a;
  --border-hover:  #555;
  --text-primary:  #f0f0f0;
  --text-dim:      #aaa;
  --text-muted:    #777;
  --upload-bg:     rgba(30,30,30,0.9);
  --grid-line:     rgba(255,255,255,0.04);
  --scrollbar:     #444;
  --logo-rest:     #777;
}

.theme-light {
  --app-bg:        #f0f0f0;
  --topbar-bg:     #ffffff;
  --sidebar-bg:    #f8f8f8;
  --panel-bg:      #fafafa;
  --canvas-bg:     #e8e8e8;
  --toolbar-bg:    #f5f5f5;
  --ctrl-bg:       #ebebeb;
  --ctrl-hover:    #e0e0e0;
  --ctrl-active:   #d8d8d8;
  --border:        #ddd;
  --border-hover:  #aaa;
  --text-primary:  #111;
  --text-dim:      #555;
  --text-muted:    #999;
  --upload-bg:     rgba(240,240,240,0.9);
  --grid-line:     rgba(0,0,0,0.04);
  --scrollbar:     #ccc;
  --logo-rest:     #aaa;
}
</style>

<style scoped>
.app {
  width: 100vw; height: 100vh;
  display: flex; flex-direction: column;
  background: var(--app-bg, #080808);
  overflow: hidden;
}
.app-body { flex: 1; display: flex; overflow: hidden; min-height: 0; }
</style>
