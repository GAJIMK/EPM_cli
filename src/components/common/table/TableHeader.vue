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
export default {}
</script>

<style lang="scss">
.table-head,
.table-cell {
  text-align: center;
  display: flex;
  flex-shrink: 1;
  align-items: center;
  width: 100%;
  padding: 0 0;
  height: 38px;
  min-width: 882px;
}

.table-head {
  background-color: #ffe4db;
}
.table-cell {
  border-bottom: 1px solid #eee;
}

.col {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
