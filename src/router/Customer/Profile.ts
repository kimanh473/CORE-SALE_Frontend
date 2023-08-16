import requireAuth from "../requireAuth";

const customerProfile = [
    {
        path: '/list-customer-profile',
        component: () => import('../../page/customers/profile/ListCustomerProfile.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-customer-profile',
        component: () => import('../../page/customers/profile/CreateCustomerProfile.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-customer-profile/:id',
        component: () => import('../../page/customers/profile/UpdateCustomerProfile.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    }

]



export default customerProfile;