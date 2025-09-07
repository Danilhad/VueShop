<template>
  <div class="p-4">
    <h1>Главная страница</h1>
    <p>Простой компонент для тестирования</p>
    
    <ProductCard
      img="https://images.unsplash.com/photo-1741939964416-78a1a07df8d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUQwJUJFJUQwJUI0JUQwJUI1JUQwJUI2JUQwJUI0JUQwJUIwfGVufDB8fDB8fHww"
      img-alt="Описание изображения"
      eyebrow="Специальное предложение"
      title="Отдых на Бали"
      pricing="от 50 000 ₽"
      url="/vacations/bali"
    />

  </div>
</template>

<script>
// Импортируйте необходимые компоненты PrimeVue
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'HomeView',
  // Зарегистрируйте компоненты локально
  components: {
    Button,
    Card,
    InputText,
    Dialog,
    ProductCard
  },
  setup() {
    return {
      // ваши данные и методы
    }
  }
}
</script>
<style scoped>
/* Пока без стилей */
</style>