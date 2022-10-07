<template>
  <div class="menu-container">
    <div class="menu-title">🔥HOT 3 게시글🔥</div>
    <button class="boardBtn" @click="handleBoard">게시글 구경가기</button>
    <div class="menu-scon">
      <li
        v-for="(item, index) in alltitle"
        :key="index"
        @click="goreport(index)"
        class="list-name"
      >
        {{ awards[index] }}
        {{ item }}
      </li>
    </div>
  </div>
</template>

<script>
import { fetchThumbstop5 } from '@/api/Thumbs/thumbs'

export default {
  data() {
    return {
      Fllist: [],
      alltitle: [],
      allId: [],
      awards: ['🥇', '🥈', '🥉'],
    }
  },
  created() {
    this.loadtop()
  },
  methods: {
    handleBoard() {
      this.$router.push({ name: 'noticeBoard' })
    },
    async loadtop() {
      const res = await fetchThumbstop5()

      this.Fllist.push(res.data.list)
      this.lengthAll = this.Fllist[0].length

      for (var i = 0; i < this.lengthAll; i++) {
        let title = res.data.list[i].title
        let iid = res.data.list[i].id
        this.alltitle.push(title)
        this.allId.push(iid)
      }
    },
    goreport(index) {
      const a = index
      this.res = this.allId[a]
      this.$router.push({
        name: 'boardcontent',
        query: { id: this.res },
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/font.scss';
@import '@/scss/main.scss';

.menu-container {
  position: relative;
  font-family: 'MonoplexKR-Regular', sans-serif;
  height: 200px;
  background: #ffe4db;
  box-shadow: 0px 2px 32px -5px rgba(209, 200, 171, 0.54);
  backdrop-filter: blur(50%);
  -webkit-backdrop-filter: blur(50%);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.menu-title {
  font-family: 'LeferiPoint-BlackA', sans-serif;
  font-size: var(--font-size-m);
  padding: 10px 0px;
}

li {
  list-style: none;
  padding: 8px 8px;
}

.menu-scon {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-name {
  width: 90%;
  text-align: left;
  border-bottom: 2px solid #fff;

  &:hover {
    background-color: #ffc2b8;
    cursor: pointer;
  }
}

.boardBtn {
  display: block;
  position: absolute;
  top: 8px;
  right: 10px;
  border: 2px solid #fff;
  background: transparent;
  outline: 0;
  border-radius: 6px;
  padding: 0px 16px;
  font-family: 'LeferiPoint-BlackA', sans-serif;
  font-size: var(--font-size-xs);

  &:hover {
    background: #ff7a80;
    color: #fff;
  }
}
</style>
