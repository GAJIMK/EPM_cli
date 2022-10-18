<template>
  <section class="container">
    <figure class="snip1283">
      <div id="banner1">
        <div class="context1">직원의 경비정산</div>
        <div class="context2">쉽고 빠르게 관리하세요</div>
      </div>
      <figcaption class="fosize">
        <div class="context1">Expenses for Employee</div>
        <div class="context2">Take care easily and quickly</div>
      </figcaption>
    </figure>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  height: fit-content;
  box-sizing: border-box;
}

figure.snip1283 {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  width: 100%;
  height: fit-content;
  text-align: left;
  font-size: 16px;
  -webkit-perspective: 50em;
  perspective: 50em;
}

figure.snip1283 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}

figure.snip1283 .banner1 {
  opacity: 1;
  width: 100%;
  -webkit-transform-origin: 50% 0%;
  -ms-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}

figure.snip1283 figcaption {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  -webkit-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  z-index: 1;
  opacity: 0;
  padding: 0px 0px;
}

figure.snip1283:hover #banner1,
figure.snip1283.hover #banner1 {
  -webkit-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
  opacity: 0;
}

figure.snip1283:hover figcaption,
figure.snip1283.hover figcaption {
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.context1 {
  font-size: 40px;
  z-index: 999;
  text-align: center;
  font-family: 'LeferiPoint-BlackA', sans-serif;
}

.context2 {
  font-size: 28px;
  text-align: center;
  color: #777;
  font-family: 'LeferiPoint-BlackA', sans-serif;
  z-index: 999;
}

@media screen and(max-width: 768px) {
  .context1 {
    font-size: 30px;
  }

  .context2 {
    font-size: 20px;
  }
}
</style>
