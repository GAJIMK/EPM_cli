<template>
  <div id="container">
    <h3 class="name" @click="goback()">📢 익명 게시판</h3>
    <div class="cont">
      <!-- <label for="name" class="title_2">제목</label
      > -->
      <hr />
      <b-input class="title-2" type="text" disabled v-model="this.title" />
    </div>
    <small class="date">{{ date }}</small>
    <label for="content"></label>
    <b-textarea
      class="content"
      name="content"
      id="content"
      cols="30"
      rows="10"
      disabled
      v-model="this.content"
    ></b-textarea>

    <div class="footer">
      <div>{{ thumbs }}</div>
      <div class="icon-container basicBtn">
        <font-awesome-icon
          icon="fa-solid fa-thumbs-up"
          class="icon"
          @click="putData()"
        />
      </div>
      <b-button class="basicBtn" @click="goback()">목록으로</b-button>
    </div>
  </div>
</template>

<script>
import { fetchBoard } from '@/api/board/board';
import { putThumbs, fetchThumbsCnt } from '@/api/Thumbs/thumbs.js';

export default {
  components: {},
  data() {
    return {
      thumbsContent: {
        id: this.$route.query.id,
        accountId: this.$store.state.accountId,
      },

      title: '',
      content: '',
      date: '',
      thumbs: '',
    };
  },
  mounted() {
    this.loadData();
    this.loadThumbs();
  },
  methods: {
    async loadData() {
      const res = await fetchBoard(this.$route.query.id);
      this.title = res.data.list[0].title;
      this.content = res.data.list[0].content;
      this.date = res.data.list[0].date;
    },
    goback() {
      this.$router.push({ name: 'noticeBoard' });
    },
    async putData() {
      if (this.$store.state.accountId == '') {
        alert('로그인된 사용자만 이용 가능합니다');
      } else {
        try {
          await putThumbs(this.thumbsContent).then(res => {
            this.loadThumbs();
            if (res.data.code == 20) {
              this.showToast();
            }
          });
        } catch (error) {
          this.errorMsg = getErrorResponseData(error);
          console.log('에러');
        }
      }
    },
    async loadThumbs() {
      const res = await fetchThumbsCnt(this.thumbsContent.id);

      this.thumbs = res.data.list[0].cnt;
    },
    showToast() {
      // Use a shorter name for this.$createElement
      const h = this.$createElement;
      // Increment the toast count
      this.count++;
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        ' 이미 ',
        h('strong', '좋아요를'),
        ` 누르셨습니다. `,
        h('b-spinner', { props: { type: 'grow', small: true } }),
      ]);
      // Create the title
      const vNodesTitle = h([
        h('small', { class: 'ml-auto text-italics' }, '1 minutes ago'),
      ]);
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: false,
        variant: 'warning',
        autoHideDelay: 2000,
        toaster: 'b-toaster-bottom-center',
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Jua&family=Ubuntu:ital,wght@1,300&display=swap');

.container {
  display: flex;
  flex-direction: column;
}

.content:disabled {
  background-color: rgb(250, 250, 250);
  font-size: 18px;
  border-color: transparent;
  padding: 2%;
  height: 350px;
  resize: none;
}
.title-2:disabled {
  background-color: transparent;
  border: transparent;
  font-family: 'GongGothicMedium', sans-serif;
  font-size: 25px;
}
.icon-container {
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  background-color: var(--color-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
  &:hover {
    -webkit-box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    box-shadow: 0px 0px 14px 2px rgba(255, 200, 87, 0.26);
    transform: scale(1.02);
    border: 3px solid var(--color-yellow);
    .icon {
      color: #fdc000;
    }
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
    font-size: 10px;
  }
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 5%;
}
.name {
  font-family: 'GongGothicMedium', sans-serif;
  font-size: 30px;
  margin: 3% 0px 3% 0px;
}
.date {
  float: right;
  height: fit-content;
}
.cont {
  display: flex;
}
.title_2 {
  width: 50px;
  margin: auto;
}
.basicBtn {
  color: #fff;
  background-color: var(--color-yellow);
  border-color: transparent;
  font-family: 'GongGothicMedium', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 238, 162);
    color: var(--color-yellow);
    border-color: transparent;
  }
  &:focus {
    background-color: rgb(255, 238, 162);
    color: var(--color-yellow);
    border-color: transparent;
  }
}
#b-toaster-bottom-center {
  margin-bottom: 250px;
}
</style>
