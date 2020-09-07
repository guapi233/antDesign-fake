<template>
  <div class="button-test">
    <blockarea title="基础结构">
      <c-button>default</c-button>
    </blockarea>

    <blockarea title="不同种类的按钮">
      <c-button type="primary">primary</c-button>
      <c-button type="success">success</c-button>
      <c-button type="warning">warning</c-button>
      <c-button type="danger">danger</c-button>
      <c-button type="info">info</c-button>
    </blockarea>

    <blockarea title="朴素按钮">
      <c-button type="primary" plain>primary</c-button>
      <c-button type="success" plain>success</c-button>
      <c-button type="warning" plain>warning</c-button>
      <c-button type="danger" plain>danger</c-button>
      <c-button type="info" plain>info</c-button>
    </blockarea>

    <blockarea title="幽灵按钮">
      <div class="backboad" style="background: rgb(190, 200, 200);padding:15px 15px 15px 0;">
        <c-button type="primary" ghost>primary</c-button>
        <c-button type="success" ghost>success</c-button>
        <c-button type="warning" ghost>warning</c-button>
        <c-button type="danger" ghost>danger</c-button>
        <c-button type="info" ghost>info</c-button>
      </div>
    </blockarea>

    <blockarea title="圆角按钮">
      <c-button type="primary" round>primary</c-button>
      <c-button type="success" round>success</c-button>
      <c-button type="warning" round>warning</c-button>
      <c-button type="danger" round>danger</c-button>
      <c-button type="info" round>info</c-button>
    </blockarea>

    <blockarea title="圆形按钮">
      <c-button type="primary" circle>p</c-button>
      <c-button type="success" circle>s</c-button>
      <c-button type="warning" circle>w</c-button>
      <c-button type="danger" circle>d</c-button>
      <c-button type="info" circle>i</c-button>
    </blockarea>

    <blockarea title="Icon按钮">
      <c-button type="primary" circle icon="camera"></c-button>
      <c-button type="success" round icon="calendar">日历</c-button>
      <c-button type="warning" icon="eye"></c-button>
    </blockarea>

    <blockarea title="禁用按钮">
      <c-button type="primary" disabled>p</c-button>
      <c-button type="danger" circle disabled>p</c-button>
    </blockarea>

    <blockarea title="点击事件">
      <c-button type="primary" @click="burst">弹出！</c-button>
    </blockarea>

    <blockarea title="加载中状态">
      <c-button type="primary" @click="loading=!loading" :loading="loading" icon="calendar">点击加载</c-button>
    </blockarea>

    <blockarea title="父元素宽度适配">
      <c-button type="primary" block>按钮</c-button>
    </blockarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    burst() {
      alert("hello");
    },
  },
};
</script>

<style>
</style>