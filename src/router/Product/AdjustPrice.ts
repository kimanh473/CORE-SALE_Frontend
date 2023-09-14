import requireAuth from "../requireAuth";

const adjust = [
    {
        path: '/price-adjust',
        component: () => import('../../page/products/AdjustPrice/ListTablePrice.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-adjust-price',
        component: () => import('../../page/products/AdjustPrice/CreateAdjustTable.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-adjust-price/:id',
        component: () => import('../../page/products/AdjustPrice/UpdateAdjustTable.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default adjust;