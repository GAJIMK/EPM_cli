<template>
  <div class="container">
    <h1 style="margin-top: 50px">회원가입</h1>
    <p style="margin-top: 50px">SNS계정으로 간편하게 회원가입</p>
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
    <span><i class="fab fa-instagram"></i></span>
    <hr
      width="300px"
      style="margin-top: 30px; margin-bottom: 30px; cursor: pointer"
    />

    <h1>이메일</h1>
    <span>
      <input class="email" type="email" placeholder="이메일" />
      <span style="margin-left: 10px">@</span>
      <select style="margin-left: 10px; cursor: pointer" class="emailSelect">
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
    <button class="emailCertify" style="cursor: pointer">
      이메일 인증하기
    </button>
    <h1 style="margin-top: 50px">비밀번호</h1>
    <h1 style="margin-top: 10px">
      영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
    </h1>
    <input
      class="password"
      type="password"
      style="width: 380px"
      placeholder="비밀번호"
    />
    <h1 style="margin-top: 30px">비밀번호 확인</h1>
    <input
      class="passwordCertify"
      type="password"
      style="width: 380px"
      placeholder="비밀번호 확인"
    />
    <h1 style="margin-top: 30px">닉네임</h1>
    <h1 style="margin-top: 10px">
      다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
    </h1>
    <input
      class="nickname"
      type="text"
      style="width: 380px; margin-bottom: 30px"
      placeholder="별명 (2~15자)"
    />
    <h1>약관동의</h1>
    <div class="agree" style="margin-top: 20px">
      <input
        type="checkbox"
        name="agreeCheck"
        value="selectAll"
        class="selectAll"
        id="selectAll"
      />
      <b>전체동의</b>
      <hr />
      <br />
      <input type="checkbox" name="agreeCheck" value="age" /> 만 14세
      이상입니다. (필수)
      <br />
      <input type="checkbox" name="agreeCheck" value="use" /> 이용약관 (필수)
      <br />
      <input type="checkbox" name="agreeCheck" value="informationAgree" />
      개인정보수집 및 이용동의 (필수)
      <br />
      <input type="checkbox" name="agreeCheck" value="alert" /> 이벤트, 프로모션
      알림 메일 및 SMS 수신 (선택)
    </div>
    <button
      class="signup"
      style="margin-top: 30px; margin-bottom: 30px; cursor: pointer"
    >
      회원가입하기
    </button>
    <span style="margin-right: 10px">이미 아이디가 있으신가요?</span
    ><span @click="gologin" style="cursor: pointer">로그인</span>
  </div>
</template>

<script>
export default {
  methods: {
    gologin: function() {
      this.$router.push({ name: "Login" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.email,
.password,
.passwordCertify,
.nickname {
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
.emailCertify,
.signup {
  display: block;
  margin-top: 50px;
  font-size: 15px;
  padding: 10px;
  border-radius: 0.3rem;
  opacity: 0.5;
  margin: auto;
  width: 380px;
  background-color: #a3a0ed;
  color: white;
}
.emailCertify:hover,
.signup:hover {
  background-color: lightslategrey;
}
.email:focus,
.password:focus,
.passwordCertify:focus,
.nickname:focus {
  outline: 2px solid hsl(278, 100%, 65%);
  border: hsl(278, 100%, 65%);
}
.agree {
  width: 350px;
  height: 150px;
  border: 1px solid gray;
  align-content: center;
  margin: auto;
  text-align: left;
  font-size: 14px;
  padding: 20px;
  border-radius: 0.5rem;
}
</style>
