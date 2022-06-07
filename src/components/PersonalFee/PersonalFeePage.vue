<template>
  <div class="container">
    <MenuTitle menuTitle="🖱️개인별 경비계산서" />
    <div class="subTitle">{{ dating }} 경비계산서</div>
    <div class="lists">
      <TableHeader />
      <NewTable :item="item" v-for="item in data" :key="item.id" />
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import NewTable from '@/components/user/NewTable.vue';
import TableHeader from '@/components/user/TableHeader.vue';
import { fetchUserList } from '@/api/userFeeList/userFeeList';
export default {
  components: {
    MenuTitle,
    NewTable,
    TableHeader,
  },
  mounted() {
    this.show();
  },
  data() {
    return {
      data: '',
      name: this.$route.query.userId,
      dating: this.$route.query.date,
    };
  },
  methods: {
    async show() {
      const id = this.$route.query.userId;
      const date = this.$route.query.date;
      const res = await fetchUserList(id, date);
      this.data = res.data.list;
    },
  },
};
</script>

<style lang="scss"></style>
