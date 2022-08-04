<template>
  <div id="container">
    <h3 class="name" @click="goback()">📢 익명 게시판</h3>
    <b-input
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
    <div class="btnGroup">
      <b-button class="BtnStyle" @click="goback()">취소</b-button>
      <b-button class="BtnStyle" @click="putData()">확인</b-button>
    </div>
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
      if (this.boardcontent.content != '' && this.boardcontent.title != '') {
        try {
          await putBoardList(this.boardcontent).then(() => {
            window.history.go(-1);
          });
        } catch (error) {
          this.errorMsg = getErrorResponseData(error);
          console.log('에러');
        }
      } else {
        alert('빈칸을 채워주세요.');
      }
    },
    goback() {
      window.history.go(-1);
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
.container {
  display: flex;
  flex-direction: column;
}

.BtnStyle {
  width: 150px;
  height: 50px;
  font-family: 'GongGothicMedium', sans-serif;
  border: 0;
  outline: 0;
  background-color: #fdc000;
  margin-right: 5%;
  &:hover {
    background-color: rgb(255, 234, 164);
  }
}
.name {
  font-family: 'GongGothicMedium', sans-serif;
  font-size: 35px;
  padding: 1%;
  margin: 3% 0 3% 0;
}
.btnGroup {
  float: right;
  display: flex;
  width: 150px;
  margin-top: 3%;
}
</style>
