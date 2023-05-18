<template>
  <div class="record">
    <div class="record-wrap">
      <div class="record-nav">
        <div class="record-title">选择录课</div>
        <img src="../assets/close.svg" alt="closeicon" @click="backHome" />
      </div>
      <div class="record-select">
        <el-select
          v-model="gradeValue"
          class="m-2"
          placeholder="请选择年级"
          size="large"
        >
          <el-option
            v-for="item in gradeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="subjectValue"
          class="m-2"
          placeholder="请选择科目"
          size="large"
        >
          <el-option
            v-for="item in subjectList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="teacherValue"
          class="m-2"
          placeholder="请选择教师"
          size="large"
        >
          <el-option
            v-for="item in teacherList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-input placeholder="请输入课程名称" v-model="input"></el-input>

        <button class="record-btn" @click="confirmSubmit">确 认</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { postCourseRecording,getEnterRoomUrl } from "@/api/Home.js";
import { store } from "@/store";
const curRouter = useRouter();
const backHome = () => curRouter.push("/");
const input = ref("");
let gradeValue = ref("");
let subjectValue = ref("");
let teacherValue = ref("");
const subjectList = reactive([]);
const gradeList = reactive([]);
const teacherList = reactive([]);
const pushInWay = (res, target) => {
  res.forEach((item) => target.push(item));
};
try {
  store.getSubjectInOption().then((res) => pushInWay(res, subjectList));
  store.getGradeInOption().then((res) => pushInWay(res, gradeList));
  store
    .getTeacherInOption(store.roomId)
    .then((res) => pushInWay(res, teacherList));
} catch (error) {
  ElMessage.error("返回结果有误! 错误信息" + error);
}

const confirmSubmit = () => {
  const validate =
    input.value && gradeValue.value && subjectValue.value && teacherValue.value
      ? true
      : false;
  if (validate) {
    postCourseRecording({
      classroomId: store.roomId,
      gradeId: gradeValue.value,
      subjectId: subjectValue.value,
      teacherId: teacherValue.value,
      courseName: input.value,
    })
      .then((res) => {
        if (res.code == 500) {
          ElMessage.error("Error! 正常调用接口，但返回有误 msg:" + res.msg);
        }
        ElMessage.success('排课成功');
        return res
      }).then(res=>{
        if(res?.data?.id){
          return getEnterRoomUrl(res.data.id)
        }
      }).then(res=>{
        const url = res.enterRoomUrl;
        curRouter.push('/')
        window.open(url);
      })
      .catch((err) => {
        ElMessage.error("Error!" + err);
      });
  } else {
    ElMessage.error("排课信息不能为空! 请检查");
  }
};
</script>
<style lang="scss" scoped>
.record {
  padding-top: 130px;
  .record-wrap {
    width: 663px;
    height: 533px;
    padding: 20px 40px;
    box-sizing: border-box;
    background: #fffefe11;
    color: white;
    border-radius: 11px 11px 11px 11px;
    margin: 0 auto;

    .record-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .record-title {
        width: 100px;
        height: 32px;
        font-size: 23px;
        font-family: Source Han Sans CN-Medium, Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        line-height: 32px;
      }
      img {
        width: 19px;
        height: 19px;
        cursor: pointer;
      }
    }
    .record-select {
      margin-top: 40px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .record-btn {
        width: 133px;
        height: 53px;
        outline: none;
        border-radius: 8px 8px 8px 8px;
        background: #fffefe11;
        color: white;
        border: none;
        font-size: 21px;
        font-weight: 700;
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
}

:deep(.el-input) {
  width: 564px;
  height: 53px;
}
:deep(.el-input__wrapper) {
  border-radius: 6px 6px 6px 6px;
  //   background: #f3f3f33a;
  background: transparent;
  border: 1px solid #f3f3f33a;
  box-shadow: none;
}
:deep(::placeholder) {
  color: #c4d6ffff;
}

:deep(.el-input__inner) {
  color: white;
}
</style>
