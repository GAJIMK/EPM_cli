<template>
  <div id="app">
    <div class="card">
      <div class="card-body">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-1 col-form-label"
            >제목 :
          </label>
          <div class="col-sm-10">
            <input
              type="month"
              class="caption form-control"
              id="Title"
              placeholder="제목을 입력하세요 ( 2022-04 형태로 입력할 것 )"
              max="9999-12"
            />
          </div>
        </div>

        <hr />
        <d-row>
          <span>&lt;팀활동비></span>
          <button class="plusRow BtnStyle" @click="add()">행추가</button>
          <button class="BtnStyle" @click="deleteRow(-1)">행삭제</button>
        </d-row>

        <div class="imdiv">
          <table
            contenteditable="true"
            id="table_1"
            class="table_1 table-bordered table-hover"
            v-bind="this.items"
          >
            <thead class="thead_1" id="thead_1">
              <tr class="select">
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="일자"
                  />
                </td>
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="내역"
                  />
                </td>
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="장소"
                  />
                </td>
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="동반인"
                  />
                </td>
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="개인카드/현금"
                  />
                </td>
                <td>
                  <input
                    class="thead"
                    type="text"
                    disabled="true"
                    value="금액"
                  />
                </td>
              </tr>
            </thead>
            <tbody class="tbody_1">
              <!-- <newTable @message="updateSum" /> -->
              <newTable
                v-for="item in items"
                :key="item.id"
                @message="updateSum"
              />
            </tbody>
          </table>
        </div>
        <div class="ShowMoney" id="ShowMoney">합계 : {{ showsum }}</div>
        <div class="leftMoney" id="leftMoney">남은 금액 : {{ leftmeoney }}</div>

        <span> <ImgUpload v-for="img in imgs" :key="img.id"></ImgUpload></span>
      </div>
    </div>
  </div>
</template>
<script>
import newTable from '../../components/User/NewTable.vue';

import ImgUpload from '../../components/User/ImgUpload.vue';
export default {
  name: 'app',

  components: { newTable, ImgUpload },
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
      //this.showsum = e;
      const num = 50000 - e;
      const n1 = e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
      const n2 = num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
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
.thead_1 {
  width: 95%;
  border: 2px solid #ffc75f;
  background-color: rgb(255, 254, 174);
}
.thead {
  background-color: transparent;
  border: #ffc75f;
}
.BtnStyle {
  border: 0;
  outline: 0;
  border-radius: 10%;
  background-color: #fffad1;
  color: black;
  margin: 0.5%;
}
.tbody_1:focus {
  background-color: yellow;
}
.new {
  background-color: #e3ffc8;
}
.ShowMoney .leftMoney {
}
</style>
