<template>
  <div class="resource-nav">
    <back-home></back-home>
    <div class="select-area">
      <my-select placeholder="请选择学科" type="Subject"></my-select>
      <my-select placeholder="请选择年级" type="Grade"></my-select>
    </div>
  </div>
</template>
<script setup>
import MySelect from "@/components/MyComponents/Myselect.vue";
import BackHome from "@/components/MyComponents/BackHomeBtn.vue";
</script>
<style lang="scss" scoped>
.resource-nav {
  width: 970px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select-area {
  width: 530px;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
</style>
