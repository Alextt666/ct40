<template>
  <div class="resource">
    <head-nav />
    <resource-nav></resource-nav>
    <resource-content></resource-content>
  </div>
</template>
<script setup>
import HeadNav from "@/components/Headers/index.vue";
import ResourceNav from "@/components/ResourceNav/index.vue";
import ResourceContent from "@/components/ResourceContent/index.vue";
</script>
<style lang="scss" scoped></style>
