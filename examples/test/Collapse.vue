<template>
  <div class="collapse-test">
    <blockarea title="基础结构">
      <c-collapse v-model="actives">
        <c-collapse-item title="哈哈" name="haha">我是内容卡号是你来得及爱上了</c-collapse-item>
        <c-collapse-item title="嘻嘻" name="xixi">我是内容卡号是你来得及爱上了</c-collapse-item>
        <c-collapse-item title="红红" name="hoho">我是内容卡号是你来得及爱上了</c-collapse-item>
      </c-collapse>
    </blockarea>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  data() {
    return {
      actives: ["hoho"],
    };
  },
};
</script>

<style lang="scss">
</style>