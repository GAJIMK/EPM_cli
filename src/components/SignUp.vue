<template>
  <div class="container">
    <h1 class="signup" style="margin-top: 50px">회원가입</h1>
    <p style="margin-top: 50px">SNS계정으로 간편하게 회원가입</p>
    <span
      ><i
        style="margin-right: 30px; margin-top: 30px"
        class="fab fa-facebook-square"
      ></i
    ></span>
    <span><i style="margin-right: 30px" class="fab fa-kickstarter-k"></i></span>
    <span><i class="fab fa-instagram"></i></span>
    <hr width="300px" style="margin-top: 30px" />

    <h1>이메일</h1>
    <span>
      <input class="email" type="email" placeholder="이메일" />
      <span style="margin-left: 10px">@</span>
      <select style="margin-left: 10px" class="emailSelect">
        <option value="none">선택해주세요</option>
        <option value="naver">naver.com</option>
        <option value="hanmail">hanmail.net</option>
        <option value="daum">daum.net</option>
        <option value="gmail">gmail.com</option>
        <option value="nate">nate.com</option>
        <option value="hotmail">hotmail.com</option>
        <option value="outlook">outlook.com</option>
        <option value="icloud">icloud.com</option>
      </select>
    </span>
    <button class="emailCertify">이메일 인증하기</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.email {
  display: inline;
  margin-top: 30px;
  font-size: 15px;
  padding: 10px;
  border-radius: 0.3rem;
  opacity: 0.5;
}
.emailSelect {
  display: inline;
  margin-top: 30px;
  font-size: 15px;
  padding: 10px;
  border-radius: 0.3rem;
  opacity: 0.5;
  margin-bottom: 20px;
}
.emailCertify {
  display: block;
  margin-top: 50px;
  font-size: 15px;
  padding: 10px;
  border-radius: 0.3rem;
  opacity: 0.5;
  margin: auto;
  width: 380px;
}
</style>
