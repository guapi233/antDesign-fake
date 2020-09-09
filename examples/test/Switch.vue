<template>
  <div class="switch-test">
    <blockarea title="基础结构">
      <c-switch label="开关" v-model="test1"></c-switch>
      状态：{{ test1 }}
    </blockarea>

    <blockarea title="配色设置">
      <c-switch label="开关" v-model="test2" inactiveColor="red" activeColor="green"></c-switch>
      状态：{{ test2 }}
    </blockarea>
  </div>
</template>

<script>
export default {
  name: "SwitchTest",
  data() {
    return {
      test1: false,
      test2: false,
    };
  },
};
</script>

<style>
</style>