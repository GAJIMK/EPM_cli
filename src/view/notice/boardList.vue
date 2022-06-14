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
      <nav aria-label="Page navigation">
        <ul class="pagination ">
          <li class="page-item">
            <a
              class="page-link"
              v-for="(page, index) in PageNum"
              v-bind:key="index"
              @click="initDataPage(index)"
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
      idlist: [],
      num: '',
      pageNo: 0,
      pages: [1, 2, 3],
      PageNum: '',
      in: '',
      no: '',
      val: '',
      res: '',
      allId: [],
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
      const lengthAll = this.Fllist[0].length;

      for (var i = 0; i < lengthAll; i++) {
        let iid = res.data.list[i].id;

        console.log(iid);
        this.allId.push(iid);
      }
      console.log('this.allId', this.allId);
      this.PageNum = Math.ceil(lengthAll / 10);
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
    async initDataPage(index) {
      this.boardlists = [];
      //this.id = [];
      this.in = index; //페이징의 인덱스 (ex 1,2,3)
      console.log('this.in', this.in);
      const res = await fetchBoardPage(this.in);

      this.llist = [];

      this.llist.push(res.data.list);
      console.log('this.llist', this.llist); //길이를 구하기 위해서
      //this.id = [];
      for (var i = 0; i < this.llist[0].length; i++) {
        const list = res.data.list[i].title;

        const iid = res.data.list[i].id;

        this.idlist.push(iid);
        console.log('이거임', this.idlist);
        this.boardlists.push(list);
      }
      if (this.in != 0 && this.in != 1) {
        console.log('1페이지랑 2페이지가 아님');
      }
    },
    goreport(index) {
      const a = index; //리스트의 인덱스
      console.log('a', a); // a = 0 this.in = 2
      this.val = a + this.in * 10;

      //console.log('this.val', this.val);
      //console.log('id.length', this.idlist.length);

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
