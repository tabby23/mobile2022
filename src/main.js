import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 使用懒加载
import { Lazyload } from 'vant'
import { Notify } from 'vant'

import axios from "axios"

// 全局注册
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.use(Lazyload)
Vue.use(Notify)
export default {
  components: {
    [Notify.Component.name]: Notify.Component,
  },
};

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
