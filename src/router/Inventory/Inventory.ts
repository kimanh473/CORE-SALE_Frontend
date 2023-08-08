import requireAuth from "../requireAuth";

const inventory = [
    {
        path: '/update-inventory/:id',
        component: () => import('../../page/settings/Shop-settings/ManageProduct/ManageInventory/UpdateInventory.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/create-inventory',
        component: () => import('../../page/settings/Shop-settings/ManageProduct/ManageInventory/CreateInventory.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
    {
        path: '/list-inventory',
        component: () => import('../../page/settings/Shop-settings/ManageProduct/ManageInventory/ListInventory.vue'),
        meta: {
            layout: "base-layout",
        },
        beforeEnter: requireAuth,
    },
]
export default inventory;