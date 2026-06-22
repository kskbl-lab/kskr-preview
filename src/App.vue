<template>
  <div class="app">
    <TopBar />

    <div class="app-body">
      <!-- 左侧：分类侧边栏 -->
      <Sidebar @select-plugin="onSelectPlugin" />

      <!-- 中间：参数面板 -->
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

      <!-- 右侧：预览区 -->
      <PreviewArea
        ref="previewArea"
        :compareMode="compareMode"
        :hasImage="hasImage"
        :currentCategory="currentCategoryName"
        :currentPlugin="currentPluginData?.name || ''"
        @upload="handleImageUpload"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch, nextTick } from 'vue'
import TopBar from './components/TopBar.vue'
import Sidebar from './components/Sidebar.vue'
import ParamPanel from './components/ParamPanel.vue'
import PreviewArea from './components/PreviewArea.vue'
import { categories } from './data/plugins.js'
import WaveBlurringEffect from './effects/WaveBlurringEffect.js'

// 当前选中插件
const selectedPluginId = ref('wave-blur')
const compareMode = ref(false)
const hasImage = ref(false)
const previewArea = ref(null)

let effect = null

// 插件元数据
const pluginsMeta = {
  'wave-blur': {
    id: 'wave-blur',
    name: 'WaveBlurring',
    nameZh: '波形模糊',
    defaultParams: {
      horizontalChromatic: 70.0,
      distortion: 50.0,
      speed: 60.0,
      size: 60.0,
      blur: 60.0
    },
    paramDefs: [
      { key: 'horizontalChromatic', label: 'AdjustHorizontalChromatic', desc: '水平色差强度', min: 0, max: 100, step: 0.1 },
      { key: 'distortion',          label: 'AdjustDistortion',          desc: '扭曲程度',     min: 0, max: 100, step: 0.1 },
      { key: 'speed',               label: 'AdjustSpeed',               desc: '动画速度',     min: 0, max: 100, step: 0.1 },
      { key: 'size',                label: 'AdjustSize',                desc: '波形尺寸',     min: 0, max: 100, step: 0.1 },
      { key: 'blur',                label: 'AdjustBlur',                desc: '模糊强度',     min: 0, max: 100, step: 0.1 },
    ]
  }
}

const currentPluginData = computed(() => pluginsMeta[selectedPluginId.value] || null)
const currentParams = computed(() => currentPluginData.value?.paramDefs || [])

const currentCategoryName = computed(() => {
  for (const cat of categories) {
    if (cat.plugins.find(p => p.id === selectedPluginId.value)) return cat.name
  }
  return ''
})

// 参数值
const paramValues = ref({
  horizontalChromatic: 70.0,
  distortion: 50.0,
  speed: 60.0,
  size: 60.0,
  blur: 60.0
})

// 监听参数变化 → 更新 effect
watch(paramValues, (v) => {
  if (effect) effect.updateParams(v)
}, { deep: true })

// 初始化
onMounted(() => {
  nextTick(() => {
    initEffect()
    loadDefaultImage()
  })
})

function initEffect() {
  const area = previewArea.value
  if (!area) return
  const ec = area.effectCanvas
  const oc = area.originalCanvas
  if (!ec) return
  effect = new WaveBlurringEffect(ec, oc)
  effect.init()
}

function loadDefaultImage() {
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = '/demo.jpg'
  img.onload = () => {
    hasImage.value = true
    effect?.loadImage(img)
  }
  img.onerror = () => createPlaceholderImage()
}

function createPlaceholderImage() {
  const canvas = document.createElement('canvas')
  canvas.width = 800
  canvas.height = 600
  const ctx = canvas.getContext('2d')
  // 深色渐变背景
  const g = ctx.createLinearGradient(0, 0, 800, 600)
  g.addColorStop(0, '#111')
  g.addColorStop(1, '#1a1a1a')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 800, 600)
  // 网格线
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'
  ctx.lineWidth = 1
  for (let x = 0; x < 800; x += 50) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 600); ctx.stroke()
  }
  for (let y = 0; y < 600; y += 50) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(800, y); ctx.stroke()
  }
  // 文字
  ctx.fillStyle = 'rgba(255,255,255,0.15)'
  ctx.font = 'bold 32px "Space Grotesk", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('KSkr Preview', 400, 280)
  ctx.font = '16px "Space Grotesk", sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.06)'
  ctx.fillText('上传图片以预览效果', 400, 326)

  canvas.toBlob(blob => {
    const img = new Image()
    img.src = URL.createObjectURL(blob)
    img.onload = () => {
      hasImage.value = true
      effect?.loadImage(img)
    }
  })
}

function handleImageUpload(e) {
  const file = e?.target?.files?.[0] || (Array.isArray(e?.target?.files) ? e.target.files[0] : null)
  if (!file) return
  const reader = new FileReader()
  reader.onload = (evt) => {
    const img = new Image()
    img.src = evt.target.result
    img.onload = () => {
      hasImage.value = true
      effect?.loadImage(img)
    }
  }
  reader.readAsDataURL(file)
}

function resetParams() {
  const defaults = currentPluginData.value?.defaultParams || {}
  paramValues.value = { ...defaults }
}

function toggleCompare() {
  compareMode.value = !compareMode.value
  nextTick(() => {
    // 对比模式需要重新初始化 effect 以绑定新的 canvas
    if (effect) {
      const area = previewArea.value
      if (!area) return
      const ec = compareMode.value ? area.effectCanvasCmp : area.effectCanvas
      const oc = area.originalCanvas
      effect.setCompareMode(compareMode.value)
    }
  })
}

function onSelectPlugin(plugin) {
  selectedPluginId.value = plugin.id
  if (pluginsMeta[plugin.id]) {
    paramValues.value = { ...pluginsMeta[plugin.id].defaultParams }
  }
}
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #080808;
  overflow: hidden;
}

.app-body {
  flex: 1;
  display: flex;
  overflow: hidden;
  min-height: 0;
}
</style>
