<template>
  <div class="bottom-item">
    <div class="item-title">{{ itemIndex + 1 }}、{{ itemInfo.name }}</div>
    <div class="item-wrap">
      <div class="item-link">
        <a target="_blank" :href="itemInfo.teachingPlan"
          >导学案：{{ itemInfo.teachingPlanName }}</a
        >
      </div>
      <div class="item-link">
        <a :href="itemInfo.fileUrl" target="_blank" style="display: block"
          >课件：{{ itemInfo.filename }}</a
        >
      </div>
      <div class="item-link">
        <a :href="itemInfo.taskDetailList[0].task"
          >作业：{{ itemInfo.taskDetailList[0].taskName }}</a
        >
      </div>
      <div class="item-link">
        <a :href="itemInfo.microCourseDetailList[0].task"
          >微课：{{ itemInfo.microCourseDetailList[0].taskName }}</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  itemInfo: Object,
  itemIndex: Number,
});
</script>
<style lang="scss" scoped>
.bottom-item {
  width: 309px;
  height: 165px;
  background: #fffefe11;
  border-radius: 8px 8px 8px 8px;
  padding: 13px 0 11px 20px;
  box-sizing: border-box;
  .item-title {
    width: 161px;
    height: 30px;
    font-size: 15px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    line-height: 15px;
  }
  .item-wrap {
    height: 100px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .item-link {
      width: 255px;
      height: 17px;
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      line-height: 15px;
      a {
        // display: block;
        color: #8cdaff;
      }
    }
  }
}
</style>
