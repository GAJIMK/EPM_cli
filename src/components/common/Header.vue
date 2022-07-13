<template>
  <div id="header">
    <div class="title" @click="goHome()">💸다트의 손쉬운 경비관리💸</div>
    <div>경비 마감 기한 D - {{ this.diffDay }} 일</div>
    <button @click="goLogin()" class="loginBtn yellowBtn">Login</button>
  </div>
</template>

<script>
import { fetchBoardDay } from '@/api/submit/submit.js';
import moment from 'moment';
export default {
  data() {
    return {
      diffDay,
    };
  },
  mounted() {
    this.loadPast();
  },
  methods: {
    async loadPast() {
      const res = await fetchBoardDay();
      const currentDay = moment(new Date());
      const setDay = moment(res.data.list[0].endDay);
      this.diffDay = setDay.diff(currentDay, 'days');
      console.log('diff', this.diffDay);
    },
    goLogin() {
      this.$router.push({ name: 'login' });
    },
    goHome() {
      this.$router.push({ name: 'home' });
    },

    goSignUp: function() {
      this.$router.push({ name: 'SignUp' }).catch(() => {});
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
@import '@/styles/variables.scss';
@import '@/scss/main.scss';
.name {
  cursor: pointer;
}

#header {
  width: 100%;
  background: var(--color-yellow);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  padding: 5px 50px;
  font-size: var(--font-size-xl);
  height: 50px;
  :hover {
    cursor: pointer;
  }
}

.loginBtn {
  display: block;
  border: 3px solid #fff;
  outline: 0;

  border-radius: 25px;
  padding: 0px 16px;
  font-size: var(--font-size-l);
}
</style>
