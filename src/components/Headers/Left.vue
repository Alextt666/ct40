<template>
  <div class="head-left">
    <img src="../../assets/logo.svg" alt="logo" />
    <div class="head-left-title">
      <div class="head-left-title-top">{{ terminalName }}智慧终端</div>
      <span>{{ currentTime }} {{ AMPM }}</span>
    </div>
  </div>
</template>
<script setup>
import moment from "moment";
import { ref, onBeforeUnmount } from "vue";
import "moment/dist/locale/zh-cn";
import { getClassRoomDetail } from "@/api/Home";
import { store } from "@/store";
let currentTime = ref(moment().format("YYYY年MM月DD日 HH:mm"));
let AMPM = +moment().format("HH") <= 12 ? "AM" : "PM";
const timer = setInterval(() => {
  currentTime.value = moment().format("YYYY年MM月DD日 HH:mm");
  AMPM = +moment().format("HH") <= 12 ? "AM" : "PM";
}, 60000);
const terminalName = ref("");

getClassRoomDetail(store.roomId).then((res) => {
  terminalName.value = res?.data?.name;
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
<style scoped lang="scss">
.head-left {
  display: flex;
  &-title {
    display: flex;
    flex-direction: column;
    margin-left: 45px;
    &-top {
      width: 500px;
      height: 35px;
      font-size: 31px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #ffffff;
      line-height: 35px;
      letter-spacing: 1px;
      margin: 15px 0;
      text-align: left;
    }
    span {
      width: 255px;
      height: 20px;
      font-size: 18px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      line-height: 20px;
      letter-spacing: 1px;
      padding-left: 2px;
    }
  }
  img {
    width: 85px;
    height: 58px;
    transform: translateY(30%);
  }
}
</style>
