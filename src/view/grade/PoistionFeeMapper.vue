<template>
  <div>
    <div class="pos" v-for="(pos, index) in data" :key="index">
      <div class="col index">{{ pos.positionNm }}</div>
      <input
        type="text"
        class="col"
        v-for="(fee, index) in pos.feeData"
        :key="index"
        v-model="fee.fee"
        @blur="updateFee(fee, pos)"
        @keyup.enter="updateFee(fee, pos)"
      />
    </div>
  </div>
</template>

<script>
import {
  fetchAllList,
  updateList,
} from '@/api/positionFeeMapper/positionFeeMapper';
export default {
  props: {
    feeLength: {
      type: Number,
    },
  },
  created() {
    this.fetchAllList();
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async fetchAllList() {
      const res = await fetchAllList();
      const datas = res.data.list;
      let feeData = [];
      for (let i = 0; i < datas.length; i++) {
        let el = datas[i];
        const feeobj = {
          feeCode: el.feeCode,
          feeNm: el.feeNm,
          fee: el.fee,
        };
        feeData.push(feeobj);
        if (i % this.feeLength == this.feeLength - 1) {
          const obj = {
            positionCode: el.positionCode,
            positionNm: el.positionNm,
            feeData: feeData,
          };
          this.data.push(obj);
          feeData = [];
        }
      }
    },
    async updateFee(fee, pos) {
      const data = {
        feeCode: fee.feeCode,
        positionCode: pos.positionCode,
        fee: fee.fee,
        feeNm: '',
        positionNm: '',
      };
      try {
        await updateList(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input[type='text'],
input[type='date'] {
  text-align: center;
  border: 0px;
  background: transparent;
  padding: 5px 8px;
  &:focus {
    outline: none;
  }
}
.pos {
  display: flex;
  color: #999;
  font-size: 14px;
  padding-bottom: 4px;
  border-bottom: solid #eee 0.5px;
  text-align: center;
  width: 100%;
  .index {
    border-right: solid #eee 0.5px;
    text-align: left;
    width: 120px;
  }
}
</style>
