import { reactive } from "vue";
import {
  getSubjectInOption,
  getSuperCourse,
  getGradeInOption,
  getTeacherInOption,
} from "@/utils/factoryFun.js";
const talkCloudId = window.localStorage.getItem("talkCloudId") || 0;
const roomId = window.localStorage.getItem("roomId") || 178;
const courseList = getSuperCourse();

// 公用数据
export const store = reactive({
  username: "alex",
  talkCloudId,
  roomId,
  getGradeInOption,
  getSubjectInOption,
  getTeacherInOption,
  courseList,
  commitCourseList(params) {
    this.courseList.splice();
    getSuperCourse(params).then((res) => {
      res.forEach((item) => {
        this.courseList.push(item);
      });
    });
  },
});
