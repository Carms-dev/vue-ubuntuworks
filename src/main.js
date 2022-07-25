import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './main.scss'
import Contact from './components/Contact.vue';

createApp(App)
  .use(router)
  .component('Contact', Contact)
  .mount('#app')