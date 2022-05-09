<template>
  <div class="container">
    <div class="cols">
      <div class="name">이름</div>
      <div class="position">직급</div>
      <div class="state">상태</div>
    </div>
    <div class="lists" v-for="user in users" :key="user.id">
      <div class="list">
        <div class="name">{{ user.name }}</div>
        <div class="position">{{ user.position }}</div>
        <div class="state">{{ user.state }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 'gajung.kim', name: '김가정', position: '매니저', state: '' },
        { id: 'jihye.son', name: '손지혜', position: '매니저', state: '승인' },
        { id: 'jinho.kim', name: '김진호', position: '차장', state: '승인' },
        { id: 'hojun.lee', name: '이호준', position: '부장', state: '거부' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list,
.cols {
  display: flex;
}

.name,
.position {
  width: 40%;
}
</style>
