<template>
  <div class="container">
    <MenuTitle menuTitle="🖱️개인별 경비계산서" />
    <div class="subTitle">{{ date }} ,{{ name }}님 경비계산서</div>
    <div class="lists">
      <NewTable :item="item" v-for="item in data" :key="item.id" />
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import NewTable from '@/components/User/NewTable.vue';
import { fetchUserList } from '@/api/userFeeList/userFeeList';
export default {
  components: {
    MenuTitle,
    NewTable,
  },
  mounted() {
    this.show();
  },
  data() {
    return {
      data: '',
      name: this.$route.query.name,
      date: this.$route.query.date,
    };
  },
  methods: {
    async show() {
      const id = this.$route.query.id;
      const date = this.$route.query.date;
      const res = await fetchUserList(id, date);
      this.data = res.data.list;
    },
  },
};
</script>

<style></style>
