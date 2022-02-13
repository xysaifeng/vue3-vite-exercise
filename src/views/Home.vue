<template>
  <div>
    <div>home</div>
    <p>
      <button @click="modify">modify</button>
    </p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, toRefs, useAttrs, useSlots, watch } from "vue";
const modify = () => {
  personnelInfo.name = "jack";
  personnelInfo = {}
};

import moduleName from '@/components'

onMounted(() => {
  // console.log(personnelInfo, "====mmm");
  // console.log(import.meta.env);
  // console.log(process.env.NODE_ENV, '====process.env.NODE_ENV'); // development
  
});
</script>

<style lang="scss" scoped>
</style>