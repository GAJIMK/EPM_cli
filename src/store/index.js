
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

import {getInfo} from '@/api/auth/auth'
import {accountTeamNm} from '@/api/account/account'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    accountId: '',
    accountNm: '',
    auth: '',
    email:'',
    birthDay:'',
    phoneNo:'',
    teamNm:'',
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
     },
     fetchedEmail(state){
      return state.email
     },
     fetchedBday(state){
      return state.birthDay
     },
     fetchedPno(state){
      return state.phoneNo
     },
     fetchdeTeamNm(state){
      return state.teamNm
     }

  },
  mutations: {
    async setUser(state, data) {
      state.accountId = data.accountId
      state.accountNm = data.accountNm
      state.auth = data.role
      state.acceptLv = data.acceptLv
    },
    logout(state) {
      state.accountId = ''
      state.accountNm = ''
      state.auth = ''
    },
    checkUser(state) {
      if (localStorage.getItem('accountId')) {
        state.accountId = localStorage.getItem('accountId')
        state.accountNm = localStorage.getItem('accountNm')
        state.auth = localStorage.getItem('role')
        state.acceptLv = localStorage.getItem('acceptLv')
      }
    },
    async set_getinfo(state ,data){
      state.email = data.list[0].email
      state.birthDay = moment(data.list[0].birthDay).format('YYYY-MM-DD')
      state.phoneNo = data.list[0].phoneNo
    },
    async set_getTeamNm(state ,data){
      state.teamNm = data.data.teamNm
    }

  },
  actions: {
    show(mutations) {
      console.log(mutations)
    },
    fetchInfo({commit}, accountId){
        return new Promise((resolve,reject)=>{
          getInfo(accountId).then(({data})=>{            
            commit('set_getinfo', data);
            resolve(true)
          })
          .catch(error=>{
            console.log(error)
            reject('데이터 로드에 실패하였습니다.')
          })
         
        })
    },
    fetchTeamNm({commit},accountId){
      return new Promise((resolve,reject)=>{
        accountTeamNm(accountId).then(({data})=>{
          console.log(data)
          commit('set_getTeamNm', data);
          resolve(true)
        })
        .catch(error=>{
          console.log(error)
          reject('데이터 로드에 실패하였습니다.')
        })
      })
    }
  },
})

export default store
