<script setup lang="ts">
import RepoButton from "../components/RepoButton.vue";
</script>

# lambdarouter

This package contains a router, written in Golang, capable of routing many AWS Lambda API gateway
requests to anything that implements the aws-lambda-go Handler interface, all in one Lambda
function. It plays especially well with go-kit's awslambda transport package.

This was originally designed for a work project where we wanted to consolidate code and Lambda
functions. It did the job and was used all over our codebase for some time. I imagine it has since
been retired.

<RepoButton href="https://github.com/whip-networks/lambdarouter" />
