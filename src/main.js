import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Swipe, SwipeItem } from 'vant';

createApp(App).use(router).use(Swipe).use(SwipeItem).use(ElementPlus).mount('#app')
