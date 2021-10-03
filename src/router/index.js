
import {createRouter,createWebHistory} from 'vue-router'
const home = () =>import('../views/home/Home')
const cart = () =>import('../views/cart/Cart')
const category = () =>import('../views/category/Category')
const profile = () =>import('../views/profile/Profile')
import Detail from "views/detail/Detail";
const routerHistory =createWebHistory()

const routes = [
  {
    path:'',
    redirect:'/home'},
  {
    path: '/home',
    component:home,
    meta: {
      keepAlive: true //设置页面是否需要使用缓存
    },
  },
  {
    path: '/cart',
    component:cart,
  },
  {
    path: '/category',
    component:category,
  },
  {
    path: '/profile',
    component:profile,
  },
  {
    path: '/detail/:iid',
    component:Detail,
  }


]

const router = new createRouter({
  history:routerHistory,
  routes
})

export default router
