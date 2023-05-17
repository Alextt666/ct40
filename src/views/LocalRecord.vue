<template>
  <div class="record">
    <div class="record-wrap">
      <div class="record-nav">
        <div class="record-title">选择录课</div>
        <img src="../assets/close.svg" alt="closeicon" @click="backHome" />
      </div>
      <div class="record-select">
        <el-select
          v-model="value"
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
          v-model="value"
          class="m-2"
          placeholder="请选择科目"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select
          v-model="value"
          class="m-2"
          placeholder="请选择教师"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-input placeholder="请输入课程名称" v-model="input"></el-input>

        <button class="record-btn">确 认</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { store } from "@/store";
const curRouter = useRouter();
const backHome = () => curRouter.push("/");
const input = ref("");
const gradeList = store.grades;
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
