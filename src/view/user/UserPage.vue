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
          <b-button class="wirteBtn" @click="writelist()">작성하기</b-button>
          <input type="text" />
          <span class="searchContainer" v-on:click="search">
            <i class="searchBtn fas fa-search"></i>
          </span>
        </div>
      </nav>
    </div>
    <div>
      <ul class="listAll">
        <li v-for="mylist in mylists" v-bind:key="mylist">
          {{ mylist }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylists: ["지혜", "가정", "의정"],
    };
  },
  methods: {
    writelist() {
      this.$router.push({ name: "userwrite" }).catch(() => {});
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

.inputBox {
  padding: 0.1%;
}
.wirte {
  float: right;
}
.named {
  font-family: "Itim", cursive;
}
.wirteBtn {
  padding: 0.3%;
  margin: 1%;
}
.listAll {
  padding: 5%;
}
</style>
