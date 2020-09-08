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

    <blockarea title="前后缀插值">
      <c-input prefix="￥" suffix="RMB"></c-input>
      <c-input>
        <template v-slot:prefix>
          <i class="icon-camera"></i>
        </template>
        <template v-slot:suffix>
          <i class="icon-calendar"></i>
        </template>
      </c-input>
    </blockarea>

    <blockarea title="固定组合">
      <c-input addonBefore="https://"></c-input>
      <c-input addonAfter=".com"></c-input>
      <c-input addonBefore="https://" addonAfter=".com"></c-input>
    </blockarea>

    <blockarea title="默认值">
      <c-input addonBefore="https://" addonAfter=".com" defaultVal="baidu.com"></c-input>
    </blockarea>

    <blockarea title="值改变事件">
      <c-input addonBefore="https://" addonAfter=".com" defaultVal="baidu.com" @change="hicount++"></c-input>
      修改次数：{{ hicount }}
    </blockarea>

    <blockarea title="回车事件">
      <c-input addonBefore="https://" addonAfter=".com" defaultVal="baidu.com" @enter="sayhi"></c-input>
    </blockarea>

    <blockarea title="最大长度">
      <c-input :maxLength="10" placeholder="最大长度10"></c-input>
    </blockarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      hicount: 0,
    };
  },
  methods: {
    sayhi() {
      alert("hi");
    },
  },
};
</script>

<style>
</style>