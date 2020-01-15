import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import install from './common/js/install'

Vue.use(VueFullPage)
  .use(install);

import 'reset-css';
import '@/common/font/iconfont.css'
import '@/common/font/iconfont'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// https://www.flqin.com/#page2