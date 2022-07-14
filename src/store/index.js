import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    accountId: '',
    accountNm: '',
    auth: '',
  },
  getters: {},
  mutations: {
    async setUser(state, data) {
      state.accountId = data.accountId;
      state.accountNm = data.accountNm;
      state.auth = data.role;
    },
    logout(state) {
      state.accountId = '';
      state.accountNm = '';
      state.auth = '';
    },
  },
  actions: {
    show(mutations) {
      console.log(mutations);
    },
  },
});

export default store;
