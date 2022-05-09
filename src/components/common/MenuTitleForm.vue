<template>
  <div class="title">{{ this.menuTitle }}</div>
</template>

<script>
export default {
  props: ['menuTitle'],
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5em;
  margin: 1em 0px;
}
</style>
