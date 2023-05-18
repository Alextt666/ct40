import { reactive } from "vue";
import {
  getSubjectInOption,
  getSuperCourse,
  getGradeInOption,
  getTeacherInOption,
} from "@/utils/factoryFun.js";
const talkCloudId = window.localStorage.getItem("talkCloudId") || 0;
const roomId = window.localStorage.getItem("roomId") || 66;
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
  subCourseList: [],
  commitCourseList(params) {
    getSuperCourse(params).then((res) => {
      console.log(res,'res');
      if (this.subCourseList.length != 0 && res.length != 0) {
        // this.subCourseList.splice(0, this.subCourseList.length);
        // res.forEach((item) => this.subCourseList.push(item));
        this.subCourseList = res;
      }
      if (res.length != 0) {
        res.forEach((item) => this.subCourseList.push(item));
      }
    });
  },
});
