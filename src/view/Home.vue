<template>
  <div class="container">
    <b-button @click="goLogin()" class="BtnStyle">login</b-button>
    <div class="menu">
      <!-- 서버에서 반복 통해  -->

      <div class="all-users-menu">
        <ul class="menu-items">
          <li class="list-item" @click="handleWrite">
            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-pen-clip" class="icon" />
            </div>
            <div class="menu-content">작성하기</div>
          </li>
          <li class="list-item">
            <div class="icon-container">
              <font-awesome-icon
                icon="fa-solid fa-clock-rotate-left"
                class="icon"
              />
            </div>
            <div class="menu-content">과거내역 조회</div>
          </li>
          <li class="list-item">
            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-check" class="icon" />
            </div>
            <div class="menu-content">승인내역 조회</div>
          </li>
          <li class="list-item">
            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-user" class="icon" />
            </div>
            <div class="menu-content">마이페이지</div>
          </li>
        </ul>
      </div>
      <div class="management-menu">
        <ul class="menu-items">
          <li class="list-item" @click="handleExpenseList">
            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-sliders" class="icon" />
            </div>
            <div class="menu-content">경비항목 관리</div>
          </li>
          <li class="list-item">
            <div class="icon-container">
              <font-awesome-icon
                icon="fa-solid fa-users-between-lines"
                class="icon"
              />
            </div>
            <div class="menu-content">등급별 관리</div>
          </li>
          <li class="list-item" @click="handleUsersList">
            <div class="icon-container">
              <font-awesome-icon icon="fa-solid fa-user-check" class="icon" />
            </div>
            <div class="menu-content">사용자 경비조회</div>
          </li>
          <li class="list-item">
            <div class="icon-container">
              <font-awesome-icon
                icon="fa-solid fa-calendar-days"
                class="icon"
              />
            </div>
            <div class="menu-content">경비등록 기한</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="adds">
      <Memo />
      <Lunch />
    </div>
  </div>
</template>

<script>
import Lunch from './ect/Lunch.vue';
import Memo from './ect/Memo.vue';
export default {
  components: { Lunch, Memo },
  methods: {
    goLogin() {
      this.$router.push({ name: 'login' });
    },
    handleWrite() {
      this.$router.push({ name: 'userWrite' });
    },
    handleExpenseList: function() {
      this.$router.push({ name: 'expenseList' });
    },
    handleUsersList: function() {
      this.$router.push({ name: 'usersExpense' });
    },
  },
};
</script>

<style lang="scss" scoped>
.BtnStyle {
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fff7b8;
  color: black;
  margin: 0.5%;
}
.menu {
  border: 4px solid #ffc75f;
  border-radius: 1rem;
  margin-top: 10px;
  padding-top: 20px;
}
.allUsersMenu {
  display: flex;
  justify-content: center;
}
.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.menu-items {
  display: flex;
  justify-content: space-evenly;
}

.menu-content {
  text-align: center;
}
.icon-container {
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-color: #ffc75f;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    -webkit-box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    transform: scale(1.02);
  }
  .icon {
    width: 2rem;
    height: 2rem;
    color: #fff;
  }
}
.menu-container {
  border: 4px solid #fdc000;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  background-color: whitesmoke;
}
.adds {
  * {
    margin-top: 20px;
  }
}
</style>
