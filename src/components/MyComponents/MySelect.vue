<template>
  <el-select
    v-model="value"
    class="m-2"
    :placeholder="placeholder"
    size="large"
    @change="handleChange(type)"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script setup>
import { store } from "@/store";
import { ref, reactive } from "vue";

const props = defineProps({
  placeholder: String,
  type: String,
});

const options = reactive([]);
let value = ref("");
store[`get${props.type}InOption`]().then((res) =>
  res.forEach((item) => options.push(item))
);
const handleChange = (type) => {
  // console.log(type);
  if (type == "Subject") {
    store.commitCourseList({ subjectId: value.value });
  }
  if(type == 'Grade'){
    store.commitCourseList({ gradeId: value.value });
  }
};
</script>
<style lang="scss" scoped>
:deep(.el-input) {
  width: 248px;
  height: 40px;
  color: white;
}
:deep(.el-input__wrapper) {
  border-radius: 6px 6px 6px 6px;
  //   background: #f3f3f33a;
  background: transparent;
  border: 1px solid #f3f3f33a;
  box-shadow: none;
}
:deep(::placeholder) {
  color: white;
}

:deep(.el-input__inner) {
  color: white;
}
</style>
