<template>
  <span id="icon-bar">
    <router-link to="/" class="home-btn"
      ><i class="fa fa-home ">Home</i>
    </router-link>
    <router-link to="/notice-board" class="else-btn"
      >게시글 구경가기
    </router-link>
    <router-link to="/user-write" v-if="user" class="else-btn"
      >내역서 작성하기</router-link
    >
    <router-link to="/user" v-if="user" class="else-btn"
      >과거내역 조회</router-link
    >
    <router-link to="/approval" v-if="user" class="else-btn"
      >승인내역 조희</router-link
    >
    <router-link to="/myPage" v-if="user" class="else-btn"
      >마이페이지</router-link
    >
    <router-link to="/expense-list" v-if="admin" class="else-btn"
      >경비항목 관리</router-link
    >
    <router-link to="/grade-manage" v-if="admin" class="else-btn"
      >등급별 관리</router-link
    >
    <router-link to="/users-expense" v-if="admin" class="else-btn"
      >사용자 경비조회</router-link
    >
    <router-link to="/submit-day" v-if="admin" class="else-btn"
      >경비등록 기한</router-link
    >
  </span>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      user: false,
      admin: false,
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
  },
}
</script>

<style>
#icon-bar {
  background-color: rgb(255, 223, 158);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  top: 0;
  height: 100%;
}
#icon-bar a {
  font-family: 'LeferiPoint-BlackA', sans-serif;
  display: block;
  text-align: center;
  transition: all 0.3s ease;
  color: white;
  margin-top: 11%;
}
.home-btn {
  font-family: 'LeferiPoint-BlackA', sans-serif;
  font-size: var(--font-size-l);
}
.else-btn {
  font-family: 'LeferiPoint-BlackA', sans-serif;
  font-size: var(--font-size);
}
</style>
