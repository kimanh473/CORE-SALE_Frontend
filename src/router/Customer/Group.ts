import requireAuth from "../requireAuth";

const customerGroup = [
    {
        path: '/list-group-customer',
        component: () => import('../../page/customers/groupCustomer/ListGroupCustomer.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    }
]

export default customerGroup;