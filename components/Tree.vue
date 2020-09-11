<template>
  <div class="c-tree">
    <div class="c-tree__wrapper" v-for="item in data" :key="item.label">
      <!-- 本级信息 -->
      <div class="c-tree__node" :style="handleTab" @click="item.open=!item.open">
        <span class="c-tree__showIcon" :class="handleIconShow(item)">
          <i class="icon-triangle"></i>
        </span>
        <span>{{ item.label }}</span>
      </div>

      <!-- 子级信息 -->
      <div class="c-tree__children" v-show="item.open">
        <c-tree v-if="item.children" :data="item.children" :tablevel="tablevel+1"></c-tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTree",
  props: {
    // Tree数据对象
    data: {
      type: Array,
      required: true,
    },
    // 缩进
    tablevel: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      open: false,
      hasChildren: !!this.data.children,
    };
  },
  computed: {
    // 缩进处理
    handleTab() {
      return { marginLeft: 18 * this.tablevel + "px" };
    },
  },
  methods: {
    // Icon图标展示处理
    handleIconShow(self) {
      return [
        self.open ? "open" : "close",
        self.hasChildren ? "show" : "hidden",
      ];
    },
    // 处理数据，添加内部使用树形
    handleData() {
      this.data.forEach((item) => {
        this.$set(item, "open", false);
        this.$set(item, "hasChildren", !!item.children);
      });
    },
  },
  created() {
    this.handleData();
  },
};
</script>

<style lang="scss">
.c-tree {
  color: #606266;

  .c-tree__node {
    display: flex;
    align-items: center;
    height: 26px;
    cursor: pointer;

    &:hover {
      background-color: #f5f7fa;
    }

    .open {
      transform: rotate(0deg);
    }

    .close {
      transform: rotate(-90deg);
    }

    .show {
      opacity: 1;
    }

    .hidden {
      opacity: 0;
    }
  }
}
</style>