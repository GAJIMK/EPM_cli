<template>
  <div class="menu-container">
    <div class="menu-title">🔥HOT 3 게시글🔥</div>
    <div class="menu-scon">
      <ul class="first">
        <li v-for="item in awards" :key="item.id">{{ item }}</li>
      </ul>

      <ul class="second">
        <li
          v-for="(item, index) in alltitle"
          :key="item.id"
          @click="goreport(index)"
          class="list-name"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchThumbstop5 } from '@/api/Thumbs/thumbs';

export default {
  data() {
    return {
      Fllist: [],
      alltitle: [],
      allId: [],
      awards: { one: '🥇', two: '🥈', three: '🥉' },
    };
  },
  created() {
    this.loadtop();
  },
  methods: {
    goBoard() {
      this.$router.push({ name: 'noticeBoard' });
    },
    async loadtop() {
      const res = await fetchThumbstop5();

      this.Fllist.push(res.data.list);
      this.lengthAll = this.Fllist[0].length;

      for (var i = 0; i < this.lengthAll; i++) {
        let title = res.data.list[i].title;
        let iid = res.data.list[i].id;
        this.alltitle.push(title);
        this.allId.push(iid);
      }
    },
    goreport(index) {
      const a = index;
      this.res = this.allId[a];
      this.$router.push({
        name: 'boardcontent',
        query: { id: this.res },
      });
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Ubuntu:ital,wght@1,300&display=swap');
.menu-container {
  cursor: pointer;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 32px -5px rgba(167, 167, 167, 0.54);
  backdrop-filter: blur(50%);
  -webkit-backdrop-filter: blur(50%);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.menu-title {
  font-family: 'Dongle', sans-serif;
  font-family: 'Dongle', sans-serif;
  font-size: 1.5em;
  padding: 8px 0px 0px;
}
.first {
  float: left;
  width: 50px;
  display: flex;
  flex-direction: column;

  margin-right: 15px;
  li {
    transform: scale(1.2);
  }
}
.second {
  float: left;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.menu-scon {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
}
.list-name {
  width: 200px;
  text-align: left;
}
</style>
