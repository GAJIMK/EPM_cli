<template>
  <div>
    <ToastMsgg ref="toastMsgg" />

    <b-toast id="b-toaster-bottom-center" variant="warning" solid v-model="showBottom"
      toaster="b-toaster-bottom-center">
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
      showBottom: false,
    };
  },
  props: {
    ToastCon: {
      type: String,
    },
  },
  methods: {
    createToast() {
      this.showBottom = true;
    },
  },
};
</script>
