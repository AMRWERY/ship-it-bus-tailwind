import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/sign-up",
    //   name: "Register",
    //   component: () => import('../auth/Register.vue'),
    // },
    // {
    //   path: "/login",
    //   name: "Login",
    //   component: () => import('../auth/Login.vue'),
    // },
    // {
    //   path: "/reset-password",
    //   name: "ResetPassword",
    //   component: () => import('../auth/ResetPassword.vue'),
    // },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/invoices",
      name: "Invoices",
      component: () => import('../components/Invoices.vue'),
    },
    {
      path: "/products",
      name: "Products",
      component: () => import('../components/Products.vue'),
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import('../components/Categories.vue'),
    },
    {
      path: "/:catchAll(.*)",
      name: "Error404",
      component: () => import("../views/Error404.vue"),
    },
  ],
});

export default router;
