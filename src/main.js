
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './mock/mockServer'
import loading from './common/img/timg.gif'

/* eslint-disable no-new */
Vue.use (VueLazyload , {
  loading
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
