import requireAuth from '@/router/requireAuth'

const order = [
  {
    path: '/list-order',
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
]
export default order
