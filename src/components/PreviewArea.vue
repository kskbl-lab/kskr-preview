<template>
  <div class="preview-area">
    <!-- 工具栏 -->
    <div class="preview-toolbar">
      <div class="toolbar-left">
        <span class="breadcrumb">
          <span class="breadcrumb-cat">{{ currentCategory }}</span>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-plugin">{{ currentPlugin }}</span>
        </span>
      </div>
      <div class="toolbar-right">
        <div class="view-toggle">
          <button
            v-for="mode in viewModes"
            :key="mode.id"
            :class="{ active: viewMode === mode.id }"
            @click="viewMode = mode.id"
            :title="mode.label"
          >
            <span v-html="mode.icon"></span>
          </button>
        </div>
        <div class="zoom-control">
          <button @click="changeZoom(-25)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <span class="zoom-val">{{ zoom }}%</span>
          <button @click="changeZoom(25)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 画布区 -->
    <div class="canvas-area" ref="canvasArea">

      <!-- 上传占位（hasImage=false 时显示在最上层） -->
      <div v-if="!hasImage" class="upload-placeholder" @click="triggerUpload" @dragover.prevent @drop="onDrop">
        <div class="upload-box">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <p class="upload-text">点击或拖拽图片到此处</p>
          <p class="upload-sub">支持 JPG、PNG、WebP</p>
        </div>
      </div>

      <!-- 画布容器：始终在 DOM，hasImage=false 时不可见 -->
      <div class="scroll-wrap" :class="{ scrollable: viewMode === 'actual', hidden: !hasImage }">
        <div class="center-wrap">
          <div class="canvas-wrap" :style="canvasWrapStyle" ref="canvasWrapRef">

            <!-- WebGL canvas（wave-blur 专用），2D 效果时隐藏 -->
            <canvas ref="webglCanvas" class="abs-fill" :style="{ display: isWebGL ? 'block' : 'none' }"></canvas>

            <!-- 2D canvas（所有非 WebGL 效果），WebGL 时隐藏 -->
            <canvas ref="canvas2d" class="abs-fill" :style="{ display: isWebGL ? 'none' : 'block' }"></canvas>

            <!-- 对比模式覆盖层（点击切换原图/效果） -->
            <div
              v-if="compareMode && hasImage"
              class="compare-overlay"
              :class="{ 'showing-original': showingOriginal }"
              @click="toggleOriginal"
            >
              <!-- 原图 canvas（对比时绘制原始图像） -->
              <canvas ref="originalCanvas" class="abs-fill" :style="{ opacity: showingOriginal ? 1 : 0 }"></canvas>
              <!-- 标签 -->
              <div class="cmp-badge" :class="showingOriginal ? 'badge-orig' : 'badge-fx'">
                {{ showingOriginal ? '原图' : '效果' }}
              </div>
              <!-- 点击提示 -->
              <div class="cmp-hint">点击切换</div>
            </div>

          </div>
        </div>
      </div>

    </div>

    <input ref="fileInput" type="file" accept="image/*" @change="onFileChange" style="display:none">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  compareMode:     { type: Boolean, default: false },
  hasImage:        { type: Boolean, default: false },
  isWebGL:         { type: Boolean, default: false },
  showingOriginal: { type: Boolean, default: false },
  currentCategory: { type: String,  default: '' },
  currentPlugin:   { type: String,  default: '' },
  imageWidth:      { type: Number,  default: 0 },
  imageHeight:     { type: Number,  default: 0 },
})

const emit = defineEmits(['upload', 'toggle-original'])

const webglCanvas  = ref(null)
const canvas2d     = ref(null)
const originalCanvas = ref(null)
const fileInput    = ref(null)
const canvasWrapRef = ref(null)
const canvasArea   = ref(null)

const viewMode = ref('fit')
const zoom     = ref(100)

const viewModes = [
  {
    id: 'fit', label: '适应窗口',
    icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`
  },
  {
    id: 'actual', label: '实际大小',
    icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`
  }
]

const imgW = computed(() => props.imageWidth  || 900)
const imgH = computed(() => props.imageHeight || 600)

const canvasWrapStyle = computed(() => {
  if (viewMode.value === 'fit') {
    return { width: imgW.value + 'px', height: imgH.value + 'px', maxWidth: '100%', maxHeight: '100%' }
  }
  return {
    width:  Math.round(imgW.value * zoom.value / 100) + 'px',
    height: Math.round(imgH.value * zoom.value / 100) + 'px',
  }
})

// 暴露两个专用 canvas + originalCanvas
defineExpose({ webglCanvas, canvas2d, originalCanvas })

function triggerUpload() { fileInput.value?.click() }
function onFileChange(e) { emit('upload', e) }
function onDrop(e) {
  e.preventDefault()
  const file = e.dataTransfer?.files?.[0]
  if (file) emit('upload', { target: { files: [file] } })
}
function changeZoom(delta) {
  zoom.value = Math.min(400, Math.max(10, zoom.value + delta))
}
function toggleOriginal() {
  emit('toggle-original')
}
</script>

