// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import CusAvatar from '../src/index.js'
import App from './App.vue'
// import router from './router'
console.log(CusAvatar)
Vue.use(CusAvatar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
}).$mount()
