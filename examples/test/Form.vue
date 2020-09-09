<template>
  <div class="form-test">
    <blockarea title="Form基本结构与数据校验">
      <c-form :model="form" :valiRules="valiRules" ref="formObj">
        <c-form-item label="用户名" prop="username">
          <c-input placeholder="请输入用户名" v-model="form.username"></c-input>
        </c-form-item>
        <c-form-item label="密码" prop="password">
          <c-input placeholder="请输入密码" v-model="form.password"></c-input>
        </c-form-item>
        <c-form-item label="提交">
          <c-button type="primary" @click="submitForm">提交</c-button>
        </c-form-item>
      </c-form>
    </blockarea>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      valiRules: {
        username: [
          {
            required: true,
            type: "string",
            message: "请输入用户名",
          },
          {
            min: 6,
            max: 10,
            message: "用户名长度6-10",
          },
        ],
        password: [
          {
            required: true,
            type: "string",
            message: "请输入密码",
          },
          {
            min: 6,
            max: 10,
            message: "密码长度6-10",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["formObj"].validate((res) => {
        if (!res) {
          alert("提交失败");
        } else {
          alert("提交成功");
        }
      });
    },
  },
};
</script>

<style>
</style>