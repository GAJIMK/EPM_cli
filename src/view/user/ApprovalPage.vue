<template>
  <div class="container-fluid">
    <MenuTitle menuTitle="👀 승인내역 조회" />
    <input type="month" class="form" max="2050-12" v-model="date" />
    <div class="find-list">
      <div class="list-title" @click="changeShow">
        제출한 {{ date }} 경비내역서 조회
        <font-awesome-icon icon="fa-solid fa-angle-down" v-if="show" />
        <font-awesome-icon icon="fa-solid fa-angle-up" v-else />
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
      <div class="step-container">
        <ApprovalStep v-for="info in step" :key="info.accountId" :info="info" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import ExpensePartNoAdd from '@/components/PersonalFee/ExpensePartNoAdd.vue';
import ApprovalStep from '@/components/approval/ApprovalStep.vue';
import { fetchPositionList } from '@/api/positionFeeMapper/positionFeeMapper';
import { accountInfo, accountTeamNo } from '@/api/account/account';
import { fetchStep } from '@/api/approval/approval';
import moment from 'moment';
export default {
  components: { MenuTitle, ExpensePartNoAdd, ApprovalStep },
  mounted() {
    this.fetchData();
    this.fetchTeamNo();
  },
  data() {
    return {
      date: moment(new Date()).format('YYYY-MM'),
      expenseList: '',
      accountId: this.$store.state.accountId,
      accountPosition: 0,
      teamNo: 0,
      show: false,
      step: '',
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
        })
        .then(() => {
          this.fetchTeamNo();
        });
    },
    async fetchTeamNo() {
      await accountTeamNo(this.$store.state.accountId)
        .then(res => (this.teamNo = res.data.data.teamNo))
        .then(res => this.fetchStep(res));
    },

    async fetchStep(res) {
      await fetchStep(res).then(rs => {
        this.step = rs.data.list;
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
.step-container {
  display: flex;
}
</style>
