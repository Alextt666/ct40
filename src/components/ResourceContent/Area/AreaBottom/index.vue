<template>
  <div class="area-bottom">
    <template v-for="item in 12">
      <BottomItem></BottomItem>
    </template>
  </div>
</template>
<script setup>
import BottomItem from "./BottomItem.vue";
import { watch, reactive } from "vue";
import { courseSection } from "@/api/Home.js";

const props = defineProps({
  bottomNum: Number,
});
const bottomList = reactive([]);
watch(
  () => props.bottomNum,
  (newValue, oldValue) => {
    console.log(newValue,'newValue');
    courseSection(newValue).then((res) => {
      if (res.rows.length) {
        bottomList.splice();
        res.rows.forEach((item) => {
          bottomList.push(item);
        });
      }
    });
  }
);
</script>
<style lang="scss" scoped>
.area-bottom {
  width: 1000px;
  height: 350px;
  margin-top: 11px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 13px;
  justify-content: space-around;
  overflow-y: scroll;
}
</style>
