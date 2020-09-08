<template>
  <div class="input-test">
    <blockarea title="基本结构">
      <c-input></c-input>
    </blockarea>

    <blockarea title="提示信息">
      <c-input placeholder="这是一条提示信息"></c-input>
    </blockarea>

    <blockarea title="密码输入框">
      <c-input placeholder="请输入账号"></c-input>
      <c-input placeholder="请输入密码" type="password"></c-input>
    </blockarea>

    <blockarea title="禁用状态">
      <c-input placeholder="请输入账号" disabled></c-input>
      <c-input placeholder="请输入密码" type="password" disabled></c-input>
    </blockarea>

    <blockarea title="双向绑定">
      <c-input placeholder="请输入账号" v-model="username"></c-input>
      <c-input placeholder="请输入密码" type="password" v-model="password"></c-input>
      <span>账号：{{ username }}</span>
      <span>密码：{{ password }}</span>
    </blockarea>

    <blockarea title="清空按钮">
      <b>PS：需要配合v-model使用</b>
      <c-input placeholder="请输入账号" clearable v-model="username"></c-input>
    </blockarea>

    <blockarea title="密码显隐按钮">
      <c-input placeholder="请输入密码" showPassword v-model="password"></c-input>
    </blockarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
</style>