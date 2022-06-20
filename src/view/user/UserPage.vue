<template>
  <div class="container">
    {{ userId }}님, 달별 경비 내역서
    <ul class="list-group">
      <div v-if="err">조회할 내용이 없습니다!</div>
      <li
        class="list-group-item"
        v-for="(list, index) in data"
        v-bind:key="index"
        @click="handlePersonal(user.accountId, user.accountNm)"
      >
        <div>{{ list.date }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchUserMonthState } from '@/api/userFeeState/userFeeState.js';
import moment from 'moment';

export default {
  data() {
    return {
      data: [],
      userId: 'jihye.son',
      date: moment(new Date()).format('YYYY-MM'),
      newdate: [],
      llist: [],
      len: '',
      err: false,
    };
  },

  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      const res = await fetchUserMonthState(this.userId);

      if (res.data.code === -50) {
        this.err = true;
      } else {
        this.data = res.data.list;
      }
    },

    handlePersonal(e) {
      console.log(e);
      // this.$router
      //   .push({
      //     name: 'userPersonal',
      //     query: { id: a, name: name, date: this.propDate },
      //   })
      //   .catch(() => {});
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
  padding: 3%;
}
.list-group {
  cursor: pointer;
}
</style>
