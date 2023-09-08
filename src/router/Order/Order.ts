import requireAuth from "../requireAuth";

const order = [
    {
        path: '/list-order',
        component: () => import('../../page/customers/order/ListOrder.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-order',
        component: () => import('../../page/customers/order/CreateOrder.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    }
]
export default order;