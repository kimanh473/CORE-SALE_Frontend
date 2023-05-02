
const admin = [
    {
        path: "/login",
        name:"/login",
        component: import("../pages/login.vue")
    },

    {
        path:"/admin",
        component:import("../pages/master/dashboard.vue"),
        children:[
            {
                path: "home",
                name:"home",
                component: import("../pages/home.vue")
            },
            {
                path: "ecomerce",
                name:"admin-ecomerce",
                component: import("../pages/ecomerce.vue")
            },
            //quản lý nhóm kho
            {
                path: "warehouse-group-list",
                name:"admin-warehouse-group-list",
                component: import("../pages/warehouse_group/list.vue"),
            },
            {
                path: "warehouse-group-create",
                name:"admin-warehouse-group-create",
                component: import("../pages/warehouse_group/create.vue"),
            },
            {
                path: "warehouse-group-edit",
                name:"admin-warehouse-group-edit",
                component: import("../pages/warehouse_group/edit.vue"),
            },
            //quản lý các kho
            {
                path: "warehouse-list",
                name:"admin-warehouse-list",
                component: import("../pages/warehouse/list.vue"),
            },
            {
                path: "warehouse-create",
                name:"admin-warehouse-create",
                component: import("../pages/warehouse/create.vue"),
            },
            {
                path: "warehouse-edit",
                name:"admin-warehouse-create",
                component: import("../pages/warehouse/edit.vue"),
            },
        ]
    }
]
export default admin
