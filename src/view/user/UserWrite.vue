<template>
  <div class="app">
    <div class="form-group row">
      <label for="inputPassword" class="col-sm-1 col-form-label">제목 </label>
      <div class="col-sm-10">
        <input
          type="month"
          class="caption form-control"
          id="Title"
          max="9999-12"
        />
      </div>
    </div>

    <hr />
    <d-row>
      <span class="mytitle">팀활동비👭</span>
      <button class="plusRow radiusBtn " @click="add">+</button>
      <button class="delRow radiusBtn" @click="deleteRow(-1)">-</button>
    </d-row>

    <div class="imdiv">
      <table
        contenteditable="true"
        id="table_1"
        class="table_1 table-bordered table-hover"
      >
        <TableHeader />
        <tbody class="tbody_1">
          <!-- <newTable @message="updateSum" /> -->
          <NewTable v-for="item in items" :key="item.id" @message="updateSum" />
        </tbody>
      </table>
    </div>
    <div class="money-container">
      <div class="ShowMoney" id="ShowMoney">합계 : {{ showsum }}</div>
      <div class="leftMoney" id="leftMoney">남은 금액 : {{ leftmeoney }}</div>
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
  name: 'app',
  components: { NewTable, ImgUpload, TableHeader },
  data: function() {
    return {
      items: [],
      imgs: [],
      file_name: '영수증을 업로드하세요',
      showsum: '',
      leftmeoney: '',
    };
  },
  mounted() {
    this.title();
  },
  methods: {
    title() {
      document.getElementById('Title').value = new Date()
        .toISOString()
        .slice(0, 7);
    },
    updateSum(e) {
      this.showsum = 0;
      const num = 50000 - e;
      const n1 = e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      const n2 = num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      this.add();
      this.showsum = n1 + '원';
      if (num < 0) {
        this.leftmeoney = '초과되었습니다.';
        var target = document.getElementById('leftMoney');
        target.style.color = 'red';
      } else {
        this.leftmeoney = n2 + '원';
      }
    },
    //영수증 파일 업로드 하는 메소드
    handleFileChange(e) {
      this.file_name = e.target.files[0].name;
    },
    add() {
      this.items.push({});
      this.imgs.push({});
    },
    deleteRow(rownum, val) {
      // table element 찾기
      const table = document.getElementById('table_1');
      const totalRowCnt = table.rows.length;
      const popItem = this.items.pop();
      console.log('아이템', this.items, this.items.length);
      this.imgs.pop({});
      if (totalRowCnt != 1) {
        const newRow = table.deleteRow(rownum);
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Jua&family=Ubuntu:ital,wght@1,300&display=swap');
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
.table {
  margin-top: 1%;
}
.form-group {
  padding: 0.2%;
  margin-top: 2%;
  width: 100%;
}
.table_1 {
  width: 95%;
  margin: auto;
  text-align: center;
  position: sticky;
  top: 0;
}
.card {
  padding: 6%;
}

.tbody_1:focus {
  background-color: yellow;
}
.new {
  background-color: #e3ffc8;
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
