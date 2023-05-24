<template>
  <div class="resource-content">
    <div class="left-arrow arrow" @click="prev">
      <img src="../../assets/left.svg" alt="lefticon" />
    </div>
    <center-area
      :pageNum="pageNum"
      @nomore="onEmitNoMore"
      @resetPage="onEmitReset"
    ></center-area>
    <div class="right-arrow arrow" @click="next">
      <img src="../../assets/right.svg" alt="righticon" />
    </div>
  </div>
</template>
<script setup>
import CenterArea from "./CenterArea.vue";
import { ref } from "vue";
const pageNum = ref(0);
const onEmitNoMore = (num) => {
  pageNum.value = num;
};
const onEmitReset = () => {
  pageNum.value = 0;
};
const next = () => {
  pageNum.value++;
};
const prev = () => {
  if (pageNum.value == 0) {
    ElMessage.error("没有更多了");
    return;
  }
  pageNum.value--;
};
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
    height: 115px;

    img {
      width: 50px;
      height: 115px;
    }
  }
  .right-arrow {
    transform: translateX(-30px);
  }
}
</style>
