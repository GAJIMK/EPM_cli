import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/",
      name: "Home",
      component: () => import("@/view/Login.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "empty" },
      component: () => import("@/view/Login.vue"),
    },
    {
      path: "/user",
      name: "user",
      meta: { layout: "empty" },
      component: () => import("@/view/user/UserPage.vue"),
    },
    {
      path: "/userwrite",
      name: "userwrite",
      meta: { layout: "empty" },
      component: () => import("@/view/user/UserWrite.vue"),
    },
    // {
    //   path: "/manage",
    //   name: "Management",
    //   component: () => import("@/components/Management.vue"),
    // },
  ],
});
