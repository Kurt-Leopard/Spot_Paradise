// main.js

import Login from './views/Login.vue'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App);


const sharedState = localStorage.getItem('isLog') === 'true';

if (sharedState) {
  app.use(router);
  app.mount('#app');
} else {
  const loginApp = createApp(Login);
  loginApp.use(router);
  loginApp.mount('#login');
}
