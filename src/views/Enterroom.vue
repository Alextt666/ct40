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
import { store } from "@/store";
import { getEnterMeetingUrl } from "@/api/Home.js";

const talkCloudId = store.talkCloudId;
const name = store.username;
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
  constructor(talkCloudId, name) {
    (this.talkCloudId = talkCloudId), (this.joinClassRoomName = name);
  }
  handleEnter(type) {
    this[type]();
  }
  dd() {
    window.open("dingtalk://");
  }
  ck() {
    getEnterMeetingUrl({
      talkCloudId: this.talkCloudId,
      userType: 0,
      joinClassRoomName: this.joinClassRoomName,
      clientType: 0,
    }).then((res) => {
      window.location.href = res.data.enterRoomUrl;
    });
  }
  lark() {
    window.open("lark://");
  }
  tc() {
    console.log("wemeet://");
  }
}

const wakeupApp = function (e) {
  const action = new Applicaiton(talkCloudId, name);
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
