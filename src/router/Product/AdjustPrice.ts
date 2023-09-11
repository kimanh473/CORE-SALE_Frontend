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
]
export default adjust;