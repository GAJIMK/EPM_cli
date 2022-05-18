<template>
  <div>
    <div class="headercolor"></div>
    <div class="container">
      <h2 class="name" @click="gohome()">💸Expense System💸</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gohome() {
      this.$router.push({ name: 'home' });
    },
    goLogin: function() {
      this.$router.push({ name: 'Login' }).catch(() => {});
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
</style>
