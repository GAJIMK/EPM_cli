<template>
  <div>
    <ToastMsgg ref="toastMsgg" />
  </div>
</template>

<script>
export default {
  props: {
    ToastCon: {
      type: String,
    },
  },
  methods: {
    createToast() {
      this.showToast();
    },
    showToast() {
      // Use a shorter name for this.$createElement
      const h = this.$createElement;
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('span', this.ToastCon),
        ,
      ]);
      // Create the title

      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        solid: false,
        variant: 'warning',
        autoHideDelay: 1500,
        toaster: 'b-toaster-bottom-center',
        static: true,
      });
    },
  },
};
</script>
