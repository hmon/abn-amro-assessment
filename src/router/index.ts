import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue")
  },
  {
    path: "/s",
    name: "search",
    props: true,
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/SearchResultView.vue")
  },
  {
    path: "/show/:id",
    name: "show",
    props: true,
    component: () =>
      import(/* webpackChunkName: "show" */ "../views/ShowView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
