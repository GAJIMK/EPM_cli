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
      결제 방법
    </div>
    <div class="col">
      금액
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Jua&family=Ubuntu:ital,wght@1,300&display=swap');
.table-head,
.table-cell {
  text-align: center;
  font-family: 'Jua', sans-serif;
  display: flex;
  align-items: center;
  height: 2em;
  border: 0px;
}

.table-head {
  background-color: rgb(255, 254, 174);
}

.col {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  flex-basis: 10rem;
  padding: 0 0;
  flex-shrink: 0;
  font-weight: 500;
}
</style>
