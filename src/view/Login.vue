<template>
  <div class="container">
    <div class="box">
      <div class="headercolor"></div>
      <h2 class="name" @click="goHome()">💸Expense System💸</h2>

      <b-row
        ><b-input type="email" class="email" placeholder="인트라넷 아이디"
      /></b-row>
      <b-row
        ><b-input type="password" class="password" placeholder="비밀번호"
      /></b-row>

      <b-button class="loginBtn">로그인</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.email,
.password {
  font-size: 20px;
  border-radius: 0.3rem;
  opacity: 0.5;
  width: 400px;
  margin: 2% auto;
}
.password {
  margin-top: -1px;
}
.email:focus,
.password:focus {
  outline: 2px solid var(--color-yellow);
  border: var(--color-yellow);
}
.loginBtn {
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fff7b8;
  width: 100px;
  margin: auto;
}
.loginBtn:hover {
  background-color: rgb(255, 204, 161);
}
</style>
