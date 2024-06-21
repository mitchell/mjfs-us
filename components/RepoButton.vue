<script setup lang="ts">
import { VPButton } from "vitepress/theme";
const props = defineProps<{ href: string }>();
</script>

<template>
  <div class="container">
    <VPButton
      theme="brand"
      text="Repository"
      class="button"
      :href="props.href"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.button {
  margin-top: 30px;
  text-decoration: none;
}
</style>
