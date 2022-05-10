<template>
  <div>
    <div class="headercolor"></div>
    <!-- <div class="container">
      <div class="name">💸나만의 경비</div>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
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

.headercolor {
  top: 0;
  width: 100%;
  background: #ffc75f;
  font-size: 10px;
  height: 30px;
}
</style>
