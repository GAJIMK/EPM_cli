<template>
  <div>
    <b-button class="wirteBtn" @click="writelist()">작성하기</b-button>
    <ul class="listAll">
      <li v-for="mylist in mylists" v-bind:key="mylist">
        {{ mylist }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylists: ['지혜', '가정', '의정'],
    };
  },
  methods: {
    writelist() {
      this.$router.push({ name: 'userwrite' }).catch(() => {});
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

.inputBox {
  padding: 0.1%;
}
.wirte {
  float: right;
}
.named {
  font-family: 'Itim', cursive;
}
.wirteBtn {
  padding: 0.3%;
  margin: 1%;
}
.listAll {
  padding: 5%;
}
</style>
