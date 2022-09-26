<script setup lang="ts">
const { $trpcClient } = useNuxtApp();

const user = await $trpcClient.query("getUser");
</script>

<template>
  <div>{{ user }}</div>
</template>
