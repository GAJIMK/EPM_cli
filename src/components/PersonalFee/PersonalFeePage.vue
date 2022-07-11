<template>
  <div class="container-fluid">
    <div class="subTitle">
      📂<span class="bold">{{ date }},{{ accountId }}</span
      >님 경비계산서
    </div>
    <ExpensePartNoAdd
      v-for="expense in expenseList"
      :key="expense.feeCode"
      :expense="expense"
      :accountId="accountId"
      :date="date"
    />
    <div class="btnGroup">
      <button class="rejectBtn loginBtn">
        반려
      </button>
      <button class="approveBtn loginBtn">승인</button>
    </div>
  </div>
</template>

<script>
import ExpensePartNoAdd from './ExpensePartNoAdd.vue';
import { fetchPositionList } from '@/api/positionFeeMapper/positionFeeMapper';
import { accountInfo } from '@/api/account/account';
export default {
  components: {
    ExpensePartNoAdd,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      data: '',
      accountId: this.$route.query.id,
      name: this.$route.query.name,
      date: this.$route.query.date,
      accountPosition: 0,
      expenseList: '',
    };
  },
  methods: {
    async fetchData() {
      const res = await accountInfo(this.accountId)
        .then(res => {
          this.accountPosition = res.data.data.tpPosition;
          return this.accountPosition;
        })
        .then(code => {
          this.fetchExpenseList(code);
        });
    },
    async fetchExpenseList(code) {
      const fee = await fetchPositionList(code);
      this.expenseList = fee.data.list;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
.subTitle {
  font-size: 18px;
  padding: 10px 10px;
  .bold {
    font-weight: 600;
  }
}
.btnGroup {
  display: flex;
  width: fit-content;
  float: right;
  padding: 0 20px;
}

.rejectBtn {
  color: #fff;
  background-color: #c1564c;
  &:hover {
    background-color: #fff;
    color: #c1564c;
    border: 3px solid #c1564c;
  }
  margin-right: 10px;
}
.approveBtn {
  color: #fff;
  background-color: #95ba2f;

  &:hover {
    background-color: #fff;
    color: #95ba2f;
    border: 3px solid #95ba2f;
  }
}
</style>
