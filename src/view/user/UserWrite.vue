<template>
  <div class="inputBox">
    <div class=" shadow shadow">
      <h1 class="named">User Page</h1>
      <b-row>
        <b-col>user name</b-col>
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

    <div class="form-group row">
      <label for="inputPassword" class="col-sm-2 col-form-label">제목 : </label>
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
      <label class="custom-file-label" for="customFile">{{ file_name }}</label>
      <input
        class="custom-file-control"
        id="customFile"
        type="file"
        @change="handleFileChange"
      />
    </div>
    <hr />
    <p>&lt;팀활동비></p>
    <table class="table table-bordered table-hover">
      <tr>
        <td>일자</td>
        <td>내역</td>
        <td>장소</td>
        <td>동반인</td>
        <td>현금/개인카드</td>
        <td>금액</td>
      </tr>
    </table>

    <hr />
    <p>&lt;팀활동비></p>
    <table class="table table-bordered table-hover">
      <tr>
        <td>일자</td>
        <td>내역</td>
        <td>장소</td>
        <td>동반인</td>
        <td>현금/개인카드</td>
        <td>금액</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      file_name: "영수증을 업로드하세요",
    };
  },

  methods: {
    handleFileChange(e) {
      this.file_name = e.target.files[0].name;
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
  width: 95%;
}
</style>
