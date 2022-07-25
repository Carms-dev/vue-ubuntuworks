import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.scss';
import Contact from './components/Contact.vue';
import AboutEvent from './components/AboutEvent.vue';
import AccessIcons from './components/AccessIcons.vue';

createApp(App)
  .use(router)
  .component('Contact', Contact)
  .component('AboutEvent', AboutEvent)
  .component('AccessIcons', AccessIcons)
  .mount('#app');