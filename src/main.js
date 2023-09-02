import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import routes from "./route/route";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router, axios).mount("#app");
