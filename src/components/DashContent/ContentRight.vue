<template>
  <div class="content-right">
    <div class="content-right-top">DashContent-right</div>
    <div class="bottom-wrapper">
      <div class="content-right-bottom">right-bottom1</div>
      <div class="content-right-bottom">right-bottom2</div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.content-right {
  width: 329px;
  .content-right-top {
    height: 287px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 15px 15px 15px 15px;
    opacity: 1;
    margin-bottom: 15px;
  }
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
    }
  }
}
</style>
