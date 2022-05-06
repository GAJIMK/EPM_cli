import Vue from 'vue';
import Vuex from 'vuex';
import {
  getUserFromCookie,
  saveUserToCookie,
  deleteCookie,
} from '@/utils/cookies';

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    mainTitle: '',
    subTitle: '',
    menus: [],
    userAuth: '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUserName(state, username) {
      state.username = username;
    },
    clearUserName(state) {
      state.username = '';
    },
    setMainTitle(state, title) {
      state.mainTitle = title;
    },
    clearMainTitle(state) {
      state.mainTitle = '';
    },
    setSubTitle(state, title) {
      state.subTitle = title;
    },
    clearSubTitle(state) {
      state.subTitle = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setUserName', data.username);
      saveUserToCookie(data.username);

      return data;
    },
    async LOGOUT({ commit }) {
      let data = await logout();
      commit('clearUserName');
      deleteCookie('dims_user');
      deleteCookie('DIMSSESSION');
      return data;
    },
  },
});
