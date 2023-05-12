<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <!-- loop可循环轮播，autoplay可自动播放 -->
    <swiper-slide>
      <Dashbord></Dashbord>
    </swiper-slide>
    <swiper-slide>
      <Enterroom></Enterroom>
    </swiper-slide>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
// 引入swiper组件
import { Swiper, SwiperSlide } from "swiper/vue";
import Dashbord from "@/views/Dashbord.vue";
import Enterroom from "@/views/Enterroom.vue";
// 引入swiper样式（按需导入）
import "swiper/css";
import "swiper/css/pagination"; // 轮播图底面的小圆点
// 引入swiper核心和所需模块
import { Autoplay, Pagination, Scrollbar } from "swiper";
// 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Scrollbar];
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
<style>
.swiper {
  width: 100%;
  height: 95%;
}
</style>
