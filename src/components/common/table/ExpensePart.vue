<template>
  <div class="part">
    <div class="row container">
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
        <EditableTable
          v-for="item in items"
          :key="item.id"
          @printSum="countSum"
          :item="item"
        />
      </div>
      <div class="money-container">
        <div class="ShowMoney">합계 : {{ sum }}</div>
      </div>

      <div id="billimg">
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
import EditableTable from '@/components/common/table/EditableTable.vue';
import ImgUpload from '@/components/common/table/ImgUpload.vue';
import TableHeader from '@/components/common/table/TableHeader.vue';
import {
  createList,
  deleteList,
  fetchPartList,
} from '@/api/userFeeList/userFeeList';
import moment from 'moment';
export default {
  props: {
    expense: {
      type: Object,
    },
    accountId: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  watch: {
    items() {
      this.countList();
    },
    date() {
      this.state = false;
      this.sum = 0;
      this.fetchPartList();
    },
  },
  mounted() {
    this.fetchPartList();
  },
  components: { EditableTable, TableHeader },
  data() {
    return {
      items: [],
      file_name: '영수증을 업로드하세요',
      sum: 0,
      state: false,
      count: 0,
    };
  },
  methods: {
    async fetchPartList() {
      const res = await fetchPartList(
        this.accountId,
        this.date,
        this.expense.summCode,
      );
      this.items = res.data.list;
    },
    async addRow() {
      const obj = {
        part: this.expense.summCode,
        id: 0,
        accountId: this.accountId,
        date: this.$props.date + '-01',
        content: '',
        price: '',
        companion: '',
        method: '개인카드',
        path: '',
        place: '',
        state: 0,
      };
      await createList(obj).then(res => {
        const item = res.data.data;
        this.items = this.items || [];
        this.items.push(item);
      });
      this.countList();
      this.state = true;
    },
    countSum() {
      if (this.items) {
        let sum = 0;
        this.items.forEach(el => {
          if (el.price == '') {
            sum += 0;
          } else sum += parseInt(el['price']);
        });
        this.sum = sum;
      }
    },
    async deleteRow() {
      if (this.items) {
        const popItem = this.items.pop();
        await deleteList(popItem.id);
        this.state = true;
        this.countList();
      }
    },

    countList() {
      if (this.items) {
        this.count = this.items.length;
        this.state = true;
        this.countSum();
      } else this.count = 0;
    },
    changeState() {
      this.state = this.state ? false : true;
    },
  },
};
</script>

<style>
.row {
  align-items: center;
  width: 100%;
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
