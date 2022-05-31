<template>
  <tr class="tbody">
    <td contenteditable="true" class="td">
      <input
        type="date"
        tabindex="0"
        max="9999-12-31"
        class="date"
        :value="item.date"
      />
    </td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <select class="select_pass" :value="item.method">
        <option>현금</option>
        <option>개인카드</option>
      </select>
    </td>
    <td>
      <input
        type="text"
        class="mm"
        value="0"
        @blur="message()"
        @keyup.enter="$event.target.blur()"
      />
    </td>
  </tr>
</template>

<script>
import { emit } from 'process';

export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    sum: 0;
    nums: [];
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
.td {
  padding: 0.3%;
}
</style>
