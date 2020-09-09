<template>
  <div class="radio-test">
    <blockarea title="基础结构">
      <c-radio v-model="test1" label="男"></c-radio>
    </blockarea>

    <blockarea title="单选框组">
      <c-radio v-model="test2" label="男"></c-radio>
      <c-radio v-model="test2" label="女"></c-radio>
    </blockarea>

    <blockarea title="单选框包裹组件">
      <c-radio-group v-model="test3">
        <c-radio label="男"></c-radio>
        <c-radio label="女"></c-radio>
        <c-radio label="？"></c-radio>
      </c-radio-group>
    </blockarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test1: "女",
      test2: "女",
      test3: "?",
    };
  },
};
</script>

<style>
</style>