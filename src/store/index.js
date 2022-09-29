import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    accountId: '',
    accountNm: '',
    auth: '',
  },
  getters: {
    fetchedId(state){
     return state.accountId
    },
    fetchedNm(state){
      return state.accountNm
     },
     fetchedAuth(state){
      return state.auth
     }
  },
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
