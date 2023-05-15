<template>
  <div class="hasclass">
    <div class="wrapper">
      <template v-for="item in 6">
        <div class="hasclass-item">
          <div class="item-left">
            <div class="left-top">09:45 - 10:30</div>
            <div class="left-bottom">
              <div class="left-bottom-subject">美术</div>
              <div class="left-bottom-classname">五（1）班</div>
            </div>
          </div>
          <div class="item-medium">
            <div class="medium-top">张树根/牛爱花</div>
            <div class="medium-bottom">三个课堂技术解决方案解决</div>
          </div>
          <div class="item-right">
            <img src="./go.svg" alt="icon" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>


</script>
<style lang="scss" scoped>
.hasclass {
  height: 80%;
  overflow-y: scroll;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .hasclass-item {
      width: 620px;
      height: 126px;
      background: rgba(255, 255, 255, 0.01);
      border-radius: 0px 0px 0px 0px;
      border-top: 1px solid #ffffff25;
      opacity: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item-left {
        width: 200px;
        display: flex;
        flex-direction: column;
        .left-top {
          height: 23px;
          font-size: 27px;
          font-family: Source Han Sans CN-Medium, Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 23px;
          text-align: left;
        }
        .left-bottom {
          display: flex;
          justify-content: flex-start;
          margin-top: 23px;
          .left-bottom-subject {
            width: 41px;
            height: 23px;
            font-size: 20px;
            font-family: Source Han Sans CN-Medium, Source Han Sans CN;
            font-weight: 500;
            color: #ffffff;
            line-height: 23px;
            margin-right: 50px;
          }
          .left-bottom-classname {
            width: 93px;
            height: 23px;
            font-size: 20px;
            font-family: Source Han Sans CN-Medium, Source Han Sans CN;
            font-weight: 500;
            color: #ffffff;
            line-height: 23px;
          }
        }
      }
      .item-medium {
        display: flex;
        flex-direction: column;
        .medium-top {
          width: 150px;
          height: 23px;
        }
        .medium-bottom {
          margin-top: 23px;
          width: 245px;
          height: 23px;
        }
      }
      .item-right {
        width: 59px;
        height: 39px;
        background: #f3f3f33a;
        border-radius: 6px 6px 6px 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
          width: 19px;
          height: 14px;
        }
      }
    }
  }
}
</style>
