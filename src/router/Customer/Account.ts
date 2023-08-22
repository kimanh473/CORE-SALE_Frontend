import requireAuth from "../requireAuth";

const customerProfile = [
    {
        path: '/list-account-customer',
        component: () => import('../../page/customers/account/ListCustomerAccount.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]

export default customerProfile;