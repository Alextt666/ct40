<template>
  <div class="detail-item">
    <template v-if="!onlyText">
      <template v-for="(src, index) of detailRenderList">
        <div class="item-each">
          <img :src="src" alt="screenicon" />
          <span> <span>大屏</span>{{ index + 1 }}</span>
        </div>
      </template>
    </template>
    <template v-else>
      <template v-for="item of detailRenderList">
        <div class="item-each">
          <span>{{ item }}</span>
        </div>
      </template>
    </template>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  list: Array,
  onlyText: Boolean,
});
const detailRenderList = props.list || [];
</script>
<style lang="scss" scoped>
.detail-item {
  width: 100%;
  height: 18px;
  font-size: 14px;
  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  line-height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item-each {
    width: 100px;
    height: 18px;
    line-height: 18px;
    display: flex;
  }
  img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
}
</style>
