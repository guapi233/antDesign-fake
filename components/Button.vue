<template>
  <button
    class="c-button"
    :class="[`c-button--${type}`, `c-button--size__${size}`, {
    'is-plain': plain,
    'is-ghost': ghost,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled || loading
  }]"
    :style="fullWidth"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- 加载图标 -->
    <div v-if="loading" class="icon- loading-circle">
      <i class="icon-loading"></i>
    </div>

    <i v-if="icon && !loading" :class="`icon-${ icon }`"></i>

    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: "default",
    },
    // 是否为朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    // 是否为圆角按钮
    round: {
      type: Boolean,
      default: false,
    },
    // 是否为原形按钮
    circle: {
      type: Boolean,
      default: false,
    },
    // 是否为icon按钮
    icon: {
      type: String,
      default: "",
    },
    // 是否开启禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 按钮加载状态
    loading: {
      type: Boolean,
      default: false,
    },
    // 适配父元素宽度
    block: {
      type: Boolean,
      default: false,
    },
    // 幽灵按钮
    ghost: {
      type: Boolean,
      default: false,
    },
    // 按钮尺寸
    size: {
      type: String,
      default: "default",
    },
  },
  methods: {
    // 点击事件中转
    handleClick(event) {
      !this.loading && this.$emit("click", event);
    },
  },
  computed: {
    fullWidth() {
      return this.block ? { width: "100%" } : {};
    },
  },
};
</script>

<style lang="scss" scoped>
/* 基础样式 */
.c-button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0 8px 12px 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

/* 种类样式 */
.c-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

.c-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.c-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}

.c-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.c-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

/* 朴素按钮样式 */
.c-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}

.c-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;

  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

.c-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;

  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.c-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;

  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}

.c-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;

  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}

.c-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;

  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

/* 幽灵按钮样式 */
.c-button.is-ghost {
  border-color: #409eff;
  background: transparent;

  &:hover,
  &:focus {
    background: transparent;
    color: #409eff;
  }
}

.c-button--primary.is-ghost {
  color: #409eff;
  background: transparent;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: transparent;
    border-color: #b3d8ff;
    color: #fff;
  }
}

.c-button--success.is-ghost {
  color: #67c23a;
  background: transparent;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: transparent;
    border-color: #c2e7b0;
    color: #fff;
  }
}

.c-button--info.is-ghost {
  color: #909399;
  background: transparent;
  border-color: #909399;

  &:hover,
  &:focus {
    background: transparent;
    border-color: #d3d4d6;
    color: #fff;
  }
}

.c-button--warning.is-ghost {
  color: #e6a23c;
  background: transparent;

  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: transparent;
    border-color: #f5dab1;

    color: #fff;
  }
}

.c-button--danger.is-ghost {
  color: #f56c6c;
  background: transparent;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    border-color: #fbc4c4;
    background: transparent;
    color: #fff;
  }
}

/* 圆角样式 */
.c-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

/* 圆形按钮 */
.c-button.is-circle {
  border-radius: 50%;
  padding: 0;
}

/* 添加icon后调整与文本的间距 */
.c-button [class*="icon-"] + span {
  margin-left: 5px;
}

/* 禁用状态样式 */
.c-button.is-disabled,
.c-button.is-disabled:hover,
.c-button.is-disabled:focus {
  color: #c0c4cc;
  cursor: not-allowed;
  background-color: #fff;
  background-image: none;
  border-color: #ebeef5;
}

.c-button--primary.is-disabled,
.c-button--primary.is-disabled:active,
.c-button--primary.is-disabled:focus,
.c-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.c-button--success.is-disabled,
.c-button--success.is-disabled:active,
.c-button--success.is-disabled:focus,
.c-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.c-button--info.is-disabled,
.c-button--info.is-disabled:active,
.c-button--info.is-disabled:focus,
.c-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.c-button--warning.is-disabled,
.c-button--warning.is-disabled:active,
.c-button--warning.is-disabled:focus,
.c-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.c-button--danger.is-disabled,
.c-button--danger.is-disabled:active,
.c-button--danger.is-disabled:focus,
.c-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.c-button--primary.is-plain.is-disabled,
.c-button--primary.is-plain.is-disabled:active,
.c-button--primary.is-plain.is-disabled:focus,
.c-button--primary.is-plain.is-disabled:hover {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}

.c-button--success.is-plain.is-disabled,
.c-button--success.is-plain.is-disabled:active,
.c-button--success.is-plain.is-disabled:focus,
.c-button--success.is-plain.is-disabled:hover {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.c-button--info.is-plain.is-disabled,
.c-button--info.is-plain.is-disabled:active,
.c-button--info.is-plain.is-disabled:focus,
.c-button--info.is-plain.is-disabled:hover {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}

.c-button--warning.is-plain.is-disabled,
.c-button--warning.is-plain.is-disabled:active,
.c-button--warning.is-plain.is-disabled:focus,
.c-button--warning.is-plain.is-disabled:hover {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.c-button--danger.is-plain.is-disabled,
.c-button--danger.is-plain.is-disabled:active,
.c-button--danger.is-plain.is-disabled:focus,
.c-button--danger.is-plain.is-disabled:hover {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

// 旋转动画
@keyframes loadingCircle {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading-circle {
  display: inline-block;
  animation: loadingCircle 1s linear infinite;
}

// 尺寸样式
.c-button--size__large {
  font-size: 16px;
  height: 42px;
  min-width: 42px;
  line-height: 1;
}

.c-button--size__default {
  font-size: 14px;
  height: 32px;
  min-width: 32px;
  line-height: 0.5;
}

.c-button--size__small {
  font-size: 12px;
  height: 24px;
  min-width: 24px;
  line-height: 0.2;
}
</style>