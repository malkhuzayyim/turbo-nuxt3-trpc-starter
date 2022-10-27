<script setup lang="ts">
const emit = defineEmits<{
  (e: "clicked"): void;
  (e: "logging", value: string): void;
}>();
interface Props {
  color: string;
  text: string;
  loading?: boolean;
  count?: number;
}
const props = defineProps<Props>();

watch(
  props,
  () => {
    console.log(props);
    console.log("🚀 ~ watchEffect ~ props.count", props);
  },
  { deep: true }
);

const handleClicking = () => {
  console.log("🚀 ~ handleClicking");
  emit("clicked");
};
</script>

<template>
  <button
    class="d-btn"
    :class="{ color, 'd-loading': loading }"
    @click="handleClicking"
  >
    <slot v-if="!loading">
      {{ text }}
    </slot>
  </button>
</template>
