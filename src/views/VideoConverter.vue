<template>
  <div class="converter-page">

    <!-- 左侧：上传区 + 设置面板 -->
    <div class="conv-panel">
      <div class="panel-header">
        <span class="panel-title">视频素材转换</span>
        <button v-if="videoFile" class="btn-ghost btn-sm" @click="resetAll">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.29"/></svg>
          重新上传
        </button>
      </div>

      <!-- 上传区 -->
      <div v-if="!videoFile" class="upload-zone" @click="triggerUpload" @dragover.prevent @drop.prevent="onDrop">
        <input ref="fileInput" type="file" accept="video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm" style="display:none" @change="onFileChange" />
        <div class="upload-box">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          </svg>
          <p class="upload-text">点击或拖拽视频文件到此处</p>
          <p class="upload-sub">支持 MP4、MOV、WebM</p>
        </div>
      </div>

      <!-- 文件信息 -->
      <div v-if="videoFile" class="file-info">
        <div class="file-info-row">
          <span class="fi-label">文件名</span>
          <span class="fi-value fi-name">{{ videoFile.name }}</span>
        </div>
        <div class="file-info-row">
          <span class="fi-label">文件大小</span>
          <span class="fi-value">{{ formatSize(videoFile.size) }}</span>
        </div>
        <div class="file-info-row">
          <span class="fi-label">视频时长</span>
          <span class="fi-value">{{ videoDuration || '加载中…' }}</span>
        </div>
        <div class="file-info-row">
          <span class="fi-label">原始尺寸</span>
          <span class="fi-value">{{ videoOrigW && videoOrigH ? videoOrigW + ' × ' + videoOrigH : '—' }}</span>
        </div>
      </div>

      <!-- 设置区 -->
      <div v-if="videoFile" class="settings-section">
        <div class="settings-title">输出设置</div>

        <!-- 输出模式 -->
        <div class="setting-row">
          <span class="setting-label">输出模式</span>
          <div class="mode-toggle">
            <button :class="{ active: outputMode === 'webp' }" @click="outputMode = 'webp'">WebP 动图</button>
            <button :class="{ active: outputMode === 'png' }"  @click="outputMode = 'png'">PNG 序列帧</button>
          </div>
        </div>

        <!-- 帧率 -->
        <div class="setting-row">
          <span class="setting-label">导出帧率</span>
          <div class="fps-presets">
            <button v-for="f in fpsPresets" :key="f" :class="{ active: fps === f }" @click="fps = f">{{ f }}<small>fps</small></button>
          </div>
        </div>

        <!-- 自定义帧率 -->
        <div class="setting-row">
          <span class="setting-label">自定义帧率</span>
          <div class="input-with-unit">
            <input type="number" v-model.number="fps" min="1" max="60" step="0.5" class="num-input" />
            <span class="unit">fps</span>
          </div>
        </div>

        <!-- 输出宽度 -->
        <div class="setting-row">
          <span class="setting-label">输出宽度</span>
          <div class="input-with-unit">
            <input type="number" v-model.number="outputWidth" min="64" max="3840" step="1" class="num-input" />
            <span class="unit">px</span>
          </div>
        </div>

        <!-- 预计帧数 -->
        <div v-if="estimatedFrames > 0" class="setting-row">
          <span class="setting-label">预计帧数</span>
          <span class="fi-value">{{ estimatedFrames }} 帧</span>
        </div>

        <!-- 转换按钮 -->
        <button class="btn-convert" :disabled="converting" @click="startConvert">
          <span v-if="!converting">开始转换</span>
          <span v-else>转换中…</span>
        </button>
      </div>
    </div>

    <!-- 右侧：预览 + 进度 -->
    <div class="conv-preview">
      <!-- 视频预览 -->
      <div v-if="videoFile" class="video-preview-wrap">
        <video ref="videoEl" :src="videoObjectUrl" controls muted playsinline class="video-preview"
          @loadedmetadata="onVideoMeta" @error="onVideoError"></video>
      </div>

      <!-- 无文件占位 -->
      <div v-else class="preview-placeholder">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
        <p>上传视频后在此预览</p>
      </div>

      <!-- 转换状态 -->
      <div class="status-area" v-if="videoFile">
        <!-- 状态行 -->
        <div class="status-row" :class="'status-' + statusType">
          <span class="status-dot"></span>
          <span class="status-text">{{ statusText }}</span>
        </div>

        <!-- 进度条 -->
        <div v-if="converting || progress > 0" class="progress-wrap">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <span class="progress-pct">{{ Math.round(progress) }}%</span>
        </div>

        <!-- 错误信息 -->
        <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>

        <!-- 下载按钮 -->
        <div v-if="downloadUrl" class="download-wrap">
          <a :href="downloadUrl" :download="downloadName" class="btn-download">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            下载 {{ downloadName }}
          </a>
        </div>
      </div>
    </div>

    <!-- 隐藏 canvas，用于逐帧截图 -->
    <canvas ref="offCanvas" style="display:none"></canvas>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import JSZip from 'jszip'

