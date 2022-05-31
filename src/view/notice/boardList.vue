<template>
  <div>
    <h3 class="name">📰 다트 익명 게시판 ✏️</h3>
    <button class="BtnStyle" @click="goBoardWirte()">작성하기</button>
    <ul class="list-group">
      <li
        class="list list-group-item "
        v-for="(board, index) in boardlists"
        v-bind:key="index"
        @click="goreport(index)"
      >
        {{ board }} {{ date }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchBoardList } from '@/api/board/board.js';

export default {
  data() {
    return {
      boardlists: [], //제목
      //boarddatelists: [],
      llist: [],
      id: [],
      num: '',
    };
  },
  created() {
    this.initData();
  },
  methods: {
    goreport(index) {
      const a = index;
      console.log('id값', this.id[a]);
      const res = this.id[a];

      this.$router.push({
        name: 'boardcontent',
        query: { id: res },
      });
    },
    goBoardWirte() {
      this.$router.push({ name: 'noticeBoardUpload' });
    },
    async initData() {
      const res = await fetchBoardList();
      this.llist.push(res.data.list);
      for (var i = 0; i < this.llist[0].length; i++) {
        const list = res.data.list[i].title;
        const iid = res.data.list[i].id;

        this.id.push(iid);
        this.boardlists.push(list);
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
