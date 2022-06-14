<template>
  <div class="table-cell">
    <div class="col" contenteditable="true">
      <input
        type="date"
        tabindex="0"
        max="9999-12-31"
        class="date"
        v-model="item.date"
        @blur="update"
      />
    </div>
    <div class="col">
      <input type="text" v-model="item.content" @blur="update" />
    </div>
    <div class="col">
      <input type="text" v-model="item.place" @blur="update" />
    </div>
    <div class="col">
      <input type="text" v-model="item.companion" @blur="update" />
    </div>
    <div class="col pay">
      <select class="select_pass" v-model="item.method" @blur="update">
        <option>현금</option>
        <option>개인카드</option>
      </select>
    </div>
    <div class="col">
      <input
        type="text"
        class="mm"
        v-model="item.price"
        @keyup.enter="sendList"
        @blur="update"
      />
    </div>
  </div>
</template>

<script>
import { updateList } from '@/api/userFeeList/userFeeList';
export default {
  props: {
    item: {
      type: Object,
    },
  },

  mounted() {},
  methods: {
    sendList() {
      this.$emit('printSum', this.item);
    },

    async update() {
      await updateList(this.item);
    },
  },
};
</script>
<style lang="scss">
@import '@/scss/main.scss';
input[type='text'],
input[type='date'] {
  text-align: center;
}
p {
  margin: 0 0;
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
}
</style>
