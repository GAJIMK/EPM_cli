<template>
  <div class="container-fluid">
    <MenuTitle menuTitle="👀 승인내역 조회" />
    <input type="month" class="form" max="2050-12" v-model="date" />
    <div class="find-list">
      <div class="list-title">
        제출한 {{ date }} 경비내역서 조회
        <font-awesome-icon
          icon="fa-solid fa-angle-down"
          v-if="show"
          @click="changeShow"
        />
        <font-awesome-icon
          icon="fa-solid fa-angle-up"
          v-else
          @click="changeShow"
        />
      </div>

      <div class="lists" v-if="show">
        <ExpensePartNoAdd
          v-for="expense in expenseList"
          :key="expense.feeCode"
          :expense="expense"
          :accountId="accountId"
          :date="date"
        />
      </div>
      <ApprovalStep />
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import ExpensePartNoAdd from '@/components/PersonalFee/ExpensePartNoAdd.vue';
import ApprovalStep from '@/components/approval/ApprovalStep.vue';
import { fetchPositionList } from '@/api/positionFeeMapper/positionFeeMapper';
import { accountInfo } from '@/api/account/account';
import moment from 'moment';
export default {
  components: { MenuTitle, ExpensePartNoAdd, ApprovalStep },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      date: moment(new Date()).format('YYYY-MM'),
      expenseList: '',
      accountId: 'gajung.kim',
      accountPosition: 0,
      show: false,
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
    changeShow() {
      this.show = this.show ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.month {
  display: flex;
  margin: 1.5em 0;
  justify-content: space-between;
}
.form {
  width: 300px;
}
.find-list {
  .list-title {
    font-size: var(--font-size-l);
    font-family: 'Nanum Gothic';
  }
}
</style>
