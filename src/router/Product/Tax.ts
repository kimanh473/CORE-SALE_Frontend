import requireAuth from "../requireAuth";

const tax = [
    {
        path: '/list-tax',
        component: () => import('../../page/products/Tax/ListTax.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-tax',
        component: () => import('../../page/products/Tax/CreateTax.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-tax/:id',
        component: () => import('../../page/products/Tax/UpdateTax.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default tax;