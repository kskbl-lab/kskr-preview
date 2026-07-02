<template>
  <div class="cropper-page">

    <!-- ── 左侧控制面板 ─────────────────── -->
    <div class="ctrl-panel">

      <div class="panel-header">
        <span class="panel-title">裁剪 PNG 透明像素</span>
      </div>

      <!-- 裁剪模式快选 -->
      <div class="section">
        <div class="section-title">裁剪模式</div>
        <div class="mode-cards">
          <button
            v-for="m in modes" :key="m.id"
            class="mode-card"
            :class="{ active: currentMode === m.id }"
            @click="applyMode(m)"
          >
            <span class="mode-name">{{ m.name }}</span>
            <span class="mode-desc">{{ m.desc }}</span>
          </button>
        </div>
      </div>

      <!-- 阈值 -->
      <div class="section">
        <div class="section-title">Alpha 阈值
          <span class="section-val">{{ alphaThreshold }}</span>
        </div>
        <input type="range" v-model.number="alphaThreshold" min="0" max="255" step="1" class="slider" @input="onParamChange" />
        <div class="hint-box">
          Alpha 阈值越低，保留的半透明边缘越多；阈值越高，越容易去掉透明噪点，但也可能裁掉阴影或发光。
        </div>
      </div>

      <!-- 保护半透明边缘 -->
      <div class="section">
        <label class="toggle-row">
          <div class="toggle-info">
            <span class="toggle-label">保护半透明边缘</span>
            <span class="toggle-sub">开启后阈值自动降为 1</span>
          </div>
          <div class="toggle-switch" :class="{ on: protectEdge }" @click="toggleProtect">
            <div class="toggle-knob"></div>
          </div>
        </label>
      </div>

      <!-- Padding -->
      <div class="section">
        <div class="section-title">扩展边距 (Padding)
          <span class="section-val">{{ padding }}px</span>
        </div>
        <input type="range" v-model.number="padding" min="0" max="200" step="1" class="slider" @input="onParamChange" />
        <div class="hint-box">
          防止阴影、发光、毛发等半透明边缘被意外裁掉。
        </div>
      </div>

      <!-- 添加文件 -->
      <div class="section">
        <input ref="fileInput" type="file" accept="image/png" multiple style="display:none" @change="onFileChange" />
        <button class="btn-add" @click="fileInput.click()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          添加 PNG 文件
        </button>
        <div class="add-hint">支持多选，仅处理 PNG</div>
      </div>

      <!-- 全局操作 -->
      <div v-if="tasks.length" class="section section-actions">
        <button class="btn-primary" :disabled="isProcessing" @click="processAll">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          {{ isProcessing ? '处理中…' : '全部裁剪' }}
        </button>
        <button class="btn-ghost" @click="downloadAll" :disabled="!hasAnyDone">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          下载全部
        </button>
        <button class="btn-ghost btn-danger" @click="clearAll">清空</button>
      </div>

      <!-- 任务列表 -->
      <div v-if="tasks.length" class="task-list">
        <div class="task-list-hd">文件列表 ({{ tasks.length }})</div>
        <div
          v-for="task in tasks" :key="task.id"
          class="task-item"
          :class="['task-' + task.status, { selected: selectedId === task.id }]"
          @click="selectTask(task)"
        >
          <div class="task-thumb">
            <img v-if="task.previewUrl" :src="task.previewUrl" />
            <div v-else class="thumb-placeholder">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
          </div>
          <div class="task-info">
            <div class="task-name">{{ task.file.name }}</div>
            <div class="task-meta">
              <span v-if="task.origW">{{ task.origW }}×{{ task.origH }}</span>
              <span v-if="task.cropW && task.status === 'done'" class="crop-size">→ {{ task.cropW }}×{{ task.cropH }}</span>
              <span class="task-badge" :class="'badge-' + task.status">{{ statusLabel(task.status) }}</span>
            </div>
          </div>
          <div class="task-btns" @click.stop>
            <button v-if="task.status === 'done'" class="tbtn tbtn-dl" @click="downloadTask(task)" title="下载">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </button>
            <button class="tbtn tbtn-rm" @click="removeTask(task)" title="移除">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 空态 -->
      <div v-else class="empty-hint" @click="fileInput.click()" @dragover.prevent @drop.prevent="onDropGlobal">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <p>点击或拖拽 PNG 文件到此处</p>
      </div>

    </div>

    <!-- ── 右侧预览区 ─────────────────────── -->
    <div class="preview-pane" @dragover.prevent @drop.prevent="onDropGlobal">

      <div v-if="!selectedTask" class="preview-empty">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <p>点击左侧文件查看裁剪对比</p>
        <p class="sub">或拖拽 PNG 文件到此处添加</p>
      </div>

      <template v-if="selectedTask">

        <!-- 对比视图 -->
        <div class="compare-wrap">
          <!-- 原图 -->
          <div class="compare-side">
            <div class="compare-label">原图</div>
            <div class="compare-img-wrap checker">
              <canvas ref="origCanvas" class="compare-canvas"></canvas>
            </div>
            <div v-if="selectedTask.origW" class="compare-size">{{ selectedTask.origW }} × {{ selectedTask.origH }}</div>
          </div>

          <!-- 箭头 -->
          <div class="compare-arrow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>

          <!-- 裁剪后 -->
          <div class="compare-side">
            <div class="compare-label">裁剪后</div>
            <div class="compare-img-wrap checker">
              <canvas ref="cropCanvas" class="compare-canvas"></canvas>
              <div v-if="selectedTask.status === 'idle'" class="canvas-overlay">
                <span>点击"全部裁剪"预览</span>
              </div>
              <div v-if="selectedTask.status === 'processing'" class="canvas-overlay">
                <span>处理中…</span>
              </div>
            </div>
            <div v-if="selectedTask.cropW" class="compare-size">
              {{ selectedTask.cropW }} × {{ selectedTask.cropH }}
              <span v-if="selectedTask.savingPct" class="saving">节省 {{ selectedTask.savingPct }}%</span>
            </div>
          </div>
        </div>

        <!-- 操作行 -->
        <div class="action-row">
          <button class="btn-primary" @click="processSingle(selectedTask)" :disabled="selectedTask.status === 'processing'">
            裁剪此文件
          </button>
          <button v-if="selectedTask.status === 'done'" class="btn-dl" @click="downloadTask(selectedTask)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            下载 {{ selectedTask.file.name }}
          </button>
          <div v-if="selectedTask.errorMsg" class="error-msg">{{ selectedTask.errorMsg }}</div>
        </div>

      </template>

    </div>

    <!-- 隐藏工作 canvas -->
    <canvas ref="workCanvas" style="display:none"></canvas>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onBeforeUnmount, watch } from 'vue'

