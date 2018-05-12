import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './routes'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCKgVDDMYuMwWU9O9b0C28nIEKVlVTSHP8",
  authDomain: "profile-e916a.firebaseapp.com",
  databaseURL: "https://profile-e916a.firebaseio.com",
  projectId: "profile-e916a",
  storageBucket: "profile-e916a.appspot.com",
  messagingSenderId: "283123027809"
};
firebase.initializeApp(config);


Vue.use(BootstrapVue);
Vue.use(vueRouter);


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

