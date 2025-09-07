import { ref, computed } from 'vue'

const cartItems = ref([])

export function useCart() {
  const addToCart = (product, selectedSize = null, selectedColor = null) => {
    const existingItem = cartItems.value.find(item => 
      item.productId === product.id && 
      item.size === selectedSize && 
      item.color === selectedColor
    )

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({
        id: Date.now(), // уникальный ID для элемента корзины
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        color: selectedColor,
        quantity: 1
      })
    }
  }

  const removeFromCart = (itemId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId)
  }

  const updateQuantity = (itemId, newQuantity) => {
    const item = cartItems.value.find(item => item.id === itemId)
    if (item) {
      if (newQuantity <= 0) {
        removeFromCart(itemId)
      } else {
        item.quantity = newQuantity
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  })

  const totalItems = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems
  }
}