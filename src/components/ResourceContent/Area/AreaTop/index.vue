<template>
  <div class="area-top">
    <template v-for="item in topList">
      <top-item :itemInfo="item" @click="emmitTopClick(item)"></top-item>
    </template>
  </div>
</template>
<script setup>
import TopItem from "./TopItem.vue";
const props = defineProps({
  topList: Array,
});
const emit = defineEmits(["onEmmitTopClick"]);
const emmitTopClick = (item) => {
  emit('onEmmitTopClick',item.subjectId);
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
