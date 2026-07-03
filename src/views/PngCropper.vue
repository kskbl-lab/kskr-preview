<template>
  <div class="cropper-page">

    <!-- ── 左侧：设置面板 ──────────────────── -->
    <div class="ctrl-panel">
      <div class="panel-header">
        <span class="panel-title">PNG 透明边缘裁剪器</span>
      </div>

      <!-- 模式切换 -->
      <div class="mode-switch-row">
        <button class="mode-tab" :class="{ active: pageMode === 'safe' }"     @click="pageMode = 'safe'">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          安全模式
        </button>
        <button
          class="mode-tab"
          :class="{ active: pageMode === 'overwrite' }"
          @click="pageMode = 'overwrite'"
          :disabled="!hasFSAPI"
          :title="!hasFSAPI ? '当前浏览器不支持直接覆盖文件' : ''"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          覆盖模式
        </button>
        <div v-if="!hasFSAPI" class="no-fsapi-hint">覆盖模式需 Chrome/Edge 86+</div>
      </div>

      <!-- ── 裁剪参数 ──────────────────── -->
      <div class="section">
        <div class="section-title">裁剪参数</div>
        <div class="mode-cards">
          <button v-for="m in presets" :key="m.id" class="mode-card" :class="{ active: activePreset === m.id }" @click="applyPreset(m)">
            <span class="mode-name">{{ m.name }}</span>
            <span class="mode-desc">{{ m.desc }}</span>
          </button>
        </div>

        <div class="param-row">
          <label class="param-label">Alpha 阈值 <span class="param-val">{{ alphaThreshold }}</span></label>
          <input type="range" v-model.number="alphaThreshold" min="0" max="255" class="slider" />
        </div>
        <div class="param-row">
          <label class="param-label">Padding <span class="param-val">{{ padding }}px</span></label>
          <input type="range" v-model.number="padding" min="0" max="200" class="slider" />
        </div>

        <div class="hint-box">
          <b>Alpha 阈值：</b>越低保留的半透明边缘越多；越高越容易去掉透明噪点，但可能裁掉阴影或发光。<br/>
          <b>Padding：</b>在裁剪边界外额外保留的像素数，防止阴影、发光、毛发、抗锯齿边缘被意外裁掉。
        </div>
      </div>

      <!-- ── 安全模式：导入 ──────────────── -->
      <template v-if="pageMode === 'safe'">
        <div class="section">
          <div class="section-title">导入文件</div>
          <div class="import-btns">
            <input ref="filePicker"   type="file" accept="image/png" multiple style="display:none" @change="onFilePick" />
            <input ref="folderPicker" type="file" accept="image/png" multiple webkitdirectory style="display:none" @change="onFolderPick" />
            <button class="btn-import" @click="filePicker.click()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
              选择 PNG 文件
            </button>
            <button class="btn-import" @click="folderPicker.click()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              选择文件夹
            </button>
          </div>
          <div class="add-hint">支持多选 PNG；文件夹导入保留相对路径</div>
        </div>
      </template>

      <!-- ── 覆盖模式：导入 ──────────────── -->
      <template v-if="pageMode === 'overwrite' && hasFSAPI">
        <div class="section">
          <div class="section-title">覆盖选项</div>
          <label class="toggle-row">
            <div class="toggle-info">
              <span class="toggle-label">覆盖前自动备份原图</span>
              <span class="toggle-sub">备份至 _backup_original_pngs 子文件夹</span>
            </div>
            <div class="toggle-switch" :class="{ on: autoBackup }" @click="autoBackup = !autoBackup">
              <div class="toggle-knob"></div>
            </div>
          </label>
        </div>
        <div class="section">
          <div class="section-title">导入方式</div>
          <div class="import-btns">
            <button class="btn-import" @click="pickFilesOverwrite" :disabled="isProcessing">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
              批量选择 PNG
            </button>
            <button class="btn-import" @click="pickFolderOverwrite" :disabled="isProcessing">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              选择文件夹
            </button>
          </div>
          <div class="add-hint">批量选 PNG 或整个文件夹；处理后直接写回原文件</div>
          <div v-if="folderPickError" class="folder-pick-error">{{ folderPickError }}</div>
        </div>
      </template>

    </div>

    <!-- ── 中间预览区 ───────────────────────── -->
    <div class="preview-pane" @dragover.prevent @drop.prevent="onDropGlobal">
      <div v-if="!selectedTask" class="preview-empty">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <p>点击左侧文件查看裁剪对比</p>
        <p class="sub">或拖拽 PNG 文件 / 文件夹到此处</p>
      </div>
      <template v-if="selectedTask">
        <div class="compare-wrap">
          <div class="compare-side">
            <div class="compare-label">原图</div>
            <div class="compare-img-box checker">
              <canvas ref="origCanvas" class="cmp-canvas"></canvas>
            </div>
            <div class="compare-size" v-if="selectedTask.origW">{{ selectedTask.origW }} × {{ selectedTask.origH }}</div>
          </div>
          <div class="cmp-arrow">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
          <div class="compare-side">
            <div class="compare-label">裁剪后</div>
            <div class="compare-img-box checker">
              <canvas ref="cropCanvas" class="cmp-canvas"></canvas>
              <div v-if="!selectedTask.cropCanvas" class="cmp-overlay">
                <span>{{ selectedTask.status === 'processing' ? '处理中…' : '尚未处理' }}</span>
              </div>
            </div>
            <div class="compare-size" v-if="selectedTask.cropW">
              {{ selectedTask.cropW }} × {{ selectedTask.cropH }}
              <span v-if="selectedTask.savingPct > 0" class="saving">节省 {{ selectedTask.savingPct }}%</span>
              <span v-if="selectedTask.savingPct === 0" class="no-change">无需裁剪</span>
            </div>
          </div>
        </div>
        <div class="action-row">
          <button class="btn-primary" :disabled="selectedTask.status === 'processing'" @click="processSingle(selectedTask)">裁剪此文件</button>
          <button v-if="pageMode === 'safe' && selectedTask.status === 'done'" class="btn-dl" @click="downloadSingle(selectedTask)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            下载 {{ selectedTask.file.name }}
          </button>
          <div v-if="selectedTask.errorMsg" class="error-msg">{{ selectedTask.errorMsg }}</div>
        </div>
      </template>
    </div>

    <!-- ── 右侧文件列表 ───────────────────────── -->
    <div class="file-panel" @dragover.prevent @drop.prevent="onDropGlobal">
      <div class="file-panel-hd">
        <span class="file-panel-title">文件列表<span class="file-count" v-if="tasks.length"> ({{ tasks.length }})</span></span>
        <span class="task-stats" v-if="tasks.length">
          <span class="stat-done">{{ doneCount }} 完成</span>
          <span v-if="skipCount"> · {{ skipCount }} 跳过</span>
          <span v-if="errorCount" class="stat-err"> · {{ errorCount }} 失败</span>
        </span>
      </div>
      <div v-if="tasks.length" class="file-panel-actions">
        <template v-if="pageMode === 'safe'">
          <button class="btn-primary btn-sm" :disabled="isProcessing" @click="processAllSafe">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            {{ isProcessing ? '处理中…' : '全部裁剪' }}
          </button>
          <button class="btn-ghost btn-sm" :disabled="!hasAnyDone || isProcessing" @click="downloadZip">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            下载 ZIP
          </button>
        </template>
        <template v-if="pageMode === 'overwrite' && hasFSAPI">
          <button class="btn-primary btn-overwrite btn-sm" @click="processAllOverwrite" :disabled="isProcessing">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            {{ isProcessing ? '覆盖中…' : '全部裁剪并覆盖' }}
          </button>
        </template>
        <button class="btn-ghost btn-danger btn-sm" @click="clearAll">清空</button>
      </div>
      <div v-if="tasks.length" class="task-list">
        <div
          v-for="task in tasks" :key="task.id"
          class="task-item"
          :class="['st-' + task.status, { selected: selectedId === task.id }]"
          @click="selectTask(task)"
        >
          <div class="task-thumb checker">
            <img v-if="task.previewUrl" :src="task.previewUrl" />
            <div v-else class="thumb-ph">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
          </div>
          <div class="task-info">
            <div class="task-name" :title="task.relPath || task.file.name">{{ task.file.name }}</div>
            <div class="task-path" v-if="task.relPath && task.relPath !== task.file.name">{{ task.relPath }}</div>
            <div class="task-meta">
              <span v-if="task.origW">{{ task.origW }}×{{ task.origH }}</span>
              <span v-if="task.cropW && (task.status === 'done' || task.status === 'overwritten')" class="crop-arrow">→ {{ task.cropW }}×{{ task.cropH }}</span>
              <span class="task-badge" :class="'badge-' + task.status">{{ statusLabel(task.status) }}</span>
            </div>
            <div v-if="task.errorMsg" class="task-err">{{ task.errorMsg }}</div>
          </div>
          <div class="task-btns" @click.stop>
            <button v-if="pageMode === 'safe' && task.status === 'done'" class="tbtn tbtn-dl" @click="downloadSingle(task)" title="单独下载">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </button>
            <button class="tbtn tbtn-rm" @click="removeTask(task)" title="移除">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div v-else class="file-panel-empty">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <p v-if="pageMode === 'safe'">拖拽 PNG 文件 / 文件夹<br>或点击左侧按钮添加</p>
        <p v-else>拖拽 PNG 文件到此处<br>或点击左侧按钮添加</p>
        <p class="sub" v-if="pageMode === 'overwrite'">覆盖模式需要浏览器弹窗授权写入权限</p>
      </div>
    </div>

    <!-- 确认弹窗 -->
    <div v-if="confirmDialog.show" class="dialog-mask">
      <div class="dialog">
        <div class="dialog-title">⚠️ 确认覆盖操作</div>
        <div class="dialog-body">{{ confirmDialog.message }}</div>
        <div class="dialog-actions">
          <button class="btn-ghost" @click="confirmDialog.resolve(false)">取消</button>
          <button class="btn-danger-solid" @click="confirmDialog.resolve(true)">确认覆盖</button>
        </div>
      </div>
    </div>

    <canvas ref="workCanvas" style="display:none"></canvas>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch, onBeforeUnmount } from 'vue'
