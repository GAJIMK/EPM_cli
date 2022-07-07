<template>
  <div class="container">
    <MenuTitle menuTitle="👨‍👦‍👦 등급별 경비 관리" />
    <div class="contents">
      <section class="expenses">
        <div class="col index">직급</div>
        <div class="col" v-for="exp in expenses" :key="exp.summCode">
          {{ exp.summCodeName }}
        </div>
      </section>
      <section class="position">
        <PositionFeeMapper :feeLength="feeLength" />
      </section>
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import PositionFeeMapper from './PoistionFeeMapper.vue';

import { fetchExpense } from '@/api/expense/expense';
export default {
  components: { MenuTitle, PositionFeeMapper },
  mounted() {
    this.fetchExpense();
  },
  data() {
    return {
      expenses: [],
      feeLength: 0,
    };
  },
  methods: {
    async fetchExpense() {
      const res = await fetchExpense();
      console.log(res);
      this.expenses = res.data.list;
      this.feeLength = res.data.list.length;
    },
  },
};
</script>

<style lang="scss">
.expenses {
  display: flex;
  color: #000;
  font-size: 14px;
  padding-bottom: 4px;
  border-bottom: solid #eee 0.5px;
  text-align: center;
  .index {
    border-right: solid #eee 0.5px;
    font-weight: 700;
    text-align: left;
    width: 120px;
  }
}
.col {
  padding: 5px 8px;
}
</style>
