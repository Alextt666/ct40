<template>

<el-select
      v-model="value"
      class="m-2"
      :placeholder=placeholder
      size="large"
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
const props = defineProps({
  placeholder:String
})

</script>
<style lang="scss" scoped>

:deep(.el-input) {
  width: 248px;
  height: 40px;
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
</style>
