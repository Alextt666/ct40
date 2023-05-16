<template>
  <div class="bottom-wrapper" @click="handleGoto">
    <div class="content-right-bottom" data-type="local">
      <p>本地录课</p>
      <img src="../../assets/cemera.svg" alt="local" class="img1" />
    </div>
    <div class="content-right-bottom" data-type="resource">
      <p>资源中心</p>
      <img src="../../assets/file.svg" alt="resource" class="img2" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const currentRouter = useRouter();
const handleGoto = function (e) {
  if (e.target.nodeName === "DIV") {
    currentRouter.push(`${e.target.dataset.type}`);
  } else if (e.target.nodeName === "IMG") {
    currentRouter.push(`${e.target.alt}`);
  } else {
    return;
  }
};
</script>
<style lang="scss" scoped>
.bottom-wrapper {
  display: flex;
  justify-content: space-between;
  .content-right-bottom {
    width: 158px;
    height: 158px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 5px 5px 19px 0px
      rgba(
        30.968315452337265,
        51.18537001311779,
        132.05356925725937,
        0.3019607961177826
      );
    border-radius: 15px 15px 15px 15px;
    opacity: 1;
    border: 2px solid rgba(255, 255, 255, 0);
    cursor: pointer;
    .img1 {
      width: 47px;
      height: 30px;
      margin: 0 auto;
    }
    .img2 {
      width: 37px;
      height: 36px;
      margin: 0 auto;
    }
  }
}
</style>
