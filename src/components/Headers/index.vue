<template>
  <div class="dashbord-head">
    <head-left></head-left>
    <head-right></head-right>
  </div>
</template>
<script setup>
import HeadLeft from './Left.vue';
import HeadRight from './Right.vue';
</script>
<style lang="scss" scoped>
.dashbord-head {
  width: 100%;
  box-sizing: border-box;
  height: 180px;
  display: flex;
  justify-content: space-between;
  padding: 45px 75px;

}
</style>
