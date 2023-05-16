<template>
  <div class="enterroom">
    <div class="enterroom-grid" @click="wakeupApp">
      <template v-for="{ name, url, nick } of apps" :key="name">
        <div class="grid-item">
          <img :alt="nick" :src="url" />
          <span class="grid-item-text">{{ name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const apps = reactive(
  [
    { nick: "ck", name: "临时互动" },
    { nick: "dd", name: "钉钉" },
    { nick: "lark", name: "飞书" },
    { nick: "tc", name: "腾讯会议" },
  ].map(({ nick, name }) => {
    return { nick, name, url: `./images/${nick}.svg` };
  })
);

class Applicaiton {
  handleEnter(type) {
    this[type]();
  }
  dd() {
    console.log("dd");
  }
  ck() {
    console.log("ck");
  }
  lark() {
    window.open('lark://')
  }
  tc() {
    console.log("tc");
  }
}

const wakeupApp = function (e) {
  const action = new Applicaiton();
  const type = e.target.alt;
  if (type) {
    action.handleEnter(type);
  }
};
</script>
<style lang="scss" scoped>
.enterroom {
  color: white;
  .enterroom-grid {
    padding: 120px 140px 0 140px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-items: center;
    .grid-item {
      cursor: pointer;
      .grid-item-text {
        width: 62px;
        height: 18px;
        font-size: 15px;
        font-family: Source Han Sans CN-Medium, Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        line-height: 18px;
      }
    }
  }

  img {
    max-width: 60px;
    max-height: 60px;
    margin-bottom: 8px;
  }
}
</style>
