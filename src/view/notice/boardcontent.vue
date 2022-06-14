<template>
  <div id="container">
    <h2 class="name">📰 다트 익명 게시판 ✏️</h2>
    <label for="name" class="title_2">제목 🙌</label
    ><b-input
      class="title"
      type="text"
      placeholder="제목을 입력하세요"
      disabled
      v-model="this.title"
    />
    <small>{{ date }}</small>
    <label for="content"></label>
    <b-textarea
      class="content"
      name="content"
      id="content"
      cols="30"
      rows="10"
      placeholder="내용을 입력하세요"
      disabled
      v-model="this.content"
    ></b-textarea>
    <div class="footer">
      <b-button class="BtnStyle" @click="goback()">목록</b-button>
      <font-awesome-icon icon="fa-solid fa-thumbs-up" />
    </div>
  </div>
</template>

<script>
import { fetchBoard } from '@/api/board/board';
//import internal from 'stream';

export default {
  data() {
    return {
      id: '',
      title: '',
      content: '',
      date: '',
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await fetchBoard(this.$route.query.id);
      this.title = res.data.list[0].title;
      this.content = res.data.list[0].content;
      this.date = res.data.list[0].date;
    },
    goback() {
      window.history.go(-1);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
.title:disabled,
.content:disabled {
  background-color: aliceblue;
}
.footer {
}
</style>
