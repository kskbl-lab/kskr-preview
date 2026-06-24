<template>
  <aside class="sidebar">
    <!-- 分类列表 -->
    <div class="category-list">
      <div
        v-for="cat in categories"
        :key="cat.id"
        class="category-item"
        :class="{ expanded: expandedCategory === cat.id }"
      >
        <!-- 分类头 -->
        <div
          class="category-header"
          :class="{ active: expandedCategory === cat.id }"
          @click="toggleCategory(cat.id)"
        >
          <div class="category-icon" v-html="cat.icon"></div>
          <span class="category-name">{{ cat.name }}</span>
          <div class="category-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        <!-- 插件列表 -->
        <transition name="slide">
          <div class="plugin-list" v-show="expandedCategory === cat.id">
            <div
              v-for="plugin in cat.plugins"
              :key="plugin.id"
              class="plugin-item"
              :class="{
                selected: selectedPlugin === plugin.id,
                coming: plugin.status === 'coming'
              }"
              @click="selectPlugin(plugin)"
            >
              <div class="plugin-dot"></div>
              <div class="plugin-info">
                <span class="plugin-name">{{ plugin.name }}</span>
                <span class="plugin-name-zh">{{ plugin.nameZh }}</span>
              </div>
              <span v-if="plugin.status === 'coming'" class="plugin-tag">即将</span>
              <span v-else class="plugin-tag active-tag">可用</span>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- 底部信息 -->
    <div class="sidebar-footer">
      <div class="footer-text">
        <span class="footer-count">{{ totalPlugins }} 个插件</span>
        <span class="footer-divider">·</span>
        <span class="footer-available">{{ availableCount }} 已上线</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { categories } from '../data/plugins.js'

const emit = defineEmits(['select-plugin'])

const expandedCategory = ref('distortion')
const selectedPlugin = ref('wave-blur')

const totalPlugins = computed(() => categories.reduce((sum, c) => sum + c.plugins.length, 0))
const availableCount = computed(() => categories.reduce((sum, c) => sum + c.plugins.filter(p => p.status === 'active').length, 0))

function toggleCategory(id) {
  expandedCategory.value = expandedCategory.value === id ? null : id
}

function selectPlugin(plugin) {
  if (plugin.status === 'coming') return
  selectedPlugin.value = plugin.id
  emit('select-plugin', plugin)
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: var(--sidebar-bg, #0d0d0d);
  border-right: 1px solid var(--border, #1e1e1e);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

.category-list {
  flex: 1;
  overflow-y: auto;
  padding: 12px 0;
}

.category-list::-webkit-scrollbar {
  width: 4px;
}
.category-list::-webkit-scrollbar-track { background: transparent; }
.category-list::-webkit-scrollbar-thumb {
  background: var(--scrollbar, #2a2a2a);
  border-radius: 2px;
}

/* 分类头 */
.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 16px;
  cursor: pointer;
  transition: background 0.15s;
  user-select: none;
}

.category-header:hover {
  background: var(--ctrl-hover, #141414);
}

.category-header.active {
  background: var(--ctrl-hover, #141414);
}

.category-icon {
  color: var(--text-muted, #555);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: color 0.15s;
}

.category-header.active .category-icon,
.category-header:hover .category-icon {
  color: var(--text-dim, #999);
}

.category-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted, #666);
  transition: color 0.15s;
}

.category-header.active .category-name,
.category-header:hover .category-name {
  color: var(--text-primary, #ccc);
}

.category-arrow {
  color: var(--border-hover, #333);
  display: flex;
  align-items: center;
  transition: transform 0.2s, color 0.15s;
}

.category-item.expanded .category-arrow {
  transform: rotate(180deg);
  color: var(--text-muted, #555);
}

/* 插件列表 */
.plugin-list {
  padding: 4px 0 8px 0;
  overflow: hidden;
}

.plugin-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 16px 7px 36px;
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
}

.plugin-item:hover:not(.coming) {
  background: var(--ctrl-bg, #111);
}

.plugin-item.selected {
  background: var(--ctrl-active, #161616);
}

.plugin-item.coming {
  cursor: default;
  opacity: 0.45;
}

.plugin-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--border, #2a2a2a);
  flex-shrink: 0;
  transition: background 0.15s;
}

.plugin-item.selected .plugin-dot {
  background: var(--text-primary, #fff);
}

.plugin-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.plugin-name {
  font-size: 12.5px;
  color: var(--text-muted, #555);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.15s;
}

.plugin-item.selected .plugin-name,
.plugin-item:hover:not(.coming) .plugin-name {
  color: var(--text-primary, #ccc);
}

.plugin-name-zh {
  font-size: 11px;
  color: var(--text-muted, #444);
  transition: color 0.15s;
}

.plugin-item.selected .plugin-name-zh {
  color: var(--text-dim, #555);
}

.plugin-tag {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 3px;
  background: var(--ctrl-bg, #1a1a1a);
  color: var(--text-muted, #3a3a3a);
  border: 1px solid var(--border, #222);
  flex-shrink: 0;
}

.active-tag {
  background: var(--ctrl-active, rgba(255,255,255,0.04));
  color: var(--text-dim, #888);
  border-color: var(--border, #2a2a2a);
}

/* 动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
  max-height: 300px;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

/* 底部 */
.sidebar-footer {
  padding: 14px 16px;
  border-top: 1px solid var(--border, #1a1a1a);
}

.footer-text {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--text-muted, #555);
}

.footer-divider {
  color: var(--border, #2a2a2a);
}
</style>