import JSZip from 'jszip'

// ── 能力检测 ──────────────────────────────────
const hasFSAPI = typeof window !== 'undefined' && 'showDirectoryPicker' in window

// ── 页面模式 ──────────────────────────────────
const pageMode = ref('safe')

// ── 参数 ────────────────────────────────────
const alphaThreshold = ref(1)
const padding        = ref(10)
const activePreset   = ref('precise')
const autoBackup     = ref(true)
const folderPickError = ref('')

const presets = [
  { id: 'precise',  name: '精准模式',  desc: 'α≥1 · padding=10 · 保留所有半透明边缘',  threshold: 1,  padding: 10 },
  { id: 'standard', name: '标准模式',  desc: 'α≥10 · padding=5 · 适合普通 PNG',         threshold: 10, padding: 5  },
  { id: 'strong',   name: '强力模式',  desc: 'α≥50 · padding=0 · 去除透明噪点',          threshold: 50, padding: 0  },
]

function applyPreset(p) {
  activePreset.value   = p.id
  alphaThreshold.value = p.threshold
  padding.value        = p.padding
}

// ── 任务队列 ──────────────────────────────────
const tasks      = ref([])
const selectedId = ref(null)
let   idCtr      = 0

const selectedTask = computed(() => tasks.value.find(t => t.id === selectedId.value) || null)
const isProcessing = computed(() => tasks.value.some(t => t.status === 'processing'))
const hasAnyDone   = computed(() => tasks.value.some(t => t.status === 'done' || t.status === 'overwritten'))
const doneCount    = computed(() => tasks.value.filter(t => t.status === 'done' || t.status === 'overwritten' || t.status === 'skipped').length)
const skipCount    = computed(() => tasks.value.filter(t => t.status === 'skipped' || t.status === 'transparent').length)
const errorCount   = computed(() => tasks.value.filter(t => t.status === 'error').length)

