#!/usr/bin/env bun
import { $ } from "bun";

await $`bun run clean`;
await $`bun run build`;

process.stdout.write("Profile: ");

let profile = "";
for await (const line of console) {
  profile = line;
  break;
}

await $`aws s3 sync ./.vitepress/dist/ s3://mjfs.us --acl public-read --delete --profile ${profile} --region us-west-1`;

process.stdout.write("Distribution Id: ");

let distId = "";
for await (const line of console) {
  distId = line;
  break;
}

await $`aws cloudfront create-invalidation --distribution-id ${distId} --paths '/*' --profile ${profile}`;
