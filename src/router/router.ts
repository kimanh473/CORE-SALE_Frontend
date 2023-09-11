import { createRouter, createWebHistory } from 'vue-router'
import product from "./Product/Product"
import category from "./Product/Category"
import attribute from "./Product/AttributeProduct"
import settingSale from "./Settings/SettingSale"
import settingSystem from "./Settings/SettingSystem"
import productUnit from './Product/ProductUnit'
import specification from './Product/Specification'
import inventory from './Inventory/Inventory'
import groupInventory from './Inventory/GroupInventory'
import tax from './Product/Tax'
import adjust from "./Product/AdjustPrice";
import currency from './Product/Currency'
import customerProfile from './Customer/Profile'
import customerAccount from './Customer/Account'
import customerGroup from './Customer/Group'
import order from "./Order/Order";
type TRoute = {
  path: string
  component: () => Promise<any>
  meta: any
}
const LoadRoute = (array: Array<TRoute>) => {
  for (let i = 0; i < array?.length; i++) {
    route.push(array[i]);
  }
};
const route: TRoute[] = [
  {
    path: '/list-source-product',
    component: () => import('../page/settings/Shop-settings/ManageProduct/SourceProduct/ListSourceProduct.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/create-category',
    component: () => import('../page/products/ProductCategory/CreateCategory.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/update-category/:id',
    component: () => import('../page/products/ProductCategory/UpdateCategory.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  // {
  //   path: '/update-group-attribute/:id',
  //   component: () => import('../page/products/GroupAttributeProduct/UpdateGroupAttribute.vue'),
  //   meta: {
  //     layout: "base-layout",
  //   },
  // },
  // {
  //   path: '/create-group-attribute',
  //   component: () => import('../page/products/GroupAttributeProduct/CreateGroupAttribute.vue'),
  //   meta: {
  //     layout: "base-layout",
  //   },
  // },
  // {
  //   path: '/list-attribute-group',
  //   component: () => import('../page/products/GroupAttributeProduct/ListGroupAttributeProduct.vue'),
  //   meta: {
  //     layout: "base-layout",
  //   },
  // },
  // {
  //   path: '/update-attribute-product',
  //   component: () => import('../page/products/AttributeProduct/UpdateAttribute.vue'),
  //   meta: {
  //     layout: "base-layout",
  //   },
  // },
  // {
  //   path: '/create-attribute-product',
  //   component: () => import('../page/products/AttributeProduct/CreateAttribute.vue'),
  //   meta: {
  //     layout: "base-layout",
  //   },
  // },





  {
    path: '/login',
    component: () => import('../page/accounts/LoginView.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/confirm-email',
    component: () => import('../page/accounts/ConfirmEmail.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/forgot-pass',
    component: () => import('../page/accounts/ForgotPass.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/setting-menu',
    component: () => import('../page/settings/SettingMenu.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/',
    component: () => import('../page/HomePage.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  {
    path: '/sales-list',
    component: () => import('../page/sales/sales_list.vue'),
    meta: {
      layout: "base-layout",
    },
  },
  // {
  //   path: '/products-list',
  //   component: () => import('../page/products/products_list.vue'),
  //   meta: {
  //     layout: "base-layout",
  //   },
  // },
  {
    path: '/:catchAll(.*)',
    component: () => import('../components/ErrorCom.vue'),
    meta: {
      layout: "base-layout",
    },
  },
]
LoadRoute(product)
LoadRoute(attribute)
LoadRoute(settingSale)
LoadRoute(settingSystem)
LoadRoute(productUnit)
LoadRoute(specification)
LoadRoute(category)
LoadRoute(inventory)
LoadRoute(groupInventory)
LoadRoute(tax)
LoadRoute(adjust)
LoadRoute(currency)
LoadRoute(customerProfile)
LoadRoute(customerAccount)
LoadRoute(customerGroup)
LoadRoute(order)
export default createRouter({
  history: createWebHistory(),
  routes: route
})
