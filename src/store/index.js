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
  currentSubjectId: 0,
  currentGradeId: 0,
  commitCourseList(params) {
    const { gradeId, subjectId } = params;
    if (subjectId) this.currentSubjectId = subjectId;
    if (gradeId) this.currentGradeId = gradeId;
  },
});
