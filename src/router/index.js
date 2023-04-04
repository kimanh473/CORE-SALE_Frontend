import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'

import home from '../pages/home'
import login from "../pages/login.vue";
import profile from '../pages/profile'
import ecomerce from "@/pages/ecomerce.vue";

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
          path: '/profile',
          component:profile
        },
          {
              name: 'ecomerce',
              path: '/ecomerce',
              component:ecomerce
          }
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
  