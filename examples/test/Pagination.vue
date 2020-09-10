<template>
  <div class="pagination-test">
    <blockarea title="基础结构">
      <c-pagination :count="30"></c-pagination>
    </blockarea>

    <blockarea title="边框样式">
      <c-pagination :count="100" hasBorder></c-pagination>
    </blockarea>

    <blockarea title="翻页回调事件">
      <c-pagination :count="100" hasBorder @turn="times++"></c-pagination>
      翻了 {{ times }} 次
    </blockarea>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      times: 0,
    };
  },
};
</script>

<style lang="scss">
</style>