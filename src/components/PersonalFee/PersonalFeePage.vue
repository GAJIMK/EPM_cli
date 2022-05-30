<template>
  <div class="container">
    <MenuTitle menuTitle="🖱️개인별 경비계산서" />
    <div class="subTitle">{{ name }}님, {{ date }} 경비계산서</div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import { fetchUserList } from '@/api/userFeeList/userFeeList';
export default {
  components: {
    MenuTitle,
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
      const data = await fetchUserList(id, date);
      this.data = data;
    },
  },
};
</script>

<style></style>
