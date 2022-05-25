<template>
  <div id="container">
    <h2 class="title">📰 다트 익명 게시판 ✏️</h2>
    <table>
      <tr>
        <th>제목</th>
        <td><b-input type="text" /></td>
      </tr>
      <tr>
        <th>내용</th>
        <td><b-textarea name="" id="" cols="130" rows="20"></b-textarea></td>
      </tr>
      <tr>
        <th></th>
        <td><b-button>작성완료</b-button><b-button>취소</b-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
.container {
  display: flex;
  flex-direction: column;
}
.title {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  padding: 2%;
}
</style>
