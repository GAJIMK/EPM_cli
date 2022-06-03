<template>
  <div class="container">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(mylist, index) in mylists"
        v-bind:key="index"
        @click="goreport(index)"
      >
        {{ mylist }} 경비 내역서
      </li>
    </ul>
    <Personal-Fee-Page :name="userId" :ym="date" />
  </div>
</template>

<script>
import {
  fetchUserList,
  fetchUserAllList,
} from '@/api/userFeeList/userFeeList.js';
import moment from 'moment';
import PersonalFeePage from '@/components/PersonalFee/PersonalFeePage.vue';

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
  components: {
    PersonalFeePage,
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
      }
    },

    async initData() {
      const res = await fetchUserList(this.userId, this.date);

      if (res.data.code === -50) {
        // 조회할 내역이 없을 떄
      } else {
        console.log('현재 달 전체 리스트들', res.data);
      }

      for (var i = 0; i < this.len; i++) {
        this.newdate = moment(this.date)
          .subtract(i, 'M')
          .format('YYYY-MM');
        const res = await fetchUserList(this.userId, this.newdate);

        if (res.data.code === -50) {
          // 조회할 내역이 없을 떄
        } else {
          console.log('현재 달 전체 리스트들', res.data);
          this.mylists.push(this.newdate);
          console.log('마이 리스트', this.mylists);
          //this.mylists랑 userId를 props로 내려줘야함
        }
      }
    },
    goreport(index) {
      const a = this.userId;
      const b = this.mylists[index];

      this.$router.push({
        name: 'userPersonal',
        query: { userId: a, date: b },
      });
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
