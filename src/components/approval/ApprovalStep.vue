<template>
  <div class="box">
    <div class="line">
      <div class="stamp gray" v-if="state === 90">미확인</div>
      <div class="stamp green" v-if="state === 10">승인</div>
      <div class="stamp red" v-if="state === 40">반려</div>
    </div>
    <div id="admin">검토 : {{ info.accountNm }}</div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
  },
  data() {
    return {
      state: 90,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/font.scss';
.box {
  width: 7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 0.5em 0;
  margin-right: 2em;
}
.stamp {
  width: 5em;
  height: 5em;
  border: 5px solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SEBANG_Gothic_Bold';
  margin-bottom: 0.5em;
}

.line {
  border-bottom: 2px solid #ddd;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
}
</style>
