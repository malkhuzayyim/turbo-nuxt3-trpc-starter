<script setup lang="ts">
const { $trpcClient } = useNuxtApp();

const user = await $trpcClient.query("users.findUnique", { id: 1 });
console.log("🚀 ~ user", user);

const users = await $trpcClient.query("users.findMany");
console.log("🚀 ~ users", users);

const state = reactive({ count: 5 });
const handleLogging = (value: string) => {
  console.log("🚀 ~ value", value);
};
const handleClicked = () => {
  state.count++;
  console.log("🚀 ~ state", state);
};
</script>

<template>
  <div class="d-flex">
    <div>
      <h1 class="text-3xl font-bold underline">
        User: {{ user?.name || "Not Found" }}
      </h1>
      <MBtn
        color="blue"
        text="Don't click me!"
        :loading="true"
        :count="state.count"
        @clicked="handleClicked"
        @logging="handleLogging"
      >
        Click me!
      </MBtn>
    </div>
  </div>
</template>
