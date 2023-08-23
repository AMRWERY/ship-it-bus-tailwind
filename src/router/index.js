import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/orders",
      name: "Orders",
      component: () => import('../components/Orders.vue'),
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
