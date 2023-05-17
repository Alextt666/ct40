import request from "./common";

// 获取互动课堂首页数据
export function getHomeInfo(params) {
  return request(`/api/sevenDayTimetable/${params}`);
}

// 获取当天课表
export function getTodaySchedule(params) {
  return request(`/api/todayTimetable/${params}`);
}

// 排课接口
export function postCourseRecording(data) {
  return request({
    url: `/api/localCourseRecording`,
    method: "post",
    data,
  });
}
// 获取老师列表
export function getTeacherList(params) {
  return request(`/api/teacherList/${params}`);
}
// 获取科目列表
export function getSubjectList() {
  return request(`/api/subject/list`);
}
// 获取进入教室链接
export function getEnterRoomUrl(params) {
  return request(`/api/getEnterRoomUrlByTimetable/${params}`);
}
// 获取本地录课比首页数据
export function getLocalInfo(params) {
  return request(`/api/localClassRecording/${params}`);
}
// 获取房间详情
export function getClassRoomDetail(params) {
  return request(`/api/getClassRoomDetail/${params}`);
}
// 获取小节列表
export function courseSection(params) {
  return request(`/api/courseSection/list/${params}`);
}
// 获取课件列表
export function superCourse(params) {
  return request({ url: `/api/superCourse/list`, method: "get", params });
}
export function getEnterMeetingUrl(data) {
  return request({ url: `/api/getEnterMeetingUrl`, method: "post", data });
}
