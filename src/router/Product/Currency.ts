import requireAuth from "../requireAuth";

const currency = [
    {
        path: '/list-currency',
        component: () => import('../../page/products/Currency/ListCurrency.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-currency',
        component: () => import('../../page/products/Currency/CreateCurrency.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-currency/:id',
        component: () => import('../../page/products/Currency/UpdateCurrency.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default currency;