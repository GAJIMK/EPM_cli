<template>
  <div id="header">
    <div class="title" @click="goHome()">💸다트의 손쉬운 경비관리💸</div>
    <span v-if="accountId">{{ accountNm }}님, 안녕하세요:)</span>
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
  padding: 5px 20px;
  font-size: var(--font-size-xl);
  height: 60px;
  :hover {
    cursor: pointer;
  }
}

.loginBtn {
  display: block;
  border: 3px solid #fff;
  outline: 0;

  border-radius: 6px;
  padding: 0px 16px;
  font-size: var(--font-size-l);
}
</style>
