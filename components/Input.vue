<template>
  <div class="c-input" :class="{ 'c-input--suffix': showSuffix, 'c-input--prefix': showPrefix }">
    <!-- 固定前缀 -->
    <span class="c-input__addon__before" v-if="addonBefore">{{ addonBefore }}</span>

    <!-- 输入框前缀 -->
    <span class="c-input__prefix" v-if="showPrefix">
      <span v-if="prefix">{{ prefix }}</span>
      <slot name="prefix" v-if="$slots.prefix"></slot>
    </span>
    <!-- 输入框本体 -->
    <input
      class="c-input__inner"
      :type="handleType"
      :class="{ 'is-disabled': disabled }"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="showInputBorder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />

    <!-- 功能图标 -->
    <span class="c-input__suffix" v-if="showSuffix">
      <i
        class="c-input__icon c-input__clear icon-enempty"
        v-if="clearable && value"
        @click="$emit('input', '')"
      ></i>
      <i
        class="c-input__icon c-input__clear"
        :class="eyeIsOpen"
        v-if="showPassword"
        @click="eyeOpen=!eyeOpen"
      ></i>

      <span v-if="suffix">{{ suffix }}</span>
      <slot v-if="$slots.suffix" name="suffix"></slot>
    </span>

    <!-- 固定后缀 -->
    <span class="c-input__addon__after" v-if="addonAfter">{{ addonAfter }}</span>
  </div>
</template>

<script>
export default {
  name: "CInput",
  data() {
    return {
      eyeOpen: false,
    };
  },
  props: {
    // 输入框提示
    placeholder: {
      type: String,
      default: "",
    },
    // 输入框类型
    type: {
      type: String,
      default: "text",
    },
    // 字段name
    name: {
      type: String,
      default: "",
    },
    // 是否开启禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 值
    value: {
      type: String,
      default: "",
    },
    // 是否开启清空按钮
    clearable: {
      type: Boolean,
      default: false,
    },
    // 是否开启密码显隐按钮
    showPassword: {
      type: Boolean,
      default: false,
    },
    // 前缀嵌入文本
    prefix: {
      type: String,
      default: "",
    },
    // 后缀嵌入文本
    suffix: {
      type: String,
      default: "",
    },
    // 前固定组合
    addonBefore: {
      type: String,
      default: "",
    },
    // 后固定组合
    addonAfter: {
      tupe: String,
      default: "",
    },
  },
  methods: {},
  computed: {
    // 打开CSS后缀的条件
    showSuffix() {
      return (
        this.clearable || this.showPassword || this.suffix || this.$slots.suffix
      );
    },
    // 打开CSS前缀的条件
    showPrefix() {
      return this.prefix || this.$slots.prefix;
    },
    // 密码Icon显隐的条件
    eyeIsOpen() {
      return this.eyeOpen ? "icon-eye" : "icon-eye-off";
    },
    // 类型处理
    handleType() {
      return this.showPassword
        ? this.eyeOpen
          ? "text"
          : "password"
        : this.type;
    },
    // 含有固定搭配的话，输入框隐藏部分边框
    showInputBorder() {
      if (this.addonBefore || this.addonAfter) {
        return { borderRadius: "0px" };
      } else {
        return {};
      }
    },
  },
};
</script>

<style lang="scss">
.c-input {
  width: 100%;
  position: relative;
  font-size: 16px;
  display: flex;
  margin: 0 8px 8px 0;

  .c-input__addon__before {
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    padding: 0 11px;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
    line-height: 40px;
    height: 40px;
    box-sizing: border-box;
  }

  .c-input__addon__after {
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    padding: 0 11px;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    line-height: 40px;
    height: 40px;
    box-sizing: border-box;
  }

  .c-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.c-input--suffix {
  .c-input__inner {
    padding-right: 30px;
  }

  .c-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

.c-input--prefix {
  .c-input__inner {
    padding-left: 30px;
  }

  .c-input__prefix {
    position: absolute;
    height: 100%;
    left: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

/* 关闭IE默认的清空样式和小眼睛 */
::-ms-clear,
::-ms-reveal {
  display: none;
}
</style>