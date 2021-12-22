import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: () => import(/* webpackChunkName: "mobile" */ '../views/Mobile.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/check_in',
    name: 'Check_in',
    component: () => import(/* webpackChunkName: "check_in" */ '../views/Check_in.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
