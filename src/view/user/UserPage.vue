<template>
  <div class="container">
    <ul class="list-group">
      <li
        class="list-group-item disabled"
        v-for="(mylist, index) in mylists"
        v-bind:key="index"
      >
        {{ mylist }} 경비 내역서
      </li>
    </ul>
  </div>
</template>

<script>
import {
  fetchUserList,
  fetchUserAllList,
} from '@/api/userFeeList/userFeeList.js';
import moment from 'moment';
export default {
  data() {
    return {
      mylists: [],
      userId: 'jihye.son',
      date: moment(new Date()).format('YYYY-MM'),
      newdate: [],
      llist: [],
      len: '',
    };
  },
  mounted() {
    this.initData();
    this.fetchAllData();
  },
  methods: {
    async fetchAllData() {
      const res = await fetchUserAllList(this.userId);

      if (res.data.code === -50) {
        // 조회할 내역이 없을 떄
        console.log('내용이 없습니다. ');
      } else {
        this.len = res.data.list.length;
        console.log('this.len', this.len);
      }
    },

    async initData() {
      const res = await fetchUserList(this.userId, this.date);

      if (res.data.code === -50) {
        // 조회할 내역이 없을 떄
        console.log('내용이 없습니다. ');
      } else {
        console.log('현재 달 전체 리스트들', res.data);
        this.mylists.push(this.date);
      }

      for (var i = 0; i < this.len; i++) {
        this.newdate = moment(this.date)
          .subtract(i, 'M')
          .format('YYYY-MM');
        console.log('테스트', this.newdate);
        const res = await fetchUserList(this.userId, this.newdate);

        if (res.data.code === -50) {
          // 조회할 내역이 없을 떄
          console.log('내용이 없습니다. ');
        } else {
          console.log('현재 달 전체 리스트들', res.data);
          this.mylists.push(this.newdate);
        }
      }
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
