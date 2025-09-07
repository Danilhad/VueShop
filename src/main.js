import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import ProductCard from './components/ProductCard.vue'

// Стили PrimeVue
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// Инициализируем Telegram WebApp
if (typeof window !== 'undefined') {
  const script = document.createElement('script')
  script.src = 'https://telegram.org/js/telegram-web-app.js'
  script.async = true
  document.head.appendChild(script)
}

const app = createApp(App)

// Теперь здесь только один вызов use
app.use(PrimeVue, {
  ripple: true
})
app.component('ProductCard', ProductCard)
app.mount('#app')