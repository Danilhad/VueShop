<template>
  <div id="app">
    <Menubar :model="menuItems" class="sticky top-0 z-5 shadow-2">
      <template #start>
        <Button 
          v-if="showBackButton"
          icon="pi pi-arrow-left" 
          text
          @click="navigateBack"
          class="mr-2"
        />
        <span class="text-xl font-bold text-primary">🛍️ FashionStore</span>
      </template>
      
      <template #end>
        <Button 
          icon="pi pi-shopping-cart" 
          text
          @click="navigateTo('cart')"
          :badge="totalItems > 0 ? totalItems.toString() : ''"
          badge-class="p-badge-danger"
        />
      </template>
    </Menubar>

    <div class="p-4">
      <HomeView 
        v-if="currentView === 'home'" 
        @navigate="navigateTo"
      />
      
      <ProductView 
        v-if="currentView === 'product'" 
        :product="currentProduct"
        @back="navigateBack"
      />
      
      <CartView 
        v-if="currentView === 'cart'"
        @back="navigateBack"
      />
      
      <CategoryView 
        v-if="currentView === 'category'" 
        :category="currentCategory"
        @back="navigateBack"
        @navigate="navigateTo"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import HomeView from './views/HomeView.vue'
import ProductView from './views/ProductView.vue'
import CartView from './views/CartView.vue'
import CategoryView from './views/CategoryView.vue'
import { useCart } from './stores/cart'

export default {
  name: 'App',
  components: {
    Menubar,
    Button,
    HomeView,
    ProductView,
    CartView,
    CategoryView
  },
  setup() {
    const currentView = ref('home')
    const currentProduct = ref(null)
    const currentCategory = ref(null)
    const { totalItems } = useCart()

    const menuItems = ref([
      {
        label: 'Главная',
        icon: 'pi pi-home',
        command: () => navigateTo('home')
      },
      {
        label: 'Категории',
        icon: 'pi pi-list',
        command: () => navigateTo('category', { slug: 'all' })
      }
    ])

    const showBackButton = computed(() => {
      return currentView.value !== 'home'
    })

    const navigateTo = (view, data = null) => {
      currentView.value = view
      if (view === 'product') {
        currentProduct.value = data
      } else if (view === 'category') {
        currentCategory.value = data
      }
    }

    const navigateBack = () => {
      if (currentView.value !== 'home') {
        currentView.value = 'home'
        currentProduct.value = null
        currentCategory.value = null
      }
    }

    return {
      currentView,
      currentProduct,
      currentCategory,
      menuItems,
      showBackButton,
      totalItems,
      navigateTo,
      navigateBack
    }
  }
}
</script>