// ── 文件来源：input 选择 ─────────────────────
const filePicker   = ref(null)
const folderPicker = ref(null)

function onFilePick(e) {
  addFiles(Array.from(e.target.files || []), false)
  e.target.value = ''
}

function onFolderPick(e) {
  addFiles(Array.from(e.target.files || []), true)
  e.target.value = ''
}

function onDropGlobal(e) {
  if (pageMode.value === 'safe') {
    const files = Array.from(e.dataTransfer?.files || []).filter(f => f.type === 'image/png' || /\.png$/i.test(f.name))
    if (files.length) addFiles(files, false)
  } else if (pageMode.value === 'overwrite') {
    onDropOverwrite(e)
  }
}

async function onDropOverwrite(e) {
  const items = Array.from(e.dataTransfer?.items || [])
  const pngItems = items.filter(item => item.kind === 'file')
  if (!pngItems.length) return

  // 先同步收集所有普通 File 对象，用于过滤 PNG
  const plainFiles = pngItems.map(item => item.getAsFile()).filter(f => f && /\.png$/i.test(f.name))

  if (!plainFiles.length) return

  // 尝试用 File System Access API 获取可写句柄（拖拽来的文件不需要额外申请权限，直接 createWritable 即可）
  const supportsHandle = typeof pngItems[0].getAsFileSystemHandle === 'function'

  if (!supportsHandle) {
    folderPickError.value = '拖入的文件无法在覆盖模式下直接写回。\n请改用【批量选择 PNG】按钮选文件，或切换到安全模式使用拖入。'
    return
  }

  // 并行获取所有 FileSystemFileHandle
  const handleResults = await Promise.allSettled(
    pngItems.map(item => item.getAsFileSystemHandle())
  )

  const writable = []
  for (let i = 0; i < handleResults.length; i++) {
    const result = handleResults[i]
    if (result.status !== 'fulfilled') continue
    const fh = result.value
    if (!fh || fh.kind !== 'file') continue
    const file = plainFiles[i]
    if (!file || !/\.png$/i.test(file.name)) continue
    writable.push({ fh, file })
  }

  if (!writable.length) {
    folderPickError.value = '拖入的文件无法在覆盖模式下直接写回。\n请改用【批量选择 PNG】按钮选文件，或切换到安全模式使用拖入。'
    return
  }

  folderPickError.value = ''
  for (const { fh, file } of writable) {
    const task = makeTask(file, file.name, fh, null)
    tasks.value.push(task)
    loadPreview(task)
    if (!selectedId.value) selectedId.value = task.id
  }

  await processAllOverwrite()
}

function addFiles(files, fromFolder) {
  for (const file of files) {
    if (file.type !== 'image/png' && !/\.png$/i.test(file.name)) continue
    // 相对路径：webkitdirectory 下 file.webkitRelativePath 有值
    const relPath = (fromFolder && file.webkitRelativePath) ? file.webkitRelativePath : file.name
    const task = makeTask(file, relPath)
    tasks.value.push(task)
    loadPreview(task)
    if (!selectedId.value) selectedId.value = task.id
  }
}

function makeTask(file, relPath, fileHandle = null, dirHandle = null) {
  return {
    id: ++idCtr,
    file,
    relPath,
    fileHandle,   // File System Access API handle
    dirHandle,    // 根目录 handle（备份用）
    status: 'idle',   // idle|processing|done|overwritten|skipped|transparent|error
    previewUrl: '',
    origImageData: null,
    cropCanvas: null,
    origW: 0, origH: 0,
    cropW: 0, cropH: 0,
    savingPct: 0,
    downloadBlob: null,
    errorMsg: '',
  }
}

