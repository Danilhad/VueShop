<template>
  <div>
    <Toolbar class="mb-4">
      <template #start>
        <Button 
          icon="pi pi-arrow-left" 
          text
          @click="$emit('back')"
          class="mr-3"
        />
        <span class="text-xl font-semibold">Товар</span>
      </template>
    </Toolbar>

    <Card v-if="product">
      <template #header>
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-20rem object-cover"
          @error="handleImageError"
        />
      </template>
      
      <template #title>
        <div class="text-2xl font-bold">{{ product.name }}</div>
      </template>
      
      <template #subtitle>
        <div class="flex align-items-center gap-2 mt-2">
          <Tag 
            :value="product.inStock ? 'В наличии' : 'Нет в наличии'" 
            :severity="product.inStock ? 'success' : 'secondary'" 
          />
          <span class="text-600">{{ getCategoryName(product.category) }}</span>
        </div>
      </template>

      <template #content>
        <p class="text-600 line-height-3">{{ product.description }}</p>
        
        <Divider />
        
        <div class="flex align-items-center justify-content-between mb-4">
          <span class="text-3xl font-bold text-primary">
            {{ formatPrice(product.price) }}
          </span>
          <Rating :modelValue="4.5" readonly :cancel="false" />
        </div>

        <div v-if="product.sizes && product.sizes.length > 0" class="mb-4">
          <label class="font-semibold block mb-2">Размер:</label>
          <SelectButton
            v-model="selectedSize"
            :options="product.sizes"
            class="w-full"
          />
        </div>

        <div v-if="product.colors && product.colors.length > 0" class="mb-4">
          <label class="font-semibold block mb-2">Цвет:</label>
          <SelectButton
            v-model="selectedColor"
            :options="product.colors"
            class="w-full"
          />
        </div>
      </template>

      <template #footer>
        <Button 
          label="Добавить в корзину" 
          icon="pi pi-shopping-cart"
          :disabled="!product.inStock"
          class="w-full"
          size="large"
          @click="addToCart"
        />
      </template>
    </Card>
  </div>
</template>

<script>
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import Tag from 'primevue/tag'
import SelectButton from 'primevue/selectbutton'
import Rating from 'primevue/rating'
import Divider from 'primevue/divider'
import { useCart } from '../stores/cart'
import { useTelegram } from '../composables/useTelegram'
import { categories } from '../data/products'

export default {
  name: 'ProductView',
  components: {
    Card,
    Button,
    Toolbar,
    Tag,
    SelectButton,
    Rating,
    Divider
  },
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

    const getCategoryName = (categorySlug) => {
      const category = categories.find(cat => cat.slug === categorySlug)
      return category ? category.name : categorySlug
    }

    const handleImageError = (event) => {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjFGNUY5Ii8+CjxwYXRoIGQ9Ik0xNTAgODBWMjIwTTIyMCAxNTBINDAiIHN0cm9rZT0iIzk5OTk5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo='
    }

    const addToCart = () => {
      const needsSize = props.product.sizes && props.product.sizes.length > 0
      const needsColor = props.product.colors && props.product.colors.length > 0
      
      if ((needsSize && !selectedSize.value) || (needsColor && !selectedColor.value)) {
        showAlert('Пожалуйста, выберите все необходимые параметры')
        return
      }

      addToCartStore(props.product, selectedSize.value, selectedColor.value)
      showAlert('Товар добавлен в корзину!')
    }

    return {
      selectedSize,
      selectedColor,
      formatPrice,
      getCategoryName,
      handleImageError,
      addToCart
    }
  }
}
</script>