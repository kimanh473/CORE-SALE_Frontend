import { createRouter, createWebHistory } from 'vue-router'
type TRoute = {
  path: string
  component: () => Promise<any>
  meta: any
}
const route: TRoute[] = [
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
