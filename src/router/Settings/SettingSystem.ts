import requireAuth from "../requireAuth";

const settingSystem = [
  {
    path: '/update-user/:id',
    component: () => import('../../page/settings/Admin/SettingUser/UpdateUser.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/create-user',
    component: () => import('../../page/settings/Admin/SettingUser/CreateUser.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/list-user',
    component: () => import('../../page/settings/Admin/SettingUser/SettingUserView.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/create-web',
    component: () => import('../../page/settings/Admin/SettingWebsite/CreateWebSite.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/update-web/:id',
    component: () => import('../../page/settings/Admin/SettingWebsite/UpdateWebsite.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/list-web',
    component: () => import('../../page/settings/Admin/SettingWebsite/ListWebSite.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/group-admin-view',
    component: () => import('../../page/settings/Admin/SettingGroupAdmin/GroupAdminView.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/group-admin',
    component: () => import('../../page/settings/Admin/SettingGroupAdmin/GroupAdmin.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/create-group-admin',
    component: () => import('../../page/settings/Admin/SettingGroupAdmin/CreateAdminGroup.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
  {
    path: '/update-group-admin/:id',
    component: () => import('../../page/settings/Admin/SettingGroupAdmin/UpdateAdminGroup.vue'),
    meta: {
      layout: "base-layout",
    },
    beforeEnter: requireAuth,
  },
]
export default settingSystem;