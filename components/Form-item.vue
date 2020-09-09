<template>
  <div class="c-form-item">
    <label v-if="label" class="c-form-item__label">{{ label }}：</label>

    <slot></slot>

    <p v-if="validateStatus==='error'" class="c-form-item__error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "CFormItem",
  data() {
    return {
      validateStatus: "",
      errorMessage: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.c-form-item {
  display: flex;
  align-items: center;
  overflow: hidden;

  &__label {
    white-space: nowrap;
    margin: 0 8px 8px 0;
  }
}
</style>