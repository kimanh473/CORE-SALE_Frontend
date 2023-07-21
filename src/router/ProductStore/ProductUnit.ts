import requireAuth from "../requireAuth";

const productUnit = [
    {
        path: '/list-product-unit',
        component: () => import('../../page/products/ProductUnit/ListProductUnit.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default productUnit;