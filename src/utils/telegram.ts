// Проверить, в Telegram ли мы
export function isTelegramWebApp(): boolean {
  return typeof window.Telegram !== 'undefined' && 
         typeof window.Telegram.WebApp !== 'undefined'
}

// Инициализация Telegram WebApp
export function initTelegram(): boolean {
  if (!isTelegramWebApp()) {
    console.log('Telegram WebApp не обнаружен, работаем в браузере')
    return false
  }
  
  try {
    // Применяем тему Telegram
    applyTelegramTheme()
    
    // Настраиваем кнопку "Назад"
    setupBackButton()
    
    // Настраиваем главную кнопку
    setupMainButton()
    
    // Расширяем на весь экран
    expandWebApp()
    
    console.log('Telegram WebApp инициализирован')
    return true
  } catch (error) {
    console.warn('Ошибка инициализации Telegram WebApp:', error)
    return false
  }
}

// Применение темы Telegram
function applyTelegramTheme(): void {
  if (!isTelegramWebApp()) return
  
  const webApp = window.Telegram.WebApp
  
  // Применяем CSS переменные для темы
  if (webApp.themeParams.bg_color) {
    document.documentElement.style.setProperty('--tg-theme-bg-color', webApp.themeParams.bg_color)
  }
  if (webApp.themeParams.text_color) {
    document.documentElement.style.setProperty('--tg-theme-text-color', webApp.themeParams.text_color)
  }
  if (webApp.themeParams.button_color) {
    document.documentElement.style.setProperty('--tg-theme-button-color', webApp.themeParams.button_color)
  }
  if (webApp.themeParams.button_text_color) {
    document.documentElement.style.setProperty('--tg-theme-button-text-color', webApp.themeParams.button_text_color)
  }
  if (webApp.themeParams.secondary_bg_color) {
    document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', webApp.themeParams.secondary_bg_color)
  }
  
  // Устанавливаем фон для body
  document.body.style.backgroundColor = webApp.themeParams.bg_color || '#ffffff'
}

// Настройка кнопки "Назад"
function setupBackButton(): void {
  if (!isTelegramWebApp()) return
  
  const webApp = window.Telegram.WebApp
  
  // Показываем кнопку "Назад" если это не главная страница
  if (window.location.pathname !== '/') {
    webApp.BackButton.show()
  }
  
  // Обработка клика по кнопке "Назад"
  webApp.BackButton.onClick(() => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      closeWebApp()
    }
  })
}

// Настройка главной кнопки
function setupMainButton(): void {
  if (!isTelegramWebApp()) return
  
  const webApp = window.Telegram.WebApp
  
  webApp.MainButton.setText('В корзину')
  webApp.MainButton.color = '#2481cc'
  webApp.MainButton.textColor = '#ffffff'
  webApp.MainButton.enable()
  webApp.MainButton.hide()
  
  webApp.MainButton.onClick(() => {
    console.log('Main button clicked')
    window.location.href = '/cart'
  })
}

// Показать главную кнопку
export function showMainButton(text: string = 'В корзину'): void {
  if (!isTelegramWebApp()) return
  
  const webApp = window.Telegram.WebApp
  webApp.MainButton.setText(text)
  webApp.MainButton.show()
  webApp.MainButton.enable()
}

// Скрыть главную кнопку
export function hideMainButton(): void {
  if (!isTelegramWebApp()) return
  
  const webApp = window.Telegram.WebApp
  webApp.MainButton.hide()
}

// Закрыть WebApp
export function closeWebApp(): void {
  if (isTelegramWebApp()) {
    window.Telegram.WebApp.close()
  }
}

// Расширить на весь экран
export function expandWebApp(): void {
  if (isTelegramWebApp()) {
    window.Telegram.WebApp.expand()
  }
}

// Показать alert в стиле Telegram
export function showAlert(message: string): void {
  if (isTelegramWebApp()) {
    window.Telegram.WebApp.showAlert(message)
  } else {
    alert(message)
  }
}

// Получить данные пользователя
export function getUserData(): any {
  if (isTelegramWebApp() && window.Telegram.WebApp.initDataUnsafe?.user) {
    return window.Telegram.WebApp.initDataUnsafe.user
  }
  return null
}

// Получить данные запуска
export function getLaunchParams(): string {
  if (isTelegramWebApp()) {
    return window.Telegram.WebApp.initData
  }
  return ''
}

// Получить тему (light/dark)
export function getColorScheme(): string {
  if (isTelegramWebApp()) {
    return window.Telegram.WebApp.colorScheme
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Получить версию платформы
export function getPlatform(): string {
  if (isTelegramWebApp()) {
    return window.Telegram.WebApp.platform
  }
  return 'unknown'
}

// Установить цвет header
export function setHeaderColor(color: string): void {
  if (isTelegramWebApp()) {
    window.Telegram.WebApp.setHeaderColor(color)
  }
}

// Установить цвет фона
export function setBackgroundColor(color: string): void {
  if (isTelegramWebApp()) {
    window.Telegram.WebApp.setBackgroundColor(color)
  }
}

// Отправить данные в Telegram
export function sendData(data: string): void {
  if (isTelegramWebApp()) {
    window.Telegram.WebApp.sendData(data)
  }
}