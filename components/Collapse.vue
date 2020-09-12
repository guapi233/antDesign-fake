<template>
  <div class="c-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CCollapse",
  provide() {
    return {
      Collapse: this,
    };
  },
  props: {
    value: {
      type: [Array, String],
      default: [],
    },
  },
};
</script>

<style lang="scss">
.c-collapse {
  border-top: 1px solid #ebeef5;
}
</style>