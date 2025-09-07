<template>
  <div class="product-view">
    <div class="container" v-if="product">
      <!-- Изображение товара -->
      <div class="product-image-container">
        <img :src="product.image" :alt="product.name" class="product-main-image" />
      </div>

      <!-- Информация о товаре -->
      <div class="product-details">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price-large">{{ formatPrice(product.price) }}</p>
        <p class="product-description">{{ product.description }}</p>

        <!-- Выбор размера -->
        <div class="size-selector" v-if="product.sizes">
          <h3>Размер:</h3>
          <div class="size-options">
            <button 
              v-for="size in product.sizes" 
              :key="size"
              :class="['size-btn', { active: selectedSize === size }]"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Выбор цвета -->
        <div class="color-selector" v-if="product.colors">
          <h3>Цвет:</h3>
          <div class="color-options">
            <button 
              v-for="color in product.colors" 
              :key="color"
              :class="['color-btn', { active: selectedColor === color }]"
              @click="selectedColor = color"
            >
              {{ color }}
            </button>
          </div>
        </div>

        <!-- Кнопка добавления в корзину -->
        <button class="add-to-cart-btn" @click="addToCart">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useCart } from '../stores/cart'
import { useTelegram } from '../composables/useTelegram'

export default {
  name: 'ProductView',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['back'],
  setup(props) {
    const selectedSize = ref(null)
    const selectedColor = ref(null)
    const { addToCart: addToCartStore } = useCart()
    const { showAlert } = useTelegram()

    const formatPrice = (price) => {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB'
      }).format(price / 100)
    }

    const addToCart = () => {
      if ((props.product.sizes && !selectedSize.value) || 
          (props.product.colors && !selectedColor.value)) {
        showAlert('Пожалуйста, выберите размер и цвет')
        return
      }

      addToCartStore(props.product, selectedSize.value, selectedColor.value)
      showAlert('Товар добавлен в корзину!')
    }

    return {
      selectedSize,
      selectedColor,
      formatPrice,
      addToCart
    }
  }
}
</script>

<style scoped>
.product-image-container {
  margin: -16px -16px 0 -16px;
}

.product-main-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  background: var(--tg-theme-secondary-bg-color);
}

.product-details {
  padding: 20px 0;
}

.product-name {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: var(--tg-theme-text-color);
}

.product-price-large {
  font-size: 28px;
  font-weight: 700;
  color: var(--tg-theme-button-color);
  margin: 0 0 16px 0;
}

.product-description {
  font-size: 16px;
  line-height: 1.5;
  color: var(--tg-theme-hint-color);
  margin: 0 0 24px 0;
}

.size-selector,
.color-selector {
  margin-bottom: 24px;
}

.size-selector h3,
.color-selector h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: var(--tg-theme-text-color);
}

.size-options,
.color-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.size-btn,
.color-btn {
  padding: 8px 16px;
  border: 2px solid var(--tg-theme-secondary-bg-color);
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.size-btn.active,
.color-btn.active {
  border-color: var(--tg-theme-button-color);
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}

.add-to-cart-btn {
  width: 100%;
  padding: 16px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
}

.add-to-cart-btn:active {
  opacity: 0.8;
}
</style>