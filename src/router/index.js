import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HoursView from '../views/HoursView.vue'
import ServicesView from '../views/ServicesView.vue'
import InfoView from '../views/InfoView.vue'
import ContactView from '../views/ContactView.vue'
import ImprintView from '../views/ImprintView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/hours',
      name: 'hours',
      component: HoursView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: ImprintView,
    },
  ],
})

export default router
