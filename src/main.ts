/*
 * @Author: htz
 * @Date: 2024-05-29 16:14:59
 * @LastEditors: 
 * @LastEditTime: 2024-05-30 15:29:10
 * @Description: 请填写简介
 */
import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
