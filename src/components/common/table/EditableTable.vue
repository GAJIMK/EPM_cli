<template>
  <div class="table-cell" v-bind:class="{ active: item.state === 40 }">
    <div class="col">
      <input
        type="date"
        tabindex="0"
        max="9999-12-31"
        class="date"
        v-model="item.date"
        @blur="update"
        @keyup.enter="update"
      />
    </div>
    <div class="col">
      <input
        type="text"
        v-model="item.content"
        @blur="update"
        @keyup.enter="update"
      />
    </div>
    <div class="col">
      <input
        type="text"
        v-model="item.place"
        @blur="update"
        @keyup.enter="update"
      />
    </div>
    <div class="col">
      <input
        type="text"
        v-model="item.companion"
        @blur="update"
        @keyup.enter="update"
      />
    </div>
    <div class="col">
      <select
        class="select_pass"
        v-model="item.method"
        @blur="update"
        @keyup.enter="update"
      >
        <option>현금</option>
        <option>개인카드</option>
      </select>
    </div>
    <div class="col">
      <input
        type="text"
        class="mm"
        v-model="item.price"
        @blur="update"
        @keyup.enter="update"
      />
    </div>
  </div>
</template>

<script>
import { updateList } from '@/api/userFeeList/userFeeList'

export default {
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    async update() {
      await updateList(this.item).then(() => this.$emit('printSum'))
    },
  },
}
</script>
<style lang="scss">
@import '@/scss/main.scss';
input[type='text'],
input[type='date'] {
  display: block;
  flex-shrink: 1;
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
select {
  min-width: 147px;
}
.select_pass {
  color: rgb(107, 155, 67);
  border: 0 solid black;
  width: 100%;
  font-weight: bold;
  text-align: center;
  background-color: transparent;
}

.active {
  background-color: rgba(245, 117, 117, 0.2);
}
</style>
