<template>
  <tr>
    <td contenteditable="true">
      <input
        type="date"
        style="border:0 solid black; width:100%"
        tabindex="0"
        max="9999-12-31"
      />
    </td>
    <td>
      .
    </td>
    <td>
      .
    </td>
    <td>
      .
    </td>
    <td>
      <select style="border:0 solid black; width:100%;"
        ><option>개인카드</option
        ><option>현금</option></select
      >
    </td>
    <td>
      <input
        type="text"
        class="mm"
        value="0"
        style="border:0 solid black; width:100%"
        @blur="message()"
      />
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    sum: 0;
    nums: [];
  },

  methods: {
    message() {
      const value = document.querySelectorAll('.mm');
      this.nums = [];
      this.sum = 0;
      for (var i = 0; i < value.length; i++) {
        console.log(value[i].value);
        this.nums.push(value[i].value);
        console.log('숫자들', this.nums);
      }
      this.nums.forEach((item) => {
        this.sum += parseInt(item);
      });
      console.log('합계', this.sum);
      this.$emit('message', this.sum);
    },
  },
};
</script>

<style></style>
