#!/usr/bin/env bun
import { $ } from "bun";

async function main() {
  const profile = process.env.MJFS_PROFILE;
  const distId = process.env.MJFS_DIST_ID;

  if (
    !confirm(`Deploy to distribution "${distId}" with profile "${profile}"?`)
  ) {
    return;
  }

  await $`bun run clean`;
  await $`bun run build`;

  await $`aws s3 sync ./.vitepress/dist/ s3://mjfs.us --acl public-read --delete --profile ${profile} --region us-west-1`;
  await $`aws cloudfront create-invalidation --distribution-id ${distId} --paths '/*' --profile ${profile}`;
}

await main();
