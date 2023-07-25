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
    {
        path: '/create-product-unit',
        component: () => import('../../page/products/ProductUnit/CreateProductUnit.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-product-unit/:id',
        component: () => import('../../page/products/ProductUnit/UpdateProductUnit.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default productUnit;