function loadPreview(task) {
  const url = URL.createObjectURL(task.file)
  task.previewUrl = url
  const img = new Image()
  img.onload = () => {
    const c = document.createElement('canvas')
    c.width = img.naturalWidth; c.height = img.naturalHeight
    c.getContext('2d').drawImage(img, 0, 0)
    task.origImageData = c.getContext('2d').getImageData(0, 0, c.width, c.height)
    task.origW = c.width; task.origH = c.height
    if (selectedId.value === task.id) nextTick(() => drawOrigCanvas(task))
    URL.revokeObjectURL(url)
    task.previewUrl = c.toDataURL('image/png')
  }
  img.src = url
}

function selectTask(task) {
  selectedId.value = task.id
  nextTick(() => { drawOrigCanvas(task); drawCropCanvas(task) })
}

function removeTask(task) {
  tasks.value = tasks.value.filter(t => t.id !== task.id)
  if (selectedId.value === task.id) selectedId.value = tasks.value[0]?.id || null
}

function clearAll() {
  tasks.value = []
  selectedId.value = null
}

// ── 裁剪核心 ──────────────────────────────────
function cropImageData(imageData, thr, pad) {
  const { data, width, height } = imageData
  let minX = width, maxX = -1, minY = height, maxY = -1

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > thr) {
        if (x < minX) minX = x; if (x > maxX) maxX = x
        if (y < minY) minY = y; if (y > maxY) maxY = y
      }
    }
  }
  if (maxX < 0) return null // 全透明

  minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad)
  maxX = Math.min(width  - 1, maxX + pad)
  maxY = Math.min(height - 1, maxY + pad)

  const cw = maxX - minX + 1, ch = maxY - minY + 1
  const out = document.createElement('canvas')
  out.width = cw; out.height = ch
  const src = document.createElement('canvas')
  src.width = width; src.height = height
  src.getContext('2d').putImageData(imageData, 0, 0)
  out.getContext('2d').drawImage(src, minX, minY, cw, ch, 0, 0, cw, ch)
  return { canvas: out, w: cw, h: ch }
}

async function processSingle(task) {
  if (!task.origImageData) { task.errorMsg = '图片尚未加载，请稍候'; return }
  task.status = 'processing'; task.errorMsg = ''; await nextTick()
  try {
    const result = cropImageData(task.origImageData, alphaThreshold.value, padding.value)
    if (!result) {
      task.status = 'transparent'; task.errorMsg = '图片全透明，已跳过'; return
    }
    if (result.w === task.origW && result.h === task.origH) {
      task.status = 'skipped'; task.cropW = result.w; task.cropH = result.h; task.savingPct = 0
      task.cropCanvas = result.canvas
      if (selectedId.value === task.id) nextTick(() => drawCropCanvas(task))
      return
    }
    task.cropCanvas = result.canvas
    task.cropW = result.w; task.cropH = result.h
    task.savingPct = Math.round((1 - (result.w * result.h) / (task.origW * task.origH)) * 100)
    task.downloadBlob = await canvasToBlob(result.canvas)
    task.status = 'done'
    if (selectedId.value === task.id) nextTick(() => drawCropCanvas(task))
  } catch (err) {
    task.status = 'error'; task.errorMsg = '裁剪失败：' + err.message
  }
}

async function processAllSafe() {
  for (const t of tasks.value) {
    if (t.status === 'idle' || t.status === 'error') await processSingle(t)
  }
}

// ── 安全模式：下载 ───────────────────────────
function downloadSingle(task) {
  if (!task.downloadBlob) return
  const a = document.createElement('a')
  a.href = URL.createObjectURL(task.downloadBlob)
  a.download = task.file.name   // 原文件名，无后缀
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 3000)
}

async function downloadZip() {
  const zip = new JSZip()
  let count = 0
  for (const t of tasks.value) {
    if (t.status !== 'done' || !t.downloadBlob) continue
    // ZIP 内路径 = 原始相对路径（含文件夹结构）
    zip.file(t.relPath, t.downloadBlob)
    count++
  }
  if (!count) return
  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'cropped_pngs.zip'
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 5000)
}

// ── 覆盖模式：File System Access API ─────────
// 覆盖模式：批量选择 PNG 文件（用 showOpenFilePicker readwrite）
async function pickFilesOverwrite() {
  if (!hasFSAPI) return
  folderPickError.value = ''
  let fileHandles
  try {
    fileHandles = await window.showOpenFilePicker({
      multiple: true,
      types: [{ description: 'PNG Images', accept: { 'image/png': ['.png'] } }],
    })
  } catch (err) {
    if (err && err.name !== 'AbortError') {
      folderPickError.value = '无法访问所选文件。浏览器禁止写入系统保护目录（如 /Applications 等）。\n请将文件移到桌面或"文稿"后再试。'
    }
    return
  }
  if (!fileHandles.length) return

  const ok = await showConfirm(
    `已选择 ${fileHandles.length} 个 PNG 文件。\n\n` +
    (autoBackup.value ? '备份将保存在各文件同目录下的 _backup_original_pngs 文件夹中，' : '未开启自动备份，') +
    '处理后原文件将被裁剪版本直接覆盖，文件名保持不变。\n\n是否继续？'
  )
  if (!ok) return

  for (const fh of fileHandles) {
    const file = await fh.getFile()
    if (file.type !== 'image/png' && !/\.png$/i.test(file.name)) continue
    const task = makeTask(file, file.name, fh, null)
    tasks.value.push(task)
    loadPreview(task)
    if (!selectedId.value) selectedId.value = task.id
  }
}

