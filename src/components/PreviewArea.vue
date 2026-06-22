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
        <!-- 视图模式切换 -->
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
        <!-- 缩放 -->
        <div class="zoom-control">
          <button @click="zoom = Math.max(25, zoom - 25)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <span class="zoom-val">{{ zoom }}%</span>
          <button @click="zoom = Math.min(200, zoom + 25)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 预览画布区 -->
    <div class="canvas-area" ref="canvasArea">
      <!-- 单图模式 -->
      <div v-if="!compareMode" class="single-mode">
        <div class="canvas-frame" :style="canvasFrameStyle">
          <canvas ref="effectCanvas" class="preview-canvas"></canvas>
          <div class="canvas-overlay" v-if="!hasImage">
            <div class="upload-hint" @click="triggerUpload" @dragover.prevent @drop="onDrop">
              <div class="upload-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <p class="upload-hint-text">点击或拖拽图片到此处</p>
              <p class="upload-hint-sub">支持 JPG、PNG、WebP</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 对比模式 -->
      <div v-else class="compare-mode-wrap">
        <!-- 滑动对比 -->
        <div class="compare-slider-wrap" ref="compareWrap" @mousemove="onCompareMove" @touchmove.prevent="onCompareTouch">
          <div class="compare-canvas-bg">
            <canvas ref="originalCanvas" class="cmp-canvas"></canvas>
          </div>
          <div class="compare-canvas-fg" :style="{ width: comparePos + '%' }">
            <canvas ref="effectCanvasCmp" class="cmp-canvas"></canvas>
          </div>
          <!-- 分割线 -->
          <div
            class="compare-divider"
            :style="{ left: comparePos + '%' }"
            @mousedown="startDrag"
            @touchstart="startDrag"
          >
            <div class="divider-line"></div>
            <div class="divider-handle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"/><polyline points="9 18 3 12 9 6" transform="translate(6,0)"/>
              </svg>
            </div>
          </div>
          <!-- 标签 -->
          <div class="compare-label compare-label-before">原图</div>
          <div class="compare-label compare-label-after">效果</div>
        </div>
      </div>
    </div>

    <!-- 隐藏上传input -->
    <input ref="fileInput" type="file" accept="image/*" @change="onFileChange" hidden>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'

const props = defineProps({
  compareMode: { type: Boolean, default: false },
  effect: { type: Object, default: null },
  hasImage: { type: Boolean, default: false },
  currentCategory: { type: String, default: '' },
  currentPlugin: { type: String, default: '' }
})

const emit = defineEmits(['upload'])

const effectCanvas = ref(null)
const originalCanvas = ref(null)
const effectCanvasCmp = ref(null)
const fileInput = ref(null)
const compareWrap = ref(null)
const canvasArea = ref(null)

const viewMode = ref('fit')
const zoom = ref(100)
const comparePos = ref(50)
let isDragging = false

const viewModes = [
  {
    id: 'fit',
    label: '适应窗口',
    icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`
  },
  {
    id: 'actual',
    label: '实际大小',
    icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`
  }
]

const canvasFrameStyle = computed(() => {
  if (viewMode.value === 'fit') return { maxWidth: '100%', maxHeight: '100%' }
  return { transform: `scale(${zoom.value / 100})`, transformOrigin: 'center center' }
})

// 提供 canvas ref 给父组件访问
defineExpose({ effectCanvas, originalCanvas, effectCanvasCmp })

function triggerUpload() {
  fileInput.value?.click()
}

function onFileChange(e) {
  emit('upload', e)
}

function onDrop(e) {
  const file = e.dataTransfer?.files?.[0]
  if (file) emit('upload', { target: { files: [file] } })
}

// 对比滑块逻辑
function startDrag(e) {
  e.preventDefault()
  isDragging = true
  document.addEventListener('mousemove', onCompareMove)
  document.addEventListener('touchmove', onCompareTouch)
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchend', stopDrag)
}

function stopDrag() {
  isDragging = false
  document.removeEventListener('mousemove', onCompareMove)
  document.removeEventListener('touchmove', onCompareTouch)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)
}

