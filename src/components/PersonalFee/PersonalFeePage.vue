<template>
  <div class="container-fluid">
    <div class="subTitle">
      📂<span class="bold">{{ date }},{{ name }}</span
      >님 경비계산서
      <div class="btnGroup">
        <button class="rejectBtn loginBtn" @click="reject">
          반려
        </button>
        <button class="approveBtn loginBtn" @click="accept">승인</button>
      </div>
    </div>
    <ExpensePartNoAdd
      v-for="expense in expenseList"
      :key="expense.feeCode"
      :expense="expense"
      :accountId="accountId"
      :date="date"
    />
  </div>
</template>

<script>
import ExpensePartNoAdd from './ExpensePartNoAdd.vue';
import { fetchPositionList } from '@/api/positionFeeMapper/positionFeeMapper';
import { accountInfo } from '@/api/account/account';
import { approveState, rejectState } from '@/api/userFeeState/userFeeState';
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
      accountId: this.$store.state.accountId,
      name: this.$store.state.accountNm,
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
    async accept() {
      try {
        await approveState(this.accountId, this.date + '-01');
        this.$router.push({
          name: 'usersExpense',
          params: { date: this.date },
        });
      } catch (e) {
        alert(e);
      }
    },
    async reject() {
      try {
        await rejectState(this.accountId, this.date + '-01');
        this.$router.push({
          name: 'usersExpense',
          params: { date: this.date },
        });
      } catch (e) {
        alert(e);
      }
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
