<template>
  <div class="head-right">
    <template v-for="{name,icon,url} of btns">
    <div class="icon-item">
      <img :src="url" :alt="icon" />
      <span>{{ name }}</span>
    </div>
    </template>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const btns = reactive(
  [
    { name: "远程协助", icon: "sunlight" },
    { name: "重启", icon: "restart" },
    { name: "关机", icon: "shutdown" },
  ].map(({ name, icon }) => {
    return {
      name,
      icon,
      url: `./images/btns/${icon}.png`,
    };
  })
);
</script>
<style lang="scss" scoped>
.head-right {
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-item{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
  img {
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  }
  span {
    width: 56px;
    height: 17px;
    font-size: 14px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    line-height: 17px;
  }
}
</style>
