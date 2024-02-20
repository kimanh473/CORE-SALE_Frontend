import requireAuth from '@/router/requireAuth'

const product = [
  {
    path: '/products-list/page/:page',
    component: () => import('@/page/products/ListProduct.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/create-product',
    component: () => import('@/page/products/CreateProduct.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/update-product/:id',
    component: () => import('@/page/products/UpdateProduct.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
  //sp sàn shopee
  {
    path: '/products-list-shopee/page/:page',
    component: () => import('@/page/products/ListProductShopee.vue'),
    meta: {
      layout: 'base-layout',
    },
    beforeEnter: requireAuth,
  },
]
export default product
