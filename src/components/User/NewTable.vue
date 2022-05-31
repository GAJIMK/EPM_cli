<template>
  <tr class="tbody">
    <td contenteditable="true" class="td">
      <input
        type="date"
        tabindex="0"
        max="9999-12-31"
        class="date"
        :value="list.date"
      />
    </td>
    <td>{{ list.content }}</td>
    <td>{{ list.place }}</td>
    <td>{{ list.companion }}</td>
    <td>
      <p v-if="list.method">{{ list.method }}</p>
      <select v-else class="select_pass">
        <option>현금</option>
        <option>개인카드</option>
      </select>
    </td>
    <td>
      <input
        type="text"
        class="mm"
        :value="list.price"
        @blur="message()"
        @keyup.enter="$event.target.blur()"
      />
    </td>
  </tr>
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
        date: '연도-월-일',
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

<style>
.date,
.select,
.mm {
  border: 0 solid black;
  width: 100%;
  color: rgb(219, 187, 41);
  font-weight: bold;
  text-align: center;
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
td {
  padding: 0.3%;
  text-align: center;
}
</style>
