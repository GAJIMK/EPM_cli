<template>
  <div class="container">
    <MenuTitle menuTitle="👨‍👦‍👦 등급별 경비 관리" />
    <div class="contents">
      <section class="position">
        <div class="pos" v-for="pos in positions" :key="pos.commonCode">
          {{ pos.commonName }}
        </div>
      </section>
      <section class="expenses">
        <div class="col" v-for="exp in expenses" :key="exp.summCode">
          {{ exp.summCodeName }}
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import { fetchPosition } from '@/api/common/commonCode';
import { fetchExpense } from '@/api/expense/expense';
export default {
  components: { MenuTitle },
  mounted() {
    this.fetchPosition();
    this.fetchExpense();
  },
  data() {
    return {
      positions: [],
      expenses: [],
    };
  },
  methods: {
    async fetchPosition() {
      const res = await fetchPosition();
      this.positions = res.data.list;
    },
    async fetchExpense() {
      const res = await fetchExpense();
      this.expenses = res.data.list;
    },
  },
};
</script>

<style lang="scss" scoped>
.expenses {
  display: flex;
  color: #999;
  font-size: 14px;
  padding-bottom: 4px;
  border-bottom: solid #eee 0.5px;
  text-align: center;
}
</style>
