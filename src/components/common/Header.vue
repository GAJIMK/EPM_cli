<template>
  <div>
    <div class="headercolor"></div>
    <div id="header">
      <div class="title" @click="gohome()">💸Expense System💸</div>
      <button @click="goLogin()" class="loginBtn">login</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push({ name: 'login' });
    },
    gohome() {
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

.headercolor {
  top: 0;
  width: 100%;
  background: #ffc75f;
  font-size: 10px;
  height: 30px;
}
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
