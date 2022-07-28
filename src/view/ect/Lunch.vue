<template>
  <div class="menu-container">
    <div class="menu-title">오늘 점심 뭐먹지 🤔?</div>
    <div class="contents">
      <div class="display">
        <div
          class="spinner-grow text-warning picked"
          role="status"
          v-if="loading"
        ></div>
        <div class="picked" v-else>
          <span class="food" v-if="picked !== -1">{{ menus[picked] }}</span>
          <span v-else>뭐먹지? 뭐먹어?</span>
        </div>
      </div>
      <button
        class="btn"
        variant="warning"
        @click="random"
        v-if="picked === -1"
      >
        Click 👆🏻
      </button>
      <button class="btn" variant="warning" @click="random" v-else>
        Try Again 🥲
      </button>
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
.menu-container {
  display: flex;
  font-family: 'Nanum Gothic', sans-serif;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 32px -5px rgba(209, 200, 171, 0.54);
  backdrop-filter: blur(50%);
  -webkit-backdrop-filter: blur(50%);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  .title {
    margin-top: 20px;
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
        margin: 0 0;
      }
    }
  }
}
.btn {
  border-radius: 6px;
  border: 3px solid #fcd000;
  background: transparent;
  font-family: 'GongGothicMedium', sans-serif;
  font-size: var(--font-size-s);
  &:hover {
    background: #fcd000;
    color: #fff;
  }
  &:active {
    background: #fcd000;
    color: #fff;
  }
  &:focus {
    background: #fcd000;
    color: #fff;
  }
}
</style>
