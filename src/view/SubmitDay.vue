<template>
  <div class="app">
    <MenuTitle menuTitle="경비 마감일 설정⏰" />

    <b-button class="rightBtn" variant="warning" v-b-toggle.my-collapse
      >과거내역</b-button
    >
    <b-button class="rightBtn" variant="warning" @click="submitDay()"
      >등록하기</b-button
    >

    <div class="container">
      <span>
        <div class="subTitle">시작날짜</div>
        <b-calendar
          @context="onContext"
          selected-variant="secondary"
          today-variant="secondary"
          nav-button-variant="secondary"
        ></b-calendar>
      </span>
      <span>
        <div class="subTitle">종료날짜</div>
        <b-calendar
          @context="onContext_2"
          selected-variant="secondary"
          today-variant="secondary"
          nav-button-variant="secondary"
        ></b-calendar
      ></span>
    </div>
    <div>
      <b-collapse id="my-collapse" class="collapse">
        <b-card title="과거 경비 기간 내역" class="b-title">
          <table class="table-box">
            <thead>
              <tr class="listtable">
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="시작날짜"
                  />
                </td>
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="종료날짜"
                  />
                </td>
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="총 날짜"
                  />
                </td>
              </tr>
            </thead>
            <TableBody v-for="item in items" :key="item.id" :item="item" />
          </table>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import moment from 'moment';
import { putDay, fetchBoardDay } from '@/api/submit/submit.js';
import TableBody from '../components/common/table/TableBody';
export default {
  data() {
    return {
      date: moment(new Date())
        .subtract(1, 'M')
        .format('YYYY-MM'),
      items: [],
      Fllist: [],
      printSday: '',
      printEday: '',
      submitContent: {
        startDay: '',
        endDay: '',
        totalDay: '',
      },
    };
  },
  components: { MenuTitle, TableBody },
  created() {
    this.loadData();
  },
  methods: {
    submitDay() {
      this.totalDay = this.endDay.diff(this.startDay, 'days');
      if (this.endDay.isAfter(this.startDay) == true) {
        if (
          confirm(
            '등록하신 날짜가 ' +
              this.printSday +
              '  ~  ' +
              this.printEday +
              '  총 ' +
              this.totalDay +
              '일이 맞습니까?',
          )
        ) {
          this.putData();
        } else {
          alert('취소했습니다.');
        }
      } else {
        alert(
          '종료 날짜가 시작 날짜보다 이전이거나 같습니다. 다시 설정해주세요.',
        );
      }
    },
    async putData() {
      const data = {
        startDay: this.startDay,
        endDay: this.endDay,
        totalDay: this.totalDay,
      };
      await putDay(data);
    },
    async loadData() {
      const res = await fetchBoardDay();

      this.Fllist.push(res.data.list);
      this.lengthAll = this.Fllist[0].length;

      for (var i = 0; i < this.lengthAll; i++) {
        this.items.push(res.data.list[i]);
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
  margin: 10px;
}
.subTitle {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  font-size: 30px;
  padding: 1%;
}
.listtable {
  display: table;
}
.collapse {
  padding: 4%;
}
.table-box {
  margin: auto;
  margin-top: 50px;
}

input[type='text'] {
  text-align: center;
  background-color: #fcd000;
  border: transparent;
}
</style>
