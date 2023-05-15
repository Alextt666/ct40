<template>
  <div class="top-content">
    <div class="top-classy">
      <template v-for="item of classyList">
        <div class="classy-item">{{ item }}</div>
      </template>
    </div>
    <div class="top-detail">
      <div class="detail-item">
        <template v-for="(src, index) of screenList.src">
          <div class="item-each">
            <img :src="src" alt="screenicon" />
            <span>{{ `大屏${index + 1}` }}</span>
          </div>
        </template>
      </div>
      <div class="detail-item">
        <template v-for="(src, index) of cameraList.src">
          <div class="item-each">
            <img :src="src" alt="screenicon" style="width: 15px" />
            <span>{{ `摄像机${index + 1}` }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";
import { HardStatus } from "@/utils/createImageUrl.js";
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
    .detail-item {
      width: 100%;
      height: 18px;
      font-size: 14px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      line-height: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item-each {
        width: 100px;
        height: 18px;
        line-height: 18px;
        display: flex;
      }
      img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
  }
}
</style>
