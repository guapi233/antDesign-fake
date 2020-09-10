<template>
  <div class="pagination-container" :class="{ 'has-border': hasBorder }">
    <!-- 上一页按钮 -->
    <div class="preview decorator" :class="[activePage<=1 ?'unclicked' :'']" @click="toPreview">
      <i class="icon-arrow"></i>
    </div>
    <!-- 页码 -->
    <div class="pagination-numbers">
      <!-- 小于或等于6页时 -->
      <div class="lower-six" v-if="pagesCount <= 6">
        <div
          class="page-number decorator"
          v-for="i in pagesCount"
          :class="[activePage===i ?'active' :'']"
          :key="i"
          @click="activePage=i"
        >{{ i | smallerTen }}</div>
      </div>

      <!-- 大于6页时 -->
      <div class="greater-six" v-else>
        <!-- 第一页 -->
        <div
          class="page-number decorator"
          :class="[activePage===1 ?'active' :'']"
          @click="activePage=1"
        >01</div>

        <!-- 如果当前选中的页数不大于3，隐藏上三页的按钮 -->
        <i
          v-if="activePage > 3"
          class="change-preview decorator"
          :class="[changePreviewOn ?'icon-pagition rotating' :'icon-ellipsis']"
          @mouseenter="changePreviewOn=true"
          @mouseleave="changePreviewOn=false"
          @click="changePreview"
        ></i>
        <div
          class="page-number decorator"
          :class="[activePage===2 ?'active' :'']"
          @click="activePage=2"
          v-else
        >02</div>

        <!-- 中间变动的三个页标 -->
        <div class="change-numbers">
          <div
            v-for="i in [changerFirst, changerFirst+1, changerFirst+2]"
            :key="i"
            class="page-number decorator"
            :class="[activePage===i ?'active' :'']"
            @click="activePage=i"
          >{{ i | smallerTen }}</div>
        </div>

        <!-- 如果当前选中的页数不小于最大页标-3，隐藏下三页的按钮 -->
        <i
          v-if="activePage<pagesCount-3"
          class="icon-ellipsis change-next decorator"
          :class="[changeNextOn ?'icon-pagition' :'icon-ellipsis']"
          @mouseenter="changeNextOn=true"
          @mouseleave="changeNextOn=false"
          @click="changeNext"
        ></i>
        <div
          class="page-number decorator"
          :class="[activePage===pagesCount-1 ?'active' :'']"
          @click="activePage=pagesCount-1"
          v-else
        >{{ pagesCount-1 | smallerTen }}</div>

        <!-- 最后一页 -->
        <div
          class="page-number decorator"
          :class="[activePage===pagesCount ?'active' :'']"
          @click="activePage=pagesCount"
        >{{ pagesCount | smallerTen }}</div>
      </div>
    </div>
    <!-- 下一页按钮 -->
    <div class="next decorator" :class="[activePage>=pagesCount ?'unclicked' :'']" @click="toNext">
      <i class="icon-arrow"></i>
    </div>

    <!-- 跳转输入框 -->
    <div class="inputer" v-if="inputure">
      <span>跳至</span>
      <div class="inputer__inner">
        <c-input nomargin v-model="inputVal" @enter="handleInputure"></c-input>
      </div>
      <span>页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPagination",
  props: {
    // 总数据量
    count: {
      type: [Number, String],
      default: 1,
    },
    // 页码是否附带边框
    hasBorder: {
      type: Boolean,
      default: false,
    },
    // 输入跳转功能
    inputure: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      changePreviewOn: false, // 向前移动三页按钮是否被悬浮
      changeNextOn: false, // 向后移动三页按钮是否被悬浮
      activePage: 1, // 当前选中的页面
      inputVal: "", // 跳转输入框值
    };
  },
  computed: {
    // 页面总数
    pagesCount() {
      return this.count;
    },
    // 当页数过大时，中间的变动页标会根据当前选中的页标而变动
    changerFirst() {
      if (this.activePage <= 3) {
        return 3;
      } else if (this.activePage >= this.pagesCount - 3) {
        return this.pagesCount - 3 - 1;
      }
      return this.activePage - 1;
    },
  },
  methods: {
    // 上一页
    toPreview() {
      if (this.activePage > 1) {
        this.activePage--;
      }
    },
    // 下一页
    toNext() {
      if (this.activePage < this.pagesCount) {
        this.activePage++;
      }
    },
    // 上三页
    changePreview() {
      // 判断在翻页时，如果当前的页标为4、5、6之一，由于v-if会销毁元素致使无法完成mouseleave事件中的逻辑，所以需要在此执行手动切换Icon展示
      if ([4, 5, 6].includes(this.activePage)) {
        this.changePreviewOn = false;
      }

      // 翻页逻辑
      if (this.activePage > 3) {
        this.activePage -= 3;
      } else {
        this.activePage = 1;
      }
    },
    // 下三页
    changeNext() {
      // 判断在翻页时，如果当前的页标为[总页数-6, 总页数-5, 总页数-4]之一，由于v-if会销毁元素致使无法完成mouseleave事件中的逻辑，所以需要在此执行手动切换Icon展示
      if (
        [
          this.pagesCount - 6,
          this.pagesCount - 5,
          this.pagesCount - 4,
        ].includes(this.activePage)
      ) {
        this.changeNextOn = false;
      }

      // 翻页逻辑
      if (this.activePage < this.pagesCount - 3) {
        this.activePage += 3;
      } else {
        this.activePage = this.pagesCount;
      }
    },
    // 处理输入框回车翻页
    handleInputure() {
      if (
        this.inputVal === "" ||
        isNaN(Number(this.inputVal)) ||
        Array.prototype.includes.call(this.inputVal, ".") ||
        Number(this.inputVal) < 1 ||
        Number(this.inputVal > this.count)
      ) {
        // noop
      } else {
        this.activePage = Number(this.inputVal);
      }

      this.inputVal = "";
    },
  },
  watch: {
    // 监控翻页动作
    activePage(newer, older) {
      this.$emit("turn", newer);
    },
  },
  filters: {
    // 小于10的页标，前面加个 0
    smallerTen(val) {
      // 由于filter中无法访问Vue实例，故取消根据prop选择 “是否补0” 的特性
      if (val < 10) return `0${val}`;
      return val;
    },
  },
};
</script>