function onCompareMove(e) {
  if (!isDragging) return
  updateComparePos(e.clientX)
}

function onCompareTouch(e) {
  if (!isDragging) return
  updateComparePos(e.touches[0].clientX)
}

function updateComparePos(clientX) {
  const wrap = compareWrap.value
  if (!wrap) return
  const rect = wrap.getBoundingClientRect()
  const pct = ((clientX - rect.left) / rect.width) * 100
  comparePos.value = Math.min(95, Math.max(5, pct))
}
</script>

<style scoped>
.preview-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #080808;
  min-width: 0;
  overflow: hidden;
}

/* 工具栏 */
.preview-toolbar {
  height: 44px;
  border-bottom: 1px solid #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
  background: #0a0a0a;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
}

.breadcrumb-cat {
  color: #444;
}

.breadcrumb-sep {
  color: #2a2a2a;
}

.breadcrumb-plugin {
  color: #888;
  font-weight: 500;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.view-toggle {
  display: flex;
  background: #111;
  border: 1px solid #1e1e1e;
  border-radius: 6px;
  overflow: hidden;
}

.view-toggle button {
  padding: 5px 9px;
  background: transparent;
  border: none;
  color: #444;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.15s;
}

.view-toggle button:hover {
  color: #888;
  background: #151515;
}

.view-toggle button.active {
  color: #ccc;
  background: #1a1a1a;
}

.zoom-control {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #111;
  border: 1px solid #1e1e1e;
  border-radius: 6px;
  padding: 3px 8px;
}

.zoom-control button {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: color 0.15s;
}

.zoom-control button:hover { color: #aaa; }

.zoom-val {
  font-size: 11.5px;
  color: #666;
  min-width: 34px;
  text-align: center;
  font-family: 'Space Grotesk', monospace;
}

/* 画布区 */
.canvas-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(circle at center, #0e0e0e 0%, #080808 100%);
}

/* 背景网格 */
.canvas-area::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.single-mode {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
  z-index: 1;
}

.canvas-frame {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.preview-canvas {
  max-width: 100%;
  max-height: calc(100vh - 200px);
  display: block;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.6);
}

/* 上传提示覆层 */
.canvas-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 48px 64px;
  border: 1px dashed #222;
  border-radius: 12px;
  background: rgba(10, 10, 10, 0.85);
  cursor: pointer;
  transition: all 0.2s;
}

.upload-hint:hover {
  border-color: #333;
  background: rgba(15, 15, 15, 0.9);
}

.upload-icon {
  color: #333;
  margin-bottom: 4px;
}

.upload-hint:hover .upload-icon {
  color: #555;
}

.upload-hint-text {
  font-size: 14px;
  color: #555;
  font-weight: 500;
}

.upload-hint-sub {
  font-size: 12px;
  color: #333;
}

/* 对比模式 */
.compare-mode-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  position: relative;
  z-index: 1;
}

.compare-slider-wrap {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.6);
  max-width: 100%;
  max-height: calc(100vh - 200px);
  cursor: col-resize;
  user-select: none;
}

.compare-canvas-bg {
  display: block;
}

.cmp-canvas {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 200px);
}

.compare-canvas-fg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
}

.compare-canvas-fg .cmp-canvas {
  position: absolute;
  top: 0;
  left: 0;
}

/* 分割线 */
.compare-divider {
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: col-resize;
}

.divider-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: rgba(255,255,255,0.3);
}

.divider-handle {
  width: 34px;
  height: 34px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  box-shadow: 0 2px 12px rgba(0,0,0,0.5);
  position: relative;
  z-index: 1;
  transition: transform 0.15s;
}

.compare-divider:hover .divider-handle {
  transform: scale(1.1);
}

.compare-label {
  position: absolute;
  top: 16px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  background: rgba(0,0,0,0.5);
  padding: 4px 10px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  pointer-events: none;
}

.compare-label-before {
  right: calc(100% - v-bind(comparePos + '%') + 12px);
}

.compare-label-after {
  left: calc(v-bind(comparePos + '%') + 12px);
}
</style>
