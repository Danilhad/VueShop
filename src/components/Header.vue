<template>
  <header class="header">
    <div class="header-content">
      <button v-if="showBack" class="back-btn" @click="handleBack">←</button>
      <h1 class="header-title">{{ title }}</h1>
      <button class="cart-btn" @click="handleCart">🛒 {{ cartItemsCount }}</button>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useCart } from '../stores/cart'

export default {
  props: {
    title: {
      type: String,
      default: 'Одежда'
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  emits: ['back', 'navigate'],
  setup(props, { emit }) {
    const { totalItems } = useCart()

    const cartItemsCount = computed(() => totalItems.value)

    const handleBack = () => {
      emit('back')
    }

    const handleCart = () => {
      emit('navigate', 'cart')
    }

    return {
      cartItemsCount,
      handleBack,
      handleCart
    }
  }
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--tg-theme-bg-color);
  border-bottom: 1px solid var(--tg-theme-secondary-bg-color);
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: var(--tg-theme-text-color);
}

.back-btn, .cart-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--tg-theme-button-color);
  padding: 8px;
}

.cart-btn {
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 14px;
}

.back-btn:active, .cart-btn:active {
  opacity: 0.8;
  transform: scale(0.95);
}
</style>