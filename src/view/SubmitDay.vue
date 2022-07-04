<template>
  <div class="app">
    <MenuTitle menuTitle="경비 마감일 설정⏰" />
    <!-- <p>해당 날짜</p>
    <input type="month" class="form" max="2050-12" v-model="date" /> -->
    <b-button class="rightBtn" variant="warning" @click="submitDay()"
      >등록하기</b-button
    >

    <div class="container">
      <span>
        <div class="subTitle">시작날짜</div>
        <b-calendar @context="onContext"></b-calendar>
      </span>
      <span>
        <div class="subTitle">종료날짜</div>
        <b-calendar @context="onContext_2"></b-calendar
      ></span>
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import moment from 'moment';
export default {
  data() {
    return {
      date: moment(new Date())
        .subtract(1, 'M')
        .format('YYYY-MM'),
      startDay: '',
      endDay: '',
      printSday: '',
      printEday: '',
    };
  },
  components: { MenuTitle },
  methods: {
    submitDay() {
      if (this.endDay.isAfter(this.startDay) == true) {
        alert(
          '등록하신 날짜가  ' +
            this.printSday +
            '  ~  ' +
            this.printEday +
            '  이 맞습니까?',
        );
      } else {
        alert(
          '종료 날짜가 시작 날짜보다 이전이거나 같습니다. 다시 설정해주세요.',
        );
      }
    },
    onContext(ctx) {
      this.startDay = moment(ctx.selectedYMD);
      this.printSday = this.startDay.format('YYYY-MM-DD');
    },
    onContext_2(ctx) {
      this.endDay = moment(ctx.selectedYMD);
      this.printEday = this.endDay.format('YYYY-MM-DD');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.rightBtn {
  position: relative;
  right: 2.5em;
  float: right;
  font-size: 1em;
  font-weight: 600;
  width: 100px;
}
.subTitle {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  font-size: 30px;
  padding: 1%;
}
</style>
