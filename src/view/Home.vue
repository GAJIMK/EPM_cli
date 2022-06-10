<template>
  <div class="container">
    <Menu />
    <div class="adds">
      <Memo />
      <Lunch />
    </div>
  </div>
</template>

<script>
import Lunch from './ect/Lunch.vue';
import Memo from './ect/Memo.vue';
import Menu from '@/components/common/Menu.vue';
export default {
  components: { Lunch, Memo, Menu },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 880px;
}
.adds {
  display: flex;
  margin-top: 1rem;

  :nth-child(1) {
    margin-right: 1rem;
    flex-grow: 1;
  }
  :nth-child(2) {
    flex-grow: 0.8;
  }
}

@media screen and(max-width: 768px) {
  .adds {
    flex-direction: column;
    :nth-child(1) {
      margin-right: 0px;
    }
    :nth-child(2) {
      margin-top: 1rem;
    }
  }
}
</style>
