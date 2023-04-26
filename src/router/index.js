import { createRouter, createWebHistory } from "vue-router";

import admin from "@/router/admin.js";
// import list from

  const routes = [
      ...admin
    //   {
    //       name:'login',
    //       path: '/login',
    //       component: login
    //   },
    // {
    //   name: 'Dashboard',
    //   path: '/home',
    //   component: dashboard,
    //   children: [
    //      {
    //       name: 'home',
    //       path: '/',
    //       component:home
    //     },
    //     {
    //       name: 'profile',
    //       path: 'profile',
    //       component:profile
    //     },
    //       {
    //           name: 'ecomerce',
    //           path: 'ecomerce',
    //           component:ecomerce
    //       },
    //
    //       {
    //           name: '/list',
    //           path: '/list',
    //           component:list
    //       },
    //       {
    //           name: 'create',
    //           path: 'create',
    //           component:create
    //       },
    //       {
    //           name: 'edit',
    //           path: 'edit',
    //           component:edit
    //       },
    //   ]
    // },

  ];

    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });

export default router
