<template>
  <div class="container-fluid">
    <Header />

    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.container,
.container-fluid {
  padding: 0px 0px;
  position: relative;
}
</style>
