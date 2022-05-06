<template>
  <div class="content">
    <div class="title">
      경비항목
      <b-button v-b-modal.modal-1 variant="warning" @click="addItem"
        >항목추가</b-button
      >
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
    <Modal id="modal-1" />
  </div>
</template>

<script>
import { createExpense, fetchExpense } from '@/api/expense/expense.js';
import Modal from './modal/ListModal.vue';
export default {
  components() {
    Modal;
  },
  data() {
    return {
      items: ['팀활동비', '문화체험비'],
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

<style lang="scss" scoped></style>
