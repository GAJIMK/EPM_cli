<template>
  <div class="app">
    <div class="month">
      <input type="month" class="form" id="Title" max="2050-12" />
      <b-button class="inline-btn btn-warning" @click="submit"
        >제출하기</b-button
      >
    </div>

    <ExpensePart
      v-for="expense in expenseList"
      :key="expense.summCode"
      :expense="expense"
    />
  </div>
</template>
<script>
import ExpensePart from '@/components/user/ExpensePart.vue';
import { fetchExpense } from '@/api/expense/expense';
export default {
  components: { ExpensePart },

  data() {
    return {
      expenseList: '',
    };
  },
  mounted() {
    this.title();
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetchExpense();
      this.expenseList = res.data.list;
    },
    title() {
      document.getElementById('Title').value = new Date()
        .toISOString()
        .slice(0, 7);
    },
    submit() {},

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
