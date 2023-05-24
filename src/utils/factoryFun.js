import { getSubjectList, getTeacherList, superCourse } from "@/api/Home.js";

// 加工函数
const getSubjectInOption = () => {
  return new Promise((resolve) => {
    getSubjectList().then((res) => {
      if (res.rows.length != 0) {
        const options = res.rows.map((item) => {
          return { value: item.subjectId, label: item.subjectName };
        });
        resolve(options);
      } else {
        resolve([]);
      }
    });
  });
};

// 年级
const getGradeInOption = () => {
  const chars = ["一", "二", "三", "四", "五", "六"];
  return new Promise((resolve) => {
    const options = chars.map((item, index) => {
      return { label: `${item}年级`, value: index + 1 };
    });
    resolve(options);
  });
};

//老师
const getTeacherInOption = (roomId) => {
  return new Promise((resolve) => {
    getTeacherList(roomId).then((res) => {
      if (res.rows.length != 0) {
        const options = res.rows.map((item) => {
          return { value: item.teacherId, label: item.teacherName };
        });
        resolve(options);
      } else {
        resolve([]);
      }
    });
  });
};

// 课程
const getSuperCourse = (params) => {
  return new Promise((resolve) => {
    superCourse(params || {}).then((res) => {
      if (res.rows.length != 0) {
        const options = res.rows.map((item) => {
          return {
            subjectId: item.subjectId,
            subjectName: item.subjectName,
            courseName: item.name,
            cover: item.cover,
            grade:item.grade
          };
        });
        resolve(options);
      } else {
        resolve([]);
      }
    });
  });
};

export { getSubjectInOption, getGradeInOption, getTeacherInOption,getSuperCourse };
