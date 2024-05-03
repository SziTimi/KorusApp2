import { createRouter, createWebHistory } from 'vue-router'
import { isLoggedIn } from '@/utils/http' 

import Calendar from '../views/Calendar.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import AbsenceForm from '../views/AbsenceForm.vue'
import MusicLibaryLink from '../views/MusicLibaryLink.vue'
import News from '../views/News.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, // A Home.vue komponensre mutató referencia
      meta: { requiresAuth: true }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresUnauth: true }
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
      meta: { requiresUnauth: true }
    },
    {
      path: '/absenceform',
      name: 'absenceform',
      component: AbsenceForm,
      meta: { requiresAuth: true }
    },
    {
      path: '/musiclibarylink',
      name: 'musiclibarylink',
      component: MusicLibaryLink,
      meta: { requiresAuth: true }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next('/login');
  } else if (to.path === '/registration' && isLoggedIn()) {
    next();  // Engedélyezd a hozzáférést a regisztrációs oldalhoz bejelentkezett felhasználóknak is
  } else if (to.meta.requiresUnauth && isLoggedIn()) {
    next('/');  // Vagy irányítsd át őket egy másik, specifikus oldalra, pl. felhasználói profil
  } else {
    next();
  }
});


export default router;


