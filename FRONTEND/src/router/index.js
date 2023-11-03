import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tourguide',
      name: 'tourguide',
    
      component: () => import('../views/TourguideView.vue')
    },
    {
      path: '/tourist',
      name: 'tourist',
    
      component: () => import('../views/TouristView.vue')
    },
    {
      path: '/boat',
      name: 'boat',
    
      component: () => import('../views/BoatOwnerView.vue')
    },
    {
      path: '/AdminReservationView',
      name: 'AdminReservationView',
    
      component: () => import('../views/AdminReservationView.vue')
    }
  ]
})

export default router
