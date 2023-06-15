<template>
  <el-option v-for="e in list" :label="e.label" :value="e.value" />
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
