import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BoxView1 from '@/views/BoxView1.vue'
import BoxView2 from '@/views/BoxView2.vue'
import BoxView3 from '@/views/BoxView3.vue'
import BoxView4 from '@/views/BoxView4.vue'
import BoxView5 from '@/views/BoxView5.vue'
import BoxView6 from '@/views/BoxView6.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        BoxView1: BoxView1,
        BoxView2: BoxView2,
        BoxView3: BoxView3,
        BoxView4: BoxView4,
        BoxView5: BoxView5,
        BoxView6: BoxView6
      }
    }/*
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/BoxView1',
      component: BoxView1
    },
    {
      path: '/BoxView2',
      component: BoxView2
    },
    {
      path: '/BoxView3',
      component: BoxView3
    },
    {
      path: '/BoxView4',
      component: BoxView4
    },
    {
      path: '/BoxView5',
      component: BoxView5
    },
    {
      path: '/BoxView6',
      component: BoxView6
    },
    */
    
  ]
})

export default router
