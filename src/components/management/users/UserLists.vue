<template>
  <div class="container">
    <div class="cols">
      <div class="name">이름</div>
      <div class="position">직급</div>
      <div class="state">상태</div>
    </div>
    <div class="user-lists">
      <div
        class="list"
        v-for="user in users"
        :key="user.id"
        @click="handlePersonal"
      >
        <div class="name">{{ user.name }}</div>
        <div class="position">{{ user.position }}</div>
        <div class="state green" v-if="user.state === 1">승인</div>
        <div class="state red" v-if="user.state === 2">거부</div>
        <div class="state gray" v-if="user.state === 3">미확인</div>
      </div>
    </div>
    <div class="results">
      <div class="pass">
        승인
        <div class="green">{{ pass }}</div>
      </div>
      <div class="reject">
        거부
        <div class="red">{{ reject }}</div>
      </div>
      <div class="noncheck">
        미확인
        <div class="gray">{{ noncheck }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 'gajung.kim', name: '김가정', position: '매니저', state: 1 },
        { id: 'jihye.son', name: '손지혜', position: '매니저', state: 1 },
        { id: 'jinho.kim', name: '김진호', position: '차장', state: 2 },
        { id: 'hojun.lee', name: '이호준', position: '부장', state: 3 },
      ],
      pass: 2,
      reject: 1,
      noncheck: 1,
    };
  },
  methods: {
    handlePersonal() {
      this.$router.push({ name: 'userPersonal' }).catch(() => {});
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
.state {
  width: 33%;
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
    &:hover {
      cursor: pointer;
      background-color: whitesmoke;
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
