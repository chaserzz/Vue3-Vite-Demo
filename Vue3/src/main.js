import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus"
import 'element-plus/lib/theme-chalk/index.css';
import store from './vueX/store'
import router from "./router/index"

import mitt from "mitt"

import './index.css'


const emitter = mitt()
const bus = {}
bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

const app = createApp(App)
app.config.globalProperties.$bus = bus
//绑定自定义事件
app.directive('heighlight',{
  beforeMount(el,binding,vnode){
    el.style.color = "#ccc"
  }
})
app.use(store).use(router).use(ElementPlus).mount('#app')
