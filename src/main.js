import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import './registerServiceWorker'

import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.scss";

import LoginPage from './pages/LoginPage';
import PatientsPage from './pages/PatientsPage';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/patients',
      component: PatientsPage
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
