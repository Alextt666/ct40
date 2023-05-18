<template>
  <div class="area-top">
    <template v-if="isChange">
      <template v-for="item in curList" :key="item.id">
        <top-item :itemInfo="item" @click="emmitTopClick(item)"></top-item>
      </template>
    </template>
    <template v-else>
      <template v-for="item in curList" :key="item.id">
        <top-item :itemInfo="item" @click="emmitTopClick(item)"></top-item>
      </template>
    </template>
  </div>
</template>
<script setup>
import { watch, ref, reactive } from "vue";
import TopItem from "./TopItem.vue";
import { store } from "@/store";
import _ from "lodash";

const props = defineProps({
  topList: Array,
  pageNum: Number,
});
let curList = reactive([]);
let isChange = ref(false);
let allList = reactive([]);
watch(
  () => props.pageNum,
  (newone) => {
    curList = allList[newone]
  }
);
watch(
  () => props.topList,
  (newValue, oldValue) => {
    curList = newValue;
  },
  { immediate: true, deep: true }
);
watch(
  () => store.subCourseList,
  (newValue, oldValue) => {
    isChange.value = !isChange.value;
    allList = _.chunk(newValue, 4);
    curList = allList[0];
  },
  { deep: true }
);

const emit = defineEmits(["onEmmitTopClick"]);
const emmitTopClick = (item) => {
  emit("onEmmitTopClick", item.subjectId);
};
</script>
<style lang="scss" scoped>
.area-top {
  width: 970px;
  margin-top: 11px;
  display: flex;
  justify-content: flex-start;
  transform: translateX(-10px);
}
</style>
