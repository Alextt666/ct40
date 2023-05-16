<template>
  <div class="backhome" @click="backhome">
    <img src="../../assets/home.svg" alt="homeicon"  />
    <span>主页</span>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const curRouter = useRouter();
const backhome = () => {
  curRouter.push("/");
};
</script>
<style lang="scss" scoped>
.backhome {
  width: 106px;
  height: 40px;
  box-shadow: 0px 3px 91px 3px
    rgba(69.81931552290916, 100.86276054382324, 150.24600505828857, 1);
  background: #f3f3f33a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  img {
    width: 17px;
    height: 17px;
    margin-right: 12px;
  }
  span {
    width: 36px;
    height: 18px;
    font-size: 18px;
    font-family: Source Han Sans CN-Normal, Source Han Sans CN;
    font-weight: 350;
    color: #ffffff;
    line-height: 18px;
  }
}
</style>
