<template>
  <div class="center-area">
    <!-- <area-top
      :propTopList="topList"
      :pageNum="pageNum"
      @onEmmitTopClick="handleTopClick"
    ></area-top> -->
    <div class="area-top">
      <top-item
        v-for="item in topList"
        :key="item.id"
        :itemInfo="item"
        @click="handleTopClick(item)"
      ></top-item>
    </div>

    <area-bottom :bottomNum="bottomNum"></area-bottom>
  </div>
</template>
<script setup>
import TopItem from "./Area/AreaTop/TopItem.vue";
import AreaBottom from "./Area/AreaBottom/index.vue";
import { reactive, ref, watch,getCurrentInstance } from "vue";
import { store } from "@/store";
import _ from "lodash";
const props = defineProps({
  pageNum: Number,
});
let topList = reactive([]);
let allList = reactive([]);
let curList = reactive([]);
const bottomNum = ref(0);
const chunkLength = ref(0);
const handleTopClick = (id) => {
  bottomNum.value = id;
};
const emits = defineEmits(["nomore", "resetPage"]);

const instance = getCurrentInstance();
watch(
  () => props.pageNum,
  (newValue, oldValue) => {
    if (newValue > chunkLength.value - 1) {
      ElMessage.error("没有更多了");
      emits("nomore", oldValue);
      return;
    }
    topList = _.chunk(curList, 4)[newValue];
  }
);

watch(
  () => store.currentSubjectId,
  (newValue, oldValue) => {
    emits("resetPage");
    curList = allList.filter((item) => item.subjectId == newValue);
    chunkLength.value = _.chunk(curList, 4).length;
    topList = _.chunk(curList, 4)[0];
    instance.ctx.$forceUpdate()
  }
);
watch(
  () => store.currentGradeId,
  (newValue, oldValue) => {
    emits("resetPage");
    curList = allList.filter((item) => item.grade == newValue);
    chunkLength.value = _.chunk(curList, 4).length;
    topList = _.chunk(curList, 4)[0];
    instance.ctx.$forceUpdate()
  }
);



try {
  store.courseList.then((res) => {
    if (res.length != 0) {
      if (res.length > 4) {
        res.forEach((item) => allList.push(item));
        chunkLength.value = _.chunk(allList, 4).length;
        curList = allList;
        topList.splice(0, topList.length);
        topList = _.chunk(allList, 4)[0];
      } else {
        res.forEach((item) => topList.push(item));
      }
      bottomNum.value = res[0].subjectId;
    }
    return;
  });
} catch (error) {}
</script>
<style lang="scss" scoped>
.center-area {
  flex: 1;
  margin: 0 15px;
}
.area-top {
  width: 970px;
  margin-top: 11px;
  display: flex;
  justify-content: flex-start;
  transform: translateX(-10px);
}
</style>
