<template>
  <div class="container">
    <h3 class="logo" @click="goHome()">로그인하기</h3>
    <div class="inputForm">
      <label>아이디</label>
      <input
        type="text"
        class="loginInput"
        placeholder="인트라넷 아이디를 입력하세요"
        v-model="id"
      />
    </div>
    <div class="inputForm">
      <label>비밀번호</label>
      <input
        type="password"
        class="loginInput"
        placeholder="비밀번호를 입력하세요"
        v-model="pw"
        @keyup.enter="login"
      />
    </div>

    <button class="loginBtn disabled loginInput" @click="login">로그인</button>
  </div>
</template>

<script>
import { login } from '@/api/auth/auth';

export default {
  data() {
    return {
      id: '',
      pw: '',
    };
  },
  watch: {
    id() {
      this.checkInput();
    },
    pw() {
      this.checkInput();
    },
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
    checkInput() {
      const btn = document.querySelector('.loginBtn');
      if (this.id != '' && this.pw != '') {
        btn.classList.remove('disabled');
      } else {
        btn.classList.add('disabled');
      }
    },
    async login() {
      const form = {
        accountId: this.id,
        password: this.pw,
      };
      await login(form).then(res => {
        if (res.data.code === 0) {
          this.$store.commit('setUser', res.data.data);
          this.$router.push({ name: 'home' });
        } else alert('에러');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/font.scss';
@import '@/scss/main.scss';
.container {
  width: 20em;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  font-family: 'GongGothicMedium', sans-serif;
  font-family: 'GongGothicMedium', sans-serif;
  font-size: var(--font-size-l);
}

label {
  display: block;
  font-size: 0.7em;
  margin-left: 10px;
  margin-bottom: 0px;
}

.loginInput {
  border-radius: 30px;
  width: 330px;
  height: 44px;
  padding: 0px 20px;
  border: 1px solid #ddd;
  -webkit-box-shadow: 0px 0px 2px 5px rgba(221, 221, 221, 0.18);
  box-shadow: 0px 0px 2px 5px rgba(221, 221, 221, 0.18);
  font-size: 13px;
  &:focus {
    outline: 0;
    box-shadow: 0px 0px 2px 5px rgba(255, 199, 95, 0.12);
  }
}

.inputForm {
  margin-bottom: 0.5em;
}
.loginBtn {
  background-color: #ffc75f;
  font-weight: 600;
  margin-top: 10px;
}
.loginBtn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
