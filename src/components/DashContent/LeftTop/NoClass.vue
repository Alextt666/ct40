<template>
  <div class="noclass">
    <img :src="imgUrl" alt="" />
  </div>
</template>
<script setup>
const imgUrl = "./images/noclass.svg";
</script>
<style lang="scss" scoped>
.noclass {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    width: 257px;
    height: 234px;
  }
}
</style>
