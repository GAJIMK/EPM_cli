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
    <font-awesome-icon icon="fa-solid fa-thumbs-up" />

    <b-button class="BtnStyle" @click="goback()">목록</b-button>
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
    },
    goback() {
      window.history.go(-1);
    },
  },
};
</script>

<style>
.title:disabled,
.content:disabled {
  background-color: aliceblue;
}
</style>
