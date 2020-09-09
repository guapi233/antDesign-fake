<template>
  <div class="c-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CForm",
  provide() {
    return {
      CForm: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    valiRules: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      valiItems: [],
    };
  },
  created() {
    // 缓存需要校验的表单项
    this.$on("valiItemPush", (item) => {
      this.valiItems.push(item);
    });
  },
  methods: {
    validate(callback) {
      // 获取所有表单项的校验结果，全部成功才算成功
      let tasks = this.valiItems.map((item) => item.validate()),
        ret = true;

      Promise.all(tasks).then((results) => {
        results.forEach((valid) => {
          if (!valid) {
            ret = false;
          }
        });

        callback(ret);
      });
    },
  },
};
</script>

<style lang="scss">
</style>