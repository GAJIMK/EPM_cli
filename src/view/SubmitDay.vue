<template>
  <div class="app">
    <MenuTitle menuTitle="경비 마감일 설정⏰" />
    <p>해당 날짜</p>
    <input type="month" class="form" max="2050-12" v-model="date" />
    <b-button class="rightBtn" variant="warning" @click="submitDay()"
      >등록하기</b-button
    >

    <div class="container">
      <span>
        <div>시작날짜</div>
        <b-calendar
          :locale="locale"
          :start-weekday="weekday"
          :hide-header="hideHeader"
          :show-decade-nav="showDecadeNav"
          @context="onContext"
          v-model="value"
        ></b-calendar>
      </span>
      <span>
        <div>종료날짜</div>
        <b-calendar
          :locale="locale"
          :start-weekday="weekday"
          :hide-header="hideHeader"
          :show-decade-nav="showDecadeNav"
          @context="onContext_2"
        ></b-calendar
      ></span>
    </div>
    <div>값:{{ startDay }}</div>
    <div>값:{{ endDay }}</div>
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
    };
  },
  components: { MenuTitle },
  methods: {
    submitDay() {
        if( )
      alert(
        '등록하신 날짜가' + this.startDay + '~' + this.endDay + '맞습니까?',
      );
    },
    onContext(ctx) {
      this.startDay = ctx.selectedYMD;
    },
    onContext_2(ctx) {
      this.endDay = ctx.selectedYMD;
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
</style>
