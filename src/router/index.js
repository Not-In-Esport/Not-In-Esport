import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import TeamView from '../views/TeamView.vue'
import PlayerView from '../views/PlayerView.vue'
import StaffView from '../views/StaffView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerView
    },
    {
      path: '/staff',
      name: 'staff',
      component: StaffView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    }
  ]
})

export default router
