
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/playground',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/playground.vue') }
    ]
  },
  {
    path: '/test_latest',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/test_latest.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
