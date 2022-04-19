import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/components/Body.vue"),
    },
    {
      path: "/",
      name: "Login",
      component: () => import("@/components/Login.vue"),
    },
    {
      path: "/",
      name: "SignUp",
      component: () => import("@/components/SignUp.vue"),
    },
  ],
});
