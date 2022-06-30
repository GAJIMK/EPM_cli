<template>
  <div class="container">
    <b-button class="rightBtn" variant="warning">기안하기</b-button>
    <MenuTitle menuTitle="😶사용자별 경비 리스트" />
    <div class="contents">
      <div class="left-button btn" @click="decrease">
        <font-awesome-icon icon="fa-solid fa-caret-left" />
      </div>
      <div class="date-picker">{{ year }}년 {{ month }}월 사용자 목록</div>
      <div class="right-button btn" @click="increase">
        <font-awesome-icon icon="fa-solid fa-caret-right" />
      </div>
    </div>
    <UserLists :date="date" />
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import UserLists from '@/components/management/users/UserLists.vue';
import moment from 'moment';

export default {
  components: {
    UserLists,
    MenuTitle,
  },
  mounted() {
    this.getDate();
  },

  data() {
    return {
      year: '',
      month: '',
      date: '',
    };
  },
  methods: {
    decrease() {
      if (parseInt(this.month) === 1) {
        this.month = '12';
        this.year = String(parseInt(this.year) - 1);
      } else {
        let minus = parseInt(this.month) - 1;
        this.month = moment(String(minus)).format('MM');
      }
      this.date = this.year + '-' + this.month;
      this.$router.push({
        name: 'usersExpense',
        params: { date: this.date },
      });
    },
    increase() {
      if (
        this.year === moment().format('YYYY') &&
        this.month === moment().format('MM')
      )
        return;
      if (parseInt(this.month) === 12) {
        this.month = '01';
        this.year = String(parseInt(this.year) + 1);
      } else {
        let plus = parseInt(this.month) + 1;
        this.month = moment(String(plus)).format('MM');
      }
      this.date = this.year + '-' + this.month;
      this.$router.push({
        name: 'usersExpense',
        params: { date: this.date },
      });
    },
    getDate() {
      this.date = this.$route.params.date;
      this.year = this.date.slice(0, 4);
      this.month = this.date.slice((0, 5));
    },
  },
};
</script>

<style lang="scss" scoped>
.date-picker {
  font-size: 20px;
  font-weight: 600;
}
.contents {
  width: 400px;
  display: flex;
  margin: auto auto;
  justify-content: space-between;
  align-items: center;
}

.btn {
  font-size: 2em;
  color: #4f4537;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
.rightBtn {
  position: relative;
  right: 2.5em;
  float: right;
  font-size: 1em;
  font-weight: 600;
  width: 100px;
}
</style>
