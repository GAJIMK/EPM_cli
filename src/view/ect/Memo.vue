<template>
  <div class="menu-container" @click="goBoard()">
    <div class="alarm">
      <ul>
        <li>▶익명 게시판◀</li>

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

<style>
.menu-container {
  cursor: pointer;
}
</style>
