<template>
  <div class="notice-test">
    <blockarea title="基础结构">
      <c-button @click="notice">提示</c-button>
    </blockarea>

    <blockarea title="定时隐藏">
      <c-button @click="notice2">不会自动关闭</c-button>
      <c-button @click="notice3">2s后关闭</c-button>
    </blockarea>

    <blockarea title="不同种类的弹窗">
      <c-button type="success" @click="notice4('success')">成功</c-button>
      <c-button type="info" @click="notice4('tip')">提示</c-button>
      <c-button type="warning" @click="notice4('warning')">警告</c-button>
      <c-button type="danger" @click="notice4('error')">错误</c-button>
    </blockarea>

    <blockarea title="HTML插值">
      <c-button type="tip" @click="notice5">提示</c-button>
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
    notice4(type) {
      this.$notice({
        type: type,
      });
    },
    notice5() {
      this.$notice({
        type: "tip",
        dangerouslyUseHTMLString: true,
        title: "提示",
        message: "<b><i>这是一段HTML插值</i></b>",
      });
    },
  },
};
</script>

<style>
</style>