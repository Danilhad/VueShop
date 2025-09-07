// plugins/primevue.js
import { createApp } from 'vue'
import PrimeVue from 'primevue/config' // Добавьте этот импорт
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import MenuBar from 'primevue/menubar'
import Column from 'primevue/column'
import Menu from 'primevue/menu'
import Card from 'primevue/card'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

export default {
  install(app) {
    // Сначала инициализируем PrimeVue
    app.use(PrimeVue, {
      ripple: true
    })
    
    app.component('Button', Button)
    app.component('InputText', InputText)
    app.component('MenuBar', MenuBar)
    app.component('Dialog', Dialog)
    app.component('DataTable', DataTable)
    app.component('Column', Column)
    app.component('Menu', Menu)
    app.component('Card', Card)
    app.component('Toast', Toast)
    app.component('ToastService', ToastService)
  }
}