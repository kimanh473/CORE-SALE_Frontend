import requireAuth from '@/router/requireAuth'

const customerAccount = [
  {
    path: '/list-customer-account',
    component: () => import('@/page/customers/account/ListCustomerAccount.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
]

export default customerAccount
