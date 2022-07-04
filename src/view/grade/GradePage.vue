<template>
  <div class="container">
    <MenuTitle menuTitle="👨‍👦‍👦 등급별 경비 관리" />
    <div class="cols">
      <div class="name">이름</div>
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import { fetchPosition } from '@/api/common/commonCode';
export default {
  components: { MenuTitle },
};
</script>

<style lang="scss" scoped>
.cols {
  display: flex;
  color: #999;
  font-size: 12px;
  padding-bottom: 4px;
  border-bottom: solid #eee 0.5px;
}
</style>
