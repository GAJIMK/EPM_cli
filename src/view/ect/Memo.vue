<template>
  <div class="menu-container" @click="goBoard()">
    <div class="menu-title">📰다트 익명 게시판✏️</div>
  </div>
</template>

<script>
export default {
  methods: {
    goBoard() {
      this.$router.push({ name: 'noticeBoard' });
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
.menu-container {
  cursor: pointer;
  height: 184px;
}
.menu-title {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  font-size: 1.5em;
  padding: 8px 0px;
}
</style>
