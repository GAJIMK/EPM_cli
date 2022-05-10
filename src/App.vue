<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
export default {
  components: {},
  name: "App",
  computed: {
    layout() {
      return `${this.$route.meta.layout || "default"}-layout`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