// 覆盖模式：对已加载的任务（文件或文件夹来源）执行覆盖
async function processAllOverwrite() {
  const pending = tasks.value.filter(t => t.status === 'idle' || t.status === 'error')
  if (!pending.length) return

  const ok = await showConfirm(
    `将对 ${pending.length} 个 PNG 文件执行裁剪并直接覆盖原文件。\n\n是否继续？`
  )
  if (!ok) return

  for (const task of pending) {
    task.status = 'processing'; await nextTick()
    try {
      if (!task.origImageData) await waitForImageData(task, 5000)
      const result = cropImageData(task.origImageData, alphaThreshold.value, padding.value)
      if (!result) { task.status = 'transparent'; task.errorMsg = '全透明，已跳过'; continue }
      if (result.w === task.origW && result.h === task.origH) {
        task.status = 'skipped'; task.cropW = result.w; task.cropH = result.h
        task.cropCanvas = result.canvas
        if (selectedId.value === task.id) nextTick(() => drawCropCanvas(task))
        continue
      }
      const blob = await canvasToBlob(result.canvas)

      // 备份（仅文件夹来源有 dirHandle，文件选择模式暂不备份到子目录）
      if (autoBackup.value && task.dirHandle) {
        try { await backupFile(task, task.dirHandle) } catch {}
      }

      // 写回原文件
      if (!task.fileHandle) { task.status = 'error'; task.errorMsg = '无文件句柄，无法写入'; continue }
      const writable = await task.fileHandle.createWritable()
      await writable.write(blob)
      await writable.close()

      task.cropCanvas = result.canvas
      task.cropW = result.w; task.cropH = result.h
      task.savingPct = Math.round((1 - (result.w * result.h) / (task.origW * task.origH)) * 100)
      task.downloadBlob = blob
      task.status = 'overwritten'
      if (selectedId.value === task.id) nextTick(() => drawCropCanvas(task))
    } catch (err) {
      task.status = 'error'; task.errorMsg = err.message
    }
  }
}

async function pickFolderOverwrite() {
  if (!hasFSAPI) return
  folderPickError.value = ''

  let dirHandle
  try {
    dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' })
  } catch (err) {
    if (err && err.name !== 'AbortError') {
      folderPickError.value = '无法访问该文件夹。\n\n浏览器禁止写入系统保护目录（如 /Applications、/System 等）。\n\n解决方法：\n① 将文件夹移到桌面或"文稿"后再操作\n② 或切换到「安全模式」→ 选择文件夹 → 下载 ZIP → 手动解压覆盖'
    }
    return
  }

  // 扫描所有 PNG
  const found = []
  await scanDir(dirHandle, dirHandle, '', found)
  if (!found.length) { alert('该文件夹中没有找到 PNG 文件。'); return }

  // 加载任务（追加到现有列表）
  for (const { file, relPath, fileHandle: fh, rootHandle: rh } of found) {
    const task = makeTask(file, relPath, fh, rh)
    tasks.value.push(task)
    loadPreview(task)
  }
  if (!selectedId.value && tasks.value.length) selectedId.value = tasks.value[0].id

  // 调用统一覆盖处理（含确认弹窗）
  await processAllOverwrite()
}

async function scanDir(rootHandle, dirHandle, prefix, results) {
  for await (const [name, handle] of dirHandle.entries()) {
    if (handle.kind === 'directory') {
      if (name === '_backup_original_pngs') continue // 跳过备份目录
      await scanDir(rootHandle, handle, prefix ? prefix + '/' + name : name, results)
    } else if (handle.kind === 'file' && /\.png$/i.test(name)) {
      const file = await handle.getFile()
      const relPath = prefix ? prefix + '/' + name : name
      results.push({ file, relPath, fileHandle: handle, rootHandle })
    }
  }
}

async function backupFile(task, rootHandle) {
  // 在根目录下创建 _backup_original_pngs，保留相对路径
  const parts = task.relPath.split('/')
  let cur = rootHandle
  const backupRoot = await cur.getDirectoryHandle('_backup_original_pngs', { create: true })
  cur = backupRoot
  for (let i = 0; i < parts.length - 1; i++) {
    cur = await cur.getDirectoryHandle(parts[i], { create: true })
  }
  const fileName = parts[parts.length - 1]
  const fh = await cur.getFileHandle(fileName, { create: true })
  const origFile = await task.fileHandle.getFile()
  const writable = await fh.createWritable()
  await writable.write(origFile)
  await writable.close()
}

function waitForImageData(task, timeout) {
  return new Promise((resolve, reject) => {
    if (task.origImageData) { resolve(); return }
    const start = Date.now()
    const iv = setInterval(() => {
      if (task.origImageData) { clearInterval(iv); resolve() }
      else if (Date.now() - start > timeout) { clearInterval(iv); reject(new Error('图片加载超时')) }
    }, 50)
  })
}

// ── 确认弹窗 ──────────────────────────────────
const confirmDialog = ref({ show: false, message: '', resolve: null })
function showConfirm(message) {
  return new Promise(resolve => {
    confirmDialog.value = {
      show: true, message,
      resolve: (val) => { confirmDialog.value.show = false; resolve(val) }
    }
  })
}

