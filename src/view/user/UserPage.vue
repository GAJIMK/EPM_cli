<template>
  <div class="container">
    <div id="title">
      <span id="name">{{ userId }}</span
      >님, 달별 경비 내역서
    </div>

    <ul class="user-lists">
      <div v-if="err">조회할 내용이 없습니다!</div>
      <div
        class="list"
        v-for="(list, index) in data"
        v-bind:key="index"
        @click="handlePersonal(list)"
      >
        <div>📂 {{ list.date.slice(0, 7) }} 경비 내역</div>
      </div>
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

    handlePersonal(data) {
      const date = data.date.substring(0, 7);
      this.$router
        .push({
          name: 'userPersonal',
          query: { id: data.accountId, name: name, date: date },
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
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

#title {
  font-size: 16px;
  #name {
    font-weight: 600;
  }
  padding-bottom: 20px;
}
.user-lists {
  height: 60vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  .list {
    border-bottom: solid #eee 0.5px;
    padding: 10px 10px;
    background-color: #fff;
    &:hover {
      cursor: pointer;
      background-color: var(--color-smoke);
    }
  }
}
</style>
