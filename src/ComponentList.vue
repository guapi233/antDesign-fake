<template>
  <div class="componet-list">
    <p
      v-for="component in componentList"
      :key="component"
      :to="{ name: component }"
      class="component-link"
    >
      {{ component }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentList: [
        "Button",
        "Input",
        "Radio",
        "Checkbox",
        "Switch",
        "Form",
        "Pagination",
        "Notice",
        "Tree",
        "Collapse",
        "Carousel",
      ],
    };
  },
};
</script>

<style lang="scss">
.component-link {
  margin-right: 10px;
}
</style>