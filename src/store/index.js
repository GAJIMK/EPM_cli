import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    accountId: '',
    accountNm: '',
  },
  getters: {},
  mutations: {
    async login() {
      await login(data);
    },
  },
  actions: {},
});

export default store;
