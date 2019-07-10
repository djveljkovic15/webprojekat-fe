import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Secure from './views/Secure'
import Login from './views/Login'

import Admin from './views/Admin' 
import User from './views/User'

import Coupons from './views/Coupons'
import Users from './views/Users'
import Shops from './views/Shops'

import Shop from './views/Shop'
/**
 * Ovde kreiramo root Vue instancu. Ona nam predstavlja sponu
 * izmedju html-a (public/index.html) i root Vue komponente (App.vue).
 * 
 * Vue instanci prosledjujemo konfiguracioni objekat.
 * Moguce konfiguracije mozete naci na https://vuejs.org/v2/api/#Options-Data
 * 
 * Prosledili smo komponentu koju zelimo da renderujemo nakon sto smo je importovali na liniji 2. 
 * Komponenta ce biti renderovana na mestu HTML elementa sa id-jem id='app'.
 */ 
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
     ,
    {
      path: '/admin',
      name: 'admin',
      component: Admin
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure
  },
  {
    path: '/coupons',
    name: 'coupons',
    component: Coupons
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/shops',
    name: 'shops',
    component: Shops
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: Shop
  }
  ]

});
new Vue({
  el: "#app",
  router: router,
  render: h => h(App),
}).$mount('#app')
