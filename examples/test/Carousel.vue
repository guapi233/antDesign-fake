<template>
  <div class="carousel-test">
    <blockarea title="基础结构">
      <c-carousel>
        <div class="item">
          <h3>1</h3>
        </div>
        <div class="item">
          <h3>2</h3>
        </div>
        <div class="item">
          <h3>3</h3>
        </div>
        <div class="item">
          <h3>4</h3>
        </div>
      </c-carousel>
    </blockarea>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style lang="scss">
.item {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  color: white;
  font-weight: 600;
}
</style>