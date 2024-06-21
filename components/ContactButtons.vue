<script setup lang="ts">
import { VPButton } from "vitepress/theme";
import { useClipboard } from "@vueuse/core";

const email = "m@mjfs.us";
const phone = "+19498727279";
const discord = "zettam";
const formattedPhone = "+1 (949) 872 7279";
const formattedDiscord = "zettam on Discord";
const discordLink = "https://discord.com/users/145338365133193226/";

const { text, copy, isSupported } = useClipboard();
</script>

<template>
  <div v-if="isSupported" class="container">
    <VPButton
      theme="brand"
      class="button"
      :text="text === email ? `Copied ${email}` : email"
      @click="copy(email)"
    />
    <VPButton
      theme="alt"
      class="button"
      :text="text === phone ? `Copied ${phone}` : formattedPhone"
      @click="copy(phone)"
    />
    <VPButton
      theme="alt"
      class="button"
      :text="text === discord ? `Copied ${discord}` : formattedDiscord"
      @click="copy(discord)"
    />
  </div>
  <div v-else class="container">
    <VPButton
      theme="brand"
      class="button"
      :href="`mailto:${email}`"
      :text="email"
    />
    <VPButton
      theme="alt"
      class="button"
      :href="`tel:${phone}`"
      :text="formattedPhone"
    />
    <VPButton
      theme="alt"
      class="button"
      :href="discordLink"
      :text="formattedDiscord"
    />
  </div>
</template>

<style scoped>
.button {
  margin: 6px;
  text-decoration: none;
}
.container {
  margin: -6px;
}
</style>
