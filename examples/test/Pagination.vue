<template>
  <div class="pagination-test">
    <blockarea title="基础结构">
      <c-pagination :count="30"></c-pagination>
    </blockarea>

    <blockarea title="边框样式">
      <c-pagination :count="30" hasBorder></c-pagination>
    </blockarea>
  </div>
</template>

<script>
export default {
  name: "Pagination",
};
</script>

<style lang="scss">
</style>