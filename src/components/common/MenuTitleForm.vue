<template>
  <div class="title">{{ this.menuTitle }}</div>
</template>

<script>
export default {
  props: ["menuTitle"],
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 2em;
}
</style>
