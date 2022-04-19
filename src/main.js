import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // Ensure we checked auth before each page load.
  // 페이지가 로드되기전에 유효성 검증을 호출하는 로직 제거
  // Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);
  next();

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
