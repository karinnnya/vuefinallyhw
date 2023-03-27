import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/front/ForntView.vue"),

      children: [
        {
          path: "",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/front/ProductsView.vue"),
        },
        {
          path: "articles",
          component: () => import("../views/front/ArticlesView.vue"),
        },
        {
          path: "login",
          component: () => import("../views/front/LoginView.vue"),
        },
        {
          path: "user",
          component: () => import("../views/front/UserView.vue"),
        },
        {
          path: "ticket",
          component: () => import("../views/front/TicketCheckView.vue"),
        },
        {
          path: "check",
          component: () => import("../views/front/CheckView.vue"),
        },
      ],
    },

    {
      path: "/admin",
      component: () => import("../views/admin/AdminView.vue"),
      meta: {
        requiresAdmin: true,
      },
      children: [
        {
          path: "products",
          component: () => import("../views/admin/AdminProducts.vue"),
        },
        {
          path: "articles",
          component: () => import("../views/admin/AdminArticles.vue"),
        },
        {
          path: "checks",
          component: () => import("../views/admin/AdminChecks.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAdmin = localStorage.getItem("admin") === "true";
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (!isAdmin) {
      next({ path: "/" });
      return;
    }
  }
  next();
});

export default router;
