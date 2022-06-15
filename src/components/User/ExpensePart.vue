<template>
  <div class="part">
    <div class="row">
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        v-if="state"
        @click="changeState"
      />
      <font-awesome-icon
        icon="fa-solid fa-angle-up"
        v-else
        @click="changeState"
      />
      <div class="partCount radiusBtn">{{ count }}</div>
      <div class="partTitle">{{ expense.summCodeName }}</div>
      <button class="plusRow radiusBtn " @click="addRow">+</button>
      <button class="delRow radiusBtn" @click="deleteRow()">-</button>
    </div>

    <div class="imdiv" v-if="state">
      <TableHeader />
      <div id="lists">
        <NewTable
          v-for="item in items"
          :key="item.id"
          @printSum="countSum"
          :item="item"
        />
      </div>
      <div class="money-container">
        <div class="ShowMoney">합계 : {{ sum }}</div>
      </div>

      <div class="fluid-container" id="billimg">
        <!-- <ImgUpload
          class="item"
          v-for="item in items"
          :key="item.id"
        ></ImgUpload> -->
      </div>
    </div>
  </div>
</template>

<script>
import NewTable from '@/components/user/NewTable.vue';
import ImgUpload from '@/components/user/ImgUpload.vue';
import TableHeader from '@/components/user/TableHeader.vue';
import { createList, deleteList } from '@/api/userFeeList/userFeeList';
import moment from 'moment';
export default {
  props: {
    expense: {
      type: Object,
    },
    existLists: {
      type: Array,
    },
    accountId: {
      type: String,
    },
  },
  watch: {
    existLists() {
      this.savePartList();
    },
    items() {
      this.countList();
      this.state = true;
    },
  },
  components: { NewTable, TableHeader },
  data() {
    return {
      items: [],
      file_name: '영수증을 업로드하세요',
      sum: 0,
      remain: 50000, //보류
      state: false,
      count: 0,
    };
  },
  methods: {
    async addRow() {
      const obj = {
        part: this.expense.summCode,
        id: 0,
        accountId: this.accountId,
        date: moment(new Date()).format('YYYY-MM-DD'),
        content: '',
        price: '',
        companion: '',
        method: '개인카드',
        path: '',
        place: '',
        state: 0,
      };
      const res = await createList(obj);
      console.log(res.data);
      this.items.push(res.data.data);
      this.countList();
      this.state = true;
    },
    countSum() {
      let sum = 0;
      this.items.forEach(el => {
        if (el.price == '') {
          sum += 0;
        } else sum += parseInt(el['price']);
      });
      this.sum = sum;
    },
    async deleteRow() {
      const popItem = this.items.pop();
      await deleteList(popItem.id);
      this.state = true;
      this.countList();
    },

    countList() {
      this.count = this.items.length;
      this.countSum();
    },
    changeState() {
      this.state = this.state ? false : true;
    },

    savePartList() {
      this.existLists.forEach(list => {
        if (list.part === this.expense.summCode) {
          this.items.push(list);
        }
      });
    },
  },
};
</script>

<style>
.row {
  align-items: center;
}
.part {
  padding: 20px 0;
}
.partTitle {
  font-family: 'Dongle', sans-serif;
  font-family: 'Jua', sans-serif;
  font-size: 25px;
  padding: 1%;
}

.radiusBtn {
  border: 0;
  outline: 0;
  width: 30px;
  height: 30px;
  color: black;
  margin: 0.5%;
  border-radius: 50%;
  display: inline;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.radiusBtn:active {
  border: 0;
  outline: 0;
  width: 30px;
  height: 30px;
  background-color: #d8c0a4;
  color: black;
  margin: 0.5%;
  border-radius: 50%;
}

.partCount {
  background-color: var(--color-yellow);
}
.form-group {
  padding: 0.2%;
  margin-top: 2%;
  width: 100%;
}

.card {
  padding: 6%;
}

.fluid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.money-container {
  margin-top: 30px;
  margin-bottom: 80px;
  border: 1px double #ffc107;
  border-radius: 0.75em;
  font-family: 'Jua', sans-serif;
  font-family: 'Jua', sans-serif;
  padding: 0.9%;
  width: 200px;
  float: right;
}
</style>
