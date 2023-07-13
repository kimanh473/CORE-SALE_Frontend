import { createRouter, createWebHistory } from 'vue-router'
type TRoute = {
  path: string
  component: () => Promise<any>
  meta: any
}
const route: TRoute[] = [
  {
    path: '/list-source-product',
    component: () => import('./page/settings/Shop-settings/ManageProduct/SourceProduct/ListSourceProduct.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/list-attribute-group',
    component: () => import('./page/products/GroupAttributeProduct/ListGroupAttributeProduct.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/update-attribute-product',
    component: () => import('./page/products/AttributeProduct/UpdateAttribute.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-attribute-product',
    component: () => import('./page/products/AttributeProduct/CreateAttribute.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/list-attribute-product',
    component: () => import('./page/products/AttributeProduct/ListAttributeProduct.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/setting-discount',
    component: () => import('./page/settings/Admin/SettingSale/SettingDiscount.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/setting-customer',
    component: () => import('./page/settings/Admin/SettingSale/SettingCustomer.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/setting-product',
    component: () => import('./page/settings/Admin/SettingSale/SettingProduct.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/setting-payment',
    component: () => import('./page/settings/Admin/SettingSale/SettingPayment.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/setting-order',
    component: () => import('./page/settings/Admin/SettingSale/SettingOrder.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/update-user/:id',
    component: () => import('./page/settings/Admin/SettingUser/UpdateUser.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-user',
    component: () => import('./page/settings/Admin/SettingUser/CreateUser.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/list-user',
    component: () => import('./page/settings/Admin/SettingUser/SettingUserView.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-web',
    component: () => import('./page/settings/Admin/SettingWebsite/CreateWebSite.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/update-web/:id',
    component: () => import('./page/settings/Admin/SettingWebsite/UpdateWebsite.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/list-web',
    component: () => import('./page/settings/Admin/SettingWebsite/ListWebSite.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/update-inventory/:id',
    component: () => import('./page/settings/Shop-settings/ManageProduct/ManageInventory/UpdateInventory.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-inventory',
    component: () => import('./page/settings/Shop-settings/ManageProduct/ManageInventory/CreateInventory.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/list-inventory',
    component: () => import('./page/settings/Shop-settings/ManageProduct/ManageInventory/ListInventory.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/list-group-inventory',
    component: () => import('./page/settings/Shop-settings/ManageProduct/ManageGroupInventory/ListGroupInventory.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-group-inventory',
    component: () => import('./page/settings/Shop-settings/ManageProduct/ManageGroupInventory/CreateGroupInventory.vue'),
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
    component: () => import('./page/settings/Admin/SettingGroupAdmin/GroupAdminView.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/group-admin',
    component: () => import('./page/settings/Admin/SettingGroupAdmin/GroupAdmin.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-group-admin',
    component: () => import('./page/settings/Admin/SettingGroupAdmin/CreateAdminGroup.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/update-group-admin/:id',
    component: () => import('./page/settings/Admin/SettingGroupAdmin/UpdateAdminGroup.vue'),
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
