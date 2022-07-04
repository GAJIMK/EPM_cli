<template>
  <div class="menu">
    <!-- 서버에서 반복 통해  -->

    <div class="all-users-menu">
      <ul class="menu-items">
        <li class="list-item" @click="handleWrite">
          <div class="icon-container yellowBtn">
            <font-awesome-icon icon="fa-solid fa-pen-clip" class="icon" />
          </div>
          <div class="menu-content">작성하기</div>
        </li>
        <li class="list-item" @click="writtenList()">
          <div class="icon-container yellowBtn">
            <font-awesome-icon
              icon="fa-solid fa-clock-rotate-left"
              class="icon"
            />
          </div>
          <div class="menu-content" @click="writtenList">과거내역 조회</div>
        </li>
        <li class="list-item">
          <div class="icon-container yellowBtn">
            <font-awesome-icon icon="fa-solid fa-check" class="icon" />
          </div>
          <div class="menu-content">승인내역 조회</div>
        </li>
        <li class="list-item">
          <div class="icon-container yellowBtn">
            <font-awesome-icon
              icon="fa-solid fa-user"
              class="icon"
              @click="goMypage()"
            />
          </div>
          <div class="menu-content">마이페이지</div>
        </li>
      </ul>
    </div>
    <div class="management-menu">
      <ul class="menu-items">
        <li class="list-item" @click="handleExpenseList">
          <div class="icon-container yellowBtn">
            <font-awesome-icon icon="fa-solid fa-sliders" class="icon" />
          </div>
          <div class="menu-content">경비항목 관리</div>
        </li>
        <li class="list-item">
          <div class="icon-container yellowBtn">
            <font-awesome-icon
              icon="fa-solid fa-users-between-lines"
              class="icon"
            />
          </div>
          <div class="menu-content">등급별 관리</div>
        </li>
        <li class="list-item" @click="handleUsersList">
          <div class="icon-container yellowBtn">
            <font-awesome-icon icon="fa-solid fa-user-check" class="icon" />
          </div>
          <div class="menu-content">사용자 경비조회</div>
        </li>
        <li class="list-item" @click="goSubDay()">
          <div class="icon-container yellowBtn">
            <font-awesome-icon icon="fa-solid fa-calendar-days" class="icon" />
          </div>
          <div class="menu-content">경비등록 기한</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  methods: {
    handleWrite() {
      this.$router.push({ name: 'userWrite' });
    },
    goMypage() {
      this.$router.push({ name: 'myPage' });
    },
    writtenList() {
      this.$router.push({ name: 'user' });
    },
    handleExpenseList() {
      this.$router.push({ name: 'expenseList' });
    },
    goSubDay() {
      this.$router.push({ name: 'submitDay' });
    },
    handleUsersList() {
      this.$router.push({
        name: 'usersExpense',
        params: { date: moment(new Date()).format('YYYY-MM') },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.menu {
  border: 4px solid var(--color-yellow);
  border-radius: 1rem;
  margin-top: 10px;
  padding-top: 20px;
  font-size: 0.9em;
}
.allUsersMenu {
  display: flex;
  justify-content: center;

  flex-direction: column;
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
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  background-color: var(--color-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    -webkit-box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    transform: scale(1.02);
    border: 3px solid var(--color-yellow);
    .icon {
      color: #fdc000;
    }
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
    font-size: 10px;
  }
}
</style>
