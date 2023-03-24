import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import InvalidView from '../views/InvalidView.vue'
import ItemMREView from '../views/ItemMREView.vue'
import ItemView from '../views/ItemView.vue'
import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/invalid',
      name: 'invalid',
      component: InvalidView
    },
    {
      path: '/list/MRE',
      name: 'MRE',
      component: ItemMREView
    },
    {
      path: '/list/item',
      name: "item",
      component: ItemView

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
