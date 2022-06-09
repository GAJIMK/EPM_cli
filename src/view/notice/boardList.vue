<template>
  <div>
    <h3 class="name">📰 다트 익명 게시판 ✏️</h3>
    <button class="BtnStyle" @click="goBoardWirte()">작성하기</button>
    <ul class="list-group" id="section1">
      <li
        class="list list-group-item "
        v-for="(board, index) in boardlists"
        v-bind:key="index"
        @click="goreport(index)"
      >
        {{ board }}
      </li>
    </ul>
    <div id="re">
      <nav aria-label="Page navigation">
        <ul class="pagination ">
          <li class="page-item">
            <a
              class="page-link"
              v-for="(page, index) in PageNum"
              v-bind:key="index"
              @click="initDataPage(index)"
              href="#section1"
              >{{ index + 1 }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { fetchBoardList, fetchBoardPage } from '@/api/board/board.js';

export default {
  data() {
    return {
      boardlists: [], //제목
      //boarddatelists: [],
      llist: [],
      Fllist: [],
      id: [],
      num: '',
      pageNo: 0,
      pages: [1, 2, 3],
      PageNum: '',
      in: '',
    };
  },
  created() {
    this.PageCount();
    //this.initDataPage();
    this.FirstinitDataPage();
  },
  methods: {
    goreport(index) {
      const a = index;
      const res = this.id[a];

      this.$router.push({
        name: 'boardcontent',
        query: { id: res },
      });
    },
    goBoardWirte() {
      this.$router.push({ name: 'noticeBoardUpload' });
    },
    async PageCount() {
      const res = await fetchBoardList();

      this.Fllist.push(res.data.list);
      const lengthAll = this.Fllist[0].length;
      console.log('리스트 갯수', lengthAll);

      this.PageNum = Math.round(lengthAll / 10);
      console.log('페이지 갯수', this.PageNum);
    },
    async FirstinitDataPage() {
      const resp = await fetchBoardPage(this.pageNo);

      this.llist.push(resp.data.list);
      for (var i = 0; i < this.llist[0].length; i++) {
        const list = resp.data.list[i].title;
        const iid = resp.data.list[i].id;

        this.id.push(iid);
        this.boardlists.push(list);
      }
    },
    async initDataPage(index) {
      this.boardlists = [];
      this.in = index;
      const res = await fetchBoardPage(this.in);

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
.page-item {
  display: block;
}
</style>
