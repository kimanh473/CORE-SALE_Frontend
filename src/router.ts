import { createRouter, createWebHistory } from 'vue-router'
type TRoute = {
  path: string
  component: () => Promise<any>
  meta: any
}
const route: TRoute[] = [
  {
    path: '/list-inventory',
    component: () => import('./page/settings/Shop-settings/ManageInventory/ListInventory.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/list-category',
    component: () => import('./page/settings/Shop-settings/CategoryList.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/group-admin-view',
    component: () => import('./page/settings/Admin/GroupAdminView.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/group-admin',
    component: () => import('./page/settings/Admin/GroupAdmin.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-group-admin',
    component: () => import('./page/settings/Admin/CreateAdminGroup.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/update-group-admin/:id',
    component: () => import('./page/settings/Admin/UpdateAdminGroup.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/login',
    component: () => import('./page/accounts/LoginView.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/forgot-pass',
    component: () => import('./page/accounts/ForgotPass.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/setting-menu',
    component: () => import('./page/settings/SettingMenu.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/',
    component: () => import('./page/HomePage.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/sales-list',
    component: () => import('./page/sales/sales_list.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/products-list',
    component: () => import('./page/products/products_list.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./components/ErrorCom.vue'),
    meta: {
      layout: "base-layout",
    },
  },
]
export default createRouter({
  history: createWebHistory(),
  routes: route
})
