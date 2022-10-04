<template>
  <div class="toastContainer">

<<<<<<< HEAD
    <b-toast
      id="b-toaster-bottom-center"
      variant="warning"
      solid
      v-model="show"
      toaster="b-toaster-bottom-center"
    >
=======
    <b-toast id="b-toaster-bottom-center" variant="warning" solid v-model="showBottom"
      toaster="b-toaster-bottom-center">
>>>>>>> e3b8738a4c8ebbf7a1fa54c196961988224a4cd9
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Notice!</strong>
        </div>
      </template>
      {{ this.ToastCon }}
    </b-toast>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    ToastCon: {
      type: String,
    },
  },
  methods: {
    createToast() {
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.toastContainer {
  position: absolute;
}
</style>
