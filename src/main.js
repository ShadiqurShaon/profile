import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './routes'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(vueRouter);

const router = new vueRouter({
  routes:Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

