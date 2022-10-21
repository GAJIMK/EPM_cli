<template>
  <div class="container">
    <MenuTitle menuTitle="마이페이지🧑‍💻" />

    <b-img
      src="https://hr.office.hiworks.com/dartmedia.co.kr/common/profile/image/40052/80/main"
      rounded="circle"
      class="bill-img"
      v-if="this.ji"
    />
    <b-img
      src="https://ifh.cc/g/qvtozK.png"
      rounded="circle"
      class="bill-img"
      v-if="this.ga"
    />
    <b-img
      src="https://office.hiworks.com/dartmedia.co.kr/common/profile/image/18054/80/main"
      rounded="circle"
      class="bill-img"
      v-if="this.yo"
    />
    <hr />
    <div class="partTitle name">{{ accountNm }}</div>
    <div class="partTitle">이메일 : {{ email }}</div>
    <div class="partTitle">생년월일 : {{ birthDay }}</div>
    <div class="partTitle">연락처 : {{ phoneNumber }}</div>
    <div class="partTitle">소속 팀 : {{ teamNm }}</div>
    <b-button
      v-b-modal="'modal-prevent-closing'"
      class=" inline-btn btn-warning chPw-btn"
      @click="showModal()"
    >
      패스워드 변경
    </b-button>

    <b-modal id="modal-prevent-closing" @hidden="resetModal" @show="resetModal">
      <template #modal-title>
        인트라넷 비밀번호 변경
      </template>
      <div class="line">
        <label for="firstIp">새 비밀번호 :</label>
        <b-input class="firstIp" v-model="newPw" type="password"></b-input>
      </div>

      <div class="line">
        <label for="firstIp">비밀번호 확인 : </label>
        <b-input class="firstIp" v-model="rePw" type="password"></b-input>
      </div>

      <template #modal-footer="{ cancel }">
        <b-button size="sm" variant="danger" @click="okay()">
          수정
        </b-button>
        <b-button size="sm" @click=";[cancel()]">
          취소
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuTitle from '@/components/common/MenuTitleForm.vue'
import { changePw } from '@/api/account/account'
export default {
  computed: {
    ...mapGetters({
      accountNm: 'fetchedNm',
      accountId: 'fetchedId',
      email: 'fetchedEmail',
      birthDay: 'fetchedBday',
      phoneNumber: 'fetchedPno',
      teamNm: 'fetchdeTeamNm',
    }),
  },
  data() {
    return {
      ga: false,
      ji: false,
      yo: false,
      pwch: false,
      newPw: '',
      rePw: '',
    }
  },
  components: {
    MenuTitle,
  },
  mounted() {
    this.$store.dispatch('fetchInfo', this.accountId)
    this.$store.dispatch('fetchTeamNm', this.accountId)
    if (this.accountId == 'gajung.kim') {
      this.ga = true
    } else if (this.accountId == 'jihye.son') {
      this.ji = true
    } else if (this.accountId == 'yongseok.jang') {
      this.yo = true
    }
    console.log(this.newPw)
  },
  methods: {
    showModal() {
      this.pwch = true
    },
    resetModal() {
      this.newPw = ''
      this.rePw = ''
    },
    async okay() {
      if (this.newPw == '' || this.rePw == '') {
        alert('비밀번호를 입력해주세요.')
      } else if (this.newPw !== this.rePw) {
        alert('비밀번호가 일치하지 않습니다.')
      } else if (this.newPw === this.rePw) {
        const data = {
          accountId: this.accountId,
          password: this.newPw,
          accountNm: '',
          addr1: '',
          birthDay: '',
          email: '',
          exchangeNo: '',
          mobileNo: '',
          phoneNo: '',
          postNo: '',
          tpAccount: '',
          tpPosition: '',
          tpPublish: '',
        }
        await changePw(data)
        alert('성공적으로 변경되었습니다.')
        this.$bvModal.hide('modal-prevent-closing')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/font.scss';
.container {
  position: relative;
  min-height: calc(100vh - 220px);
}
.title {
  font-family: 'LeferiPoint-BlackA', sans-serif;
  font-size: 24px;
  padding: 1%;
}

.partTitle {
  font-family: 'LeferiPoint-BlackA', sans-serif;
  font-size: 15px;
  padding: 0.5rem 0;
}
.name {
  font-size: 20px;
  padding: 2% 0% 2% 0%;
}
.chPw-btn {
  position: absolute;
  right: 1rem;
  bottom: 180px;
  font-weight: 600;
}
.firstIp {
  display: block;
  width: 330px;
}
.line {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: flex-end;
}
b-input {
  width: 80px;
}
</style>
