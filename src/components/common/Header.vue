<template>
  <div id="header">
    <div class="title" @click="goHome()">
      <div id="logo">EPM <span>easy pay management</span></div>
    </div>
    <div v-if="accountId" class="right">{{ accountNm }}님, 안녕하세요:)</div>
    <button v-if="accountId" @click="logout" class="loginBtn basicBtn">
      Logout
    </button>
    <button v-else @click="goLogin" class="loginBtn basicBtn">
      Login
    </button>
  </div>
</template>

<script>
export default {
  created() {
    this.checkState();
  },
  data() {
    return {
      accountId: this.$store.state.accountId,
      accountNm: this.$store.state.accountNm,
    };
  },
  methods: {
    async loadPast() {
      const res = await fetchBoardDay();
      const currentDay = moment(new Date());
      const setDay = moment(res.data.list[0].endDay);
      this.diffDay = setDay.diff(currentDay, 'days');
    },
    checkState() {
      this.accountId = this.$store.state.accountId;
      this.accountNm = this.$store.state.accountNm;
      if (this.accountId === '') return false;
      else return true;
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
    logout() {
      this.$store.commit('logout');
      this.checkState();
      this.goHome();
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/scss/main.scss';
@import '@/scss/font.scss';
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
  padding: 5px 20px;
  font-size: var(--font-size-s);
  font-weight: 700;
  height: 60px;
  :hover {
    cursor: pointer;
  }
}
.title {
  font-family: 'GongGothicMedium', sans-serif;
  display: flex;
  align-items: center;
  #logo {
    font-size: var(--font-size-l);
  }
  span {
    font-size: var(--font-size-xs);
    margin-right: 10px;
  }
}
.right {
  position: absolute;
  top: 20px;
  right: 125px;
}
.loginBtn {
  display: block;
  border: 3px solid #fff;
  outline: 0;
  border-radius: 6px;
  padding: 0px 16px;
  font-family: 'GongGothicMedium', sans-serif;
  font-size: var(--font-size-m);
}
</style>
