<template>
  <div class="container">
    <div class="bill-container">
      <h5 class="title">Bill</h5>
      <div class="textarea">
        <d-col class="line">
          <span>날짜</span>
          <input
            type="text"
            disabled="true"
            class="date inputBox"
            v-model="lists.date"
        /></d-col>

        <d-col class="line"
          ><span>내역</span>
          <input
            type="text"
            disabled="true"
            class="content inputBox"
            v-model="lists.content"
        /></d-col>
        <d-col class="line">
          <span>장소</span>
          <input
            type="text"
            disabled="true"
            class="place inputBox"
            v-model="lists.place"
        /></d-col>

        <d-col class="line">
          <span>동반인</span>
          <input
            type="text"
            disabled="true"
            class="content inputBox"
            v-model="lists.companion"
        /></d-col>

        <d-col class="line">
          <span>현금/개인카드</span>
          <input
            type="text"
            disabled="true"
            class="content inputBox"
            v-model="lists.methods"
        /></d-col>
        <d-col class="line">
          <span>금액</span>
          <input
            type="text"
            disabled="true"
            class="content inputBox"
            v-model="lists.price"
        /></d-col>
      </div>

      <div class="img-container">
        <img src="../../assets/item.png" class="bill-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: {
        date: '2022-05-03',
        content: '식비',
        place: '메가커피',
        companion: '김가정 매니저',
        methods: '개인카드',
        price: '30000',
        part: 10,
        state: 90,
      },
    };
  },
};
</script>

<style>
.bill-container {
  width: 350px;
  height: 600px;
  background-color: #eaf7ff;
  border: 0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}
.img-container {
  width: 350px;
  height: 460px;
  background-color: transparent;
  border: 0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding: 10%;
}
.bill-img {
  width: 250px;
  height: 250px;
  border: 0;
  border-radius: 15px;
}
.inputBox:disabled {
  background: transparent;
  border: none;
  width: 140px;
  font-size: 13px;
}
.textarea {
  width: 340px;
  height: 500px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.line {
  display: flex;
  justify-content: space-between;
  padding: 2%;
}
</style>
