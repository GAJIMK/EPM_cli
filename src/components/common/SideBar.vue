<template>    
    <span id="icon-bar">       
        <router-link to="/" class="home-btn"><i class="fa fa-home ">Home</i> </router-link>       
        <router-link to="/notice-board" class="else-btn">게시글 구경가기 </router-link>        
        <router-link to="/user-write" v-if="user" class="else-btn">내역서 작성하기</router-link>       
        <router-link to="/user" v-if="user" class="else-btn">과거내역 조회</router-link>         
        <router-link to="/approval" v-if="user" class="else-btn">승인내역 조희</router-link>       
        <router-link to="/myPage" v-if="user" class="else-btn">마이페이지</router-link>      
        <router-link to="/expense-list" v-if="admin" class="else-btn">경비항목 관리</router-link>   
        <router-link to="/grade-manage" v-if="admin" class="else-btn">등급별 관리</router-link>     
    
        <div class="else-btn btnd"  @click="handleUsersList()"
        v-if="admin" >사용자 경비조회</div>
    
        <router-link to="/submit-day" v-if="admin" class="else-btn">경비등록 기한</router-link>       
        <ToastMsgg ref="toastMsgg" :ToastCon="ToastCon" class="toast" />
    </span>
    </template>
    <script>
        import moment from 'moment'
    import ToastMsgg from '@/components/ToastMsgg.vue'
    import { mapGetters } from 'vuex';
    export default {
        data(){
            return{
            user:false,
            admin:false,
            ToastCon: '로그인 후 사용 가능합니다❗',
        }
        },
        computed:{
            ...mapGetters({
                accountId:'fetchedId',
                accountNm:'fetchedNm',
                auth:'fetchedAuth',
            })
        },
        mounted(){
            this.authCheck()
        },
        components: { ToastMsgg },
        methods:{
           authCheck(){
                if(this.auth === 'USER'){
                    this.user = true
                }
                else if( this.auth ==='ADMIN'){
                    this.user = true,
                    this.admin = true
                }
           },
           handleUsersList() {
          if (this.checkSession())
            this.$router.push({
              name: 'usersExpense',
              params: { date: moment(new Date()).format('YYYY-MM') },
            })
        },
        checkSession() {
          const state = this.accountId ? true : false
          if (state) return state
          else this.$refs.toastMsgg.createToast()
        },
        },    
    };
    </script>
    
    
    <style>
    #icon-bar {    
        background-color: rgb(255, 223, 158);      
        overflow-x: hidden; 
        display: flex;
        flex-direction: column;
        height: 100vh;
        top: 0;
          }  
    #icon-bar a {    
       font-family: 'LeferiPoint-BlackA', sans-serif;
        display: block;    
        text-align: center;     
        transition: all 0.3s ease;    
        color: white;    
        margin-top: 11%;
    } 
    .home-btn{
       font-family: 'LeferiPoint-BlackA', sans-serif;
        font-size: var(--font-size-l) ;
    }
    .else-btn{
       font-family: 'LeferiPoint-BlackA', sans-serif;
        font-size: var(--font-size);
    }
    .btnd{
        color: white;
        display: flex;
        justify-content: space-around;
        margin-top : 12%;
        cursor: pointer;
    }
    </style>
    
    