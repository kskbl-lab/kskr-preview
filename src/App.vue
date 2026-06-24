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
        :imageWidth="imgW"
        :imageHeight="imgH"
        :currentCategory="currentCategoryName"
        :currentPlugin="currentPluginData?.name || ''"
        @upload="handleImageUpload"
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

// ── 主题 ──────────────────────────────────────
const currentTheme = ref('dark')
function setTheme(t) { currentTheme.value = t }

// ── 状态 ──────────────────────────────────────
const selectedPluginId = ref('wave-blur')
const compareMode      = ref(false)
const hasImage         = ref(false)
const previewArea      = ref(null)
const imgW             = ref(0)
const imgH             = ref(0)

let effect    = null
let effectCmp = null   // 对比模式的第二个 effect 实例（绑定 effectCanvasCmp）
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

function initEffect(pluginId) {
  effect?.destroy?.()
  effectCmp?.destroy?.()
  effect = null; effectCmp = null

  const ec = previewArea.value?.effectCanvas
  effect = makeEffect(pluginId, ec)
  if (sourceImg) effect?.loadImage(sourceImg)

  if (compareMode.value) {
    initEffectCmp(pluginId)
    drawOriginal()
  }
}

function initEffectCmp(pluginId) {
  effectCmp?.destroy?.()
  effectCmp = null
  const ecCmp = previewArea.value?.effectCanvasCmp
  effectCmp = makeEffect(pluginId, ecCmp)
  if (sourceImg) effectCmp?.loadImage(sourceImg)
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
    if (compareMode.value) {
      effectCmp?.loadImage(img)
      drawOriginal()
    }
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
  nextTick(() => {
    if (compareMode.value) {
      initEffectCmp(selectedPluginId.value)
      drawOriginal()
    } else {
      effectCmp?.destroy?.()
      effectCmp = null
    }
  })
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
