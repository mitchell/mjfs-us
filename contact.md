---
layout: page
sidebar: false

hero:
  name: "Mitchell Simon"
  text: "Software Engineer"
  tagline: Specializing in web, mobile, and dev-ops

features:
  - title: Enable JavaScript
    details:
      Please, enable JS to show contact info. This is to prevent malicious bots from scraping
      the info.
---

<script setup lang="ts">
import { VPHomeHero } from 'vitepress/theme';
import ContactButtons from './components/ContactButtons.vue';
</script>

<VPHomeHero />
<ContactButtons />
