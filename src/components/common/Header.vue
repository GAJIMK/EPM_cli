<template>
  <div>
    <div class="headercolor"></div>
    <div class="title">
      <h2 class="name" @click="gohome()">💸Expense System💸</h2>
      <b-button @click="goLogin()" class="loginBtn">login</b-button>
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
}
.loginBtn {
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fff7b8;
  margin: 0.5%;
}
</style>
