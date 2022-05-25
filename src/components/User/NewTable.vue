<template>
  <tr>
    <td contenteditable="true">
      <input type="date" tabindex="0" max="9999-12-31" class="date" />
    </td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <select class="select"
        ><option>개인카드</option
        ><option>현금</option></select
      >
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
      this.nums.forEach((item) => {
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
}
</style>
