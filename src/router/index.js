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
      component: () => import("@/components/common/Login.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "empty" },
      component: () => import("@/components/common/Login.vue"),
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("@/components/common/SignUp.vue"),
    },
    // {
    //   path: "/manage",
    //   name: "Management",
    //   component: () => import("@/components/Management.vue"),
    // },
  ],
});
