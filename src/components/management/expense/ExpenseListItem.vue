<template>
  <div class="content">
    <div class="menu-title">
      경비항목
      <b-button variant="warning" @click="addItem">항목추가</b-button>
    </div>
    <div class="list">
      <div class="line">
        <ul>
          <li v-for="item in items" :key="item.summCode">
            <input
              class="name"
              type="text"
              v-model="item.summCodeName"
              @blur="updateData(item)"
            />
            <div class="edit-btn">
              <font-awesome-icon icon="fa-solid fa-eraser" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createExpense,
  fetchExpense,
  updateExpense,
} from '@/api/expense/expense';
export default {
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
    addItem() {
      this.items.push({
        summCode: 0,
        summCodeName: '',
      });
    },
    async updateData(item) {
      if (item.summCodeName == '') {
        return null;
      }
      if (item.summCode === 0 && item.summCodeName != '') {
        const res = createExpense(item);
      }
      try {
        await updateExpense(item);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
input[type='text'] {
  border: 0px;
  background: transparent;
}
</style>
