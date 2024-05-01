import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'  // Importálás a Calendar nézet számára
import Login from '../views/Login.vue'  // Importálás a Login nézet számára
import Registration from '../views/Registration.vue'
import AbsenceForm from '../views/AbsenceForm.vue'
import MusicLibaryLink from '../views/MusicLibaryLink.vue'
import News from '../views/News.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar  // Útvonal a Naptár nézet számára
    },
    {
      path: '/login',
      name: 'login',
      component: Login  // Útvonal a Login nézet számára
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration  // Útvonal a Regisztráció nézet számára
    },
    {
      path: '/absenceform',
      name: 'absenceform',
      component: AbsenceForm  // Útvonal a Hiányzásbejelentő nézet számára
    },
    {
      path: '/musiclibarylink',
      name: 'musiclibarylink',
      component: MusicLibaryLink  // Útvonal a Kottatár nézet számára
    },
    {
      path: '/news',
      name: 'news',
      component: News // Útvonal a Hírek nézet számára
    }
  ]
})

export default router;