// ── 参数 ────────────────────────────────────
const alphaThreshold = ref(1)
const protectEdge    = ref(false)
const padding        = ref(10)
const currentMode    = ref('precise')

const modes = [
  { id: 'precise',  name: '精准模式', desc: 'α≥1  padding=10  保留所有半透明', threshold: 1,  padding: 10 },
  { id: 'standard', name: '标准模式', desc: 'α≥10  padding=5   适合普通 PNG',   threshold: 10, padding: 5  },
  { id: 'strong',   name: '强力模式', desc: 'α≥50  padding=0   去除透明噪点',   threshold: 50, padding: 0  },
]

function applyMode(m) {
  currentMode.value    = m.id
  alphaThreshold.value = m.threshold
  padding.value        = m.padding
  if (m.id === 'precise') protectEdge.value = true
  reprocessSelected()
}

function toggleProtect() {
  protectEdge.value = !protectEdge.value
  if (protectEdge.value) alphaThreshold.value = 1
  reprocessSelected()
}

function onParamChange() {
  currentMode.value = 'custom'
  reprocessSelected()
}

// ── 任务队列 ────────────────────────────────
const tasks      = ref([])
const selectedId = ref(null)
const fileInput  = ref(null)
const workCanvas = ref(null)
const origCanvas = ref(null)
const cropCanvas = ref(null)

let idCounter = 0

const selectedTask  = computed(() => tasks.value.find(t => t.id === selectedId.value) || null)
const isProcessing  = computed(() => tasks.value.some(t => t.status === 'processing'))
const hasAnyDone    = computed(() => tasks.value.some(t => t.status === 'done'))

// ── 文件加载 ───────────────────────────────
function onFileChange(e) {
  addFiles(Array.from(e.target.files || []))
  e.target.value = ''
}
function onDropGlobal(e) {
  const files = Array.from(e.dataTransfer?.files || []).filter(f => f.type === 'image/png')
  if (files.length) addFiles(files)
}

