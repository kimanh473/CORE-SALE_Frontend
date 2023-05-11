const admin = [
    {
        path: "/login",
        name: "/login",
        component: import("../pages/login.vue")
    },

    {
        path: "/admin",
        component: import("../pages/master/dashboard.vue"),
        children: [
            {
                path: "home",
                name: "home",
                component: import("../pages/home.vue")
            },
            {
                path: "ecomerce",
                name: "admin-ecomerce",
                component: import("../pages/ecomerce.vue")
            },
            //quản lý nhóm kho
            {
                path: "warehouse-group-list",
                name: "admin-warehouse-group-list",
                component: import("../pages/warehouse_group/list.vue"),
            },
            {
                path: "warehouse-group-create",
                name: "admin-warehouse-group-create",
                component: import("../pages/warehouse_group/create.vue"),
            },
            {
                path: "warehouse-group-edit/:id/",
                name: "admin-warehouse-group-edit",
                component: import("../pages/warehouse_group/edit.vue"),
            },
            //quản lý các kho
            {
                path: "warehouse-list",
                name: "admin-warehouse-list",
                component: import("../pages/warehouse/list.vue"),
            },
            {
                path: "warehouse-create",
                name: "admin-warehouse-create",
                component: import("../pages/warehouse/create.vue"),
            },
            {
                path: "warehouse-edit",
                name: "admin-warehouse-create",
                component: import("../pages/warehouse/edit.vue"),
            },
            //Quản lý danh mục sản phẩm
            {
              path: "category-list",
              name:"admin-category-list",
              component: import("../pages/category/list.vue")
            },
            {
              path: "category-create",
              name:"admin-category-create",
              component: import("../pages/category/create.vue")
            },
            {
              path: "category-edit",
              name:"admin-category-edit",
              component: import("../pages/category/edit.vue")
            },
            //quản lý dịch vụ chăm sóc
            {
                path: "careservice-list",
                name: "admin-careservice-list",
                component: import("../pages/care_service/list.vue"),
            },
            {
                path: "careservice-create",
                name: "admin-careservice-create",
                component: import("../pages/care_service/create.vue"),
            },
            {
                path: "careservice-edit",
                name: "admin-careservice-edit",
                component: import("../pages/care_service/edit.vue"),
            },
            //quản lý phân hệ
            {
                path: "subsystem-list",
                name: "admin-subsystem-list",
                component: import("../pages/subsystem/list.vue")
            },
            {
                path: "subsystem-create",
                name: "admin-subsystem-create",
                component: import("../pages/subsystem/create.vue")
            },
            {
                path: "subsystem-edit/:id/",
                name: "admin-subsystem-edit",
                component: import("../pages/subsystem/edit.vue"),
                props:true
            },
            //quản lý thuế
            {
                path: "tax-list",
                name: "admin-tax-list",
                component: import("../pages/Tax/list.vue")
            },
            {
                path: "tax-create",
                name: "admin-tax-create",
                component: import("../pages/Tax/create.vue")
            },
            {
                path: "tax-edit",
                name: "admin-tax-edit",
                component: import("../pages/Tax/edit.vue")
            }

        ],
        beforeEnter:(to, from, next)=>{
            console.log('middleware');
            next()
        }
    }
]
export default admin
