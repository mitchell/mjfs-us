<script setup lang="ts">
import { VPButton, VPHomeFeatures } from "vitepress/theme";
import { useClipboard } from "@vueuse/core";

const email = "m@mjfs.us";
const discord = "zettam";
const { text, copy, isSupported } = useClipboard();

const copiedMsg = (text: string) => `Copied ${text} to clipboard`;
</script>

<template>
  <div v-if="isSupported" class="contact-buttons">
    <div class="container">
      <div class="buttons">
        <VPButton
          theme="brand"
          class="button"
          :text="text === email ? copiedMsg(email) : 'E-mail'"
          @click="copy(email)"
        />
        <VPButton
          theme="alt"
          class="button"
          :text="text === discord ? copiedMsg(discord) : 'Discord'"
          @click="copy(discord)"
        />
      </div>
    </div>
  </div>
  <VPHomeFeatures v-else />
</template>

<style scoped>
.contact-buttons {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .contact-buttons {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .contact-buttons {
    padding: 0 64px;
  }
}

.container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1152px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
}

.button {
  flex-shrink: 0;
  margin: 6px;
  text-decoration: none;
}
</style>
