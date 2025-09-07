declare global {
  interface Window {
    Telegram: {
      WebApp: {
        // Основные методы
        close: () => void
        expand: () => void
        showAlert: (message: string) => void
        showConfirm: (message: string, callback: (confirmed: boolean) => void) => void
        showPopup: (params: any, callback?: (buttonId: string) => void) => void
        sendData: (data: string) => void
        setHeaderColor: (color: string) => void
        setBackgroundColor: (color: string) => void
        
        // Свойства
        initData: string
        initDataUnsafe: {
          user?: {
            id: number
            first_name: string
            last_name?: string
            username?: string
            language_code?: string
            is_premium?: boolean
          }
          query_id?: string
          auth_date?: number
          hash?: string
        }
        themeParams: {
          bg_color?: string
          text_color?: string
          hint_color?: string
          link_color?: string
          button_color?: string
          button_text_color?: string
          secondary_bg_color?: string
        }
        colorScheme: 'light' | 'dark'
        platform: 'android' | 'ios' | 'web' | 'webk' | 'webkit' | 'tdesktop' | 'unknown'
        version: string
        isExpanded: boolean
        viewportHeight: number
        viewportStableHeight: number
        
        // События
        onEvent: (eventType: string, callback: Function) => void
        offEvent: (eventType: string, callback: Function) => void
        
        // BackButton
        BackButton: {
          show: () => void
          hide: () => void
          onClick: (callback: Function) => void
          offClick: (callback: Function) => void
          isVisible: boolean
        }
        
        // MainButton
        MainButton: {
          text: string
          color: string
          textColor: string
          isVisible: boolean
          isActive: boolean
          show: () => void
          hide: () => void
          enable: () => void
          disable: () => void
          setText: (text: string) => void
          onClick: (callback: Function) => void
          offClick: (callback: Function) => void
        }
      }
    }
  }
}

export {}