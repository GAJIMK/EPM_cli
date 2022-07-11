<template>
  <div class="table-cell" @click.capture="changeState">
    <div class="col" contenteditable="true">
      <input disabled type="date" class="date" v-model="item.date" />
    </div>
    <div class="col">
      <input disabled type="text" v-model="item.content" />
    </div>
    <div class="col">
      <input disabled type="text" v-model="item.place" />
    </div>
    <div class="col">
      <input disabled type="text" v-model="item.companion" />
    </div>
    <div class="col">
      <input disabled type="text" class="select_pass" v-model="item.method" />
    </div>
    <div class="col">
      <input disabled type="text" class="mm" v-model="item.price" />
    </div>
  </div>
</template>

<script>
import { updateUnstable, updateStable } from '@/api/userFeeList/userFeeList';
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
input[type='text'],
input[type='date'] {
  text-align: center;
  border: 0px;
  background: transparent;
  padding: 0 0;
  &:focus {
    outline: none;
  }
}
p {
  margin: 0 0;
}

.active {
  background-color: rgba(245, 117, 117, 0.3);
}
.select_pass {
  color: rgb(107, 155, 67);
  border: 0 solid black;
  width: 100%;
  font-weight: bold;
  text-align: center;
}

.col {
  flex-shrink: 0;
  background-color: transparent;
}
</style>
