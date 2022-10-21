<template>
  <div class="container-fluid">
    <Header />
    <div class="con">
      <div class="left">
        <side-bar :sideMenuStatus="sideMenuStatus" class="sidebar" />
      </div>

      <div class="contents">
        <slot />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import SideBar from '@/components/common/SideBar.vue'
import Footer from '../components/common/Footer.vue'
export default {
  components: {
    Header,
    SideBar,
    Footer,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.container-fluid {
  width: 100%;
  padding: 0 0;
  min-height: 100vh;
}
.left {
  position: fixed;
  margin-top: 60px;
  height: 100vh;
  padding: 0% 0% 0% 0%;
  background: #f4f8f9;
  z-index: 8887;
}

.con {
  display: flex;
  min-height: 100%;
}

.contents {
  width: 100%;
  padding: 100px 0 0 0;
  margin-left: 50px;
}
</style>
