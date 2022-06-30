<template>
  <div class="container">
    <div class="subTitle">
      📂<span class="bold">{{ date }},{{ id }}</span
      >님 경비계산서
    </div>
    <ExpensePartNoAdd
      v-for="expense in expenseList"
      :key="expense.summCode"
      :expense="expense"
      :id="id"
      :date="date"
    />
  </div>
</template>

<script>
import ExpensePartNoAdd from './ExpensePartNoAdd.vue';
import { fetchUserList } from '@/api/userFeeList/userFeeList';
import { fetchExpense } from '@/api/expense/expense';
export default {
  components: {
    ExpensePartNoAdd,
  },
  mounted() {
    this.fetchExpenseList();
  },
  data() {
    return {
      data: '',
      id: this.$route.query.id,
      name: this.$route.query.name,
      date: this.$route.query.date,
      expenseList: '',
    };
  },
  methods: {
    async fetchExpenseList() {
      const res = await fetchExpense();
      this.expenseList = res.data.list;
    },
  },
};
</script>

<style lang="scss" scoped>
.subTitle {
  font-size: 18px;
  padding: 10px 10px;
  .bold {
    font-weight: 600;
  }
}
</style>
