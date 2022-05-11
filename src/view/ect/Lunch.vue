<template>
  <div class="menu-container">
    <div class="title">오늘 점심 뭐먹지 🤔?</div>
    <div class="contents">
      <div class="display">
        <div
          class="spinner-grow text-warning picked"
          role="status"
          v-if="loading"
        >
          <span class="sr-only"></span>
        </div>
        <div class="picked" v-else>
          <div v-if="picked !== -1">{{ menus[picked] }}</div>
          <div v-else>뭐먹지? 뭐먹어?</div>
        </div>
      </div>
      <b-button
        class="btn"
        variant="warning"
        @click="random"
        v-if="picked === -1"
        >날 클릭해봐 👆🏻</b-button
      >
      <b-button class="btn" variant="warning" @click="random" v-else
        >다시 선택할래 🥲</b-button
      >
    </div>
  </div>
</template>

<script>
import menus from '@/assets/menu';
export default {
  data() {
    return {
      menus: menus,
      picked: -1,
      loading: false,
    };
  },
  methods: {
    random() {
      const n = menus.length;
      const rand = Math.floor(Math.random() * (n + 1));
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.picked = rand;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 20px;
  font-size: 1.3em;
  font-weight: 600;
  color: #444;
}

.contents {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
  .display {
    height: 3em;
    .picked {
      font-size: 1.1em;
    }
  }
}
</style>
