<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { isTelegramWebApp, closeWebApp } from '../utils/telegram'

const router = useRouter()
const showSearch = ref(false)
const searchQuery = ref('')

const showBackButton = computed(() => router.currentRoute.value.path !== '/')

const handleBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else if (isTelegramWebApp()) {
    closeWebApp()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <header class="header">
    <div class="main-header">
      <button 
        v-if="showBackButton" 
        @click="handleBack"
        class="back-button"
      >
        ←
      </button>

      <router-link to="/" class="logo">
        <span class="logo-title">VueShop</span>
      </router-link>

      <div class="header-actions">
        <button @click="showSearch = !showSearch" class="action-button">
          🔍
        </button>
      </div>
    </div>

    <div v-if="showSearch" class="search-container">
      <input
        v-model="searchQuery"
        placeholder="Поиск товаров..."
        class="search-input"
      />
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--tg-theme-secondary-bg-color);
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  height: 56px;
}

.back-button {
  padding: 8px;
  color: var(--tg-theme-button-color);
  background: none;
  border: none;
  font-size: 18px;
}

.logo {
  text-decoration: none;
  color: inherit;
}

.logo-title {
  font-size: 18px;
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.action-button {
  padding: 8px;
  background: none;
  border: none;
  color: var(--tg-theme-button-color);
  font-size: 18px;
}

.search-container {
  padding: 0 16px 12px;
}

.search-input {
  width: 100%;
  padding: 12px;
  background: var(--tg-theme-secondary-bg-color);
  border: none;
  border-radius: 8px;
  color: var(--tg-theme-text-color);
  outline: none;
}

.search-input::placeholder {
  color: var(--tg-theme-hint-color);
}
</style>