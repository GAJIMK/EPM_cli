<template>
  <div id="header">
    <div class="d-flex ">
      <div class="title" @click="goHome()">
        <div id="logo">EPM <span class="hidden">easy pay management</span></div>
      </div>
    </div>
    <div v-if="accountId" class="right">
      <div class="icon-container user">
        <font-awesome-icon
          icon="fa-solid fa-user"
          class="icon"
          @click="goMypage()"
        />
      </div>
      {{ accountNm }}
    </div>
    <button v-if="accountId" @click="logout" class="loginBtn basicBtn">
      Logout
    </button>
    <button v-else @click="goLogin" class="loginBtn basicBtn">
      Login
    </button>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('checkUser')
  },

  computed: {
    accountId: function() {
      return this.$store.state.accountId
    },
    accountNm: function() {
      return this.$store.state.accountNm
    },
    route: function() {
      return this.$route.name
    },
  },

  methods: {
    async loadPast() {
      const res = await fetchBoardDay()
      const currentDay = moment(new Date())
      const setDay = moment(res.data.list[0].endDay)
      this.diffDay = setDay.diff(currentDay, 'days')
    },
    checkState() {
      this.accountId = this.$store.state.accountId
      this.accountNm = this.$store.state.accountNm
      if (this.accountId === '') return false
      else return true
    },

    goLogin() {
      this.$router.push({ name: 'login' })
    },
    goHome() {
      this.$router.push({ name: 'home' })
    },

    goSignUp: function() {
      this.$router.push({ name: 'SignUp' }).catch(() => {})
    },

    logout() {
      this.$store.commit('logout')
      localStorage.clear()
      this.goHome()
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/scss/main.scss';
@import '@/scss/font.scss';
.name {
  cursor: pointer;
}

#header {
  width: 100%;
  background: var(--color-yellow);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  font-size: var(--font-size-s);
  font-weight: 700;
  height: 60px;
  :hover {
    cursor: pointer;
  }
}

.title {
  font-family: 'LeferiPoint-BlackA', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  #logo {
    margin-left: 10px;
    font-size: var(--font-size-l);
    display: flex;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    &:hover {
      scale: 1.02;
    }
  }
  span {
    font-size: var(--font-size-xs);
    margin-right: 10px;
  }
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 130px;
}
.loginBtn {
  display: block;
  border: 3px solid #fff;
  outline: 0;
  border-radius: 6px;
  padding: 0px 16px;
  font-family: 'LeferiPoint-BlackA', sans-serif;
  font-size: var(--font-size-m);
}

.user {
  border: 3px solid #555;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  margin-right: 4px;
}

.menu-navi {
  padding: 0 10px;
}
</style>
