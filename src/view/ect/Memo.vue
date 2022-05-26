<template>
  <div class="menu-container" @click="goBoard()">
    <div class="alarm">
      <ul>
        <li class="board-name">📰다트 익명 게시판✏️</li>

        <li>김가정 귀염둥이</li>
        <li>지혜 생축</li>
        <li>차차 꾸며나가보자,,</li>
      </ul>
    </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
.menu-container {
  cursor: pointer;
}
.board-name {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  font-size: 30px;
  padding: 1%;
}
</style>
