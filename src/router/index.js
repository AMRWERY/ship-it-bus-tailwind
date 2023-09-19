import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../auth/Login.vue"),
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
      component: () => import("../auth/ResetPassword.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        isAuthRequired: true
      }
    },
    {
      path: "/invoices",
      name: "Invoices",
      component: () => import("../components/Invoices.vue"),
      meta: {
        isAuthRequired: true
      }
    },
    {
      path: "/orders",
      name: "Orders",
      component: () => import("../components/Orders.vue"),
      meta: {
        isAuthRequired: true
      }
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../components/Products.vue"),
      meta: {
        isAuthRequired: true
      }
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("../components/Categories.vue"),
      meta: {
        isAuthRequired: true
      }
    },
    {
      path: "/mail",
      name: "Mail",
      component: () => import("../components/Mail.vue"),
      meta: {
        isAuthRequired: true
      }
    },
    {
      path: "/terms-and-conditions",
      name: "TermsAndConditions",
      component: () => import("../components/TermsAndConditions.vue"),
    },
    {
      path: "/f-a-q",
      name: "FAQ",
      component: () => import("../components/FAQ.vue"),
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: () => import("../components/PrivacyPolicy.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "Error404",
      component: () => import("../views/Error404.vue"),
    },
  ],
});

router.beforeEach(async (to, _, next) => {
  const authRequired = to.meta.isAuthRequired
  const store = useStore()

  if (authRequired && !store.state.auth.userToken) {
    next({ name: 'Login' })
  } else if (store.state.auth.userToken && to.name === 'Login') {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router;
