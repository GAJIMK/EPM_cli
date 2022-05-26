<template>
  <div class="container">
    <MenuTitle menuTitle="🖱️개인별 경비계산서" />
    <div class="subTitle">{{ user }}님 {{ date }}경비계산서</div>
    <button @click="show">sss</button>
  </div>
</template>

<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue';
import { fetchUserList } from '@/api/userFeeList/userFeeList';
export default {
  components: {
    MenuTitle,
  },
  data() {
    return {
      //props로 받아와야 할 것
      user: '손지혜',
      date: '2022-05',
      lists: [
        {
          date: '2022-05-03',
          content: '',
          place: '메가커피',
          companion: '김가정 매니저',
          methods: '개인카드',
          part: 10,
          state: 90,
          path: '',
        },
        {
          date: '2022-05-09',
          content: '',
          place: '우림정',
          companion: '김가정 매니저',
          methods: '개인카드',
          part: 10,
          state: 90,
          path: '',
        },
        {
          date: '2022-05-13',
          content: '',
          place: '메가커피',
          companion: '지노짜장님',
          methods: '개인카드',
          part: 10,
          state: 90,
        },
      ],
    };
  },
  methods: {
    async show() {
      const data = await fetchUserList('jihye.son', '2022-05');
      console.log(data);
    },
  },
};
</script>

<style></style>