function addFiles(files) {
  for (const file of files) {
    if (file.type !== 'image/png') continue
    const task = {
      id: ++idCounter,
      file,
      status: 'idle',
      previewUrl: '',
      origImageData: null,
      cropImageData: null,
      origW: 0, origH: 0,
      cropW: 0, cropH: 0,
      savingPct: 0,
      downloadUrl: '',
      errorMsg: '',
    }
    tasks.value.push(task)
    loadPreview(task)
    if (!selectedId.value) selectedId.value = task.id
  }
}

function loadPreview(task) {
  const url = URL.createObjectURL(task.file)
  const img = new Image()
  img.onload = () => {
    task.previewUrl = url
    // load original image data
    const c = document.createElement('canvas')
    c.width = img.naturalWidth; c.height = img.naturalHeight
    c.getContext('2d').drawImage(img, 0, 0)
    task.origImageData = c.getContext('2d').getImageData(0, 0, c.width, c.height)
    task.origW = c.width; task.origH = c.height
    if (selectedId.value === task.id) nextTick(() => drawOrigCanvas(task))
  }
  img.src = url
}

function selectTask(task) {
  selectedId.value = task.id
  nextTick(() => {
    drawOrigCanvas(task)
    drawCropCanvas(task)
  })
}

function removeTask(task) {
  URL.revokeObjectURL(task.previewUrl)
  if (task.downloadUrl) URL.revokeObjectURL(task.downloadUrl)
  tasks.value = tasks.value.filter(t => t.id !== task.id)
  if (selectedId.value === task.id) {
    selectedId.value = tasks.value[0]?.id || null
  }
}

function clearAll() {
  tasks.value.forEach(t => {
    URL.revokeObjectURL(t.previewUrl)
    if (t.downloadUrl) URL.revokeObjectURL(t.downloadUrl)
  })
  tasks.value = []
  selectedId.value = null
}

// ── 裁剪核心 ────────────────────────────────
function cropImageData(imageData, threshold, pad) {
  const { data, width, height } = imageData
  let minX = width, maxX = -1, minY = height, maxY = -1

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * 4 + 3]
      if (a > threshold) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }

  if (maxX < 0) return null // 全透明

  // 应用 padding
  minX = Math.max(0, minX - pad)
  minY = Math.max(0, minY - pad)
  maxX = Math.min(width  - 1, maxX + pad)
  maxY = Math.min(height - 1, maxY + pad)

  const cw = maxX - minX + 1
  const ch = maxY - minY + 1

  const c = document.createElement('canvas')
  c.width = cw; c.height = ch
  const ctx = c.getContext('2d')
  const src = document.createElement('canvas')
  src.width = width; src.height = height
  src.getContext('2d').putImageData(imageData, 0, 0)
  ctx.drawImage(src, minX, minY, cw, ch, 0, 0, cw, ch)
  return { canvas: c, x: minX, y: minY, w: cw, h: ch }
}

async function processSingle(task) {
  if (!task.origImageData) { task.errorMsg = '图片尚未加载'; return }
  task.status   = 'processing'
  task.errorMsg = ''
  await nextTick()

  try {
    const thr = protectEdge.value ? 1 : alphaThreshold.value
    const result = cropImageData(task.origImageData, thr, padding.value)
    if (!result) { task.status = 'error'; task.errorMsg = '图片全透明，无需裁剪'; return }

    task.cropW = result.w; task.cropH = result.h
    task.savingPct = Math.round((1 - (result.w * result.h) / (task.origW * task.origH)) * 100)

    // 生成 PNG blob
    const blob = await canvasToBlob(result.canvas)
    if (task.downloadUrl) URL.revokeObjectURL(task.downloadUrl)
    task.downloadUrl = URL.createObjectURL(blob)

    task.cropCanvas = result.canvas
    task.status = 'done'

    if (selectedId.value === task.id) nextTick(() => drawCropCanvas(task))
  } catch (err) {
    task.status = 'error'; task.errorMsg = '裁剪失败：' + err.message
  }
}

async function processAll() {
  for (const t of tasks.value) {
    await processSingle(t)
  }
}

function reprocessSelected() {
  const t = selectedTask.value
  if (t && t.status === 'done') processSingle(t)
}

// ── 下载 ─────────────────────────────────────
function downloadTask(task) {
  if (!task.downloadUrl) return
  const a = document.createElement('a')
  a.href = task.downloadUrl
  a.download = task.file.name.replace(/\.png$/i, '_cropped.png')
  a.click()
}

