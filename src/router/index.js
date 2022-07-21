// import Vue from 'vue'
import Home from '../views/Home.vue';
import Start from '../views/Start.vue';
import Module from '../views/Module.vue';
import ReportShow from '../views/ReportShow.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/reports/new',
    name: 'start',
    component: Start
  },
  {
    path: '/reports/:report_id/modules/:module_key',
    name: 'module',
    component: Module
  },
  {
    path: '/reports/:report_id',
    name: 'show',
    component: ReportShow
  },
  // {
  //   path: '/reports/:report_id/edit',
  //   name: 'edit',
  //   component: () => import('../components/ReportEdit')
  // }
]

const router = createRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  history: createWebHistory(),
  routes
})

export default router
