<template>
  <div class="map">
    <div class="title">
      직위별 경비항목
      <b-button variant="warning" @click="addItem">항목추가</b-button>
    </div>
    <div v-for="d in data" :key="d.position" class="lists">
      <div class="sub-title">{{ d.position }}</div>
      <div class="list">
        <div class="line">
          <ul>
            <li v-for="item in d.items" :key="item">
              <div class="item">{{ item.list }}</div>
              <div class="price">{{ item.price }}</div>
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
  </div>
</template>

<script>
import { createExpense, fetchExpense } from '@/api/expense/expense.js';
export default {
  data() {
    return {
      data: [
        {
          position: '매니저',
          items: [
            {
              list: '문화생활비',
              price: 70000,
            },
            {
              list: '팀활동비',
              price: 50000,
            },
            {
              list: '통신비',
              price: 30000,
            },
          ],
        },
        {
          position: '대리',
          items: [
            {
              list: '문화생활비',
              price: 80000,
            },
            {
              list: '팀활동비',
              price: 60000,
            },
            {
              list: '통신비',
              price: 30000,
            },
          ],
        },
      ],
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

<style lang="scss" scoped>
.map {
  width: 22em;
}
.item,
.price {
  flex-basis: 50%;
}
.sub-title {
  font-weight: 600;
  color: #444;
}
.lists:not(:first-child) {
  margin-top: 1em;
}
</style>