async function downloadAll() {
  for (const t of tasks.value) {
    if (t.status === 'done') downloadTask(t)
    await sleep(80)
  }
}

// ── 画布绘制 ──────────────────────────────────
function drawOrigCanvas(task) {
  const c = origCanvas.value
  if (!c || !task.origImageData) return
  c.width  = task.origW
  c.height = task.origH
  c.getContext('2d').putImageData(task.origImageData, 0, 0)
}

function drawCropCanvas(task) {
  const c = cropCanvas.value
  if (!c) return
  if (task.cropCanvas) {
    c.width  = task.cropCanvas.width
    c.height = task.cropCanvas.height
    c.getContext('2d').drawImage(task.cropCanvas, 0, 0)
  } else {
    // clear
    c.width = 1; c.height = 1
    c.getContext('2d').clearRect(0,0,1,1)
  }
}

// watch selectedTask change → redraw
watch(selectedTask, (t) => {
  if (!t) return
  nextTick(() => {
    drawOrigCanvas(t)
    drawCropCanvas(t)
  })
})

// ── 工具 ─────────────────────────────────────
function canvasToBlob(canvas) {
  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
function statusLabel(s) {
  return { idle:'待处理', processing:'处理中', done:'完成', error:'失败' }[s] || s
}

onBeforeUnmount(() => {
  tasks.value.forEach(t => {
    URL.revokeObjectURL(t.previewUrl)
    if (t.downloadUrl) URL.revokeObjectURL(t.downloadUrl)
  })
})
</script>

<style scoped>
.cropper-page {
  flex: 1; display: flex; overflow: hidden; min-height: 0;
  background: var(--app-bg, #080808);
}

/* ── 左侧面板 ─────────────────────── */
.ctrl-panel {
  width: 300px; flex-shrink: 0;
  background: var(--panel-bg, #0a0a0a);
  border-right: 1px solid var(--border, #1e1e1e);
  display: flex; flex-direction: column; overflow-y: auto; overflow-x: hidden;
}
.ctrl-panel::-webkit-scrollbar { width: 4px; }
.ctrl-panel::-webkit-scrollbar-thumb { background: var(--scrollbar, #222); border-radius: 2px; }

.panel-header {
  padding: 16px 16px 14px; border-bottom: 1px solid var(--border, #1e1e1e);
  flex-shrink: 0;
}
.panel-title { font-size: 13px; font-weight: 600; color: var(--text-primary, #ccc); }

/* 各区块 */
.section {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border, #1e1e1e);
}
.section-title {
  font-size: 11px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;
  color: var(--text-muted, #444); margin-bottom: 10px;
  display: flex; justify-content: space-between; align-items: center;
}
.section-val { font-family: monospace; color: var(--text-dim, #888); font-weight: 400; text-transform: none; }

/* 模式卡 */
.mode-cards { display: flex; flex-direction: column; gap: 5px; }
.mode-card {
  display: flex; flex-direction: column; gap: 2px;
  padding: 9px 12px; border-radius: 7px;
  background: var(--ctrl-bg, #111); border: 1px solid var(--border, #1e1e1e);
  cursor: pointer; text-align: left; transition: all 0.15s;
}
.mode-card:hover { border-color: var(--border-hover, #333); }
.mode-card.active { border-color: var(--border-hover, #444); background: var(--ctrl-active, #1a1a1a); }
.mode-name { font-size: 12.5px; font-weight: 600; color: var(--text-primary, #ddd); }
.mode-desc { font-size: 10.5px; color: var(--text-muted, #555); font-family: monospace; }
.mode-card.active .mode-name { color: var(--text-primary, #eee); }
.mode-card.active .mode-desc { color: var(--text-dim, #777); }

/* 滑块 */
.slider {
  width: 100%; margin-bottom: 8px;
  -webkit-appearance: none; height: 4px; border-radius: 2px;
  background: var(--ctrl-active, #2a2a2a); outline: none; cursor: pointer;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; width: 14px; height: 14px;
  border-radius: 50%; background: var(--text-dim, #888);
  border: 2px solid var(--ctrl-active, #1a1a1a);
  transition: background 0.15s;
}
.slider::-webkit-slider-thumb:hover { background: var(--text-primary, #ccc); }

/* 提示框 */
.hint-box {
  font-size: 10.5px; color: var(--text-muted, #555);
  line-height: 1.6; background: var(--ctrl-bg, #111);
  border-radius: 5px; padding: 6px 8px;
}

/* Toggle */
.toggle-row { display: flex; align-items: center; justify-content: space-between; cursor: pointer; }
.toggle-info { display: flex; flex-direction: column; gap: 2px; }
.toggle-label { font-size: 12.5px; color: var(--text-primary, #ccc); }
.toggle-sub   { font-size: 10.5px; color: var(--text-muted, #555); }
.toggle-switch {
  width: 38px; height: 22px; border-radius: 11px;
  background: var(--ctrl-active, #222); border: 1px solid var(--border, #333);
  position: relative; transition: background 0.2s; flex-shrink: 0;
}
.toggle-switch.on { background: #3a6ea8; border-color: #4a7ec0; }
.toggle-knob {
  position: absolute; top: 3px; left: 3px;
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--text-muted, #666); transition: all 0.2s;
}
.toggle-switch.on .toggle-knob { left: 19px; background: #fff; }

/* 添加文件 */
.btn-add {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  width: 100%; padding: 9px;
  background: var(--ctrl-bg, #111); border: 1px dashed var(--border, #2a2a2a);
  border-radius: 6px; color: var(--text-dim, #888); font-size: 12.5px;
  cursor: pointer; transition: all 0.15s; margin-bottom: 6px;
}
.btn-add:hover { border-color: var(--border-hover, #444); color: var(--text-primary, #ccc); }
.add-hint { font-size: 10.5px; color: var(--text-muted, #555); text-align: center; }

/* 操作区 */
.section-actions { display: flex; gap: 7px; flex-wrap: wrap; }

/* 通用按钮 */
.btn-primary {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 8px 16px; border-radius: 6px; font-size: 12.5px; font-weight: 600;
  background: var(--ctrl-active, #222); border: 1px solid var(--border-hover, #3a3a3a);
  color: var(--text-primary, #ddd); cursor: pointer; transition: all 0.15s;
}
.btn-primary:hover:not(:disabled) { background: #2a2a2a; border-color: #555; color: #fff; }
.btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 12px; border-radius: 6px; font-size: 12px;
  background: transparent; border: 1px solid var(--border, #2a2a2a);
  color: var(--text-muted, #555); cursor: pointer; transition: all 0.15s;
}
.btn-ghost:hover:not(:disabled) { border-color: var(--border-hover, #444); color: var(--text-dim, #888); }
.btn-ghost:disabled { opacity: 0.3; cursor: not-allowed; }
.btn-danger:hover { border-color: #e05252 !important; color: #e05252 !important; }

/* 任务列表 */
.task-list { flex: 1; overflow-y: auto; }
.task-list::-webkit-scrollbar { width: 3px; }
.task-list::-webkit-scrollbar-thumb { background: var(--scrollbar, #222); }
.task-list-hd {
  font-size: 10.5px; color: var(--text-muted, #555);
  padding: 8px 16px 4px; text-transform: uppercase; letter-spacing: 0.5px;
}
.task-item {
  display: flex; align-items: center; gap: 9px;
  padding: 8px 12px; cursor: pointer; transition: background 0.12s;
  border-left: 2px solid transparent; position: relative;
}
.task-item:hover  { background: var(--ctrl-hover, #111); }
.task-item.selected { background: var(--ctrl-active, #141414); border-left-color: var(--border-hover, #444); }
.task-done.selected   { border-left-color: #4caf78; }
.task-error.selected  { border-left-color: #e05252; }

.task-thumb {
  width: 36px; height: 36px; border-radius: 5px; flex-shrink: 0;
  background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e);
  overflow: hidden; display: flex; align-items: center; justify-content: center;
  /* checker background for transparency */
  background-image: linear-gradient(45deg,#1a1a1a 25%,transparent 25%),
                    linear-gradient(-45deg,#1a1a1a 25%,transparent 25%),
                    linear-gradient(45deg,transparent 75%,#1a1a1a 75%),
                    linear-gradient(-45deg,transparent 75%,#1a1a1a 75%);
  background-size: 8px 8px;
  background-position: 0 0, 0 4px, 4px -4px, -4px 0;
}
.task-thumb img { width: 100%; height: 100%; object-fit: contain; }
.thumb-placeholder { color: var(--text-muted, #444); }

.task-info { flex: 1; min-width: 0; }
.task-name {
  font-size: 11.5px; color: var(--text-primary, #ccc);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.task-meta { font-size: 10px; color: var(--text-muted, #555); margin-top: 2px; display: flex; align-items: center; gap: 5px; }
.crop-size { color: #4caf78; }
.task-badge {
  font-size: 9.5px; padding: 1px 6px; border-radius: 10px;
}
.badge-idle       { background: rgba(100,100,100,0.2); color: #666; }
.badge-processing { background: rgba(91,142,230,0.2);  color: #5b8ee6; }
.badge-done       { background: rgba(76,175,120,0.2);  color: #4caf78; }
.badge-error      { background: rgba(224,82,82,0.2);   color: #e05252; }

.task-btns { display: flex; gap: 2px; flex-shrink: 0; }
.tbtn {
  width: 24px; height: 24px; border-radius: 4px; border: none;
  background: transparent; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted, #555); transition: all 0.12s;
}
.tbtn:hover      { background: var(--ctrl-hover, #1a1a1a); color: var(--text-dim, #888); }
.tbtn-dl:hover   { color: #4caf78; }
.tbtn-rm:hover   { color: #e05252; }

/* 空态 */
.empty-hint {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 10px; color: var(--text-muted, #444);
  padding: 32px 20px; cursor: pointer; text-align: center;
}
.empty-hint p { font-size: 12px; }

/* ── 右侧预览 ─────────────────────── */
.preview-pane {
  flex: 1; display: flex; flex-direction: column;
  overflow: hidden; background: var(--canvas-bg, #080808); position: relative;
}
.preview-pane::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--grid-line,rgba(255,255,255,0.015)) 1px, transparent 1px),
    linear-gradient(90deg,var(--grid-line,rgba(255,255,255,0.015)) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none; z-index: 0;
}

.preview-empty {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 12px; color: var(--text-muted, #333); z-index: 1;
}
.preview-empty p   { font-size: 13px; }
.preview-empty .sub { font-size: 11.5px; color: var(--text-muted, #444) !important; margin-top: -4px; }

/* 对比视图 */
.compare-wrap {
  flex: 1; display: flex; align-items: center; justify-content: center;
  gap: 24px; padding: 32px; z-index: 1; min-height: 0; overflow: hidden;
}

.compare-side {
  flex: 1; max-width: 46%; display: flex; flex-direction: column; align-items: center; gap: 10px;
}
.compare-label {
  font-size: 11px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;
  color: var(--text-muted, #555);
}
.compare-img-wrap {
  width: 100%; flex: 1; max-height: 460px;
  border-radius: 6px; overflow: hidden; position: relative;
  border: 1px solid var(--border, #1e1e1e);
  display: flex; align-items: center; justify-content: center;
}
/* checkered for transparency */
.checker {
  background-image:
    linear-gradient(45deg,#141414 25%,transparent 25%),
    linear-gradient(-45deg,#141414 25%,transparent 25%),
    linear-gradient(45deg,transparent 75%,#141414 75%),
    linear-gradient(-45deg,transparent 75%,#141414 75%);
  background-size: 16px 16px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0;
}
.compare-canvas {
  max-width: 100%; max-height: 100%;
  display: block; image-rendering: pixelated;
}
.canvas-overlay {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(8,8,8,0.6);
  font-size: 12px; color: var(--text-muted, #555);
}
.compare-size {
  font-size: 11px; color: var(--text-muted, #555);
  display: flex; gap: 6px; align-items: center;
}
.saving { color: #4caf78; font-weight: 600; }
.compare-arrow { color: var(--text-muted, #444); flex-shrink: 0; }

/* 操作行 */
.action-row {
  z-index: 1; flex-shrink: 0;
  border-top: 1px solid var(--border, #1e1e1e);
  background: var(--panel-bg, #0a0a0a);
  padding: 14px 20px;
  display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
}
.btn-dl {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 16px; background: rgba(76,175,120,0.1);
  border: 1px solid rgba(76,175,120,0.3); border-radius: 6px;
  color: #4caf78; font-size: 12px; cursor: pointer; transition: all 0.15s;
}
.btn-dl:hover { background: rgba(76,175,120,0.2); }
.error-msg {
  font-size: 12px; color: #e05252;
  background: rgba(224,82,82,0.08); border: 1px solid rgba(224,82,82,0.2);
  border-radius: 5px; padding: 6px 10px;
}
</style>
