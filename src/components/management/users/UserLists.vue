<template>
  <div class="container">
    <div class="cols">
      <div class="name">이름</div>
      <div class="id">아이디</div>
      <div class="position">직급</div>
      <div class="state">상태</div>
    </div>
    <div class="user-lists">
      <div
        class="list"
        v-for="user in users"
        :key="user.accountId"
        @click="handlePersonal(user.accountId, user.accountNm)"
      >
        <div class="name">{{ user.accountNm }}</div>
        <div class="id" name="id">{{ user.accountId }}</div>
        <div class="position">{{ user.commonName }}</div>
        <div class="state green" v-if="user.state === 10">승인</div>
        <div class="state blue" v-if="user.state === 30">승인요청</div>
        <div class="state blue" v-if="user.state === 50">진행중</div>
        <div class="state red" v-if="user.state === 40">거부</div>
        <div class="state gray" v-if="user.state === 90">미확인</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUsersByMonth } from '@/api/userFeeState/userFeeState';
export default {
  props: {
    date: {
      type: String,
    },
  },
  watch: {
    date() {
      this.propDate = this.date;
      this.initData();
    },
  },
  data() {
    return {
      users: '',
      propDate: this.date,
    };
  },

  methods: {
    handlePersonal(id, name) {
      this.$router
        .push({
          name: 'userPersonal',
          query: { accountId: id, accountNm: name, date: this.propDate },
        })
        .catch(() => {});
    },
    async initData() {
      const res = await fetchUsersByMonth(this.propDate);
      this.users = res.data.list;
    },
    async initDate() {
      this.propDate = this.date;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
.list,
.cols {
  display: flex;
}

.cols {
  color: #999;
  font-size: 12px;
  padding-bottom: 4px;
  border-bottom: solid #eee 0.5px;
}

.name,
.position,
.id,
.state {
  width: 25%;
  text-align: center;
}
.state {
  font-size: 0.9em;
  font-weight: 600;
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
    padding: 10px 0;
    background-color: #fff;
    &:hover {
      cursor: pointer;
      background-color: var(--color-smoke);
    }
  }
}
.results {
  display: flex;
  float: right;
  font-weight: 600;
  font-size: 0.9em;
  color: #555;
  * {
    display: flex;
    margin-right: 3px;
    justify-content: center;
    align-items: center;
    p {
      display: inline-block;
    }
  }
  div {
    margin-left: 10px;
  }
}
</style>
