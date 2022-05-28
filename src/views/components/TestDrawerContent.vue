<template>
  <div>
    <div>{{count}}</div>
    <ul>
      <li v-for="(p, k) in list" :key="k">{{k}} --> {{p}}</li>
    </ul>
    <div>
      <el-button type='primary' ref='btnRef' @click="add">{{count}}</el-button>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUpdate, onUpdated, watch, watchEffect } from "@vue/runtime-core"

const props = defineProps({
  list: {
    type: Object,
    default: () => ({})
  }
})


onBeforeUpdate(() => {
  console.log('==========onBeforeUpdate');
})
onUpdated(() => {
  console.log('==========onUpdated');
})

const btnRef = ref(null)
const count = ref(0)
// watchEffect(() => {
//   console.log(count.value, '===========count');
// }, {
//   flush: 'post'
// })

// watch(count, (c, oc) => {
//    nextTick()
//   console.log('c, oc: ', c, oc);
// }, {
//   // immediate: true
//   flush: 'post'
// })
// watch(count, async (c, oc) => {
//   await nextTick()
//   console.log('c, oc: ', c, oc);
// })


function add() {
  count.value ++
  count.value ++
  count.value ++
}

// const data = computed(() => {
//   return props.list
// })
// watch(data, val => {
//   console.log(val, '==============local val');
// }, {
//   immediate: false
// })

onMounted(()=>{
  console.log('onMounted==========12');
})


watchEffect(() => {
  // console.log(props.list, '===========6666');
})

console.log(JSON.stringify( props.list), '==============2222');

watch(() => props.list, (val, oldVal, cb)=> {
  console.log(val, '----2');
}, {
  immediate: false,
  //  flush: 'post'
})
</script>

<style lang="scss" scoped>

</style>