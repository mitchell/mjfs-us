---
layout: home

hero:
  name: "Mitchell Simon"
  text: "Software Engineer"
  tagline: Specializing in web, mobile, and dev-ops
---

<script setup lang="ts">
import { VPButton } from "vitepress/theme";
import { useClipboard } from "@vueuse/core";

const formattedPhone = "+1 (949) 872 7279";
const formattedDiscord = "zettam on Discord";
const discordLink = "https://discord.com/users/145338365133193226/";

const email = "m@mjfs.us";
const phone = "+19498727279";
const discord = "zettam";
const { text, copy, copied, isSupported } = useClipboard();
</script>

<div v-if="isSupported">
  <VPButton
    style="margin: 6px"
    theme="brand"
    @click="copy(email)"
    :text="text === email ? `Copied ${email}` : email"
  />
  <VPButton
    style="margin: 6px"
    theme="alt"
    @click="copy(phone)"
    :text="text === phone ? `Copied ${phone}` : formattedPhone"
  />
  <VPButton
    style="margin: 6px"
    theme="alt"
    @click="copy(discord)"
    :text="text === discord ? `Copied ${discord}` : formattedDiscord"
  />
</div>
<div v-else>
  <VPButton
    style="margin: 6px"
    theme="brand"
    :href="`mailto:${email}`"
    :text="email"
  />
  <VPButton
    style="margin: 6px"
    theme="alt"
    :href="`tel:${phone}`"
    :text="formattedPhone"
  />
  <VPButton
    style="margin: 6px"
    theme="alt"
    :href="discordLink"
    :text="formattedDiscord"
  />
</div>