// ── 状态 ────────────────────────────────────
const fileInput     = ref(null)
const videoEl       = ref(null)
const offCanvas     = ref(null)
const videoFile     = ref(null)
const videoObjectUrl= ref('')
const videoDuration = ref('')
const videoOrigW    = ref(0)
const videoOrigH    = ref(0)
const outputMode    = ref('webp')   // 'webp' | 'png'
const fps           = ref(24)
const outputWidth   = ref(960)
const converting    = ref(false)
const progress      = ref(0)
const statusText    = ref('等待上传')
const statusType    = ref('idle')   // idle | loading | running | done | error
const errorMsg      = ref('')
const downloadUrl   = ref('')
const downloadName  = ref('')

const fpsPresets = [14.5, 16, 24, 30]

const estimatedFrames = computed(() => {
  const dur = videoEl.value?.duration || 0
  if (!dur || !fps.value) return 0
  return Math.ceil(dur * fps.value)
})

const outputHeight = computed(() => {
  if (!videoOrigW.value || !videoOrigH.value) return 0
  return Math.round(outputWidth.value * videoOrigH.value / videoOrigW.value)
})

// ── 上传处理 ────────────────────────────────
function triggerUpload() { fileInput.value?.click() }

function onFileChange(e) { loadFile(e.target.files?.[0]) }

function onDrop(e) { loadFile(e.dataTransfer?.files?.[0]) }

function loadFile(file) {
  if (!file) return
  const allowed = ['video/mp4', 'video/quicktime', 'video/webm']
  const extOk   = /\.(mp4|mov|webm)$/i.test(file.name)
  if (!allowed.includes(file.type) && !extOk) {
    setError('格式不支持，请上传 MP4、MOV 或 WebM 文件')
    return
  }
  if (file.size > 500 * 1024 * 1024) {
    setError('文件过大（最大 500MB）')
    return
  }
  resetDownload()
  errorMsg.value = ''
  // 释放旧 object URL
  if (videoObjectUrl.value) URL.revokeObjectURL(videoObjectUrl.value)
  videoFile.value    = file
  videoObjectUrl.value = URL.createObjectURL(file)
  statusText.value   = '已加载视频，请配置参数后开始转换'
  statusType.value   = 'idle'
}

function onVideoMeta() {
  const v = videoEl.value
  if (!v) return
  const d = v.duration
  videoDuration.value = isFinite(d) ? formatDuration(d) : '未知'
  videoOrigW.value    = v.videoWidth
  videoOrigH.value    = v.videoHeight
  if (!outputWidth.value || outputWidth.value === 960) {
    outputWidth.value = v.videoWidth || 960
  }
}

function onVideoError() {
  setError('视频加载失败，请检查文件是否损坏')
}

function resetAll() {
  if (videoObjectUrl.value) URL.revokeObjectURL(videoObjectUrl.value)
  resetDownload()
  videoFile.value      = null
  videoObjectUrl.value = ''
  videoDuration.value  = ''
  videoOrigW.value     = 0
  videoOrigH.value     = 0
  converting.value     = false
  progress.value       = 0
  statusText.value     = '等待上传'
  statusType.value     = 'idle'
  errorMsg.value       = ''
}

function resetDownload() {
  if (downloadUrl.value && downloadUrl.value.startsWith('blob:')) {
    URL.revokeObjectURL(downloadUrl.value)
  }
  downloadUrl.value  = ''
  downloadName.value = ''
}

