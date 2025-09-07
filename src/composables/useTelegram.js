import { ref, onMounted } from 'vue'

export function useTelegram() {
  const tg = ref(null)
  const user = ref(null)
  const isReady = ref(false)

  const initTelegram = () => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      tg.value = window.Telegram.WebApp
      tg.value.ready()
      tg.value.expand()
      user.value = tg.value.initDataUnsafe?.user
      isReady.value = true
      console.log('Telegram WebApp initialized')
    } else {
      console.warn('Telegram WebApp not available - running in browser mode')
      // Для разработки вне Telegram
      tg.value = {
        showAlert: (msg) => alert(msg),
        showConfirm: (msg, callback) => {
          const confirmed = confirm(msg)
          if (callback) callback(confirmed)
          return confirmed
        },
        close: () => console.log('App would close now'),
        ready: () => console.log('App ready'),
        expand: () => console.log('App expanded'),
        initDataUnsafe: { user: null }
      }
      isReady.value = true
    }
  }

  const showAlert = (message) => {
    if (tg.value) {
      tg.value.showAlert(message)
    } else {
      alert(message)
    }
  }

  const showConfirm = (message) => {
    return new Promise((resolve) => {
      if (tg.value && tg.value.showConfirm) {
        tg.value.showConfirm(message, (confirmed) => {
          resolve(confirmed)
        })
      } else {
        const confirmed = confirm(message)
        resolve(confirmed)
      }
    })
  }

  const closeApp = () => {
    if (tg.value && tg.value.close) {
      tg.value.close()
    }
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      // Ждем загрузки Telegram WebApp
      if (window.Telegram?.WebApp) {
        initTelegram()
      } else {
        // Если скрипт еще не загрузился, ждем
        setTimeout(initTelegram, 1000)
      }
    }
  })

  return {
    tg,
    user,
    isReady,
    initTelegram,
    showAlert,
    showConfirm,
    closeApp
  }
}