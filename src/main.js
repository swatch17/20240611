import Vue from "vue";
import App from './App.vue'
import router from '@/router'
import  DataV from '@jiaminghi/data-view'
import '@/styles/index.scss'

Vue.use(DataV)

const app = new Vue({
  router,
  render: h => h(App)
})
app.$mount('#app')

