<template>
  <div class="container">
    <ul class="list-group" @click="message()">
      <li
        class="list-group-item disabled"
        v-for="mylist in mylists"
        v-bind:key="mylist"
      >
        {{ mylist }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylists: [
        '2022-02 경비내역서',
        '2022-03 경비내역서',
        '2022-04 경비내역서',
        '2022-05 경비내역서',
        '2022-06 경비내역서',
        '2022-07 경비내역서',
        '2022-08 경비내역서',
      ],
    };
  },
  methods: {
    message() {
      alert('해당 경비내역서로 이동합니다');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
