<template>
  <div>
    <MenuTitle menuTitle="마이페이지🧑‍💻" />
    
        <b-img src="https://hr.office.hiworks.com/dartmedia.co.kr/common/profile/image/40052/80/main" rounded="circle" class="bill-img" 
        v-if="this.ji"/>
        <b-img src="https://ifh.cc/g/qvtozK.png"  rounded="circle" class="bill-img" v-if="this.ga"/>
     <hr>
    <div class="partTitle name">{{accountNm}}</div>
    <div class="partTitle"> 이메일 :  {{email}}</div>
    <div class="partTitle"> 생년월일 :  {{birthDay}}</div>
    <div class="partTitle"> 연락처 :  {{phoneNumber}} </div>
    <div class="partTitle"> 소속 팀 : {{teamNm}}</div>


    
  </div>
</template>

<script >
import { mapGetters } from 'vuex';
import MenuTitle from '@/components/common/MenuTitleForm.vue';
export default {
  computed:{
    ...mapGetters({
      accountNm:'fetchedNm',
      accountId:'fetchedId',
      email:'fetchedEmail',
      birthDay:'fetchedBday',
      phoneNumber:'fetchedPno',
      teamNm : 'fetchdeTeamNm'
    })
  },
  data(){
    return{
      setDay :'',
      ga:false, 
      ji:false}
  },
  components:{
    MenuTitle
  },
  mounted(){
    this.$store.dispatch('fetchInfo', this.accountId)
    this.$store.dispatch('fetchTeamNm', this.accountId)
    if( this.accountId == 'gajung.kim'){
      this.ga =true
    }
    else if( this.accountId == 'jihye.son'){
      this.ji = true
    }
  }
  
};
</script>

<style lang="scss" scoped>
@import '@/scss/font.scss';
.title {
  font-family: 'GongGothicMedium';
  font-size: 30px;
  padding: 1%;
}

.partTitle {
  font-family: 'GongGothicMedium';
  font-size: 16px;
  padding: 0.7% 0% 0.7% 0%;
} 
.name{
  font-size: 22px;
  padding: 2% 0% 2% 0%;
}


</style>
