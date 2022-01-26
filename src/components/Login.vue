<template>
  <div class="container">
    <h2>🍆Gaji MarKet🍆</h2>
    <div><input type="email" class="email" placeholder="이메일" /></div>
    <div><input type="password" class="password" placeholder="비밀번호" /></div>
    <div><button class="loginBtn">로그인</button></div>
    <div style="margin-top: 20px">
      <span class="rePassword">비밀번호 재설정</span
      ><span class="signUp">회원가입</span>
    </div>
    <div style="margin-top: 30px">sns 계정으로 간편 로그인/회원가입</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.email,
.password {
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
