<template>
  <div class="container-fluid">
    <Header />
    <div class="con">
      <div class="left">
        <side-bar :sideMenuStatus="sideMenuStatus" class="sidebar" />
      </div>

      <div class="contents">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import SideBar from '@/components/common/SideBar.vue'
export default {
  components: {
    Header,
    SideBar,
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
  height: 100vh;
  padding: 0% 0% 0% 0%;
}

.con {
  display: flex;
  min-height: 100%;
}

.contents {
  width: 100%;
  padding: 0 1rem;
}
</style>
