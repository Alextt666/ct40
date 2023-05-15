<template>
  <div class="content-right">
    <right-top></right-top>
    <right-bottom></right-bottom>
  </div>
</template>
<script setup>
import RightBottom from "./RightBottom.vue";
import RightTop from "./RightTop/RightTop.vue";
</script>
<style lang="scss" scoped>
.content-right {
  width: 329px;
}
</style>
