<template>
  <div>
    <h3 class="name">📰 다트 익명 게시판 ✏️</h3>
    <button class="BtnStyle" @click="goBoardWirte()">작성하기</button>

    <ul class="list-group">
      <li
        class="list-group-item "
        v-for="board in boardlists"
        v-bind:key="board"
        @click="goreport()"
      >
        {{ board }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchBoardList } from '@/api/board/board.js';

export default {
  data() {
    return {
      boardlists: [],
      //boarddatelists: [],
      llist: [],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    goreport() {
      this.$router.push({ name: 'boardcontent' });
    },
    goBoardWirte() {
      this.$router.push({ name: 'noticeBoardUpload' });
    },
    async initData() {
      const res = await fetchBoardList();
      this.llist.push(res.data.list);
      for (var i = 0; i < this.llist[0].length; i++) {
        const list = res.data.list[i].title;
        //const datelist = res.data.list[i].date;
        this.boardlists.push(list);
        //this.boarddatelists.push(datelist);
        //console.log(this.llist);
      }
    },
  },
};
</script>

<style>
.BtnStyle {
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fffad1;
  color: black;
  margin: 0.5%;
}
</style>
