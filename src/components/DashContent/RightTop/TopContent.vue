<template>
  <div class="top-content">
    <div class="top-classy">
      <template v-for="item of classyList">
        <div class="classy-item">{{ item }}</div>
      </template>
    </div>
    <div class="top-detail">
      <DetailItem :list="screenList" :only-text="false">大屏</DetailItem>
      <DetailItem :list="cameraList" :only-text="false" point-width="true"
        >摄像机</DetailItem
      >
      <DetailItem :list="networkList" :only-text="false" small-width="true"
        >已连接</DetailItem
      >
      <DetailItem :list="spaceList" :only-text="true" />
      <DetailItem :list="['当前已是最新版本']" :only-text="true" />
    </div>
  </div>
</template>
<script setup>
import { reactive, computed, toRefs } from "vue";
import { HardStatus } from "@/utils/createImageUrl.js";
import { getHardDeviceInfo } from "@/utils/getHardDeviceInfo.js";
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
const networkStatus = new HardStatus("net").createSingleStatus();
const { diskUsed, diskFree,cameraNum,screenNum } = toRefs(reactive(getHardDeviceInfo()));
// 屏幕检测
const screenList = computed(() => {
  return screenStatus.filter((item) => item.status == screenNum.value)[0]?.src || [];
});
// 相机检测
const cameraList = computed(() => {
  return cameraStatus.filter((item) => item.status == cameraNum.value)[0]?.src || [];
});
// 网络检测
const networkList = computed(() => {
  return networkStatus.filter((item) => item.status == 1)[0]?.src || [];
});
// 空间检测
const spaceList = computed(() => {
  return [`已用${diskUsed.value}G`, `剩余${diskFree.value}G`];
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
