import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from '@/router'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
