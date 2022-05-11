<template>
  <div id="app">
    <div class=" shadow shadow">
      <h1 class="named">User Page</h1>
      <b-row>
        <b-col class="name">user name</b-col>
        <b-col>프로필 사진</b-col>
      </b-row>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">메뉴</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >홈<span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">경비 리스트</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
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
          <button class="BtnStyle" @click="calcSum()">합계구하기</button>
          <button class="BtnStyle" @click="matching()">담긴내용확인</button>
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
              <newTable></newTable>
              <newTable
                v-for="item in items"
                :key="item.id"
                @message="updateSum"
              >
              </newTable>
            </tbody>
          </table>
        </div>
        <div id="ShowMoney" style="float:right ; margin-bottom:50px;">
          합계 : {{ showsum }} 원
        </div>
        <span
          ><ImgUpload v-for="item in items" :key="item.id"></ImgUpload
        ></span>
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
      file_name: '영수증을 업로드하세요',
      showsum: 0,


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
    updateSum() {
      this.showsum = 0;
      this.showsum = this.sum;
      console.log('showsum', this.showsum);
    },
    add() {
      this.items.push({});
    },

    calcSum() {
      // table 안에 있는 게 input 이 아닐때 가능함!!!!!!!!!
      const table = document.getElementById('table_1');

      //초기화
      this.SumMoney = 0;
      // 합계 계산
      for (var i = 1; i < table.rows.length; i++) {
        this.SumMoney += parseInt(table.rows[i].cells[5].innerHTML);
      }
    },
    //영수증 파일 업로드 하는 메소드
    handleFileChange(e) {
      this.file_name = e.target.files[0].name;
    },


    deleteRow(rownum, val) {
      // table element 찾기
      const table = document.getElementById('table_1');
      const totalRowCnt = table.rows.length;

      if (totalRowCnt != 2) {
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
</style>
