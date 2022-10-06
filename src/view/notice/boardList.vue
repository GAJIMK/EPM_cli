<template>
  <div class="container">
    <div class="top-con">
      <h3 class="name">📢 익명 게시판</h3>

      <b-button class="btn-warning right-side" @click="goBoardWirte()" v-if="writeAuth">

        작성하기✏️
      </b-button>
    </div>

    <div class="list-con">
      <ul class="user-lists">
        <div v-if="err">조회할 내용이 없습니다!</div>
        <div class="list" v-for="(board, index) in boardlists" v-bind:key="index" @click="goreport(index)">
          <div> 
            {{ board }}
          </div>
        </div>
      </ul>
    </div>

    <div class="re">
      <b-pagination class="paging-search-form-pagination" align="center" :total-rows="lengthAll" v-model="currentPage"
        :per-page="10" @change="initDataPage(currentPage)" @page-click="pageClick" pills />
    </div>
  </div>
</template>

<script>
import { fetchBoardList, fetchBoardPage } from '@/api/board/board.js';
import { BPagination } from 'bootstrap-vue';
import { mapGetters } from 'vuex';


export default {
  components: {
    'b-pagination': BPagination,
  },
  data() {
    return {
      boardlists: [], //제목
      llist: [],
      Fllist: [],
      idlist: [],
      timelists: [],
      pageNo: 0,
      currentPage: 1,
      PageNum: '',
      in: '',
      no: '',
      val: '',
      res: '',
      allId: [],
      lengthAll: '',
      clickPage: '',
      writeAuth:false,
      
    };
  },
  computed:{
    ...mapGetters({
      auth:'fetchedAuth'
    })
  },
  created() {
    this.PageCount();
    this.FirstinitDataPage();
    if(this.auth !== ''){
      this.writeAuth = true
    }
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

    pageClick(button, page) {
      this.clickPage = page;
    },

    async FirstinitDataPage() {
      const resp = await fetchBoardPage(this.pageNo);
      this.idlist = [];
      this.llist.push(resp.data.list);
      for (var i = 0; i < this.llist[0].length; i++) {
        const list = resp.data.list[i].title;

        this.boardlists.push(list);
      }

    },

    async initDataPage() {
      this.boardlists = [];
      this.in = '';
      this.llist = [];

      this.in = this.clickPage - 1; //페이징의 인덱스 (ex 1,2,3)

      const res = await fetchBoardPage(this.in);

      for (var i = 0; i < 10; i++) {
        let list = res.data.list[i].title;

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

<style lang="scss">
@import '@/scss/main.scss';

.top-con {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.re {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.name {
  font-family: 'GongGothicMedium', sans-serif;
  font-size: 30px;
  padding: 1%;
}

.right-side {
  margin-right: 15%;
  margin-top: 60px;
  font-family: 'GongGothicMedium', sans-serif;
}

.user-lists {
  height: 70vh;
  width: 70%;
  margin: auto;

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }

  .list {
    border-bottom: solid #eee 0.5px;
    padding: 10px 10px;
    background-color: #fff;

    &:hover {
      cursor: pointer;
      background-color: var(--color-smoke);
    }
  }
}
</style>
