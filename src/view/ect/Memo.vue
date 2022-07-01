<template>
  <div class="menu-container">
    <div class="menu-title" @click="goBoard()">📒다트 익명 게시판✏️</div>
    <div class="menu-title">🔥HOT 5 게시글🔥</div>
    <ul>
      <li v-for="item in allId" :key="item.id">{{ item }} 번 게시글</li>
    </ul>
  </div>
</template>

<script>
import { fetchThumbstop5 } from '@/api/Thumbs/thumbs';
export default {
  data() {
    return {
      Fllist: [],
      allId: [],
    };
  },
  created() {
    this.loadtop();
  },
  methods: {
    goBoard() {
      this.$router.push({ name: 'noticeBoard' });
    },
    async loadtop() {
      const res = await fetchThumbstop5();

      this.Fllist.push(res.data.list);
      this.lengthAll = this.Fllist[0].length;

      for (var i = 0; i < this.lengthAll; i++) {
        let iid = res.data.list[i].id;
        this.allId.push(iid);
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
.menu-container {
  cursor: pointer;
  height: 250px;
}
.menu-title {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  font-size: 1.5em;
  padding: 8px 0px;
}
</style>
