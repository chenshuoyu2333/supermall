
import {createRouter,createWebHistory} from 'vue-router'
const home = () =>import('../views/home/Home')
const cart = () =>import('../views/cart/Cart')
const category = () =>import('../views/category/Category')
const profile = () =>import('../views/profile/Profile')
const routerHistory =createWebHistory()

const routes = [
  {
    path:'',
    redirect:'/home'},
  {
    path: '/home',
    component:home
  },
  {
    path: '/cart',
    component:cart
  },
  {
    path: '/category',
    component:category
  },
  {
    path: '/profile',
    component:profile
  }


]

const router = new createRouter({
  history:routerHistory,
  routes
})

export default router
