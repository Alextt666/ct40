<template>
  <div class="area-top">
    <template v-for="item in 4">
      <top-item></top-item>
    </template>
  </div>
</template>
<script setup>
import TopItem from "./TopItem.vue";
</script>
<style lang="scss" scoped>
.area-top {
  width: 970px;
  height: 195px;
  margin-top: 11px;
  display: flex;
  justify-content: space-around;
}
</style>
