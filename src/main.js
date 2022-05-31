import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vueMoment from 'vue-moment';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Default from '@/layouts/Default.vue';
import EmptySpace from '@/layouts/Empty.vue';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(fas);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(vueMoment);

Vue.component('default-layout', Default);
Vue.component('empty-layout', EmptySpace);

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
  render: h => h(App),
}).$mount('#app');
