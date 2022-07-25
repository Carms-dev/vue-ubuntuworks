import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.scss';
import Contact from './components/report/tiles/Contact.vue';
import AboutEvent from './components/report/tiles/AboutEvent.vue';
import AccessIcons from './components/report/tiles/AccessIcons.vue';
import EventLanguages from './components/report/tiles/EventLanguages.vue';

createApp(App)
  .use(router)
  .component('Contact', Contact)
  .component('AboutEvent', AboutEvent)
  .component('AccessIcons', AccessIcons)
  .component('EventLanguages', EventLanguages)
  .mount('#app');