// ── 转换核心 ────────────────────────────────
async function startConvert() {
  if (converting.value) return
  errorMsg.value = ''
  resetDownload()

  const v = videoEl.value
  if (!v || !v.duration) { setError('视频未就绪，请稍后再试'); return }

  const duration  = v.duration
  const interval  = 1 / fps.value
  const totalFrames = Math.ceil(duration * fps.value)
  const w = outputWidth.value
  const h = outputHeight.value || Math.round(w * (v.videoHeight / (v.videoWidth || 1)))

  if (totalFrames > 1200) {
    setError(`预计帧数 ${totalFrames} 过多（限制 1200 帧），请降低帧率或缩短时长`)
    return
  }

  converting.value  = true
  progress.value    = 0
  statusText.value  = '正在转换…'
  statusType.value  = 'running'

  const canvas = offCanvas.value
  canvas.width  = w
  canvas.height = h
  const ctx = canvas.getContext('2d')

  try {
    if (outputMode.value === 'webp') {
      await convertToWebP(v, canvas, ctx, duration, interval, totalFrames, w, h)
    } else {
      await convertToPngZip(v, canvas, ctx, duration, interval, totalFrames, w, h)
    }
  } catch (err) {
    setError('转换失败：' + (err?.message || String(err)))
  } finally {
    converting.value = false
  }
}

// ── WebP 动图 ────────────────────────────────
async function convertToWebP(v, canvas, ctx, duration, interval, totalFrames, w, h) {
  // 逐帧提取 ImageData，用 canvas toBlob 生成每帧 WebP
  // 注：浏览器原生不支持多帧 WebP 编码，改用 GIF（通过 canvas + gif.js 方式太重）
  // 替代方案：导出为 APNG 也不被广泛支持
  // 最实用方案：将所有帧导出为 PNG Blob，然后用 canvas 动态绘制并录制 MediaStream 导出 WebM
  // 这里实现为：录制 canvas 的 MediaStream → WebM（浏览器原生支持最好）
  // 同时保留文件后缀提示

  statusText.value = '正在录制视频帧…'

  // 方案：直接用 canvas captureStream + MediaRecorder 录制
  const stream   = canvas.captureStream(fps.value)
  const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
    ? 'video/webm;codecs=vp9'
    : 'video/webm'

  const chunks = []
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 8000000 })
  recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data) }

  const recordingDone = new Promise(resolve => { recorder.onstop = resolve })
  recorder.start()

  // 逐帧 seek + 绘制
  for (let i = 0; i < totalFrames; i++) {
    const t = i * interval
    await seekTo(v, Math.min(t, duration - 0.001))
    ctx.drawImage(v, 0, 0, w, h)
    progress.value = Math.round((i + 1) / totalFrames * 100)
    // 给 MediaRecorder 捕获帧的时间
    await sleep(Math.max(16, Math.round(1000 / fps.value)))
  }

  recorder.stop()
  await recordingDone

  const blob = new Blob(chunks, { type: mimeType })
  downloadUrl.value  = URL.createObjectURL(blob)
  downloadName.value = stripExt(videoFile.value.name) + '_converted.webm'
  statusText.value   = `转换完成，共 ${totalFrames} 帧`
  statusType.value   = 'done'
  progress.value     = 100
}

// ── PNG 序列帧 ────────────────────────────────
async function convertToPngZip(v, canvas, ctx, duration, interval, totalFrames, w, h) {
  const zip = new JSZip()
  const folder = zip.folder('frames')

  for (let i = 0; i < totalFrames; i++) {
    const t = i * interval
    await seekTo(v, Math.min(t, duration - 0.001))
    ctx.drawImage(v, 0, 0, w, h)

    const blob = await canvasToBlob(canvas, 'image/png')
    const idx  = String(i + 1).padStart(4, '0')
    folder.file(`frame_${idx}.png`, blob)

    progress.value = Math.round((i + 1) / totalFrames * 100)
    statusText.value = `正在导出帧 ${i + 1} / ${totalFrames}…`

    // 每帧 yield 一次，避免页面卡死
    if (i % 5 === 0) await sleep(0)
  }

  statusText.value = '正在打包 ZIP…'
  const zipBlob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' }, (meta) => {
    progress.value = Math.round(meta.percent)
  })

  downloadUrl.value  = URL.createObjectURL(zipBlob)
  downloadName.value = stripExt(videoFile.value.name) + '_frames.zip'
  statusText.value   = `转换完成，共 ${totalFrames} 帧 PNG`
  statusType.value   = 'done'
  progress.value     = 100
}

