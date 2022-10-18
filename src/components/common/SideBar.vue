<template>
  <div class="sidebar-container">
    <nav>
      <div v-if="!sidebar" class="else-btn" @click="changeState">
        <font-awesome-icon class="icon" icon="fa-solid fa-bars" />
      </div>
      <div v-if="sidebar" class=" else-btn" @click="changeState">
        <font-awesome-icon class="icon" icon="fa-solid fa-xmark" />
      </div>
      <router-link to="/" class="home-btn else-btn">
        <font-awesome-icon class="icon" icon="fa-solid fa-home" />
        <dd class="flex" v-if="sidebar">Home</dd>
      </router-link>

      <router-link to="/notice-board" class="else-btn">
        <font-awesome-icon class="icon" icon="fa-solid fa-comments" />
        <dd class="flex" v-if="sidebar">게시글 구경가기</dd>
      </router-link>

      <router-link to="/user-write" v-if="user" class="else-btn">
        <font-awesome-icon class="icon" icon="fa-solid fa-pen-clip" />
        <dd class="flex" v-if="sidebar">내역서 작성하기</dd></router-link
      >

      <router-link to="/user" v-if="user" class="else-btn">
        <font-awesome-icon class="icon" icon="fa-solid fa-clock-rotate-left" />
        <dd class="flex" v-if="sidebar">과거내역 조회</dd></router-link
      >

      <router-link to="/approval" v-if="user" class="else-btn">
        <font-awesome-icon class="icon" icon="fa-solid fa-check" />
        <dd v-if="sidebar" class="flex">승인내역 조희</dd></router-link
      >

      <router-link to="/myPage" v-if="user" class="else-btn">
        <font-awesome-icon class="icon" icon="fa-solid fa-user" />
        <dd v-if="sidebar" class="flex">마이페이지</dd></router-link
      >

      <router-link to="/expense-list" v-if="admin" class="else-btn"
        ><font-awesome-icon class="icon" icon="fa-solid fa-sliders" />
        <dd v-if="sidebar" class="flex">경비항목 관리</dd></router-link
      >

      <router-link to="/grade-manage" v-if="admin" class="else-btn">
        <font-awesome-icon
          class="icon"
          icon="fa-solid fa-users-between-lines"
        />
        <dd class="flex" v-if="sidebar">등급별 관리</dd></router-link
      >

      <div
        class="else-btn btnd"
        v-if="manage === 'Y'"
        @click="handleUsersList()"
      >
        <font-awesome-icon class="icon" icon="fa-solid fa-user-check" />
        <dd class="flex" v-if="sidebar">사용자 경비조회</dd>
      </div>

      <router-link to="/submit-day" v-if="admin" class="else-btn">
        <font-awesome-icon class="icon" icon="fa-solid fa-calendar-days" />
        <dd v-if="sidebar" class="flex">경비등록 기한</dd></router-link
      >
    </nav>
  </div>
</template>
<script>
import moment from 'moment'
import ToastMsgg from '@/components/ToastMsgg.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: false,
      admin: false,
      ToastCon: '로그인 후 사용 가능합니다❗',
      state: this.$store.state.auth,
      manage: this.$store.state.manager,
      sidebar: false,
    }
  },
  computed: {
    ...mapGetters({
      accountId: 'fetchedId',
      accountNm: 'fetchedNm',
      auth: 'fetchedAuth',
    }),
  },
  mounted() {
    this.authCheck()
  },

  methods: {
    authCheck() {
      if (this.auth === 'USER') {
        this.user = true
      } else if (this.auth === 'ADMIN') {
        ;(this.user = true), (this.admin = true)
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

    changeState() {
      this.sidebar ? (this.sidebar = false) : (this.sidebar = true)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/font.scss';
* {
  box-sizing: border-box;
}
.sidebar-container {
  font-family: 'LeferiPoint-BlackA';
  background: #f4f8f9;
  height: 100%;
  display: flex;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  font-size: 14px;
}

.else-btn {
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  color: #666;
  position: relative;
  &:hover {
    color: #ffc75f;
    text-decoration: none;
  }
}

.icon {
  display: inline-block;
  padding: 0.2rem;
}
.flex {
  display: flex;
  align-items: center;
  padding: 0rem 0.2rem;
  margin: 0 0;
  position: relative;
  top: 2px;
}
</style>
