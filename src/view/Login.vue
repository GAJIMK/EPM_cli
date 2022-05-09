<template>
  <div class="container">
    <h2 class="header">💸Expense System💸</h2>
    <b-col>
      <b-row><b-input type="email" class="email" placeholder="이메일"/></b-row>
      <b-row
        ><b-input type="password" class="password" placeholder="비밀번호"
      /></b-row>

      <b-row><b-button class="loginBtn">로그인</b-button></b-row>

      <span class="rePassword">비밀번호 재설정</span>
      <span>|</span>
      <span class="signUp">회원가입</span>

      <div>sns 계정으로 간편 로그인/회원가입</div>

      <span><i class="fab fa-facebook-square"></i></span>
      <span><i class="fab fa-kickstarter-k"></i></span>
      <span><i class="fab fa-instagram"></i></span>
    </b-col>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");
.header {
  margin-top: 50px;
  font-size: 35px;
  padding: 10%;
  font-family: "Itim", cursive;
}
.email,
.password {
  margin-top: 30px;
  font-size: 20px;
  padding: 20px;
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
  outline: 2px solid hsl(278, 100%, 65%);
  border: hsl(278, 100%, 65%);
}
.loginBtn {
  font-size: 20px;
  padding: 20px;
  border-radius: 0.3rem;
  opacity: 0.5;
  background-color: #a3a0ed;
  width: 295px;
  margin: 5% auto;
  color: white;
  border: 0;
  outline: 0;
}
.loginBtn:hover {
  background-color: lightslategrey;
}
.rePassword {
  margin-right: 30px;
}
.fab {
  margin-right: 30px;
  margin-top: 30px;
  cursor: pointer;
}
</style>
