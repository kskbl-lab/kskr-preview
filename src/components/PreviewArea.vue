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

      <!-- scroll 容器（actual 模式可滚动），hasImage=false 时不可见但 canvas 仍在 DOM -->
      <div class="scroll-wrap" :class="{ scrollable: viewMode === 'actual', hidden: !hasImage }">
        <div class="center-wrap">
          <!-- canvas 外层 wrap，尺寸由样式控制 -->
          <div class="canvas-wrap" :style="canvasWrapStyle" ref="canvasWrapRef">

            <!-- 普通模式：效果 canvas（对比模式时隐藏） -->
            <canvas ref="effectCanvas" class="abs-fill" :style="{ opacity: compareMode ? 0 : 1 }"></canvas>

            <!-- 对比模式：原图铺底 + 效果图裁剪右侧 -->
            <template v-if="compareMode">
              <canvas ref="originalCanvas" class="abs-fill"></canvas>
              <div class="cmp-clip" :style="{ width: (100 - comparePos) + '%' }">
                <canvas ref="effectCanvasCmp" class="abs-fill"></canvas>
              </div>
              <!-- 分割线手柄 -->
              <div
                class="cmp-handle"
                :style="{ left: (100 - comparePos) + '%' }"
                @mousedown.stop="startDrag"
                @touchstart.stop.prevent="startDrag"
              >
                <div class="handle-line"></div>
                <div class="handle-knob">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="15 18 9 12 15 6"/>
                    <polyline points="9 18 3 12 9 6" transform="translate(6,0)"/>
                  </svg>
                </div>
              </div>
              <!-- 标签 -->
              <div class="cmp-label cmp-label-l">原图</div>
              <div class="cmp-label cmp-label-r">效果</div>
            </template>

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
  currentCategory: { type: String,  default: '' },
  currentPlugin:   { type: String,  default: '' },
  imageWidth:      { type: Number,  default: 0 },
  imageHeight:     { type: Number,  default: 0 },
})

const emit = defineEmits(['upload'])

const effectCanvas    = ref(null)
const originalCanvas  = ref(null)
const effectCanvasCmp = ref(null)
const fileInput       = ref(null)
const canvasWrapRef   = ref(null)
const canvasArea      = ref(null)

const viewMode   = ref('fit')
const zoom       = ref(100)
const comparePos = ref(50)
let isDragging   = false

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
    return {
      width:      imgW.value + 'px',
      height:     imgH.value + 'px',
      maxWidth:  '100%',
      maxHeight: '100%',
    }
  }
  const w = Math.round(imgW.value * zoom.value / 100)
  const h = Math.round(imgH.value * zoom.value / 100)
  return { width: w + 'px', height: h + 'px' }
})

defineExpose({ effectCanvas, originalCanvas, effectCanvasCmp })

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

function startDrag(e) {
  e.preventDefault()
  isDragging = true
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('touchmove', onTouchMove, { passive: false })
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchend', stopDrag)
}
function stopDrag() {
  isDragging = false
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('touchmove', onTouchMove)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchend', stopDrag)
}
function onMouseMove(e) { if (isDragging) updatePos(e.clientX) }
function onTouchMove(e) { if (isDragging) { e.preventDefault(); updatePos(e.touches[0].clientX) } }
function updatePos(clientX) {
  const wrap = canvasWrapRef.value
  if (!wrap) return
  const rect = wrap.getBoundingClientRect()
  const pct  = ((clientX - rect.left) / rect.width) * 100
  comparePos.value = Math.min(95, Math.max(5, 100 - pct))
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

/* 上传占位（绝对定位遮住画布区域） */
.upload-placeholder {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; z-index: 10;
  background: var(--canvas-bg, #080808);
}
.upload-box {
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  padding: 52px 72px; border: 1px dashed var(--border, #222); border-radius: 12px;
  background: transparent; transition: all 0.2s; color: var(--text-muted, #333);
}
.upload-placeholder:hover .upload-box { border-color: var(--border-hover, #333); color: var(--text-dim, #555); }
.upload-text { font-size: 14px; color: var(--text-dim, #555); font-weight: 500; }
.upload-sub  { font-size: 12px; color: var(--text-muted, #333); }

/* scroll 容器：始终在 DOM，hasImage=false 时不可见 */
.scroll-wrap {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  padding: 32px; overflow: hidden; z-index: 1;
}
.scroll-wrap.hidden { visibility: hidden; pointer-events: none; }
.scroll-wrap.scrollable { overflow: auto; align-items: flex-start; justify-content: flex-start; }

/* 居中容器 */
.center-wrap {
  display: flex; align-items: center; justify-content: center;
  min-width: 100%; min-height: 100%;
}

/* canvas 外层 wrap */
.canvas-wrap {
  position: relative; flex-shrink: 0;
  border-radius: 4px; overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.05), 0 24px 64px rgba(0,0,0,0.6);
}

/* canvas 填满 wrap */
.abs-fill {
  display: block; position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
}

/* 对比：右侧裁剪 */
.cmp-clip {
  position: absolute; top: 0; right: 0; height: 100%; overflow: hidden;
}
.cmp-clip canvas {
  position: absolute; top: 0; right: 0; width: 100%; height: 100%;
}

/* 分割线手柄 */
.cmp-handle {
  position: absolute; top: 0; bottom: 0;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  z-index: 20; cursor: col-resize; width: 2px;
}
.handle-line {
  position: absolute; top: 0; bottom: 0; left: 0;
  width: 2px; background: rgba(255,255,255,0.7);
}
.handle-knob {
  width: 36px; height: 36px; background: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; color: #000;
  box-shadow: 0 2px 12px rgba(0,0,0,0.5);
  position: relative; z-index: 1; transition: transform 0.15s; flex-shrink: 0;
}
.cmp-handle:hover .handle-knob { transform: scale(1.1); }

/* 对比标签 */
.cmp-label {
  position: absolute; top: 14px;
  font-size: 11.5px; font-weight: 600; color: rgba(255,255,255,0.75);
  background: rgba(0,0,0,0.55); padding: 3px 10px; border-radius: 4px;
  backdrop-filter: blur(6px); pointer-events: none; white-space: nowrap;
}
.cmp-label-l { left: 12px; }
.cmp-label-r { right: 12px; }
</style>
