import requireAuth from "../requireAuth";

const settingSale = [
    {
        path: '/setting-discount',
        component: () => import('../../page/settings/Admin/SettingSale/SettingDiscount.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/setting-customer',
        component: () => import('../../page/settings/Admin/SettingSale/SettingCustomer.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/setting-product',
        component: () => import('../../page/settings/Admin/SettingSale/SettingProduct.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/setting-payment',
        component: () => import('../../page/settings/Admin/SettingSale/SettingPayment.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/setting-order',
        component: () => import('../../page/settings/Admin/SettingSale/SettingOrder.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default settingSale;