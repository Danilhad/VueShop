import { ref, computed, watch } from 'vue'

// Интерфейс для товара
export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
}

// Хранилище корзины
export function useCart() {
  const items = ref<CartItem[]>([])
  
  // Загружаем корзину из localStorage
  const loadCart = () => {
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem('cart_items')
        if (saved) {
          items.value = JSON.parse(saved)
        }
      }
    } catch (error) {
      console.error('Ошибка загрузки корзины:', error)
      items.value = []
    }
  }
  
  // Сохраняем корзину в localStorage
  const saveCart = () => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cart_items', JSON.stringify(items.value))
      }
    } catch (error) {
      console.error('Ошибка сохранения корзины:', error)
    }
  }
  
  // Автоматически сохраняем при изменениях
  watch(items, saveCart, { deep: true })
  
  // Вычисляемые свойства
  const totalItems = computed(() => 
    items.value.reduce((total, item) => total + item.quantity, 0)
  )
  
  const totalPrice = computed(() =>
    items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  )
  
  const isEmpty = computed(() => items.value.length === 0)
  
  // Методы
  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    const existingItemIndex = items.value.findIndex(item => item.id === product.id)
    
    if (existingItemIndex !== -1) {
      // Увеличиваем количество существующего товара
      items.value[existingItemIndex].quantity += quantity
    } else {
      // Добавляем новый товар
      items.value.push({
        ...product,
        quantity
      })
    }
  }
  
  const removeFromCart = (productId: number) => {
    const index = items.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }
  
  const updateQuantity = (productId: number, quantity: number) => {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }
  
  const getItemQuantity = (productId: number): number => {
    const item = items.value.find(item => item.id === productId)
    return item ? item.quantity : 0
  }
  
  const clearCart = () => {
    items.value = []
  }
  
  // Загружаем корзину при инициализации
  loadCart()
  
  return {
    // Данные
    items,
    
    // Вычисляемые свойства
    totalItems,
    totalPrice,
    isEmpty,
    
    // Методы
    addToCart,
    removeFromCart,
    updateQuantity,
    getItemQuantity,
    clearCart
  }
}

// Экспортируем тип для использования в компонентах
export type { CartItem }