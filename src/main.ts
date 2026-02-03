import './assets/scss/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { register } from 'swiper/element/bundle';

register();

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
