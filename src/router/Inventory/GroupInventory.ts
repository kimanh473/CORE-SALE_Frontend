import requireAuth from "../requireAuth";

const groupInventory = [
    {
        path: '/list-group-inventory',
        component: () => import('../../page/settings/Shop-settings/ManageProduct/ManageGroupInventory/ListGroupInventory.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/update-group-inventory/:id',
        component: () => import('../../page/settings/Shop-settings/ManageProduct/ManageGroupInventory/UpdateGroupInventory.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-group-inventory',
        component: () => import('../../page/settings/Shop-settings/ManageProduct/ManageGroupInventory/CreateGroupInventory.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default groupInventory;