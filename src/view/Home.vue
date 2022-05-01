<template>
  <div class="container">
    <div class="menu">
      <!-- 서버에서 반복 통해  -->
      <ul class="menu-items">
        <li class="list-item">
          <font-awesome-icon icon="fa-solid fa-user-secret" />작성하기
        </li>
        <li class="list-item">확인하기</li>
        <li class="list-item">마이페이지</li>
      </ul>
    </div>
    <div class="adds">
      <div class="alarm">
        <ul>
          <li>김가정 귀염둥이</li>
          <li>지혜 생축</li>
        </ul>
      </div>
      <div class="weather">
        <ul>
          <li>
            오늘의 날씨 🌦️ 약간 흐림
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
}
.menu-items {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}
</style>
