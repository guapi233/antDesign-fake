<template>
  <div class="c-carousel" ref="carousel">
    <div class="c-carousel__wrapper" :style="{ ...wrapperSize, ...handleSlide }" ref="wrapper">
      <slot></slot>
    </div>
    <ul class="c-carousel__dotlist" :class="`c-carousel--dotPosition__${ dotPosition }`">
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
  props: {
    dotPosition: {
      type: String,
      default: "bottom",
    },
  },
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
    // 走马灯是否向右滑动
    isRightSlide() {
      return ["top", "bottom"].includes(this.dotPosition);
    },
    // 走马灯是否向上滑动
    isTopSlide() {
      return ["left", "right"].includes(this.dotPosition);
    },
    // 处理展示变化
    handleSlide() {
      // 判断变化方式以及方向
      if (this.isRightSlide) {
        return {
          transform: `translateX(-${(this.curActive + 1) * this.itemWidth}px)`,
        };
      } else if (this.isTopSlide) {
        return {
          transform: `translateY(-${(this.curActive + 1) * this.itemHeight}px)`,
        };
      }
    },
    // 控制按钮长度
    dotList() {
      return false
        ? this.$slots.default.length
        : this.$slots.default.length - 2;
    },
  },
  methods: {
    // 计算布局
    calculateLayout() {
      if (this.isRightSlide) {
        this.$refs["wrapper"].style.display = "flex";
      } else {
        this.$refs["wrapper"].style.display = "block";
      }
    },
    // 初始化包裹宽高
    initWrapperSize() {
      // 为插槽内的元素设置固定宽与排列方式
      this.calculateLayout();

      // 计算单元素高度与总包裹层总宽高
      let itemCount = this.$slots.default.length;

      this.itemWidth = this.$refs["carousel"].clientWidth;
      this.itemHeight = this.$refs[
        "carousel"
      ].children[0].children[0].clientHeight;

      this.itemCountWidth = this.$refs["carousel"].clientWidth * itemCount;
      this.itemCountHeight = this.$refs["carousel"].clientHeight * itemCount;

      // 为单个元素添加宽高
      this.$slots.default.forEach((item) => {
        item.elm.style.width = this.itemWidth + "px";
        item.elm.style.height = this.itemHeight + "px";
      });

      // 为外层包裹添加宽高
      if (this.isRightSlide) {
        this.wrapperSize = { width: this.itemCountWidth + "px" };
      } else if (this.isTopSlide) {
        this.wrapperSize = { Height: this.itemCountHeight + "px" };
      }

      // 给最外层元素设置固定高度，方便配合overflow裁切可视区
      this.$refs["carousel"].style.height = this.itemHeight + "px";
    },
    // 初始化元素数量
    initItemCount() {
      this.$slots.default.unshift({
        ...this.$slots.default[this.$slots.default.length - 1],
      });

      this.$slots.default.push({ ...this.$slots.default[1] });
    },
  },
  watch: {
    dotPosition(newVal, oldVal) {
      // 重新计算元素数量
      this.initItemCount();

      // 重新计算布局
      this.calculateLayout();

      // 重新金酸包裹层高度
      if (this.isRightSlide) {
        this.wrapperSize = { width: this.itemCountWidth + "px" };
      } else if (this.isTopSlide) {
        this.wrapperSize = { height: this.itemCountHeight + "px" };
      }
    },
  },
  created() {
    // 初始化内容布局方式
    this.initItemCount();
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
    list-style: none;
    padding: 0;
    margin: 0;

    .dot-item {
      .dot-btn {
        display: block;
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
  }
}

// 不同的按钮位置
.c-carousel--dotPosition__top {
  display: flex;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
}

.c-carousel--dotPosition__bottom {
  display: flex;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
}

.c-carousel--dotPosition__top,
.c-carousel--dotPosition__bottom {
  .dot-item {
    margin-right: 8px;
    .dot-btn {
      width: 16px;
      height: 3px;
    }
  }

  .is-active {
    .dot-btn {
      width: 24px;
      opacity: 1;
    }
  }
}

.c-carousel--dotPosition__left {
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.c-carousel--dotPosition__right {
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.c-carousel--dotPosition__left,
.c-carousel--dotPosition__right {
  .dot-item {
    margin-bottom: 8px;
    .dot-btn {
      padding: 0;
      width: 3px;
      height: 16px;
    }
  }

  .is-active {
    .dot-btn {
      height: 24px;
      opacity: 1;
    }
  }
}
</style>