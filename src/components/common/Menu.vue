<template>
  <div class="menu">
    <div class="all-users-menu">
      <ul class="menu-items">
        <li class="list-item" @click="handleWrite">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-pen-clip" class="icon" />
          </div>
          <div class="menu-content">작성하기</div>
        </li>
        <li class="list-item" @click="writtenList">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-clock-rotate-left" class="icon" />
          </div>
          <div class="menu-content" @click="writtenList">과거내역 조회</div>
        </li>
        <li class="list-item" @click="handleApproval">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-check" class="icon" />
          </div>
          <div class="menu-content">승인내역 조회</div>
        </li>
        <li class="list-item">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-user" class="icon" @click="goMypage()" />
          </div>
          <div class="menu-content">마이페이지</div>
        </li>
      </ul>
    </div>
    <div class="management-menu" v-if="state === 'ADMIN'">
      <ul class="menu-items">
        <li class="list-item" @click="handleExpenseList">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-sliders" class="icon" />
          </div>
          <div class="menu-content">경비항목 관리</div>
        </li>
        <li class="list-item" @click="handelGrade">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-users-between-lines" class="icon" />
          </div>
          <div class="menu-content">등급별 관리</div>
        </li>
        <li class="list-item" @click="handleUsersList">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-user-check" class="icon" />
          </div>
          <div class="menu-content">사용자 경비조회</div>
        </li>
        <li class="list-item" @click="handleSubDay()">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-calendar-days" class="icon" />
          </div>
          <div class="menu-content">경비등록 기한</div>
        </li>
      </ul>
    </div>
    <div class="management-menu" v-if="state === 'MANAGER'">
      <ul class="menu-items">
        <li class="list-item" @click="handleUsersList">
          <div class="icon-container basicBtn">
            <font-awesome-icon icon="fa-solid fa-user-check" class="icon" />
          </div>
          <div class="menu-content">조직원 경비승인</div>
        </li>
      </ul>
    </div>
    <ToastMsgg ref="toastMsgg" :ToastCon="ToastCon" class="toast" />
  </div>
</template>

<script>
import moment from 'moment'
import ToastMsgg from '@/components/ToastMsgg.vue'
export default {
  components: { ToastMsgg },
  data() {
    return {
      accountId: this.$store.state.accountId,
      state: this.$store.state.auth,
      ToastCon: '로그인 후 사용 가능합니다❗',
    }
  },
  methods: {
    checkSession() {
      const state = this.accountId ? true : false
      if (state) return state
      else this.$refs.toastMsgg.createToast()
    },
    handleWrite() {
      if (this.checkSession()) this.$router.push({ name: 'userWrite' })
    },

    goMypage() {
      if (this.checkSession()) this.$router.push({ name: 'myPage' })
    },
    writtenList() {
      if (this.checkSession()) this.$router.push({ name: 'user' })
    },
    //경비항목관리
    handleExpenseList() {
      if (this.checkSession()) this.$router.push({ name: 'expenseList' })
    },
    //등급관리
    handelGrade() {
      if (this.checkSession()) this.$router.push({ name: 'grade' })
    },
    handleUsersList() {
      if (this.checkSession())
        this.$router.push({
          name: 'usersExpense',
          params: { date: moment(new Date()).format('YYYY-MM') },
        })
    },
    handleSubDay() {
      if (this.checkSession()) this.$router.push({ name: 'submitDay' })
    },
    handleApproval() {

      if (this.checkSession())
        this.$router.push({ name: 'approval' });

    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.menu {
  border: 4px solid var(--color-yellow);
  border-radius: 1rem;
  padding-top: 20px;
  font-size: 0.9em;
  background: rgba(238, 238, 238, 0.3);
  box-shadow: 0px 2px 32px -5px rgba(167, 167, 167, 0.54);
  backdrop-filter: blur(50%);
  -webkit-backdrop-filter: blur(50%);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

}

.allUsersMenu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.menu-items {
  display: flex;
  justify-content: space-evenly;
}

.menu-content {
  text-align: center;
}

.icon-container {
  width: 3.5em;
  height: 3.5em;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    -webkit-box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    transform: scale(1.02);
    background: var(--color-yellow);

    .icon {
      color: #fff;
    }
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-yellow);
    font-size: 10px;
  }
}
</style>
