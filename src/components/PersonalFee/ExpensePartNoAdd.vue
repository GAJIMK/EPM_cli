<template>
  <div class="container" v-if="items">
    <div class="row">
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        v-if="state"
        @click="changeState"
      />
      <font-awesome-icon
        icon="fa-solid fa-angle-up"
        v-else
        @click="changeState"
      />
      <div class="partCount radiusBtn">{{ count }}</div>
      <div class="partTitle">{{ expense.feeNm }}</div>
    </div>

    <div class="imdiv" v-if="state">
      <TableHeader />
      <div id="lists">
        <FixedTable
          v-for="item in items"
          :key="item.id"
          @printSum="countSum"
          :item="item"
        />
      </div>
      <div class="moneydiv">
        <div class="money-container">
          <div class="index"><span>지원 금액 :</span> {{ expense.fee }}</div>
          <div class="index">
            합계 : <span class="green">{{ sum }}</span>
          </div>
          <div class="index">
            잔여금액:<span class="red"> {{ expense.fee - sum }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FixedTable from '@/components/common/table/FixedTable.vue'
import ImgUpload from '@/components/common/table/ImgUpload.vue'
import TableHeader from '@/components/common/table/TableHeader.vue'
import { fetchPartList } from '@/api/userFeeList/userFeeList'
export default {
  props: {
    expense: {
      type: Object,
    },
    existLists: {
      type: Array,
    },
    accountId: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  mounted() {
    this.fetchPartList()
  },
  watch: {
    items() {
      this.countList()
    },
  },
  components: { FixedTable, TableHeader },
  data() {
    return {
      items: [],
      sum: 0,
      remain: 50000, //보류
      state: false,
      count: 0,
    }
  },
  methods: {
    countSum() {
      if (this.items) {
        let sum = 0
        this.items.forEach((el) => {
          if (el.price == '') {
            sum += 0
          } else sum += parseInt(el['price'])
        })
        this.sum = sum
      }
    },
    countList() {
      if (this.items) {
        this.count = this.items.length
        this.state = true
        this.countSum()
      } else this.count = 0
    },
    changeState() {
      this.state = this.state ? false : true
    },
    async fetchPartList() {
      const res = await fetchPartList(
        this.accountId,
        this.date,
        this.expense.feeCode
      )
      this.items = res.data.list
    },
    savePartList() {
      this.existLists.forEach((list) => {
        if (list.part === this.expense.feeCode) {
          this.items.push(list)
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/font.scss';
.imdiv {
  box-sizing: border-box;
  height: fit-content;
}
.row {
  align-items: center;
  width: 100%;
  padding: 0 20px;
}
.part {
  padding: 20px 0;
}
.partTitle {
  font-family: 'Happiness-Sans-Bold';
  font-weight: bold;
  font-size: 20px;
  padding: 3px 6px;
}

.radiusBtn {
  border: 0;
  outline: 0;
  width: 25px;
  height: 25px;
  color: black;
  margin: 6px;
  border-radius: 8px;
  display: inline;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.radiusBtn:active {
  border: 0;
  outline: 0;
  width: 30px;
  height: 30px;
  background-color: #d8c0a4;
  color: black;
  margin: 0.5%;
  border-radius: 50%;
}

.partCount {
  background-color: var(--color-yellow);
}
.form-group {
  padding: 0.2%;
  margin-top: 2%;
  width: 100%;
}

.card {
  padding: 6%;
}

.fluid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.moneydiv {
  display: flex;
  justify-content: flex-end;
}
.money-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 80px;
  border: 1px solid #ffc107;
  border-radius: 0.75em;
  font-family: 'Happiness-Sans-Bold';
  font-weight: 600;
  font-size: 15px;
  padding: 0.9%;
  width: 400px;
  float: right;
}
</style>
