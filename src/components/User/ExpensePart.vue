<template>
  <div>
    <d-row name="row">
      <span class="mytitle">팀활동비👭</span>
      <button class="plusRow radiusBtn " @click="add">+</button>
      <button class="delRow radiusBtn" @click="deleteRow()">-</button>
    </d-row>

    <div class="imdiv">
      <TableHeader />
      <div id="lists">
        <NewTable v-for="item in items" :key="item.id" @message="updateSum" />
      </div>
    </div>
    <div class="money-container">
      <div class="ShowMoney">합계 : {{ sum }}</div>
      <div class="leftMoney">남은 금액 : {{ remain }}</div>
    </div>

    <div class="fluid-container" id="billimg">
      <ImgUpload class="item" v-for="img in imgs" :key="img.id"></ImgUpload>
    </div>
  </div>
</template>

<script>
import NewTable from '@/components/user/NewTable.vue';
import ImgUpload from '@/components/user/ImgUpload.vue';
import TableHeader from '@/components/user/TableHeader.vue';
export default {
  components: { NewTable, ImgUpload, TableHeader },
  data() {
    return {
      items: [],
      imgs: [],
      file_name: '영수증을 업로드하세요',
      sum: '',
      remain: '',
    };
  },
  methods: {
    updateSum(e) {
      this.sum = 0;
      const num = 50000 - e;
      const n1 = e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      const n2 = num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      this.add();
      this.sum = n1 + '원';
      if (num < 0) {
        this.remain = '초과되었습니다.';
        var target = document.getElementById('leftMoney');
        target.style.color = 'red';
      } else {
        this.remain = n2 + '원';
      }
    },
    add() {
      this.items.push({});
      this.imgs.push({});
    },
    deleteRow() {},
  },
  handleFileChange(e) {
    this.file_name = e.target.files[0].name;
  },
};
</script>

<style>
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
  background-color: #fff083;
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
  background-color: #bbb163;
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
  border: 1px double orange;
  border-radius: 0.75em;
  font-family: 'Jua', sans-serif;
  font-family: 'Jua', sans-serif;
  padding: 0.9%;
  width: 300px;
  float: right;
}
</style>
