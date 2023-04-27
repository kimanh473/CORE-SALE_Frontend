import { createRouter, createWebHistory } from "vue-router";

import admin from "../router/admin.js";

// import list from

  const routes = [
      ...admin
  ];

    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });

export default router
