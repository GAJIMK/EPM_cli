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
      const vNodesTitle = h([
        h('small', { class: 'ml-auto text-italics' }, '1 minutes ago'),
      ]);
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: false,
        variant: 'warning',
        autoHideDelay: 1500,
        toaster: 'b-toaster-bottom-center',
      });
    },
  },
};
</script>

<style>
</style>
