<template>
  <div>
    <ToastMsgg ref="toastMsgg" />
    <b-button class="mb-2" variant="primary" @click="show()">
      Show toast
    </b-button>
    <b-toast
      id="b-toaster-bottom-center"
      variant="warning"
      solid
      v-model="showBottom"
      toaster="b-toaster-bottom-center"
    >
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img
            blank
            blank-color="#ff5555"
            class="mr-2"
            width="12"
            height="12"
          ></b-img>
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

    // showToast() {
    //   // Use a shorter name for this.$createElement
    //   const h = this.$createElement;
    //   // Create the message
    //   const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
    //     h('span', this.ToastCon),
    //     ,
    //   ]);
    //   // Create the title

    //   // Pass the VNodes as an array for message and title
    //   this.$bvToast.toast([vNodesMsg], {
    //     solid: false,
    //     variant: 'warning',
    //     autoHideDelay: 1500,
    //     toaster: 'b-toaster-bottom-center',
    //     static: true,
    //   });
    // },
  },
};
</script>
