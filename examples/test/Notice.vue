<template>
  <div class="notice-test">
    <c-button @click="notice">提示</c-button>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      showSwitch: false,
    };
  },
  methods: {
    notice() {
      this.$notice({
        title: "这是标题",
        message: "这是信息",
      });
    },
  },
};
</script>

<style>
</style>