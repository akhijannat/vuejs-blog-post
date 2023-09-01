import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/HomeView.vue");
const Details = () => import("../views/PostDetail.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/detail",
      name: "post",
      component: Details,
    },
  ],
});

export default router;
