<template>
  <div class="area-top">
    <template v-for="item in curList" :key="item.id">
      <top-item :itemInfo="item" @click="emmitTopClick(item)"></top-item>
    </template>
  </div>
</template>
<script setup>
import { reactive, watchEffect,isReactive } from "vue";
import TopItem from "./TopItem.vue";
import _ from "lodash";

const props = defineProps({
  propTopList: Object,
});
let curList = reactive([]);
watchEffect(() => {
  curList = props.propTopList;
  console.log('change',curList);
});

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