<style lang="scss" scoped>
$basisFont: 14px;
$adornColor: #1890ff;
$assistColor: #999999;
.pagination-container {
  display: flex;
  font-size: $basisFont;
  user-select: none;
  color: rgba(0, 0, 0, 0.726);

  .preview {
    transform: rotate(180deg);
    margin-right: 10px;
    line-height: 28px;
    i {
      font-size: $basisFont;
    }
  }

  .next {
    margin-left: 10px;
    line-height: 28px;
    i {
      font-size: $basisFont;
    }
  }

  .pagination-numbers {
    & > div {
      display: flex;
    }
    .change-preview,
    .change-next {
      line-height: 28px;
      font-size: $basisFont;
    }
  }

  .page-number {
    height: 28px;
    margin: 0 10px;
    line-height: 28px;
    transition: all 0.2s ease-in;
  }

  .change-numbers {
    display: flex;
  }

  .decorator {
    cursor: pointer;
    &:hover {
      color: $adornColor;
    }
  }

  .rotating {
    transform: rotate(180deg);
  }

  .active {
    color: $adornColor;
  }

  .unclicked {
    color: $assistColor !important;
    cursor: not-allowed;
  }
}

// 边框样式
.has-border {
  .page-number,
  .preview,
  .change-preview,
  .next,
  .change-next {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 6px;

    &:hover {
      border-color: #1890ff;
    }
  }

  .active {
    border-color: #1890ff;
  }

  .unclicked {
    &:hover {
      border: 1px solid #d9d9d9;
    }
  }
}

// 输入切换样式
.inputer {
  margin-left: 10px;
  height: 100%;

  .inputer__inner {
    display: inline-block;
    width: 55px;
    margin: 0 5px;
  }
}
</style>

