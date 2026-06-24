<template>
  <header class="topbar">
    <div class="topbar-left">
      <div class="logo">
        <span class="logo-k">K</span><span class="logo-rest">Skr</span>
      </div>
      <div class="topbar-divider"></div>
      <span class="topbar-subtitle">AE Plugin Preview</span>
    </div>
    <div class="topbar-right">
      <a href="https://kskr.kuaishou.com" target="_blank" class="topbar-link">文档</a>
      <a href="#" class="topbar-link">更新日志</a>
      <a href="#" class="topbar-link">关于</a>

      <!-- 主题切换 -->
      <div class="theme-switcher">
        <button
          v-for="t in themes"
          :key="t.id"
          class="theme-btn"
          :class="{ active: currentTheme === t.id }"
          :title="t.label"
          @click="$emit('set-theme', t.id)"
        >
          <span class="theme-dot" :style="{ background: t.color }"></span>
        </button>
      </div>

      <span class="version-badge">v1.0</span>
    </div>
  </header>
</template>

<script setup>
defineProps({ currentTheme: { type: String, default: 'dark' } })
defineEmits(['set-theme'])

const themes = [
  { id: 'dark',  label: '黑色',  color: '#111' },
  { id: 'gray',  label: '灰色',  color: '#555' },
  { id: 'light', label: '白色',  color: '#e8e8e8' },
]
</script>

<style scoped>
.topbar {
  height: 52px;
  background: var(--topbar-bg, #0d0d0d);
  border-bottom: 1px solid var(--border, #1e1e1e);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; flex-shrink: 0; z-index: 100;
}
.topbar-left { display: flex; align-items: center; gap: 16px; }
.logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px; font-weight: 700; letter-spacing: -0.5px;
  cursor: default; user-select: none;
}
.logo-k   { color: var(--text-primary, #fff); }
.logo-rest { color: var(--text-muted, #555); }
.topbar-divider { width: 1px; height: 18px; background: var(--border, #2a2a2a); }
.topbar-subtitle {
  font-size: 13px; color: var(--text-muted, #555);
  font-family: 'Space Grotesk', sans-serif; letter-spacing: 0.3px;
}
.topbar-right { display: flex; align-items: center; gap: 20px; }
.topbar-link { font-size: 13px; color: var(--text-dim, #666); text-decoration: none; transition: color 0.2s; }
.topbar-link:hover { color: var(--text-primary, #ccc); }

/* 主题切换 */
.theme-switcher {
  display: flex; align-items: center; gap: 6px;
  background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e);
  border-radius: 20px; padding: 4px 8px;
}
.theme-btn {
  width: 18px; height: 18px; border-radius: 50%;
  border: 2px solid transparent;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; background: transparent;
  transition: border-color 0.15s, transform 0.15s;
  padding: 0;
}
.theme-btn:hover  { transform: scale(1.15); }
.theme-btn.active { border-color: var(--text-primary, #fff); }
.theme-dot { width: 10px; height: 10px; border-radius: 50%; display: block; }

.version-badge {
  font-size: 11px; color: var(--text-muted, #444);
  background: var(--ctrl-bg, #1a1a1a);
  border: 1px solid var(--border, #2a2a2a);
  padding: 3px 8px; border-radius: 20px;
  font-family: 'Space Grotesk', sans-serif;
}
</style>
