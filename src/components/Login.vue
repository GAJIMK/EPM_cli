<template>
  <div class="container">
    <h2 class="header">🍆Gaji MarKet🍆</h2>
    <div><input type="email" class="email" placeholder="이메일" /></div>
    <div><input type="password" class="password" placeholder="비밀번호" /></div>
    <div><button class="loginBtn" style="cursor: pointer">로그인</button></div>
    <div style="margin-top: 20px">
      <span class="rePassword" style="cursor: pointer">비밀번호 재설정</span>
      <span style="margin-right: 30px">|</span>
      <span class="signUp" style="cursor: pointer">회원가입</span>
    </div>
    <div style="margin-top: 90px; cursor: pointer">
      sns 계정으로 간편 로그인/회원가입
    </div>
    <span
      ><i
        style="margin-right: 30px; margin-top: 30px; cursor: pointer"
        class="fab fa-facebook-square"
      ></i
    ></span>
    <span
      ><i
        style="margin-right: 30px; cursor: pointer"
        class="fab fa-kickstarter-k"
      ></i
    ></span>
    <span><i style="cursor: pointer" class="fab fa-instagram"></i></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  margin-top: 50px;
  font-size: 35px;
}
.email,
.password {
  margin-top: 30px;
  font-size: 20px;
  padding: 20px;
  border-radius: 0.3rem;
  opacity: 0.5;
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
  margin-top: 50px;
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
</style>