// ── 画布绘制 ──────────────────────────────────
const origCanvas = ref(null)
const cropCanvas = ref(null)
const workCanvas = ref(null)

function drawOrigCanvas(task) {
  const c = origCanvas.value; if (!c || !task.origImageData) return
  c.width = task.origW; c.height = task.origH
  c.getContext('2d').putImageData(task.origImageData, 0, 0)
}
function drawCropCanvas(task) {
  const c = cropCanvas.value; if (!c) return
  if (task.cropCanvas) {
    c.width = task.cropCanvas.width; c.height = task.cropCanvas.height
    c.getContext('2d').drawImage(task.cropCanvas, 0, 0)
  } else { c.width = 1; c.height = 1; c.getContext('2d').clearRect(0,0,1,1) }
}

watch(selectedTask, (t) => {
  if (!t) return
  nextTick(() => { drawOrigCanvas(t); drawCropCanvas(t) })
})

// ── 工具 ─────────────────────────────────────
function canvasToBlob(canvas) {
  return new Promise(r => canvas.toBlob(r, 'image/png'))
}
function statusLabel(s) {
  return { idle:'待处理', processing:'处理中', done:'已裁剪', overwritten:'已覆盖', skipped:'无需裁剪', transparent:'全透明跳过', error:'失败' }[s] || s
}

onBeforeUnmount(() => { tasks.value = [] })
</script>

