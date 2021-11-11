const routes = [
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('@/views/Testing.vue'),
    children: [
      {
        path: 'anime',
        name: 'TestingAnime',
        component: () => import('@/views/Testing/TestingAnime.vue'),
      },
      {
        path: 'buttons',
        name: 'TestingButtons',
        component: () => import('@/views/Testing/TestingButtons.vue'),
      },
      {
        path: 'form',
        name: 'TestingForm',
        component: () => import('@/views/Testing/TestingForm.vue'),
      },
      {
        path: 'indicators',
        name: 'TestingIndicators',
        component: () => import('@/views/Testing/TestingIndicators.vue'),
      },
      {
        path: 'modals',
        name: 'TestingModals',
        component: () => import('@/views/Testing/TestingModals.vue'),
      },
      {
        path: 'dropdown',
        name: 'TestingDropdown',
        component: () => import('@/views/Testing/TestingDropdown.vue'),
      },
      {
        path: 'munchkin-calculator',
        name: 'TestingMunchkinCalculator',
        component: () => import('@/views/Testing/TestingMunchkinCalculator.vue'),
      },
      {
        path: 'others',
        name: 'TestingOthers',
        component: () => import('@/views/Testing/TestingOthers.vue'),
      },
    ],
  },
]

export default routes
