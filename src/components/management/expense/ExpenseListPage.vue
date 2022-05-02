<template>
  <div class="container">
    <MenuTitle menuTitle="경비리스트 관리" />
    <b-button variant="warning" class="btn">추가하기</b-button>
  </div>
</template>

<script>
import MenuTitle from "@/components/common/MenuTitleForm.vue";
export default {
  components: {
    MenuTitle,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  color: #fff;
  font-weight: 600;
  float: right;
}
</style>
