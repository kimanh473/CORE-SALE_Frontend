import requireAuth from "../requireAuth";

const attribute = [
    {
        path: '/update-group-attribute/:id',
        component: () => import('../../page/products/GroupAttributeProduct/UpdateGroupAttribute.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-group-attribute',
        component: () => import('../../page/products/GroupAttributeProduct/CreateGroupAttribute.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/list-attribute-group',
        component: () => import('../../page/products/GroupAttributeProduct/ListGroupAttributeProduct.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-attribute-product',
        component: () => import('../../page/products/AttributeProduct/UpdateAttribute.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-attribute-product',
        component: () => import('../../page/products/AttributeProduct/CreateAttribute.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/list-attribute-product',
        component: () => import('../../page/products/AttributeProduct/ListAttributeProduct.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/list-attribute-product',
        component: () => import('../../page/products/AttributeProduct/ListAttributeProduct.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default attribute;