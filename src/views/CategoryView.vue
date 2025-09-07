<template>
  <div class="category-view">
    <div class="container">
      <div v-if="categoryProducts.length === 0" class="empty-category">
        <p>Товары в этой категории скоро появятся</p>
      </div>

      <div class="products-grid">
        <div 
          v-for="product in categoryProducts" 
          :key="product.id"
          class="product-card"
          @click="$emit('navigate', 'product', product)"
        >
          <img 
            :src="product.image" 
            :alt="product.name"
            class="product-image"
          />
          <div class="product-info">
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-price">{{ formatPrice(product.price) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { products } from '../data/products'

export default {
  name: 'CategoryView',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  emits: ['back', 'navigate'],
  setup(props) {
    const categoryProducts = computed(() => {
      return products.filter(product => product.category === props.category.slug)
    })

    const formatPrice = (price) => {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB'
      }).format(price / 100)
    }

    return {
      categoryProducts,
      formatPrice
    }
  }
}
</script>

<style scoped>
.empty-category {
  text-align: center;
  padding: 60px 20px;
  color: var(--tg-theme-hint-color);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.product-card {
  background: var(--tg-theme-section-bg-color);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:active {
  transform: scale(0.98);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  background: var(--tg-theme-secondary-bg-color);
}

.product-info {
  padding: 12px;
}

.product-title {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: 1.3;
  color: var(--tg-theme-text-color);
}

.product-price {
  font-weight: 600;
  color: var(--tg-theme-button-color);
  font-size: 16px;
  margin: 0;
}
</style>