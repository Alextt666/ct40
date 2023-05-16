<template>
  <div class="resource-content">
    <div class="left-arrow arrow">
      <img src="../../assets/left.svg" alt="lefticon" />
    </div>
    <center-area></center-area>
    <div class="right-arrow arrow">
      <img src="../../assets/right.svg" alt="righticon" />
    </div>
  </div>
</template>
<script setup>
import CenterArea from './CenterArea.vue';

</script>
<style scoped lang="scss">
.resource-content {
  width: 1100px;
  margin: 0 auto;
  // transform: translateY(-40px);
  display: flex;

  .arrow {
    cursor: pointer;
    margin-top: 40px;
    img {
      width: 50px;
      height: 115px;
    }
  }
  .right-arrow{
    transform: translateX(-30px);
  }
}
</style>
