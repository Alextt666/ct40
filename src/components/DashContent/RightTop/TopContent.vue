<template>
  <div class="top-content">
    <div class="top-classy">
      <template v-for="item of classyList">
        <div class="classy-item">{{ item }}</div>
      </template>
    </div>
    <div class="top-detail">
      <DetailItem :list="screenList.src" :only-text="false" />
      <DetailItem :list="cameraList.src" :only-text="false" />
      <DetailItem :list="['已用16.6G', '剩余12.9G']" :only-text="true" />
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";
import { HardStatus } from "@/utils/createImageUrl.js";
import DetailItem from "./DetailItem.vue";
const classyList = reactive([
  "显示大屏：",
  "摄像机:",
  "网络状态:",
  "磁盘存储:",
  "当前版本:",
]);
const screenStatus = new HardStatus("screen").createStatus();
const cameraStatus = new HardStatus("camera").createStatus();
const screenList = computed(() => {
  return screenStatus.filter((item) => item.status == 0)[0];
});
const cameraList = computed(() => {
  return cameraStatus.filter((item) => item.status == 1)[0];
});
</script>
<style lang="scss" scoped>
.top-content {
  height: 100%;
  display: flex;
  .top-classy {
    height: 82%;
    width: 75px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    .classy-item {
      height: 18px;
      font-size: 14px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      line-height: 20px;
    }
  }
  .top-detail {
    height: 82%;
    margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
}
</style>
