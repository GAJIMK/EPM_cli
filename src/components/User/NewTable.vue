<template>
  <div class="table-cell">
    <div class="col" contenteditable="true">
      <input
        type="date"
        tabindex="0"
        max="9999-12-31"
        class="date"
        v-model="list.date"
        @blur="update"
      />
    </div>
    <div class="col">
      <input type="text" v-model="list.content" />
    </div>
    <div class="col">
      <input type="text" v-model="list.place" @blur="update" />
    </div>
    <div class="col"><input type="text" v-model="list.companion" /></div>
    <div class="col pay">
      <p v-if="list.method">{{ list.method }}</p>
      <select v-else class="select_pass" @blur="update">
        <option>현금</option>
        <option>개인카드</option>
      </select>
    </div>
    <div class="col">
      <input
        type="text"
        class="mm"
        v-model="list.price"
        @keyup.enter="message()"
        @blur="update"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      sum: 0,
      nums: [],
      list: {
        id: '',
        date: '',
        content: '',
        price: '',
        companion: '',
        method: '',
      },
    };
  },
  mounted() {
    this.fetchProps();
  },
  methods: {
    message() {
      const values = document.querySelectorAll('.mm');
      this.nums = [];
      this.sum = 0;
      for (var i = 0; i < values.length; i++) {
        //console.log(value[i].value);

        this.nums.push(values[i].value);
      }
      this.nums.forEach(item => {
        this.sum += parseInt(item);
      });

      this.$emit('message', this.sum);
    },
    fetchProps() {
      if (this.item !== undefined) {
        const col = ['date', 'content', 'price', 'companion', 'method'];

        col.forEach(e => (this.list[e] = this.item[e]));
      }
    },
    async update() {},
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
