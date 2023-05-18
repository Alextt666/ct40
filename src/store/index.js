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
  subCourseList:[],
  commitCourseList(params) {
    this.courseList.then(res=>{
      console.log(this.courseList,'courselist')
    })
  },
});
