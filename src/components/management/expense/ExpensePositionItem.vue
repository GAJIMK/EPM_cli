<template>
  <div class="content">
    <div class="title">
      직위항목
      <b-button variant="warning" @click="addItem">항목추가</b-button>
    </div>
    <div class="list">
      <div class="line">
        <ul>
          <li v-for="item in items" :key="item">
            <div class="name">{{ item }}</div>
            <div class="edit-btn">
              <font-awesome-icon icon="fa-solid fa-eraser" />
            </div>
            <div class="delete-btn">
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { createExpense, fetchExpense } from '@/api/expense/expense.js';
export default {
  data() {
    return {
      items: ['매니저', '대리', '차장', '부장'],
    };
  },
  mounted() {},
  methods: {
    loadExpense() {
      const res = fetchExpense();
      console.log(res);
    },
    addItem() {},
  },
};
</script>
