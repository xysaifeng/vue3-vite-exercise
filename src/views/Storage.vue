<template>
  <div>
    <div>storage</div>
    <div>
      <button type="button" @click="$localStorage.setItem('pwd', count++)">
        count is {{ count }}
      </button>
      <button type="button" @click="$localStorage.setItem('random', count--)">
        count2 is {{ count }}
      </button>
      <button type="button" @click="$localStorage.removeItem('random')">del key</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { $localStorage } from '@/utils/localStorage'
import { useStorage } from '@/utils/useStorage'

// console.log(localStorage.key === $localStorage.key)// true
// console.log($localStorage.key(1)) // 报错：不能调用

const key = useStorage('pwd')
const random = useStorage('random')
const random2 = useStorage('random')

watch(
  [key, random, random2],
  (v) => {
    console.log(v, '----a')
    // console.log(, '--s')
  },
  {
    immediate: true
  }
)

const count = ref(0)
</script>

<style lang="scss" scoped></style>
