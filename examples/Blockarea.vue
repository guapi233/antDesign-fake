<template>
  <div class="block-area" :style="{ width }">
    <h2>{{ title }}</h2>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Blockarea",
  props: {
    title: {
      type: String,
      default: "特性测试区",
    },
    width: {
      type: String,
      default: "auto",
    },
  },
};
</script>

<style lang="scss">
.block-area {
  margin-bottom: 50px;
}
</style>