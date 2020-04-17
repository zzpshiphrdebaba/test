import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL="/api"
Vue.prototype.axios = axios
//安装代码  npm install --save vue-fragment 
//隐藏菜单栏配置
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
