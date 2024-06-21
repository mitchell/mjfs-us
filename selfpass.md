<script setup lang="ts">
import RepoButton from "./components/RepoButton.vue";
</script>

# selfpass

Selfpass was intended to be a self-hosted single-user password manager capable of
encrypting/decrypting credentials and storing them remotely through mutual, or two-way, TLS. All of
which is deployable locally or to popular cloud platforms such as GCP and AWS. Some of the
technologies used were go-kit, gRPC, Docker, Redis, and Flutter.

While developing it, after the encryption was implemented, I used this project as my own password
manager for while, before moving on to KeePassXC. I built it mostly out of interest in further
exploring Golang and trying out Dart/Flutter for native development.

<RepoButton href="https://github.com/mitchell/selfpass" />
