<template>
  <div class="app" :class="'theme-' + currentTheme">
    <TopBar
      :currentTheme="currentTheme"
      :currentRoute="currentRoute"
      @set-theme="setTheme"
      @nav="navigate"
    />
    <div class="app-body">
      <router-view />
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
}

.theme-gray {
  --app-bg:        #2e2e2e;
  --topbar-bg:     #242424;
  --sidebar-bg:    #272727;
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
}

.theme-light {
  --app-bg:        #f0f0f0;
  --topbar-bg:     #ffffff;
  --sidebar-bg:    #f8f8f8;
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
</style>
