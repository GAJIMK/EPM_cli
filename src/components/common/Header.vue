<template>
  <div id="header">
    <div class="title" @click="goHome()">💸Expense System💸</div>
    <button @click="goLogin()" class="loginBtn">login</button>
  </div>
</template>

<script>
export default {
  methods: {
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

.name {
  cursor: pointer;
}

#header {
  width: 100%;
  background: #ffc75f;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  padding: 0px 50px;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
}

.loginBtn {
  display: block;
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fff7b8;
  font-size: 20px;
}
</style>
