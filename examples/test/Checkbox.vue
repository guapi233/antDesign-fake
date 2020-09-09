<template>
  <div class="radio-test">
    <blockarea title="基础结构">
      <c-checkbox v-model="test1" label="男"></c-checkbox>
      {{ test1 }}
    </blockarea>

    <blockarea title="单选框包裹组件">
      <c-checkbox-group v-model="test3">
        <c-checkbox label="男"></c-checkbox>
        <c-checkbox label="女"></c-checkbox>
        <c-checkbox label="？"></c-checkbox>
      </c-checkbox-group>
      选中：{{ test3 }}
    </blockarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test1: "",
      test3: [],
    };
  },
};
</script>

<style>
</style>