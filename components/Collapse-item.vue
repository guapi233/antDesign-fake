<template>
  <div class="c-collapse-item">
    <div class="c-collapse-item__tab" @click="handleStateChange" :class="{ 'is-active': open }">
      {{ title }}
      <i class="c-collapse-item__icon icon-triangle" :class="[open ?'open' :'close']"></i>
    </div>

    <!-- 过渡动画存在Bug -->
    <transition name="slide">
      <div
        class="c-collapse-item__content"
        v-show="open"
        :style="handleHeight"
        ref="contentWrapper"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CCollapseItem",
  inject: ["Collapse"],
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    open() {
      return this.Collapse.value.includes(this.name);
    },
  },
  methods: {
    // 处理开关状态变化
    handleStateChange() {
      if (this.open) {
        let curIndex = this.Collapse.value.indexOf(this.name);
        // 将当前元素从开启元素数组中移除
        if (curIndex !== -1) {
          let newActives = [...this.Collapse.value];
          newActives.splice(curIndex, 1);
          this.Collapse.$emit("input", newActives);
        }
      } else {
        // 将当前元素加入开启元素数组中
        let newActives = [...this.Collapse.value, this.name];
        this.Collapse.$emit("input", newActives);
      }
    },
    handleHeight() {
      // return { height: this.$refs["handleWrapper"].clientHeight + "px" };
    },
  },
};
</script>

<style lang="scss">
.c-collapse-item {
  color: #303133;

  &__tab {
    display: flex;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid #ebeef5;
    cursor: pointer;

    .c-collapse-item__icon {
      margin: 0 8px 0 auto;
      transition: all 0.3s;
    }

    .open {
      transform: rotate(0deg);
    }

    .close {
      transform: rotate(-90deg);
    }
  }

  .is-active {
    border-bottom-color: transparent;
  }

  .c-collapse-item__content {
    padding-bottom: 25px;
    border-bottom: 1px solid #ebeef5;
    transition: all 0.3s;
  }
}

.slide-enter,
.slide-leave-to {
  max-height: 0;
}

.slide-enter-to,
.slide-leave {
  max-height: 50px;
}
</style>