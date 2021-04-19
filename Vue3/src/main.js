import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import store from './vueX/store'
import router from "./router/index"
import mitt from "mitt"

const emitter = mitt()
const bus = {}
bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

const APP = createApp(App)
APP.config.globalProperties.$bus = bus
APP.use(store).use(router).mount('#app')
