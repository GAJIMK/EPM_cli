<template>
  <div>
    <button class="BtnStyle" @click="goBoardWirte()">작성하기</button>

    <ul class="list-group">
      <li
        class="list-group-item disabled"
        v-for="board in boardlists"
        v-bind:key="board"
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
      llist: [],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    goBoardWirte() {
      this.$router.push({ name: 'noticeBoardUpload' });
    },
    async initData() {
      const res = await fetchBoardList();
      this.llist.push(res.data.list);
      for (var i = 0; i < this.llist[0].length; i++) {
        const list = res.data.list[i].title;
        this.boardlists.push(list);
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
