<template>
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
        <input class="thead" type="text" disabled="true" value="동반인" />
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
        <input class="thead" type="text" disabled="true" value="금액" />
      </td>
    </tr>
  </thead>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Jua&family=Ubuntu:ital,wght@1,300&display=swap');
.thead {
  text-align: center;
  font-family: 'Jua', sans-serif;
  font-family: 'Jua', sans-serif;
  padding: 2%;
}
.thead_1 {
  width: 95%;
  background-color: rgb(255, 254, 174);
  border-style: hidden;
}
.thead {
  background-color: transparent;
  border: #ffc75f;
}
</style>
