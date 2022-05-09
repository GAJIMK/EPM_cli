<template>
  <div class="view">
    <div class="modal-container">
      <div class="modal-title">{{ modalTitle }}</div>
      <div class="modal-contents">
        <b-input type="text" />
        <b-button variant="warning">생성</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['modalTitle'],
};
</script>

<style lang="scss">
@import '../../../../scss/main.scss';

.modal-container {
  z-index: 9999;
  position: absolute;
  width: 300px;
}
</style>
