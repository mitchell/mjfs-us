<script setup lang="ts">
import RepoButton from "./components/RepoButton.vue";
</script>

# mjfs.us

When creating this newest site, I decided to stick with TypeScript but instead go with Vue for fun.
Its powered by [VitePress](https://vitepress.dev/), a static site generator that uses Vite under the
hood to generate static HTML/JS/CSS assets from Markdown templates and Vue components. It's then
uploaded to S3 and distributed around the US by Cloudfront.

So far I've really enjoyed writing the bulk of the content in Markdown, while being able to add in
Vue single file components where desired. Vue feels very lightweight to write and use, even in this
hybrid environment.

<RepoButton href="https://github.com/mitchell/mjfs-us" />
