<template>
  <div class="dashbord-content">
    <content-left></content-left>
    <content-right></content-right>
  </div>
</template>
<script setup>
import ContentLeft from "./ContentLeft.vue";
import ContentRight from "./ContentRight.vue";
</script>
<style lang="scss" scoped>
.dashbord-content {
  margin: 0 auto;
  width: 1050px;
  height: 460px;
  display: flex;
  justify-content: space-between;
}
</style>
