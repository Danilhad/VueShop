<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import { onMounted } from 'vue'
import { initTelegram } from '@/utils/telegram'

onMounted(() => {
  // Инициализируем Telegram WebApp
  initTelegram()
})
</script>

<style>
.main-content {
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
}

/* CSS переменные для темы Telegram */
:root {
  --tg-theme-bg-color: #ffffff;
  --tg-theme-text-color: #000000;
  --tg-theme-button-color: #2481cc;
  --tg-theme-button-text-color: #ffffff;
  --tg-theme-secondary-bg-color: #f0f0f0;
  --tg-theme-hint-color: #999999;
}

body {
  margin: 0;
  padding: 0;
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

#app {
  max-width: 100%;
  overflow-x: hidden;
}

/* Безопасные зоны для iPhone */
@supports (padding: max(0px)) {
  .main-content {
    padding-left: max(16px, env(safe-area-inset-left));
    padding-right: max(16px, env(safe-area-inset-right));
  }
}
</style>