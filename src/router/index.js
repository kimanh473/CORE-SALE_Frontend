import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'

import home from '../pages/home'
import login from "../pages/login.vue";
import profile from '../pages/profile'
import ecomerce from "@/pages/ecomerce.vue";
import list from "@/pages/warehouse_group/list.vue";
import create from "@/pages/warehouse_group/create.vue";
import edit from "@/pages/warehouse_group/edit.vue";
// import list from

  const routes = [
      {
          name:'login',
          path: '/login',
          component: login
      },
    {
      name: 'Dashboard',
      path: '/home',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/',
          component:home
        },
        {
          name: 'profile',
          path: 'profile',
          component:profile
        },
          {
              name: 'ecomerce',
              path: 'ecomerce',
              component:ecomerce
          },

          {
              name: '/list',
              path: '/list',
              component:list
          },
          {
              name: 'create',
              path: 'create',
              component:create
          },
          {
              name: 'edit',
              path: 'edit',
              component:edit
          },
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  