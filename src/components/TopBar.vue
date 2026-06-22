<template>
  <!-- 顶部导航栏 -->
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
      <span class="version-badge">v1.0</span>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.topbar {
  height: 52px;
  background: #0d0d0d;
  border-bottom: 1px solid #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  flex-shrink: 0;
  z-index: 100;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  cursor: default;
  user-select: none;
}

.logo-k {
  color: #ffffff;
}

.logo-rest {
  color: #555;
}

.topbar-divider {
  width: 1px;
  height: 18px;
  background: #2a2a2a;
}

.topbar-subtitle {
  font-size: 13px;
  color: #555;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.3px;
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.topbar-link {
  font-size: 13px;
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.topbar-link:hover {
  color: #ccc;
}

.version-badge {
  font-size: 11px;
  color: #444;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  padding: 3px 8px;
  border-radius: 20px;
  font-family: 'Space Grotesk', sans-serif;
}
</style>
