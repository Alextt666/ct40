<template>
  <div class="center-area">
    <area-top :topList="topList" @onEmmitTopClick="handleTopClick"></area-top>
    <area-bottom :bottomNum="bottomNum"></area-bottom>
  </div>
</template>
<script setup>
import AreaTop from "./Area/AreaTop/index.vue";
import AreaBottom from "./Area/AreaBottom/index.vue";
import { reactive, ref } from "vue";
import { store } from "@/store";
const topList = reactive([]);
const bottomNum = ref(0);
const handleTopClick = (id) => {
  bottomNum.value = id;
};
try {
  store.courseList.then((res) => {
    if (res.length != 0) {
      res.forEach((item) => topList.push(item));
      bottomNum.value = res[0].subjectId;
    }
  });
} catch (error) {}
</script>
<style lang="scss" scoped>
.center-area {
  flex: 1;
  margin: 0 15px;
}
</style>
