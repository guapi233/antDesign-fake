<template>
  <transition name="notice" appear>
    <div class="c-notice" v-if="isShow">
      <div class="c-notice__wrapper">
        <h2 class="c-notice__title">{{ title }}</h2>
        <div class="c-notice__content">{{ message }}</div>
        <i class="c-notice__closeBtn icon-close" @click="destroy"></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CNotice",
  data() {
    return {
      title: "提示",
      message: "提示信息",
      duration: 5000,
      isShow: true,
    };
  },
  methods: {
    destroy() {
      this.isShow = false;
    },
  },
  created() {
    if (this.duration) {
      setTimeout(() => {
        this.isShow = false;
      }, this.duration);
    }
  },
};
</script>

<style lang="scss">
.c-notice {
  display: flex;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
  overflow: hidden;
  /* 动态 */
  top: 16px;
  z-index: 2002;
  right: 16px;

  .c-notice__wrapper {
    margin-right: 8px;
    margin-left: 13px;

    .c-notice__title {
      font-weight: 700;
      font-size: 16px;
      color: #303133;
      margin: 0;
    }

    .c-notice__content {
      font-size: 14px;
      line-height: 21px;
      margin: 6px 0 0;
      color: #606266;
      text-align: justify;
    }

    .c-notice__closeBtn {
      position: absolute;
      top: 18px;
      right: 15px;
      cursor: pointer;
      color: #909399;
      font-size: 12px;
    }
  }
}

// 动画
.notice-enter {
  right: -330px;
}

.notice-enter-to {
  right: 16px;
}

.notice-leave-to {
  opacity: 0;
}
</style>