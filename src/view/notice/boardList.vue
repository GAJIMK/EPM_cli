<template>
  <div>
    <button @click="goBoardWirte()">작성하기</button>
    <ul>
      <li>김가정 귀염둥이</li>
      <li>김가정 9둥이</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goBoardWirte() {
      this.$router.push({ name: 'noticeBoardUpload' });
    },
  },
};
</script>

<style></style>
