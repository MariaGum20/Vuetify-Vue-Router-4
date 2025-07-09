import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import AppLink from '@/components/AppLink.vue'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

createApp(App)
.component('AppLink', AppLink)
.use(router)
.use(vuetify)
.mount('#app')
