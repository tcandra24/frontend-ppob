import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/products/:code",
      name: "products",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/topup/:code",
      name: "topup",
      component: () => import("../views/Topup.vue"),
    },
  ],
});

export default router;
