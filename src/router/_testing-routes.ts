const routes = [
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('@/views/Testing.vue'),
    children: [
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
        path: 'others',
        name: 'TestingOthers',
        component: () => import('@/views/Testing/TestingOthers.vue'),
      },
    ],
  },
]

export default routes
