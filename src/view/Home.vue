<template>
  <div class="container">

    <div v-if="state" id="due">경비 마감 D {{ diffDay }} 일</div>

    <Menu v-if="state" />
    <Banner v-if="!state" />
    <div class="adds">
      <div class="menu1">
        <Memo />
      </div>
      <div class="menu2">
        <Lunch />
      </div>
    </div>
    <img v-if="!state" class="walletImg" src="@/assets/wallet.jpg" />
  </div>
</template>

<script>
import Lunch from './ect/Lunch.vue';
import Memo from './ect/Memo.vue';
import Banner from './ect/Banner.vue';
import Menu from '@/components/common/Menu.vue';
import { fetchBoardDay } from '@/api/submit/submit.js';
import moment from 'moment';
export default {
  mounted() {
    this.loadPast()
  },
  data() {
    return {
      state: this.$store.state.accountId,
      diffDay: '',
    }
  },
  components: { Lunch, Memo, Menu, Banner },
  methods: {
    async loadPast() {
      const res = await fetchBoardDay()
      const currentDay = moment(new Date())
      const setDay = moment(res.data.list[0].endDay)
      this.diffDay = setDay.diff(currentDay, 'days')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 880px;
  padding: 50px 0px;
  position: relative;
}

.adds {
  display: flex;
  margin-top: 1rem;

  :nth-child(1) {
    flex-grow: 1;
  }

  :nth-child(2) {
    flex-grow: 0.8;
  }
}

.menu1 {
  margin-right: 10px;
}

#due {
  padding: 0px 4px;
  font-family: 'GongGothicMedium', sans-serif;
}

.walletImg {
  width: 300px;
  border-radius: 50%;
  z-index: -1;
  position: absolute;
  top: 20px;
  transform: rotateY(150deg);
  opacity: 0.6;
}

@media screen and(max-width: 768px) {
  .adds {
    flex-direction: column;

    :nth-child(1) {
      margin-right: 0px;
    }

    :nth-child(2) {
      margin-top: 1rem;
    }
  }
}
</style>
