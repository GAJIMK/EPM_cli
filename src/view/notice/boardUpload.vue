<template>
  <div id="container">
    <h2 class="title">📰 다트 익명 게시판 ✏️</h2>
    <label for="name" class="title_2">제목 🙌</label
    ><b-input class="name" type="text" placeholder="제목을 입력하세요" />
    <label for="content"></label>
    <b-textarea
      name="content"
      id="content"
      cols="30"
      rows="10"
      placeholder="내용을 입력하세요"
    ></b-textarea>
    <b-button class="BtnStyle">확인</b-button>
    <b-button class="BtnStyle">취소</b-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
.container {
  display: flex;
  flex-direction: column;
}
.title {
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
</style>
