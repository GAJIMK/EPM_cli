<template>
  <div class="container">
    <b-col class="box">
      <b-row
        ><b-input type="email" class="email" placeholder="하이웍스 이메일"
      /></b-row>
      <b-row
        ><b-input type="password" class="password" placeholder="비밀번호"
      /></b-row>

      <b-row><b-button class="loginBtn">로그인</b-button></b-row>
    </b-col>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  outline: 2px solid #ffc75f;
  border: #ffc75f;
}
.loginBtn {
  font-size: 20px;
  padding: 1%;
  border-radius: 0.3rem;
  opacity: 0.5;
  background-color: #ffc75f;
  width: 250px;
  margin: 5% auto;
  color: white;
  border: 0;
  outline: 0;
}
.loginBtn:hover {
  background-color: rgb(255, 204, 161);
}
</style>
