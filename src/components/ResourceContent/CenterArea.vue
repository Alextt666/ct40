<template>
  <div class="center-area">
    <area-top
      :topList="topList"
      :pageNum = 'pageNum'
      @onEmmitTopClick="handleTopClick"
    ></area-top>
    <area-bottom :bottomNum="bottomNum"></area-bottom>
  </div>
</template>
<script setup>
import AreaTop from "./Area/AreaTop/index.vue";
import AreaBottom from "./Area/AreaBottom/index.vue";
import { reactive, ref, watch } from "vue";
import { store } from "@/store";
import _ from "lodash";
const props = defineProps({
  pageNum: Number,
});
let topList = reactive([]);
let allList = reactive([]);
const bottomNum = ref(0);
const chunkLength = ref(0);
const handleTopClick = (id) => {
  bottomNum.value = id;
};
const emits = defineEmits(["nomore"]);
watch(
  () => props.pageNum,
  (newValue, oldValue) => {
    if (newValue > chunkLength.value - 1) {
      ElMessage.error("没有更多了");
      emits("nomore", oldValue);
      return;
    }
    topList = _.chunk(allList, 4)[newValue];
  }
);

watch(
  () => store.subCourseList,
  (newValue, oldValue) => {
    if (newValue.length != 0) {
      allList.splice(0, allList.length);
      allList = newValue;
      if (allList.length > 4) {
        chunkLength.value = _.chunk(allList, 4).length;
      } else if (allList.length <= 4) {
        chunkLength.value = 1;
      }
      console.log(allList,'all');
      console.log(chunkLength,'length');
    }
  },
  { deep: true }
);

try {
  store.courseList.then((res) => {
    if (res.length != 0) {
      if (res.length > 4) {
        res.forEach((item) => allList.push(item));
        chunkLength.value = _.chunk(allList, 4).length;
        topList.splice(0, topList.length);
        topList = _.chunk(allList, 4)[0];
      } else {
        res.forEach((item) => topList.push(item));
      }
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
