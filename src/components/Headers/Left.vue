<template>
  <div class="head-left">
    <img src="../../assets/logo.png" alt="logo" />
    <div class="head-left-title">
      <div class="head-left-title-top">连平实验小学智慧终端</div>
      <span>2022年3月26日 12:00 AM</span>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.head-left {
  display: flex;
  &-title {
    display: flex;
    flex-direction: column;
    margin-left: 45px;
    &-top {
      width: 324px;
      height: 35px;
      font-size: 31px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: 700;
      color: #ffffff;
      line-height: 35px;
      letter-spacing: 1px;
      margin: 15px 0;
    }
    span {
      width: 235px;
      height: 20px;
      font-size: 18px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
      color: #ffffff;
      line-height: 20px;
      letter-spacing: 1px;
      padding-left: 2px;
    }
  }
  img {
    width: 85px;
    height: 58px;
    transform: translateY(30%);
  }
}
</style>
