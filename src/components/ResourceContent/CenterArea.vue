<template>
  <div class="center-area">
    <area-top></area-top>
    <area-bottom></area-bottom>
  </div>
</template>
<script setup>
import AreaTop from "./Area/AreaTop/index.vue";
import AreaBottom from "./Area/AreaBottom/index.vue";
</script>
<style lang="scss" scoped>
.center-area {
  flex: 1;
  margin: 0 15px;
}
</style>
