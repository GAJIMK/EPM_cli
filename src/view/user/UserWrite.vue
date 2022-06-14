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
      :existLists="existLists"
      :accountId="accountId"
      @receiveData="receiveData"
    />
  </div>
</template>
<script>
import ExpensePart from '@/components/user/ExpensePart.vue';
import { fetchExpense } from '@/api/expense/expense';
import {
  createList,
  updateList,
  deleteList,
  fetchUserList,
} from '@/api/userFeeList/userFeeList';
import moment from 'moment';

export default {
  components: { ExpensePart },

  data() {
    return {
      expenseList: '',
      existLists: [],
      lists: [],
      accountId: 'gajung.kim',
      date: moment(new Date()).format('YYYY-MM'),
      existId: [],
    };
  },
  mounted() {
    this.title();
    this.fetchExpenseList();
    this.fetchUserExpenseList();
  },
  methods: {
    async fetchExpenseList() {
      const res = await fetchExpense();
      this.expenseList = res.data.list;
    },

    async fetchUserExpenseList() {
      const res = await fetchUserList(this.accountId, this.date);
      this.existLists = res.data.list;
      this.existLists.forEach(list => this.existId.push(list.id));
    },

    title() {
      document.getElementById('Title').value = new Date()
        .toISOString()
        .slice(0, 7);
    },
    submit() {
      //this.$refs.requestData.pushData();
    },

    receiveData(list) {
      this.lists = [];
      list.forEach(li => {
        this.lists.push(li);
      });
      this.saveToDB().then(() => {});
    },

    async saveToDB() {
      for (const data of this.lists) {
        data.accountId = this.accountId;
        if (data.id == 0) {
          console.log('생성', data);
          await createList(data);
        } else {
          console.log('수정', data);
          await updateList(data);
          this.existId.forEach((id, idx) => {
            if (data.id == id) {
              console.log(this.existId);
              this.existId[idx] = 0;
            }
          });
        }
      }
      // for (let id of this.existId) {
      //   if (id != 0) {
      //     console.log('삭제됨', id, this.existId);
      //     await deleteList(id);
      //   }
      // }
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
