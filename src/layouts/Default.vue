<template>
  <div class="container-fluid">
    <Header />

    <div class="container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.container,
.container-fluid {
  padding: 0px 0px;
  position: relative;
  min-height: 100vh;
}
</style>
