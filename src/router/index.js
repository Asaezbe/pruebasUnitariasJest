import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import PostsView from '@/views/PostsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "posts" */ '../views/PostsView.vue')
  },
  {
    path: '/Contact',     // Define la ruta /contact
    name: 'Contact',
    component: ContactView   // Asocia la ruta con el componente Contact
  },
  {
    path: '/About',     // Define la ruta /contact
    name: 'About',
    component: AboutView   // Asocia la ruta con el componente Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
