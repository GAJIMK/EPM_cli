<template>
  <div class="inputBox">
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
              type="text"
              class="caption form-control"
              id="inputPassword"
              placeholder="제목을 입력하세요"
            />
          </div>
        </div>
        <div class="custom-file">
          <label class="custom-file-label" for="customFile">{{
            file_name
          }}</label>
          <input
            class="custom-file-control"
            id="customFile"
            type="file"
            @change="handleFileChange"
          />
        </div>
        <hr />
        <b-button class="plusRow" @click="addRow()">행추가</b-button>
        <b-button @click="deleteRow(-1)">행삭제</b-button>
        <p>&lt;팀활동비></p>
        <table
          contenteditable="true"
          id="table_1"
          class="table_1 table-bordered table-hover"
        >
          <thead class="thead_1" id="thead_1">
            <tr class="select">
              <td>
                <input class="thead" type="text" disabled="true" value="일자" />
              </td>
              <td>
                <input class="thead" type="text" disabled="true" value="내역" />
              </td>
              <td>
                <input class="thead" type="text" disabled="true" value="장소" />
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
                  value="현금/개인카드"
                />
              </td>
              <td>
                <input class="thead" type="text" disabled="true" value="금액" />
              </td>
            </tr>
          </thead>

          <tbody class="tbody_1">
            <tr>
              <td>
                <input type="date" style="border:0 solid black;" />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <hr />
        <h>&lt;문화활동비></h>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <td>일자</td>
              <td>내역</td>
              <td>장소</td>
              <td>동반인</td>
              <td>현금 / 개인카드</td>
              <td>금액</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      file_name: "영수증을 업로드하세요",
      trIdx: 0,
    };
  },

  methods: {
    handleFileChange(e) {
      this.file_name = e.target.files[0].name;
    },
    addRow() {
      // const table = document.getElementById("table_1");

      // const newRow = table.insertRow();

      // for (var i = 0; i < 6; i++) {
      //   var newCell = "newCell" + i;
      //   newCell = newRow.insertCell(i);
      //   // if (newCell + 0) {
      //   //   newCell.innerText = "dd";
      //   // }

      //   // table head 는 삭제 안되도록 하는 기능 추가 , 추가했을 때도 date 인풋값 자동으로 나오게 추가
      //   newCell.innerText = ".";
      // }

      var tables = document.getElementById("table_1").childNodes.length - 1;

      var tr =
        '<tr onmouseover="getRowIdx(this)" ><td><input type=date style="border:0 solid black;" name=title value="' +
        tables +
        '" /></td><td><td/>' +
        "<td><td/><td><td/></tr>";
      document.getElementById("table_1").innerHTML += tr;
    },
    deleteRow(rownum) {
      // table element 찾기
      const table = document.getElementById("table_1");
      const newRow = table.deleteRow(rownum);

      //console.log(table.ariaRowCount); //table length 가 1 이면 ( head밖에 남지 않았다면) 삭제 하지 않도록 구현

      // var table = document.getElementById("table_1");
      // if (param == 1) {
      //   table.removeChild(table.childNodes[trIdx]);
      // } else {
      //   table.removeChild(table.childNodes[table.childNodes.length - 1]);
      // }
    },
  },
  // getRowIdx(tr) {
  //   trIdx = tr.rowIndex;
  // },
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
  border: 2px solid #ffd45e;
  background-color: rgb(255, 254, 174);
}
.thead {
  background-color: transparent;
  border: #ffd45e;
  margin: auto;
}
</style>
