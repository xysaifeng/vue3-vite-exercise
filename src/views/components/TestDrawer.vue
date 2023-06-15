<template>
  <el-drawer title="test" :model-value="visible" @close="close">
    <ul>
      <li v-for="p in list" :key="p">{{p}}</li>
    </ul>
    <TestDrawerContent :list="list" />
  </el-drawer>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import TestDrawerContent from './TestDrawerContent.vue'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },

  list: {
    type: Object,
    default: () => ({}),
  },
});

const emits = defineEmits(["update:visible"]);
// console.log(JSON.stringify( props.list), '==============111');
watch(
  () => props.list,
  (val) => {
    console.log(val, "----124");
  }
);

onMounted(()=>{
  // console.log('onMounted==========1');
})

function close() {
  emits("update:visible", false);
}
</script>

<style lang="scss" scoped></style>
