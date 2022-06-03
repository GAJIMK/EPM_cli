<template>
  <div class="content">
    <div class="title">
      경비항목
      <b-button variant="warning" @click="show">항목추가</b-button>
    </div>
    <div class="list">
      <div class="line">
        <ul>
          <li v-for="item in items" :key="item.summCode">
            <input class="name" type="text" :value="item.summCodeName" />
            <div class="edit-btn" @click="edit">
              <font-awesome-icon icon="fa-solid fa-eraser" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Modal :state="modalState" :modalTitle="modalTitle" />
  </div>
</template>

<script>
import { createExpense, fetchExpense } from '@/api/expense/expense';
import { fetchUserList } from '@/api/userFeeList/userFeeList';
import Modal from './modal/ListModal.vue';
export default {
  components: {
    Modal,
  },
  data() {
    return {
      items: '',
      modalState: false,
      modalTitle: '경비항목 추가',
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetchExpense();
      this.items = res.data.list;
    },
    show() {
      this.modalState = true;
    },

    edit(e) {
      const btn = e.currentTarget;
      // const parent = btn.parentElement;
      // const name = parent.getElementsByClassName('name');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
</style>
