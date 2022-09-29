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
.table-head,
.table-cell {
  text-align: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2em;
  border: 0px;
}

.table-head {
  background-color: #FFE4DB;
}

.col {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  padding: 0 0;
  width: 2rem;
  flex-basis: 120px;
  font-weight: 500;
}
</style>