// ── 工具函数 ────────────────────────────────
function seekTo(video, time) {
  return new Promise((resolve, reject) => {
    if (Math.abs(video.currentTime - time) < 0.001) { resolve(); return }
    const onSeeked  = () => { video.removeEventListener('seeked', onSeeked); resolve() }
    const onError   = () => { video.removeEventListener('error', onError); reject(new Error('seek error')) }
    video.addEventListener('seeked', onSeeked, { once: true })
    video.addEventListener('error', onError,  { once: true })
    video.currentTime = time
  })
}

function canvasToBlob(canvas, type) {
  return new Promise(resolve => canvas.toBlob(resolve, type))
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function setError(msg) {
  errorMsg.value   = msg
  statusText.value = '转换失败'
  statusType.value = 'error'
  converting.value = false
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

function formatDuration(sec) {
  const m = Math.floor(sec / 60)
  const s = (sec % 60).toFixed(2)
  return `${m}:${String(s).padStart(5, '0')}`
}

function stripExt(name) {
  return name.replace(/\.[^.]+$/, '')
}

onBeforeUnmount(() => {
  if (videoObjectUrl.value) URL.revokeObjectURL(videoObjectUrl.value)
  if (downloadUrl.value && downloadUrl.value.startsWith('blob:')) URL.revokeObjectURL(downloadUrl.value)
})
</script>

<style scoped>
.converter-page {
  flex: 1; display: flex; overflow: hidden; min-height: 0;
  background: var(--app-bg, #080808);
}

/* ── 左侧面板 ─────────────────────────── */
.conv-panel {
  width: 300px; flex-shrink: 0;
  background: var(--panel-bg, #0a0a0a);
  border-right: 1px solid var(--border, #1e1e1e);
  display: flex; flex-direction: column;
  overflow-y: auto; padding: 20px 0;
}
.panel-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px 16px;
  border-bottom: 1px solid var(--border, #1e1e1e);
  margin-bottom: 16px;
}
.panel-title {
  font-size: 13px; font-weight: 600;
  color: var(--text-primary, #ccc);
  letter-spacing: 0.3px;
}

/* 上传区 */
.upload-zone {
  margin: 0 16px 16px;
  border: 1.5px dashed var(--border, #2a2a2a);
  border-radius: 10px; cursor: pointer;
  transition: border-color 0.2s;
}
.upload-zone:hover { border-color: var(--border-hover, #444); }
.upload-box {
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  padding: 32px 20px; color: var(--text-muted, #444);
}
.upload-zone:hover .upload-box { color: var(--text-dim, #666); }
.upload-text { font-size: 13px; font-weight: 500; color: var(--text-dim, #666); }
.upload-sub  { font-size: 11.5px; color: var(--text-muted, #444); }

/* 文件信息 */
.file-info {
  margin: 0 16px 16px;
  background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e);
  border-radius: 8px; padding: 12px 14px;
  display: flex; flex-direction: column; gap: 8px;
}
.file-info-row { display: flex; align-items: flex-start; gap: 8px; }
.fi-label {
  font-size: 11.5px; color: var(--text-muted, #555);
  width: 56px; flex-shrink: 0; padding-top: 1px;
}
.fi-value { font-size: 12px; color: var(--text-dim, #888); line-height: 1.4; }
.fi-name  { word-break: break-all; }

/* 设置区 */
.settings-section { padding: 0 16px; display: flex; flex-direction: column; gap: 14px; }
.settings-title {
  font-size: 11.5px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;
  color: var(--text-muted, #555); padding-bottom: 6px;
  border-bottom: 1px solid var(--border, #1e1e1e);
}
.setting-row { display: flex; flex-direction: column; gap: 7px; }
.setting-label { font-size: 12px; color: var(--text-dim, #888); }

.mode-toggle {
  display: flex; background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e); border-radius: 6px; overflow: hidden;
}
.mode-toggle button {
  flex: 1; padding: 6px 8px; background: transparent; border: none;
  color: var(--text-muted, #555); font-size: 12px; cursor: pointer;
  transition: all 0.15s;
}
.mode-toggle button:hover  { color: var(--text-dim, #888); background: var(--ctrl-hover, #151515); }
.mode-toggle button.active { color: var(--text-primary, #ddd); background: var(--ctrl-active, #1a1a1a); }

.fps-presets { display: flex; gap: 6px; flex-wrap: wrap; }
.fps-presets button {
  padding: 5px 10px; background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e); border-radius: 5px;
  color: var(--text-muted, #555); font-size: 11.5px; cursor: pointer;
  transition: all 0.15s;
}
.fps-presets button small { font-size: 10px; opacity: 0.7; margin-left: 2px; }
.fps-presets button:hover  { border-color: var(--border-hover, #333); color: var(--text-dim, #888); }
.fps-presets button.active { border-color: var(--text-dim, #666); color: var(--text-primary, #ddd); background: var(--ctrl-active, #1a1a1a); }

.input-with-unit { display: flex; align-items: center; gap: 8px; }
.num-input {
  width: 90px; background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e); border-radius: 5px;
  padding: 5px 10px; color: var(--text-primary, #ccc); font-size: 13px;
  outline: none; transition: border-color 0.15s;
}
.num-input:focus { border-color: var(--border-hover, #444); }
.unit { font-size: 12px; color: var(--text-muted, #555); }

.btn-convert {
  margin-top: 6px; padding: 10px; width: 100%;
  background: var(--ctrl-active, #1a1a1a);
  border: 1px solid var(--border-hover, #333); border-radius: 7px;
  color: var(--text-primary, #ddd); font-size: 13px; font-weight: 600;
  cursor: pointer; transition: all 0.15s; letter-spacing: 0.3px;
}
.btn-convert:hover:not(:disabled) { background: #222; border-color: #555; color: #fff; }
.btn-convert:disabled { opacity: 0.5; cursor: not-allowed; }

.btn-ghost {
  display: flex; align-items: center; gap: 5px;
  background: transparent; border: 1px solid var(--border, #2a2a2a);
  border-radius: 5px; padding: 4px 10px;
  color: var(--text-muted, #555); font-size: 11.5px; cursor: pointer;
  transition: all 0.15s;
}
.btn-ghost:hover { border-color: var(--border-hover, #444); color: var(--text-dim, #888); }
.btn-sm { font-size: 11px; }

/* ── 右侧预览 ─────────────────────────── */
.conv-preview {
  flex: 1; display: flex; flex-direction: column;
  overflow: hidden; background: var(--canvas-bg, #080808);
  position: relative;
}
.conv-preview::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--grid-line, rgba(255,255,255,0.015)) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line, rgba(255,255,255,0.015)) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none; z-index: 0;
}

.video-preview-wrap {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 32px; z-index: 1; min-height: 0;
}
.video-preview {
  max-width: 100%; max-height: 100%;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.6);
}

.preview-placeholder {
  flex: 1; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 16px; z-index: 1;
  color: var(--text-muted, #333);
}
.preview-placeholder p { font-size: 13px; }

/* 状态区 */
.status-area {
  z-index: 1; flex-shrink: 0;
  border-top: 1px solid var(--border, #1e1e1e);
  background: var(--panel-bg, #0a0a0a);
  padding: 16px 24px;
  display: flex; flex-direction: column; gap: 10px;
}

.status-row { display: flex; align-items: center; gap: 8px; }
.status-dot {
  width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
  background: var(--text-muted, #555);
}
.status-idle .status-dot    { background: #555; }
.status-loading .status-dot { background: #888; animation: pulse 1.2s infinite; }
.status-running .status-dot { background: #5b8ee6; animation: pulse 0.8s infinite; }
.status-done .status-dot    { background: #4caf78; }
.status-error .status-dot   { background: #e05252; }

@keyframes pulse {
  0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
}

.status-text { font-size: 12.5px; color: var(--text-dim, #888); }

.progress-wrap { display: flex; align-items: center; gap: 10px; }
.progress-bar {
  flex: 1; height: 4px; background: var(--ctrl-bg, #1a1a1a);
  border-radius: 2px; overflow: hidden;
}
.progress-fill {
  height: 100%; background: #5b8ee6;
  border-radius: 2px; transition: width 0.2s;
}
.progress-pct { font-size: 11.5px; color: var(--text-muted, #555); min-width: 36px; text-align: right; }

.error-msg {
  font-size: 12px; color: #e05252;
  background: rgba(224,82,82,0.08);
  border: 1px solid rgba(224,82,82,0.2);
  border-radius: 5px; padding: 8px 12px;
}

.download-wrap { display: flex; }
.btn-download {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 18px; background: var(--ctrl-active, #1a1a1a);
  border: 1px solid var(--border-hover, #333); border-radius: 6px;
  color: var(--text-primary, #ddd); font-size: 12.5px; font-weight: 500;
  text-decoration: none; transition: all 0.15s;
}
.btn-download:hover { background: #222; border-color: #555; color: #fff; }
</style>
