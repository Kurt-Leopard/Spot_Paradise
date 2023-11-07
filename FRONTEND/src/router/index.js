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
    },
    {
      path: '/MaintenanceView',
      name: 'MaintenanceView',
    
      component: () => import('../views/MaintenanceView.vue')
    },{
      path: '/BoatdetailsView',
      name: 'BoatdetailsView',
    
      component: () => import('../views/BoatdetailsView.vue')
    },
    ,{
      path: '/AnnouncementView',
      name: 'AnnouncementView',
    
      component: () => import('../views/AnnouncementView.vue')
    },
    {
      path: '/NotificationView',
      name: 'NotificationView',
    
      component: () => import('../views/NotificationView.vue')
    },
    {
      path: '/TouristdestinationView',
      name: 'TouristdestinationView',
    
      component: () => import('../views/TouristdestinationView.vue')
    },
    {
      path: '/PackageView',
      name: 'PackageView',
    
      component: () => import('../views/PackageView.vue')
    }
  ]
})

export default router
