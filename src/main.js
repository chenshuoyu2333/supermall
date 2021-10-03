import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  bus from './bus'
const  app =createApp(App)
app.use(router).use(ElementPlus).mount('#app')
app.config.globalProperties.$bus=bus
