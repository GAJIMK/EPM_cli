<template>
  <div class="table-cell" @click.capture="changeState">
    <div class="col">
      {{ item.date }}
    </div>
    <div class="col">
      {{ item.content }}
    </div>
    <div class="col">{{ item.place }}</div>
    <div class="col">
      {{ item.companion }}
    </div>
    <div class="col">
      {{ item.method }}
    </div>
    <div class="col">
      {{ item.price }}
    </div>
  </div>
</template>

<script>
import {updateUnstable, updateStable} from '@/api/userFeeList/userFeeList';
export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    async changeState(e) {
      const list = e.currentTarget;
      const item = this.item;
      if (item.state === 40) {
        await updateStable(item.id).then(() => {
          this.item.state = 50;
          list.classList.add('active');
        });
      } else {
        await updateUnstable(item.id).then(() => {
          this.item.state = 40;
          list.classList.remove('active');
        });
      }
    },
  },
};
</script>
<style lang="scss">
@import '@/scss/main.scss';

.active {
  background-color: rgba(245, 117, 117, 0.3);
}

.col {
  flex-shrink: 0;
  background-color: transparent;
}
</style>
