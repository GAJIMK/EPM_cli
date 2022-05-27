<template>
  <div id="container">
    <h2 class="name">📰 다트 익명 게시판 ✏️</h2>
    <label for="name" class="title_2">제목 🙌</label
    ><b-input
      class="title"
      type="text"
      placeholder="제목을 입력하세요"
      disabled
    />
    <label for="content"></label>
    <b-textarea
      name="content"
      id="content"
      cols="30"
      rows="10"
      placeholder="내용을 입력하세요"
      disabled
    ></b-textarea>
    <b-button class="BtnStyle" @click="putData()">확인</b-button>
    <b-button class="BtnStyle">취소</b-button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
