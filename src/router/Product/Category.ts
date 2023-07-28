import requireAuth from "../requireAuth";

const category = [
    {
        path: '/category-list',
        component: () => import('../../page/products/ProductCategory/CreateCategory.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default category;