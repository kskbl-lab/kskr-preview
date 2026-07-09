<template>
  <div class="app" :class="'theme-' + currentTheme">
    <TopBar
      :currentTheme="currentTheme"
      :currentRoute="currentRoute"
      @set-theme="setTheme"
      @nav="navigate"
    />
    <div class="app-body">

      <!-- ── 左侧功能导航 ────────────────── -->
      <nav class="sidenav">
        <button
          class="sidenav-item"
          :class="{ active: currentRoute === '/' }"
          @click="navigate('/')"
          title="插件预览"
        >
          <div class="sn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <rect x="3" y="3" width="18" height="18" rx="2.5"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <span class="sn-label">插件预览</span>
          <div class="sn-active-bar"></div>
        </button>

        <button
          class="sidenav-item"
          :class="{ active: currentRoute === '/convert' }"
          @click="navigate('/convert')"
          title="视频转换"
        >
          <div class="sn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              <line x1="7" y1="12" x2="11" y2="12" stroke-width="2"/>
              <polyline points="9 10 11 12 9 14" stroke-width="2"/>
            </svg>
          </div>
          <span class="sn-label">视频转换</span>
          <div class="sn-active-bar"></div>
        </button>

        <button
          class="sidenav-item"
          :class="{ active: currentRoute === '/png-crop' }"
          @click="navigate('/png-crop')"
          title="裁剪PNG透明像素"
        >
          <div class="sn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <polyline points="9 3 9 9 3 9"/>
              <polyline points="15 3 15 9 21 9"/>
              <polyline points="9 21 9 15 3 15"/>
              <polyline points="15 21 15 15 21 15"/>
            </svg>
          </div>
          <span class="sn-label">PNG裁剪器</span>
          <div class="sn-active-bar"></div>
        </button>

        <button
          class="sidenav-item"
          :class="{ active: currentRoute === '/compress' }"
          @click="navigate('/compress')"
          title="压缩器"
        >
          <div class="sn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>
              <path d="M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6"/>
            </svg>
          </div>
          <span class="sn-label">压缩器</span>
          <div class="sn-active-bar"></div>
        </button>

        <!-- 分隔线 -->
        <div class="sn-divider"></div>
      </nav>

      <!-- ── 页面内容 ───────────────────── -->
      <div class="page-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import TopBar from './components/TopBar.vue'

const currentTheme = ref('dark')
function setTheme(t) { currentTheme.value = t }

const router = useRouter()
const route  = useRoute()
const currentRoute = computed(() => route.path)

function navigate(path) { router.push(path) }
</script>

<style>
/* ── 主题 CSS 变量 ─────────────────────────── */
.theme-dark {
  --app-bg:        #080808;
  --topbar-bg:     #0d0d0d;
  --sidebar-bg:    #0d0d0d;
  --sidenav-bg:    #0c0c0c;
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
  --sn-accent:     rgba(255,255,255,0.9);
  --sn-glow:       rgba(255,255,255,0.06);
}

.theme-gray {
  --app-bg:        #2e2e2e;
  --topbar-bg:     #242424;
  --sidebar-bg:    #272727;
  --sidenav-bg:    #252525;
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
  --sn-accent:     rgba(255,255,255,0.9);
  --sn-glow:       rgba(255,255,255,0.08);
}

.theme-light {
  --app-bg:        #f0f0f0;
  --topbar-bg:     #ffffff;
  --sidebar-bg:    #f8f8f8;
  --sidenav-bg:    #f5f5f5;
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
  --sn-accent:     rgba(0,0,0,0.85);
  --sn-glow:       rgba(0,0,0,0.06);
}
</style>

<style scoped>
.app {
  width: 100vw; height: 100vh;
  display: flex; flex-direction: column;
  background: var(--app-bg, #080808);
  overflow: hidden;
}
.app-body {
  flex: 1; display: flex; overflow: hidden; min-height: 0;
}

/* ── 左侧导航 ──────────────────────────────── */
.sidenav {
  width: 76px; flex-shrink: 0;
  background: var(--sidenav-bg, #0c0c0c);
  border-right: 1px solid var(--border, #1e1e1e);
  display: flex; flex-direction: column;
  align-items: center;
  padding: 12px 0 8px;
  gap: 4px;
  z-index: 50;
}

.sidenav-item {
  position: relative;
  width: 60px;
  display: flex; flex-direction: column; align-items: center;
  gap: 6px; padding: 12px 4px 10px;
  background: transparent; border: none; border-radius: 10px;
  cursor: pointer; transition: all 0.18s;
  color: var(--text-muted, #555);
  font-family: inherit;
}

.sidenav-item:hover {
  background: var(--ctrl-hover, #151515);
  color: var(--text-dim, #888);
}

.sidenav-item.active {
  color: var(--text-primary, #e0e0e0);
  background: var(--ctrl-active, #1a1a1a);
}

.sn-icon {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 10px;
  background: var(--ctrl-bg, #111);
  border: 1px solid var(--border, #1e1e1e);
  transition: all 0.18s;
}

.sidenav-item:hover .sn-icon {
  border-color: var(--border-hover, #333);
  background: var(--ctrl-hover, #181818);
}

.sidenav-item.active .sn-icon {
  border-color: var(--border-hover, #333);
  background: var(--ctrl-active, #222);
  box-shadow: 0 0 16px var(--sn-glow, rgba(255,255,255,0.06));
}

.sn-label {
  font-size: 10.5px; font-weight: 500; letter-spacing: 0.2px;
  white-space: nowrap; text-align: center;
  transition: color 0.18s;
}

/* 激活时左侧竖条指示器 */
.sn-active-bar {
  position: absolute; left: 0; top: 50%; transform: translateY(-50%);
  width: 3px; height: 0; border-radius: 0 2px 2px 0;
  background: var(--sn-accent, rgba(255,255,255,0.9));
  transition: height 0.2s cubic-bezier(0.34,1.56,0.64,1);
}
.sidenav-item.active .sn-active-bar { height: 28px; }

.sn-divider {
  width: 36px; height: 1px;
  background: var(--border, #1e1e1e);
  margin: 4px 0;
}

/* ── 页面内容 ────────────────────────────── */
.page-content {
  flex: 1; display: flex; overflow: hidden; min-height: 0;
}
</style>
