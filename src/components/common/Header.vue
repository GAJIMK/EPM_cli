<template>
  <div>
    <div class="headercolor"></div>
    <div class="title">
      <h2 class="name" @click="gohome()">💸Expense System💸</h2>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
input:focus {
  outline: none;
}
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
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
}
.loginBtn {
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fff7b8;
}
</style>
