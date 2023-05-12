<template>
  <div class="dashbord">
    <head-nav />
    <head-content />
  </div>
</template>
<script setup>
import HeadNav from "@/components/Headers/index.vue";
import HeadContent from "@/components/DashContent/index.vue";
</script>
<style>
.dashbord {
  background: transparent;
  color: white;
}
</style>
