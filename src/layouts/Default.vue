<template>
  <div class="container-fluid">
    <Header />
    <div class="container">
      <!-- 헤더 위치 -->
      <slot />
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
