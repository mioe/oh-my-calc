/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Home from '@/views/Home.vue'

/* Routes group */
import TestingRoutes from './_testing-routes'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/munchkin-calculator-offline',
    name: 'MunchkinCalculatorOffline',
    component: () => import('@/views/MunchkinCalculatorOffline.vue'),
  },
  ...TestingRoutes,
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Error404.vue'),
  },
]

// console.log('🚥 routes', routes)

export default routes
