<template>
  <div>
    <tbody>
      <tr>
        <td>
          <input
            class="thead"
            type="text"
            disabled="true"
            v-model="item.startDay"
          />
        </td>
        <td>
          <input
            class="thead"
            type="text"
            disabled="true"
            v-model="item.endDay"
          />
        </td>
        <td>
          <input
            class="thead"
            type="text"
            disabled="true"
            v-model="item.totalDay"
          />
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  props: {
    //props 로 부모컴포넌트에서 데이터를 받아옴
    item: {
      type: Array,
    },
  },
};
</script>

<style>
input[type='text'] {
  text-align: center;
  background-color: white;
  padding: 3%;
  border: transparent;
}
</style>
