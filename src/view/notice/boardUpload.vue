<template>
  <div id="container">
    <h2>☏ 다트 익명 게시판 ☏</h2>
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
.container {
  display: flex;
}
</style>
