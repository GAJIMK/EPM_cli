<template>
  <div id="container">
    <h2 class="name">📰 다트 익명 게시판 ✏️</h2>
    <label for="name" class="title_2">제목 🙌</label
    ><b-input
      class="title"
      type="text"
      placeholder="제목을 입력하세요"
      v-model="boardcontent.title"
    />
    <label for="content"></label>
    <b-textarea
      name="content"
      id="content"
      cols="30"
      rows="10"
      placeholder="내용을 입력하세요"
      v-model="boardcontent.content"
    ></b-textarea>
    <b-button class="BtnStyle" @click="putData()">확인</b-button>
    <b-button class="BtnStyle" @click="goback()">취소</b-button>
  </div>
</template>

<script>
import { putBoardList } from '@/api/board/board';

export default {
  data() {
    return {
      boardcontent: {
        title: '',
        content: '',
        date: '',
        id: '',
      },
    };
  },

  methods: {
    async putData() {
      try {
        await putBoardList(this.boardcontent).then(() => {
          console.log('성공');
          window.history.go(-1);
        });
      } catch (error) {
        this.errorMsg = getErrorResponseData(error);
        console.log('에러');
      }
    },
    goback() {
      window.history.go(-1);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
.container {
  display: flex;
  flex-direction: column;
}
.name {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
}
.BtnStyle {
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fffad1;
  color: black;
  margin: 0.5%;
}
.name {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  font-size: 30px;
  padding: 1%;
}
</style>
