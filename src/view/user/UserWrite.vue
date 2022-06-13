<template>
  <div class="app">
    <div class="month">
      <input type="month" class="form" id="Title" max="2050-12" />
      <b-button class="inline-btn btn-warning" @click="save">저장하기</b-button>
      <b-button class="inline-btn btn-warning" @click="submit"
        >제출하기</b-button
      >
    </div>

    <ExpensePart
      v-for="expense in expenseList"
      :key="expense.summCode"
      :expense="expense"
      @receiveData="receiveData"
      ref="requestData"
    />
  </div>
</template>
<script>
import ExpensePart from '@/components/user/ExpensePart.vue';
import { fetchExpense } from '@/api/expense/expense';
import { createList, fetchUserList } from '@/api/userFeeList/userFeeList';
export default {
  components: { ExpensePart },

  data() {
    return {
      expenseList: '',
      lists: [],
      accountId: 'gajung.kim',
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
    save() {
      this.$refs.requestData.forEach(el => {
        if (el.$data.items.length != 0) el.pushData();
      });
    },
    submit() {
      //this.$refs.requestData.pushData();
    },

    receiveData(list) {
      list.forEach(li => {
        this.lists.push(li);
      });
      this.saveToDB();
    },

    saveToDB() {
      this.lists.forEach(async data => {
        data.accountId = this.accountId;
        await createList(data);
      });
    },

    checkList() {
      const index = ['date', 'price', 'method'];
      this.lists.forEach(list => {
        index.forEach(idx => {
          if (list[idx] === '') return false;
        });
      });
      return true;
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
