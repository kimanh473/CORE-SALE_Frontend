import requireAuth from "../requireAuth";

const product = [
    {
        path: '/products-list',
        component: () => import('../../page/products/ListProduct.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default product;