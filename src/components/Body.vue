<template>
  <div class="container">
    <p class="kategorie" align="left">추천 카테고리</p>

    <div class="menu">
      <button class="kitchen">
        <i class="fas fa-utensils"></i>
        <p>주방용품</p>
      </button>
      <button class="car">
        <i class="fas fa-car"></i>
        <p>차량용품</p>
      </button>

      <button class="camp">
        <i class="fas fa-fire"></i>
        <p>캠핑용품</p>
      </button>

      <button class="interior">
        <i class="fas fa-couch"></i>
        <p>인테리어</p>
      </button>

      <button class="tool">
        <i class="fas fa-wrench"></i>
        <p>공구/도구</p>
      </button>
    </div>
    <div class="hot">
      <p class="favorite" align="left">지역 인기상품</p>
      <img class="item" alt="item" src="../assets/item.png" />
      <div>상품이름</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.kategorie {
  margin-top: 80px;
}
.kitchen,
.car,
.camp,
.interior,
.tool {
  margin-top: 50px;
  font-size: 19px;
  padding: 50px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  opacity: 0.5;
  border-radius: 20px;
  border: 0;
  outline: 0;
  margin-right: 40px;
}

.kitchen:hover,
.car:hover,
.camp:hover,
.interior:hover,
.tool:hover {
  background-color: #dad9ff;
}
.item {
  max-width: 300px;
  max-height: 300px;
}
.favorite {
  margin-top: 50px;
}
</style>