<style scoped>
.preview-area {
  flex: 1; display: flex; flex-direction: column;
  background: var(--canvas-bg, #080808);
  min-width: 0; overflow: hidden;
}

/* 工具栏 */
.preview-toolbar {
  height: 44px; border-bottom: 1px solid var(--border, #1a1a1a);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px; flex-shrink: 0;
  background: var(--toolbar-bg, #0a0a0a);
}
.breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 12.5px; }
.breadcrumb-cat    { color: var(--text-muted, #444); }
.breadcrumb-sep    { color: var(--border, #2a2a2a); }
.breadcrumb-plugin { color: var(--text-dim, #888); font-weight: 500; }
.toolbar-right { display: flex; align-items: center; gap: 12px; }
.view-toggle {
  display: flex; background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e); border-radius: 6px; overflow: hidden;
}
.view-toggle button {
  padding: 5px 9px; background: transparent; border: none;
  color: var(--text-muted, #444); cursor: pointer;
  display: flex; align-items: center; transition: all 0.15s;
}
.view-toggle button:hover  { color: var(--text-dim, #888); background: var(--ctrl-hover, #151515); }
.view-toggle button.active { color: var(--text-primary, #ccc); background: var(--ctrl-active, #1a1a1a); }
.zoom-control {
  display: flex; align-items: center; gap: 6px;
  background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e); border-radius: 6px; padding: 3px 8px;
}
.zoom-control button {
  background: none; border: none; color: var(--text-muted, #555);
  cursor: pointer; display: flex; align-items: center; padding: 2px; transition: color 0.15s;
}
.zoom-control button:hover { color: var(--text-primary, #aaa); }
.zoom-val { font-size: 11.5px; color: var(--text-dim, #666); min-width: 34px; text-align: center; font-family: 'Space Grotesk', monospace; }

/* 画布区 */
.canvas-area {
  flex: 1; position: relative; overflow: hidden;
  background: var(--canvas-bg, #080808);
}
.canvas-area::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--grid-line, rgba(255,255,255,0.015)) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line, rgba(255,255,255,0.015)) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none;
}

/* 上传占位 */
.upload-placeholder {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; z-index: 10;
  background: var(--canvas-bg, #080808);
}
.upload-box {
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  padding: 52px 72px; border: 1px dashed var(--border, #222); border-radius: 12px;
  transition: all 0.2s; color: var(--text-muted, #333);
}
.upload-placeholder:hover .upload-box { border-color: var(--border-hover, #333); color: var(--text-dim, #555); }
.upload-text { font-size: 14px; color: var(--text-dim, #555); font-weight: 500; }
.upload-sub  { font-size: 12px; color: var(--text-muted, #333); }

/* scroll 容器 */
.scroll-wrap {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  padding: 32px; overflow: hidden; z-index: 1;
}
.scroll-wrap.hidden { visibility: hidden; pointer-events: none; }
.scroll-wrap.scrollable { overflow: auto; align-items: flex-start; justify-content: flex-start; }
.center-wrap {
  display: flex; align-items: center; justify-content: center;
  min-width: 100%; min-height: 100%;
}

/* canvas wrap */
.canvas-wrap {
  position: relative; flex-shrink: 0;
  border-radius: 4px; overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.05), 0 24px 64px rgba(0,0,0,0.6);
}
.abs-fill {
  display: block; position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
}

/* 对比覆盖层 */
.compare-overlay {
  position: absolute; inset: 0;
  cursor: pointer;
  z-index: 5;
  transition: opacity 0.2s;
}
.compare-overlay:hover { opacity: 0.95; }

/* 原图 canvas 带渐变过渡 */
.compare-overlay canvas {
  transition: opacity 0.25s ease;
}

/* 状态标签 */
.cmp-badge {
  position: absolute; top: 14px; left: 14px;
  font-size: 12px; font-weight: 700; padding: 4px 12px;
  border-radius: 20px; pointer-events: none;
  backdrop-filter: blur(8px);
}
.badge-orig {
  background: rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.9);
  border: 1px solid rgba(255,255,255,0.2);
}
.badge-fx {
  background: rgba(255,255,255,0.9);
  color: #000;
  border: 1px solid rgba(255,255,255,0.5);
}

/* 点击提示 */
.cmp-hint {
  position: absolute; bottom: 14px; left: 50%;
  transform: translateX(-50%);
  font-size: 11px; color: rgba(255,255,255,0.45);
  background: rgba(0,0,0,0.4);
  padding: 3px 10px; border-radius: 20px;
  pointer-events: none; white-space: nowrap;
  backdrop-filter: blur(4px);
}
</style>
