import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './routes'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase'
import config from 'config'

firebase.initializeApp(config);


Vue.use(BootstrapVue);
Vue.use(vueRouter);

var serviceAccount = require('../../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://profile-e916a.firebaseio.com'
});




const messaging = firebase.messaging();

messaging.requestPermission().then(function() {

  console.log('Notification permission granted.');

 return messaging.getToken();

}).then(function(token){

  console.log(token);

}).catch(function(err) {

  console.log('Unable to get permission to notify.', err);
  
});

messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
  // ...
});


console.log('its working');
const router = new vueRouter({
  routes:Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

