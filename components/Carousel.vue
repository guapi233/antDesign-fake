<template>
  <div class="c-carousel" ref="carousel">
    <div class="c-carousel__wrapper" :style="{ ...wrapperSize, ...handleSlide }">
      <slot></slot>
    </div>
    <ul class="c-carousel__dotlist">
      <li
        class="dot-item"
        v-for="(item, index) in dotList"
        :key="index"
        :class="{'is-active': curActive===index}"
        @click="curActive=index"
      >
        <button class="dot-btn"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CCarousel",
  data() {
    return {
      itemWidth: 0, // 单个展示项的宽
      itemHeight: 0, // 单个展示项的高
      itemCountWidth: 0, // 所有展示项总的宽
      itemCountHeight: 0, // 所有展示项总的高
      wrapperSize: {}, // 包裹层宽高
      curActive: 0, // 当前展示元素
    };
  },
  computed: {
    // 处理展示变化
    handleSlide() {
      return {
        transform: `translateX(-${(this.curActive + 1) * this.itemWidth}px)`,
      };
    },
    // 控制按钮长度
    dotList() {
      return false
        ? this.$slots.default.length
        : this.$slots.default.length - 2;
    },
  },
  methods: {
    // 初始化包裹宽高
    initWrapperSize() {
      // 为插槽内的元素设置固定宽高与排列方式
      this.$slots.default.forEach((item) => {
        item.elm.style.width = this.$refs["carousel"].clientWidth + "px";
        item.elm.style.display = "inline-block";
        // item.elm.style.height = this.$refs["carousel"].clientHeight + "px";
      });

      // 计算总包裹层总宽高
      let itemCount = this.$slots.default.length;
      this.itemWidth = this.$refs["carousel"].clientWidth;
      this.itemHeight = this.$refs["carousel"].clientHeight;
      this.itemCountWidth = this.$refs["carousel"].clientWidth * itemCount;
      this.itemCountHeight = this.$refs["carousel"].clientHeight * itemCount;

      this.wrapperSize = { width: this.itemCountWidth + "px" };
      console.log(this.wrapperSize);
    },
    // 初始化内容布局
    initLayout() {
      this.$slots.default.unshift({
        ...this.$slots.default[this.$slots.default.length - 1],
      });

      this.$slots.default.push({ ...this.$slots.default[1] });
    },
  },
  created() {
    // 初始化内容布局方式
    this.initLayout();
    window.addEventListener("resize", this.initWrapperSize);
  },
  mounted() {
    // 初始化包裹层宽高
    this.initWrapperSize();
  },
};
</script>

<style lang="scss">
.c-carousel {
  position: relative;
  overflow: hidden;

  &__wrapper {
    transition: transform 500ms ease 0s;
  }

  &__dotlist {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;

    .dot-item {
      margin-right: 8px;

      .dot-btn {
        width: 16px;
        height: 3px;
        font-size: 0;
        color: transparent;
        background: #fff;
        opacity: 0.3;
        transition: all 0.5s;
        cursor: pointer;
        border-radius: 1px;
        border: 0;
        outline: none;
      }
    }

    .is-active {
      .dot-btn {
        width: 24px;
        opacity: 1;
      }
    }
  }
}
</style>