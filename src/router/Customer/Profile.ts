import requireAuth from "../requireAuth";

const customerProfile = [
    {
        path: '/list-customer-profile',
        component: () => import('../../page/customers/profile/ListCustomerProfile.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    }
]
export default customerProfile;