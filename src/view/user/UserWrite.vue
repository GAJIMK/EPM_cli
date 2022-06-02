<template>
  <div class="app">
    <div class="month">
      <input type="month" class="form-control" id="Title" max="2050-12" />
    </div>

    <ExpensePart />
  </div>
</template>
<script>
import ExpensePart from '@/components/user/ExpensePart.vue';
export default {
  name: 'app',
  components: { ExpensePart },

  mounted() {
    this.title();
  },
  methods: {
    title() {
      document.getElementById('Title').value = new Date()
        .toISOString()
        .slice(0, 7);
    },

    //영수증 파일 업로드 하는 메소드
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Jua&family=Ubuntu:ital,wght@1,300&display=swap');
.month {
  width: 300px;
  margin: 1.5em 0;
}
</style>
