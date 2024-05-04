import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const firebaseConfig = {
  apiKey: 'AIzaSyANEIuuh6JavQERtVLHzS1FeqdRoAEtsVM',
  authDomain: 'vue-pokedex-3330a.firebaseapp.com',
  projectId: 'vue-pokedex-3330a',
  storageBucket: 'vue-pokedex-3330a.appspot.com',
  messagingSenderId: '328460233350',
  appId: '1:328460233350:web:fd7af89465c9b6f52eff07'
}

initializeApp(firebaseConfig)
