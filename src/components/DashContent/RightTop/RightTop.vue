<template>
  <div class="content-right-top">
    <div class="top-title">{{ TOPTITLE }}</div>
    <top-content></top-content>
  </div>
</template>
<script setup>
import { ref } from "vue";
import TopContent from "./TopContent.vue";
const TOPTITLE = ref("系统状态");
</script>
<style lang="scss" scoped>
.content-right-top {
  height: 287px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px 15px 15px 15px;
  opacity: 1;
  margin-bottom: 15px;
  box-sizing: border-box;
  padding: 17px 0 0 27px;
  .top-title {
    width: 72px;
    height: 26px;
    font-size: 18px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: 700;
    color: #ffffff;
    line-height: 26px;
  }
}
</style>
