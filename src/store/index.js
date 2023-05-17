import { reactive } from "vue";
import { getSubjectInOption, getGradeInOption,getTeacherInOption } from "@/utils/factoryFun.js";
const talkCloudId = window.localStorage.getItem("talkCloudId") || 0;
const roomId = window.localStorage.getItem("roomId") || 178;
// 公用数据
export const store = reactive({
  username: "alex",
  talkCloudId,
  roomId,
  getGradeInOption,
  getSubjectInOption,
  getTeacherInOption
});
