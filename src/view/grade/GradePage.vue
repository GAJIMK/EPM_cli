<template>
  <div class="container">
    <MenuTitle menuTitle="👨‍👦‍👦 등급별 경비 관리" />
    <div class="contents">
      <section class="expenses">
        <div class="col fixed">직급</div>
        <div class="col fee" v-for="exp in expenses" :key="exp.summCode">
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
import MenuTitle from '@/components/common/MenuTitleForm.vue'
import PositionFeeMapper from './PoistionFeeMapper.vue'

import { fetchExpense } from '@/api/expense/expense'
export default {
  components: { MenuTitle, PositionFeeMapper },
  mounted() {
    this.fetchExpense()
  },
  data() {
    return {
      expenses: [],
      feeLength: 0,
    }
  },
  methods: {
    async fetchExpense() {
      const res = await fetchExpense()
      console.log(res)
      this.expenses = res.data.list
      this.feeLength = res.data.list.length
    },
  },
}
</script>

<style lang="scss">
.contents {
  display: flex;
  flex-direction: column;
  border-right: solid #eee 0.5px;
  border-left: solid #eee 0.5px;
}
.expenses {
  display: flex;
  color: #000;
  font-size: 14px;
  border-bottom: solid #eee 0.5px;
  text-align: center;
  background: var(--color-smoke);

  .col {
    font-weight: 700;
    color: #000;
  }
  .fee {
    color: #555;
  }

  .fixed {
    min-width: 125px;
    max-width: 125px;
  }
}

.index {
  text-align: left;
  color: #000;
  border-right: solid #eee 0.5px;
}
.col {
  display: table;
  margin: auto 0;
  min-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
