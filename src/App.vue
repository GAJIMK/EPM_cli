<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.font-big {
  font-size: 30px;
}

.font-middle {
  font-size: 1em;
}

.font-small {
  font-size: 0.6em;
}
</style>
