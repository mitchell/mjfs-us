#!/usr/bin/env bun
import { $ } from "bun";

await $`bun run clean`;
await $`bun run build`;

const profile = prompt("Profile:");
const distId = prompt("Distribution Id:");

await $`aws s3 sync ./.vitepress/dist/ s3://mjfs.us --acl public-read --delete --profile ${profile} --region us-west-1`;
await $`aws cloudfront create-invalidation --distribution-id ${distId} --paths '/*' --profile ${profile}`;
