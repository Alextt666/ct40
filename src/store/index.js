import { reactive } from "vue";
const talkCloudId = window.localStorage.getItem("talkCloudId") || 0;
const roomId = window.localStorage.getItem("roomId") || 178;
const grades = [
  { label: "一年级", value: 1 },
  { label: "二年级", value: 2 },
  { label: "三年级", value: 3 },
  { label: "四年级", value: 4 },
  { label: "五年级", value: 5 },
  { label: "六年级", value: 6 },
];
export const store = reactive({
  username: "alex",
  talkCloudId,
  roomId,
  grades
});
