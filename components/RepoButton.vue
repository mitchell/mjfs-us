<script setup lang="ts">
import { VPButton } from "vitepress/theme";
const { href } = defineProps<{ href: string }>();
</script>

<template>
  <div class="container">
    <VPButton theme="brand" text="Repository" class="button" :href />
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
