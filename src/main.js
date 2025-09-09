import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDL9ahXqppxbLI_TSy0viG16FWyaXrMN9g",
  authDomain: "week7-yicheng.firebaseapp.com",
  projectId: "week7-yicheng",
  storageBucket: "week7-yicheng.firebasestorage.app",
  messagingSenderId: "388463051321",
  appId: "1:388463051321:web:df95e9054e119a584803e8",
  measurementId: "G-DBGSHBBV4L"
}

initializeApp(firebaseConfig)

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
app.mount('#app')