<template>
  <div class="table-head">
    <div class="col">
      일자
    </div>
    <div class="col">
      내역
    </div>
    <div class="col">
      장소
    </div>
    <div class="col">
      동반인
    </div>
    <div class="col">
      개인카드/현금
    </div>
    <div class="col">
      금액
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Jua&family=Ubuntu:ital,wght@1,300&display=swap');
.table-head {
  text-align: center;
  font-family: 'Jua', sans-serif;
  background-color: rgb(255, 254, 174);
  display: flex;
  align-items: center;
  height: 2em;
  border: 0px;
}

.col {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
</style>
