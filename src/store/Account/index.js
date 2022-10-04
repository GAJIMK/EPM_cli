import Vue from 'vue'
import Vuex , {Store} from 'vuex'
import accountInfo from '@/api/account/account'
Vue.use(Vuex)

export default new Vuex.Store({

    state:{

    },
    getters:{},
    mutations:{
        set_account(state, data){
            
        }
    },
    actions:{
        fetch_account({commit}){
            return new Promise((resolve, reject) =>{
                    accountInfo().then(({data})=>{
                        commit('set_account', data);
                        console.log( data )
                        resolve(true)
                    })
                    .catch(error=>{
                        console.log(error)
                        reject('데이터 로드를 실패했습니다. ')
                    })
            })
        }
    },

})