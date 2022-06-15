<template>
  <div class="app">
    <MenuTitle menuTitle="✍🏻작성하기" />
    <div class="month">
      <input type="month" class="form" max="2050-12" v-model="date" />
      <b-button class="inline-btn btn-warning" @click="submit"
        >제출하기</b-button
      >
    </div>

    <ExpensePart
      v-for="expense in expenseList"
      :date="date"
      :key="expense.summCode"
      :expense="expense"
      :accountId="accountId"
    />
  </div>
</template>
<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import ExpensePart from '@/components/common/table/ExpensePart.vue';
import { fetchExpense } from '@/api/expense/expense';

import moment from 'moment';

export default {
  components: { MenuTitle, ExpensePart },

  data() {
    return {
      expenseList: '',
      accountId: 'gajung.kim',
      date: moment(new Date()).format('YYYY-MM'),
    };
  },
  mounted() {
    this.fetchExpenseList();
  },
  watch: {
    date() {
      this.existLists = [];
      this.fetchUserExpenseList();
    },
  },
  methods: {
    async fetchExpenseList() {
      const res = await fetchExpense();
      this.expenseList = res.data.list;
    },

    submit() {
      //this.$refs.requestData.pushData();
    },

    //영수증 파일 업로드 하는 메소드
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Jua&family=Ubuntu:ital,wght@1,300&display=swap');
.month {
  display: flex;
  margin: 1.5em 0;
  justify-content: space-between;
}
.form {
  width: 300px;
}
</style>
