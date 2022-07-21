<template>
  <b-toaster id="this.id" variant="warning" solid autoHideDelay="2000" toaster="b-toaster-bottom-center" v-model="show">
    <template>
      <div class="d-flex flex-grow-1 align-items-baseline">
        <strong class="mr-auto">{{ this.Ttitle }}</strong>
      </div>
    </template>
    {{ this.Tmsg }}
  </b-toaster>
</template>

<script>
export default {
  data: function () {
    return {
      Ttitle: 'nive',
      Tmsg: 'hello',
      id: 'my-t',
      show: true,
    };
  },
  mounted() {
    this.msg();
    this.show = true;
  },
  methods: {
    msg() {
      this.id = 'my-t';
      this.$emit('msg', this.id);
    },
  },
};
</script>

<style>
b-toaster-bottom-center {
  margin-bottom: 250px;
}
</style>
