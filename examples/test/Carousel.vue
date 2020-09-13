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

    <blockarea title="不同位置的按钮">
      <c-radio-group v-model="dotPosition">
        <c-radio label="top"></c-radio>
        <c-radio label="right"></c-radio>
        <c-radio label="bottom"></c-radio>
        <c-radio label="left"></c-radio>
      </c-radio-group>
      <c-carousel :dotPosition="dotPosition">
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

    <blockarea title="自定义控制箭头">
      <c-carousel>
        <template v-slot:leftArrow>
          <i class="icon-calendar"></i>
        </template>
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
        <template v-slot:rightArrow>
          <i class="icon-arrow"></i>
        </template>
      </c-carousel>
    </blockarea>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      dotPosition: "bottom",
    };
  },
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

  h3 {
    margin: 0;
  }
}
</style>