<style scoped>
.cropper-page {
  flex: 1; display: flex; overflow: hidden; min-height: 0;
  background: var(--app-bg, #080808);
}

/* ── 左侧设置面板 ─────────────────── */
.ctrl-panel {
  width: 400px; flex-shrink: 0;
  background: var(--panel-bg, #0a0a0a);
  border-right: 1px solid var(--border, #1e1e1e);
  display: flex; flex-direction: column; overflow-y: auto;
}
.ctrl-panel::-webkit-scrollbar { width: 4px; }
.ctrl-panel::-webkit-scrollbar-thumb { background: var(--scrollbar, #222); border-radius: 2px; }

.panel-header {
  padding: 16px 16px 14px; border-bottom: 1px solid var(--border, #1e1e1e); flex-shrink: 0;
}
.panel-title { font-size: 13px; font-weight: 600; color: var(--text-primary, #ccc); }

/* 模式切换 */
.mode-switch-row {
  display: flex; gap: 6px; padding: 12px 16px;
  border-bottom: 1px solid var(--border, #1e1e1e);
  flex-wrap: wrap; align-items: center;
}
.mode-tab {
  display: flex; align-items: center; gap: 5px;
  padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500;
  background: var(--ctrl-bg, #111); border: 1px solid var(--border, #1e1e1e);
  color: var(--text-muted, #555); cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.mode-tab:hover:not(:disabled)  { border-color: var(--border-hover, #333); color: var(--text-dim, #888); }
.mode-tab.active { border-color: var(--border-hover, #444); color: var(--text-primary, #ddd); background: var(--ctrl-active, #1a1a1a); }
.mode-tab:disabled { opacity: 0.35; cursor: not-allowed; }
.no-fsapi-hint { font-size: 10px; color: var(--text-muted, #555); width: 100%; }

/* 区块 */
.section {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border, #1e1e1e);
}
.section-title {
  font-size: 10.5px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;
  color: var(--text-muted, #444); margin-bottom: 9px;
}

/* 模式卡 */
.mode-cards { display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px; }
.mode-card {
  display: flex; flex-direction: column; gap: 2px;
  padding: 9px 12px; border-radius: 7px; text-align: left;
  background: var(--ctrl-bg, #111); border: 1px solid var(--border, #1e1e1e);
  cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.mode-card:hover { border-color: var(--border-hover, #333); }
.mode-card.active { border-color: var(--border-hover, #444); background: var(--ctrl-active, #1a1a1a); }
.mode-name { font-size: 12.5px; font-weight: 600; color: var(--text-primary, #ddd); }
.mode-desc { font-size: 10px; color: var(--text-muted, #555); font-family: monospace; }
.mode-card.active .mode-desc { color: var(--text-dim, #777); }

/* 参数行 */
.param-row { margin-bottom: 8px; }
.param-label { font-size: 11px; color: var(--text-dim, #888); display: flex; justify-content: space-between; margin-bottom: 4px; }
.param-val { font-family: monospace; color: var(--text-primary, #ccc); }

.slider {
  width: 100%; -webkit-appearance: none; height: 3px; border-radius: 2px;
  background: var(--ctrl-active, #2a2a2a); outline: none; cursor: pointer;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; width: 13px; height: 13px; border-radius: 50%;
  background: var(--text-dim, #888); border: 2px solid var(--panel-bg, #0a0a0a); transition: background 0.15s;
}
.slider::-webkit-slider-thumb:hover { background: var(--text-primary, #ccc); }

.hint-box {
  font-size: 10.5px; color: var(--text-muted, #555); line-height: 1.6;
  background: var(--ctrl-bg, #111); border-radius: 5px; padding: 6px 8px; margin-top: 8px;
}

/* 导入按钮 */
.import-btns { display: flex; gap: 6px; margin-bottom: 6px; }
.btn-import {
  flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px;
  padding: 7px 4px; font-size: 11.5px; border-radius: 6px;
  background: var(--ctrl-bg, #111); border: 1px solid var(--border, #1e1e1e);
  color: var(--text-dim, #888); cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.btn-import:hover:not(:disabled) { border-color: var(--border-hover, #333); color: var(--text-primary, #ccc); }
.btn-import:disabled { opacity: 0.4; cursor: not-allowed; }
.add-hint { font-size: 10.5px; color: var(--text-muted, #555); text-align: center; }

/* toggle */
.toggle-row { display: flex; align-items: center; justify-content: space-between; cursor: pointer; }
.toggle-info { display: flex; flex-direction: column; gap: 2px; }
.toggle-label { font-size: 12px; color: var(--text-primary, #ccc); }
.toggle-sub   { font-size: 10px; color: var(--text-muted, #555); }
.toggle-switch {
  width: 36px; height: 20px; border-radius: 10px; flex-shrink: 0;
  background: var(--ctrl-active, #222); border: 1px solid var(--border, #333); position: relative; transition: all 0.2s;
}
.toggle-switch.on { background: #3a6ea8; border-color: #4a7ec0; }
.toggle-knob {
  position: absolute; top: 2px; left: 2px; width: 14px; height: 14px;
  border-radius: 50%; background: #666; transition: all 0.2s;
}
.toggle-switch.on .toggle-knob { left: 18px; background: #fff; }

.folder-pick-error {
  margin-top: 8px; font-size: 11px; color: #e07050; white-space: pre-line;
  background: rgba(224,112,80,0.08); border: 1px solid rgba(224,112,80,0.25);
  border-radius: 6px; padding: 8px 10px; line-height: 1.6;
}

/* 裁剪对比（右侧预览区） */
.preview-pane {
  flex: 1; display: flex; flex-direction: column;
  overflow: hidden; background: var(--canvas-bg, #080808); position: relative;
}
.preview-pane::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(var(--grid-line,rgba(255,255,255,0.015)) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line,rgba(255,255,255,0.015)) 1px,transparent 1px);
  background-size: 40px 40px; z-index: 0;
}
.preview-empty {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 12px; color: var(--text-muted, #333); z-index: 1;
}
.preview-empty p { font-size: 13px; }
.preview-empty .sub { font-size: 11.5px; color: var(--text-muted, #444) !important; margin-top: -4px; }
.compare-wrap {
  flex: 1; display: flex; align-items: center; justify-content: center;
  gap: 20px; padding: 28px; z-index: 1; min-height: 0; overflow: hidden;
}
.compare-side { flex: 1; max-width: 46%; display: flex; flex-direction: column; align-items: center; gap: 8px; min-height: 0; }
.compare-label { font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted, #555); }
.compare-img-box {
  width: 100%; flex: 1; max-height: 440px; border-radius: 6px; overflow: hidden;
  border: 1px solid var(--border, #1e1e1e); position: relative;
  display: flex; align-items: center; justify-content: center;
}
.compare-size { font-size: 11px; color: var(--text-muted, #555); display: flex; gap: 6px; align-items: center; }
.cmp-arrow { color: var(--text-muted, #444); flex-shrink: 0; }
.action-row {
  z-index: 1; flex-shrink: 0;
  border-top: 1px solid var(--border, #1e1e1e);
  background: var(--panel-bg, #0a0a0a);
  padding: 12px 20px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
}
.error-msg {
  font-size: 11.5px; color: #e05252;
  background: rgba(224,82,82,0.08); border: 1px solid rgba(224,82,82,0.2);
  border-radius: 5px; padding: 5px 10px;
}

/* 公共按钮 */
.btn-primary {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 14px; border-radius: 6px; font-size: 12px; font-weight: 600;
  background: var(--ctrl-active, #222); border: 1px solid var(--border-hover, #3a3a3a);
  color: var(--text-primary, #ddd); cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.btn-primary:hover:not(:disabled) { background: #2a2a2a; border-color: #555; color: #fff; }
.btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-ghost {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 12px; border-radius: 6px; font-size: 12px;
  background: transparent; border: 1px solid var(--border, #2a2a2a);
  color: var(--text-muted, #555); cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.btn-ghost:hover:not(:disabled) { border-color: var(--border-hover, #444); color: var(--text-dim, #888); }
.btn-ghost:disabled { opacity: 0.3; cursor: not-allowed; }
.btn-danger:hover { border-color: #e05252 !important; color: #e05252 !important; }
.btn-sm { padding: 5px 10px !important; font-size: 11px !important; }
.btn-overwrite {
  background: rgba(224,100,50,0.1) !important; border-color: rgba(224,100,50,0.3) !important; color: #e06432 !important;
}
.btn-overwrite:hover:not(:disabled) { background: rgba(224,100,50,0.2) !important; }
.btn-dl {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 14px; background: rgba(76,175,120,0.1);
  border: 1px solid rgba(76,175,120,0.3); border-radius: 6px;
  color: #4caf78; font-size: 12px; cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.btn-dl:hover { background: rgba(76,175,120,0.2); }

/* 文件列表（右侧独立面板） */
.file-panel {
  width: 340px; flex-shrink: 0;
  background: var(--panel-bg, #0a0a0a);
  border-left: 1px solid var(--border, #1e1e1e);
  display: flex; flex-direction: column; overflow: hidden;
}
.file-panel::-webkit-scrollbar { width: 3px; }

.file-panel-hd {
  flex-shrink: 0; padding: 12px 14px 8px;
  border-bottom: 1px solid var(--border, #1e1e1e);
  display: flex; align-items: center; gap: 6px;
}
.file-panel-title { font-size: 12px; font-weight: 600; color: var(--text-primary, #ccc); }
.file-count { color: var(--text-muted, #555); font-weight: 400; }
.task-stats { margin-left: auto; font-size: 10px; color: var(--text-muted, #555); }
.stat-done { color: #4caf78; }
.stat-err  { color: #e05252; }

.file-panel-actions {
  flex-shrink: 0; display: flex; gap: 5px; flex-wrap: wrap;
  padding: 8px 12px; border-bottom: 1px solid var(--border, #1e1e1e);
}

.task-list { flex: 1; overflow-y: auto; }
.task-list::-webkit-scrollbar { width: 3px; }
.task-list::-webkit-scrollbar-thumb { background: var(--scrollbar, #222); }

.task-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  cursor: pointer; transition: background 0.12s;
  border-left: 2px solid transparent; position: relative;
}
.task-item:hover     { background: var(--ctrl-hover, #111); }
.task-item.selected  { background: var(--ctrl-active, #141414); border-left-color: var(--border-hover, #444); }
.st-done.selected, .st-overwritten.selected { border-left-color: #4caf78; }
.st-error.selected   { border-left-color: #e05252; }

.task-thumb {
  width: 48px; height: 48px; border-radius: 6px; flex-shrink: 0;
  border: 1px solid var(--border, #1e1e1e); overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.checker {
  background-image: linear-gradient(45deg,#181818 25%,transparent 25%),linear-gradient(-45deg,#181818 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#181818 75%),linear-gradient(-45deg,transparent 75%,#181818 75%);
  background-size: 8px 8px; background-position: 0 0,0 4px,4px -4px,-4px 0;
}
.task-thumb img { width: 100%; height: 100%; object-fit: contain; }
.thumb-ph { color: var(--text-muted, #444); }

.task-info { flex: 1; min-width: 0; }
.task-name { font-size: 12px; color: var(--text-primary, #ccc); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.task-path { font-size: 9.5px; color: var(--text-muted, #555); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px; }
.task-meta { font-size: 10px; color: var(--text-muted, #555); margin-top: 2px; display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
.crop-arrow { color: #4caf78; }
.task-badge { font-size: 9px; padding: 1px 5px; border-radius: 8px; }
.badge-idle        { background: rgba(100,100,100,0.2); color: #666; }
.badge-processing  { background: rgba(91,142,230,0.2); color: #5b8ee6; }
.badge-done, .badge-overwritten { background: rgba(76,175,120,0.2); color: #4caf78; }
.badge-skipped     { background: rgba(150,150,80,0.2); color: #aaaa55; }
.badge-transparent { background: rgba(100,100,100,0.15); color: #666; }
.badge-error       { background: rgba(224,82,82,0.2); color: #e05252; }
.task-err          { font-size: 9.5px; color: #e05252; margin-top: 1px; }

.task-btns { display: flex; gap: 2px; flex-shrink: 0; }
.tbtn {
  width: 24px; height: 24px; border-radius: 4px; border: none;
  background: transparent; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted, #555); transition: all 0.12s;
}
.tbtn:hover    { background: var(--ctrl-hover, #1a1a1a); color: var(--text-dim, #888); }
.tbtn-dl:hover { color: #4caf78; }
.tbtn-rm:hover { color: #e05252; }

.file-panel-empty {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 10px; color: var(--text-muted, #444);
  padding: 32px 20px; cursor: default; text-align: center;
}
.file-panel-empty p { font-size: 12px; line-height: 1.6; }
.file-panel-empty .sub { font-size: 10.5px; color: var(--text-muted, #555) !important; }

/* canvas */
.cmp-canvas { max-width: 100%; max-height: 100%; display: block; image-rendering: pixelated; }
.cmp-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(8,8,8,0.65); font-size: 11px; color: var(--text-muted, #555);
}
.saving   { color: #4caf78; font-weight: 600; }
.no-change { color: #aaaa55; font-weight: 600; }

/* ── 确认弹窗 ─────────────────────── */
.dialog-mask {
  position: fixed; inset: 0; background: rgba(0,0,0,0.7);
  display: flex; align-items: center; justify-content: center; z-index: 999;
}
.dialog {
  background: var(--panel-bg, #0f0f0f); border: 1px solid var(--border-hover, #333);
  border-radius: 10px; padding: 24px 28px; max-width: 440px; width: 90%;
}
.dialog-title { font-size: 15px; font-weight: 600; color: var(--text-primary, #ddd); margin-bottom: 12px; }
.dialog-body  { font-size: 13px; color: var(--text-dim, #888); line-height: 1.7; margin-bottom: 20px; white-space: pre-line; }
.dialog-actions { display: flex; justify-content: flex-end; gap: 10px; }
.btn-danger-solid {
  padding: 8px 18px; border-radius: 6px; font-size: 12.5px; font-weight: 600;
  background: rgba(224,82,82,0.15); border: 1px solid rgba(224,82,82,0.4);
  color: #e05252; cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.btn-danger-solid:hover { background: rgba(224,82,82,0.3); }
</style>
