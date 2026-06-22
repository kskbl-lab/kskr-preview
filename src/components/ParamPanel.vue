<template>
  <div class="param-panel">
    <!-- 插件标题区 -->
    <div class="plugin-header">
      <div class="plugin-title-row">
        <div>
          <h2 class="plugin-title">{{ plugin.name }}</h2>
          <p class="plugin-title-zh">{{ plugin.nameZh }}</p>
        </div>
        <button class="btn-icon" @click="$emit('reset')" title="重置参数">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.64"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- 参数列表 -->
    <div class="params-scroll">
      <div class="param-group" v-for="param in params" :key="param.key">
        <div class="param-header">
          <span class="param-label">{{ param.label }}</span>
          <div class="param-value-wrap">
            <span class="param-value">{{ formatValue(modelValue[param.key]) }}</span>
          </div>
        </div>
        <p class="param-desc">{{ param.desc }}</p>
        <div class="slider-wrap">
          <span class="slider-min">{{ param.min }}</span>
          <input
            type="range"
            :min="param.min"
            :max="param.max"
            :step="param.step || 0.1"
            :value="modelValue[param.key]"
            @input="onInput(param.key, $event.target.value)"
          />
          <span class="slider-max">{{ param.max }}</span>
        </div>
      </div>
    </div>

    <!-- 底部操作区 -->
    <div class="panel-actions">
      <!-- 图片上传 -->
      <label class="btn-upload">
        <input type="file" accept="image/*" @change="$emit('upload', $event)" hidden>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        上传图片
      </label>

      <!-- 对比开关 -->
      <button
        class="btn-compare"
        :class="{ active: compareMode }"
        @click="$emit('toggle-compare')"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/>
        </svg>
        {{ compareMode ? '关闭对比' : '前后对比' }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  plugin: { type: Object, required: true },
  params: { type: Array, required: true },
  modelValue: { type: Object, required: true },
  compareMode: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue', 'reset', 'upload', 'toggle-compare'])

function onInput(key, val) {
  emit('update:modelValue', { ...props.modelValue, [key]: parseFloat(val) })
}

function formatValue(v) {
  return typeof v === 'number' ? v.toFixed(1) : v
}
</script>

<style scoped>
.param-panel {
  width: 280px;
  background: #0d0d0d;
  border-right: 1px solid #1e1e1e;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.plugin-header {
  padding: 20px 20px 16px;
  border-bottom: 1px solid #1a1a1a;
}

.plugin-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.plugin-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #e8e8e8;
  margin-bottom: 3px;
}

.plugin-title-zh {
  font-size: 12px;
  color: #444;
}

.btn-icon {
  width: 30px;
  height: 30px;
  background: #161616;
  border: 1px solid #222;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  transition: all 0.15s;
  flex-shrink: 0;
}

.btn-icon:hover {
  background: #1e1e1e;
  color: #aaa;
  border-color: #333;
}

/* 参数滚动区 */
.params-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
}

.params-scroll::-webkit-scrollbar { width: 4px; }
.params-scroll::-webkit-scrollbar-track { background: transparent; }
.params-scroll::-webkit-scrollbar-thumb {
  background: #1e1e1e;
  border-radius: 2px;
}

.param-group {
  margin-bottom: 24px;
}

.param-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
}

.param-label {
  font-size: 12.5px;
  color: #888;
  font-weight: 500;
}

.param-value-wrap {
  background: #141414;
  border: 1px solid #222;
  border-radius: 4px;
  padding: 2px 8px;
}

.param-value {
  font-size: 12px;
  color: #bbb;
  font-family: 'Space Grotesk', monospace;
  font-weight: 500;
}

.param-desc {
  font-size: 11px;
  color: #333;
  margin-bottom: 8px;
}

/* 滑块 */
.slider-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.slider-min,
.slider-max {
  font-size: 10px;
  color: #2e2e2e;
  min-width: 18px;
  font-family: 'Space Grotesk', monospace;
}

.slider-max {
  text-align: right;
}

input[type="range"] {
  flex: 1;
  height: 3px;
  -webkit-appearance: none;
  appearance: none;
  background: #1e1e1e;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.06);
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 0 0 4px rgba(255,255,255,0.1);
}

input[type="range"]::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

/* 底部操作 */
.panel-actions {
  padding: 16px 20px;
  border-top: 1px solid #1a1a1a;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.btn-upload,
.btn-compare {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: none;
  text-align: center;
}

.btn-upload {
  background: #fff;
  color: #000;
}

.btn-upload:hover {
  background: #e8e8e8;
}

.btn-compare {
  background: #141414;
  color: #666;
  border: 1px solid #222;
}

.btn-compare:hover {
  border-color: #333;
  color: #aaa;
}

.btn-compare.active {
  background: #1a1a1a;
  color: #ddd;
  border-color: #444;
}
</style>
