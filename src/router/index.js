import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/toprated',
    name: 'toprated',
    component: () => import('../views/TopRatedMovies.vue')
  },
  {
    path: '/latest',
    name: 'latest',
    component: () => import('../views/LatestMovies.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('@/views/MoviePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
