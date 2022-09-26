<template>
  <button @click="handleClick">Click Me</button>
</template>

<script lang="ts">
export default {
  methods: {
    handleClick: () => {
      alert("Woooha!");
    },
  }
}
</script>
