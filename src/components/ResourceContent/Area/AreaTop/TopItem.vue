<template>
  <div class="top-item">
    <img
      :src="itemInfo.cover"
      alt="covericon"
    />
    <div class="top-item-text">{{ itemInfo.subjectName }} · {{ itemInfo.courseName }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  itemInfo:Object
})
</script>
<style lang="scss" scoped>
.top-item {
  width: 230px;
  height: 194px;
  background: #fffefe11;
  border-radius: 8px 8px 8px 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
  img {
    width: 203px;
    height: 128px;
    border-radius: 9px 9px 9px 9px;
    opacity: 1;
    margin-bottom: 10px;
  }
  .top-item-text {
    width: 212px;
    height: 34px;
    font-size: 14px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    line-height: 20px;
  }
}
</style>
