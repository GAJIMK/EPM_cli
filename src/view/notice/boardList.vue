<template>
  <div>
    <h3 class="name">📰 다트 익명 게시판 ✏️</h3>
    <button class="BtnStyle" @click="goBoardWirte()">작성하기</button>
    <hr />
    <div class="container">
      <ul class="list-group">
        <li
          class="list list-group-item "
          v-for="(board, index) in boardlists"
          v-bind:key="index"
          @click="goreport(index)"
        >
          {{ board }}
        </li>
      </ul>
    </div>

    <hr />
    <div class="re">
      <b-pagination
        class="paging-search-form-pagination"
        align="center"
        :total-rows="lengthAll"
        v-model="currentPage"
        :per-page="10"
        @change="initDataPage(currentPage)"
      />
    </div>
  </div>
</template>

<script>
import { fetchBoardList, fetchBoardPage } from '@/api/board/board.js';

export default {
  data() {
    return {
      boardlists: [], //제목
      llist: [],
      Fllist: [],
      idlist: [],
      pageNo: 0,
      currentPage: 1,
      PageNum: '',
      in: '',
      no: '',
      val: '',
      res: '',
      allId: [],
      lengthAll: '',
    };
  },

  created() {
    //this.initDataPage();
    this.PageCount();
    this.FirstinitDataPage();
  },
  methods: {
    goBoardWirte() {
      this.$router.push({ name: 'noticeBoardUpload' });
    },
    async PageCount() {
      const res = await fetchBoardList();

      this.Fllist.push(res.data.list);
      this.lengthAll = this.Fllist[0].length;

      for (var i = 0; i < this.lengthAll; i++) {
        let iid = res.data.list[i].id;
        this.allId.push(iid);
      }

      this.PageNum = Math.ceil(this.lengthAll / 10);
    },
    async FirstinitDataPage() {
      const resp = await fetchBoardPage(this.pageNo);
      this.idlist = [];
      this.llist.push(resp.data.list);
      for (var i = 0; i < this.llist[0].length; i++) {
        const list = resp.data.list[i].title;
        const iid = resp.data.list[i].id;

        this.idlist.push(iid);
        this.boardlists.push(list);
      }
    },

    async initDataPage(currentPage) {
      this.boardlists = [];
      this.in = '';
      this.llist = [];

      this.in = currentPage; //페이징의 인덱스 (ex 1,2,3)
      console.log('this.in', this.in);
      const res = await fetchBoardPage(this.in);

      this.llist.push(res.data.list);
      console.log('this.llist', this.llist);

      for (var i = 0; i < 10; i++) {
        const list = res.data.list[i].title;

        const iid = res.data.list[i].id;

        this.idlist.push(iid);

        this.boardlists.push(list);
      }
    },
    goreport(index) {
      const a = index; //리스트의 인덱스

      this.val = a + this.in * 10;

      this.res = this.allId[this.val];

      this.$router.push({
        name: 'boardcontent',
        query: { id: this.res },
      });
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

.re {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
