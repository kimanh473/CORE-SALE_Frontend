import requireAuth from '@/router/requireAuth'

const order = [
  {
    path: '/orders-list/page/:page',
    component: () => import('@/page/orders/ListOrder.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/create-order',
    component: () => import('@/page/orders/CreateOrder.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/detail-order/:id',
    component: () => import('@/page/orders/DetailOrder.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
]
export default order
