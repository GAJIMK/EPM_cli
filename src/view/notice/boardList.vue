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
      id: [],
      id_1: [],
      num: '',
      pageNo: 0,
      pages: [1, 2, 3],
      PageNum: '',
      in: '',
      no: '',
      val: '',
      res: '',
    };
  },
  created() {
    this.PageCount();
    //this.initDataPage();
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

      this.PageNum = Math.ceil(lengthAll / 10);
    },
    async FirstinitDataPage() {
      const resp = await fetchBoardPage(this.pageNo);
      this.id = [];
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
      //this.id = [];
      this.in = index; //페이징의 인덱스 (ex 1,2,3)
      const res = await fetchBoardPage(this.in);

      this.llist = [];

      this.llist.push(res.data.list); //길이를 구하기 위해서

      //this.id = [];
      //3개만 담길수있도록 초기화해줌

      for (var i = 0; i < this.llist[0].length; i++) {
        const list = res.data.list[i].title;
        const iid = res.data.list[i].id;

        this.id.push(iid);
        this.boardlists.push(list);
      }
    },
    goreport(index) {
      const a = index; //리스트의 인덱스
      console.log('a', a); // a = 0 this.in = 2
      this.val = a + this.in * 10;

      if (this.in != 0 && this.in != 1) {
        for (var i = 0; i < 2; i++) {
          const list = res.data.list[i].title;
          const iid = res.data.list[i].id;

          this.id.push(iid);
          this.res = this.id[this.val]; // 이 부분이 지금 문제임
          console.log('this.res', this.res);

          //console.log('val type ', this.val, typeof this.val);
          //console.log('res type ', this.res, typeof this.res);
          this.$router.push({
            name: 'boardcontent',
            query: { id: this.res },
          });
        }
      } else {
        this.res = this.id[this.val]; // 이 부분이 지금 문제임
        console.log('this.res', this.res);

        //console.log('val type ', this.val, typeof this.val);
        //console.log('res type ', this.res, typeof this.res);
        this.$router.push({
          name: 'boardcontent',
          query: { id: this.res },
        });
      }

      console.log('this.val', typeof this.val, this.val);

      console.log('id.length', this.id.length, this.id);
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
