<template>
  <div class="resource-nav">
    <back-home></back-home>
    <my-select></my-select>
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
</style>
