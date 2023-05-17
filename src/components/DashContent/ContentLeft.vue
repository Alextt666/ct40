<template>
  <div class="content-left">
    <div class="today-title">今日课程</div>
    <have-class v-if="isClassToday" :todayList="todayList" />
    <NoClass v-else />
  </div>
</template>
<script setup>
import NoClass from "./LeftTop/NoClass.vue";
import HaveClass from "./LeftTop/HaveClass.vue";
import { store } from "@/store";
import { getTodaySchedule } from "@/api/Home.js";
import { ref, reactive } from "vue";
let isClassToday = ref(false);
let todayList = reactive([]);
getTodaySchedule(store.roomId).then((res) => {
  isClassToday.value = res?.data.length != 0;
  if (isClassToday.value) {
    res.data.forEach((item) => {
      todayList.push(item);
    });
  }
});
</script>
<style lang="scss" scoped>
.content-left {
  width: 701px;
  height: 461px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 8px 9px 19px 0px
    rgba(
      30.968315452337265,
      51.18537001311779,
      132.05356925725937,
      0.3019607961177826
    );
  border-radius: 15px 15px 15px 15px;
  opacity: 1;
  .today-title {
    width: 84px;
    height: 31px;
    font-size: 21px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: 700;
    color: #ffffff;
    line-height: 31px;
    margin: 22px 0 22px 44px;
  }
}
</style>
