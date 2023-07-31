import requireAuth from "../requireAuth";

const specification = [
    {
        path: '/list-specification',
        component: () => import('../../page/products/SpecificationProduct/ListSpecification.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-specification',
        component: () => import('../../page/products/SpecificationProduct/CreateSpecification.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-specification/:id',
        component: () => import('../../page/products/SpecificationProduct/UpdateSpecification.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    // {
    //     path: '/create-product-unit',
    //     component: () => import('../../page/products/ProductUnit/CreateProductUnit.vue'),
    //     meta: {
    //         layout: "base-layout",
    //     },
    //     beforeEnter: requireAuth,
    // },
    // {
    //     path: '/update-product-unit/:id',
    //     component: () => import('../../page/products/ProductUnit/UpdateProductUnit.vue'),
    //     meta: {
    //         layout: "base-layout",
    //     },
    //     beforeEnter: requireAuth,
    // },
]
export default specification;