<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h2 class="text-2xl font-semibold pb-8 text-gray-700">{{text}}</h2>
</template>

<style scoped>

</style>
