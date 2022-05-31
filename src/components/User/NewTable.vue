<template>
  <div class="table-cell">
    <div class="col" contenteditable="true">
      <input
        type="date"
        tabindex="0"
        max="9999-12-31"
        class="date"
        :value="list.date"
      />
    </div>
    <div class="col">
      <input type="text" :value="list.content" />
    </div>
    <div class="col"><input type="text" :value="list.place" /></div>
    <div class="col"><input type="text" :value="list.companion" /></div>
    <div class="col">
      <p v-if="list.method">{{ list.method }}</p>
      <select v-else class="select_pass">
        <option>현금</option>
        <option>개인카드</option>
      </select>
    </div>
    <div>
      <input
        type="text"
        class="col"
        :value="list.price"
        @blur="message()"
        @keyup.enter="$event.target.blur()"
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
      if (this.item !== null) {
        const col = ['date', 'content', 'price', 'companion', 'method'];
        col.forEach(e => (this.list[e] = this.item[e]));
      }
    },
  },
};
</script>

<style lang="scss">
.table-cell {
  text-align: center;
  font-family: 'Jua', sans-serif;
  display: flex;
  align-items: center;
  height: 2em;
  border: 0px;
}

.col {
  border: 1px solid red;
}
input {
  border: none;
}
input:focus {
  border: none;
  background-color: yellow;
}
.date {
  border: none;
}
.select_pass {
  color: rgb(107, 155, 67);
  border: 0 solid black;
  width: 100%;
  font-weight: bold;
  text-align: center;
}
.mm {
  text-align: right;
}
</style>
