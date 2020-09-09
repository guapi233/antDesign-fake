<template>
  <div class="c-form-item">
    <div class="c-form-item-wrapper">
      <label v-if="label" class="c-form-item__label">{{ label }}：</label>

      <slot></slot>
    </div>

    <p v-if="validateStatus==='error'" class="c-form-item__error">Error：{{ errorMessage }}</p>
  </div>
</template>

<script>
import schema from "async-validator";

export default {
  name: "CFormItem",
  inject: ["CForm"],
  data() {
    return {
      validateStatus: "",
      errorMessage: "",
      // 证明自身的标志，用于提醒内容组件进行值校验
      isFormItem: true,
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  mounted() {
    if (this.prop) {
      this.CForm.$emit("valiItemPush", this);
    }
  },
  methods: {
    // 校验数据
    validate() {
      let descriptor = { [this.prop]: this.CForm.valiRules[this.prop] }; // 储存校验规则

      const validator = new schema(descriptor); // 创建校验器

      let obj = { [this.prop]: this.CForm.model[this.prop] }; // 生成需要对比的当前数据，value为当前输入框的值

      // 返回Promise，方便在Form组件中校验全部表单项拿到最终结果
      return new Promise((resolve, reject) => {
        validator.validate(obj, (errors) => {
          if (errors) {
            this.validateStatus = "error";
            this.errorMessage = errors[0].message;

            resolve(false);
          } else {
            this.validateStatus = "";
            this.errorMessage = "";

            resolve(true);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss">
.c-form-item {
  position: relative;
  overflow: hidden;

  .c-form-item-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;

    .c-form-item__label {
      white-space: nowrap;
      margin: 0 8px 8px 0;
    }
  }

  .c-form-item__error {
    color: red;
    float: right;
    margin: 0 15px 10px;
  }
}
</style>