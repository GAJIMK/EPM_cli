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
      <div class="mytitle">{{ expense.summCodeName }}</div>
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
        <ImgUpload
          class="item"
          v-for="item in items"
          :key="item.id"
        ></ImgUpload>
      </div>
    </div>
  </div>
</template>

<script>
import NewTable from '@/components/user/NewTable.vue';
import ImgUpload from '@/components/user/ImgUpload.vue';
import TableHeader from '@/components/user/TableHeader.vue';
export default {
  props: {
    expense: {
      type: Object,
    },
  },
  components: { NewTable, ImgUpload, TableHeader },
  data() {
    return {
      items: [],
      file_name: '영수증을 업로드하세요',
      sum: 0,
      remain: 50000, //보류
      id: 0,
      state: true,
    };
  },
  methods: {
    addRow() {
      const obj = {
        id: this.id,
        date: '',
        content: '',
        price: '',
        companion: '',
        method: '',
        path: '',
      };
      this.items.push(obj);
      this.imgs.push(obj);
      this.id = this.id + 1;
    },
    countSum() {
      let sum = 0;
      this.items.forEach(el => {
        sum += parseInt(el['price']);
      });
      this.sum = sum;
      this.remain = 50000 - sum;
      this.addRow();
    },
    deleteRow() {
      this.items.pop();
    },
    changeState() {
      if (this.state === true) {
        this.state = false;
      } else {
        this.state = true;
      }
    },
  },
  handleFileChange(e) {
    this.file_name = e.target.files[0].name;
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
.mytitle {
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
  background-color: #ffc107;
  color: black;
  margin: 0.5%;
  border-radius: 50%;
  display: inline;
  font-weight: bold;
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
.imdiv {
  border-bottom: 1px solid #eee;
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
  width: 300px;
  float: right;
}
</style>
