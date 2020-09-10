<template>
  <div class="notice-test">
    <blockarea title="基础结构">
      <c-button @click="notice">提示</c-button>
    </blockarea>

    <blockarea title="定时隐藏">
      <c-button @click="notice2">不会自动关闭</c-button>
      <c-button @click="notice3">2s后关闭</c-button>
    </blockarea>
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
    notice2() {
      this.$notice({
        title: "这是标题",
        message: "不会自动关闭",
        duration: 0,
      });
    },
    notice3() {
      this.$notice({
        title: "这是标题",
        message: "2s后自动关闭",
        duration: 2000,
      });
    },
  },
};
</script>

<style>
</style>