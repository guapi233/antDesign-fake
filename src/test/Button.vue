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
      <c-button type="primary" :plain="true">primary</c-button>
      <c-button type="success" :plain="true">success</c-button>
      <c-button type="warning" :plain="true">warning</c-button>
      <c-button type="danger" :plain="true">danger</c-button>
      <c-button type="info" :plain="true">info</c-button>
    </blockarea>

    <blockarea title="幽灵按钮">
      <div
        class="backboad"
        style="background: rgb(190, 200, 200); padding: 15px 15px 15px 0"
      >
        <c-button type="primary" :ghost="true">primary</c-button>
        <c-button type="success" :ghost="true">success</c-button>
        <c-button type="warning" :ghost="true">warning</c-button>
        <c-button type="danger" :ghost="true">danger</c-button>
        <c-button type="info" :ghost="true">info</c-button>
      </div>
    </blockarea>

    <blockarea title="圆角按钮">
      <c-button type="primary" :round="true">primary</c-button>
      <c-button type="success" :round="true">success</c-button>
      <c-button type="warning" :round="true">warning</c-button>
      <c-button type="danger" :round="true">danger</c-button>
      <c-button type="info" :round="true">info</c-button>
    </blockarea>

    <blockarea title="圆形按钮">
      <c-button type="primary" :circle="true">p</c-button>
      <c-button type="success" :circle="true">s</c-button>
      <c-button type="warning" :circle="true">w</c-button>
      <c-button type="danger" :circle="true">d</c-button>
      <c-button type="info" :circle="true">i</c-button>
    </blockarea>

    <blockarea title="Icon按钮">
      <c-button type="primary" :circle="true" icon="camera"></c-button>
      <c-button type="success" :round="true" icon="calendar">日历</c-button>
      <c-button type="warning" icon="eye"></c-button>
    </blockarea>

    <blockarea title="不同尺寸的按钮">
      <c-button type="primary" icon="camera" size="large">照相机</c-button>
      <c-button type="success" icon="calendar">日历</c-button>
      <c-button type="warning" icon="eye" size="small">眼睛</c-button>
    </blockarea>

    <blockarea title="禁用按钮">
      <c-button type="primary" :disabled="true">p</c-button>
      <c-button type="danger" :circle="true" :disabled="true">p</c-button>
    </blockarea>

    <blockarea title="点击事件">
      <c-button type="primary" @click="burst">弹出！</c-button>
    </blockarea>

    <blockarea title="加载中状态">
      <c-button
        type="primary"
        @c="handleClick"
        :loading="loading"
        icon="calendar"
        >点击加载</c-button
      >
    </blockarea>

    <blockarea title="父元素宽度适配">
      <c-button type="primary" block>按钮</c-button>
    </blockarea>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const loading = ref(false);
    const burst = () => alert("hello");

    const handleClick = () => {
      loading.value = !loading.value;
    };

    const count = ref(0);

    return { loading, burst, handleClick, count };
  },
});
</script>

<style>
</style>
