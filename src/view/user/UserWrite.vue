<template>
  <div class="container">
    <MenuTitle menuTitle="✍🏻작성하기" />
    <div class="month">
      <input type="month" class="form" max="2050-12" v-model="date" />
      <b-button class="inline-btn btn-warning" @click="submit">제출하기</b-button>
    </div>

    <ExpensePart v-for="expense in expenseList" :date="date" :key="expense.feeCode" :expense="expense"
      :accountId="accountId" />
  </div>
</template>
<script>
import MenuTitle from '@/components/common/MenuTitleForm.vue'
import ExpensePart from '@/components/common/table/ExpensePart.vue'
import { fetchPositionList } from '@/api/positionFeeMapper/positionFeeMapper'
import { createUserFeeState } from '@/api/userFeeState/userFeeState'
import { accountInfo } from '@/api/account/account'
import moment from 'moment'

export default {
  components: { MenuTitle, ExpensePart },

  data() {
    return {
      expenseList: '',
      accountId: this.$store.state.accountId,
      accountPosition: 0,
      date: moment(new Date()).format('YYYY-MM'),
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    date() {
      this.fetchUserExpenseList()
    },
  },
  methods: {
    async fetchData() {
      await accountInfo(this.accountId)
        .then((res) => {
          this.accountPosition = res.data.data.tpPosition
          return this.accountPosition
        })
        .then((code) => {
          this.fetchExpenseList(code)
        })
    },
    async fetchExpenseList(code) {
      const fee = await fetchPositionList(code)
      this.expenseList = fee.data.list
    },

    async submit() {
      const data = {
        accountId: this.accountId,
        date: this.date + '-01',
      }
      await createUserFeeState(data).then(() => {
        alert('제출이 완료되었습니다')
        this.$router.push({ name: 'home' })
      })
    },

    //영수증 파일 업로드 하는 메소드
  },
}
</script>

<style lang="scss" scoped>

.inline-btn {
  font-family: "GongGothicMedium";

}

.month {
  display: flex;
  margin: 1.5em 0;
  justify-content: space-between;
}

.form {
  width: 300px;
}
</style>
