<template>
  <div>
    <div>{{age}}</div>
  <div><button @click="clickBtn">click</button></div>
  </div>
</template>

<script>
import bus from "@/utils/bus";
import { $on, $off, $once, $emit } from "@/utils/utils";
export default {
  data() {
    return {
      age: '22'
    }
  },
  mounted() {
  },
  methods: {
    clickBtn() {
      console.log('===========click');
      $emit(bus, 'changeName', 'jack')
    }
  }
}

</script>

<style scoped>
</style>