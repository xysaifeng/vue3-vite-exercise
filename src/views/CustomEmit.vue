<template>
  <div>
    <div>{{age}}</div>
  <div><button @click="clickBtn">click</button></div>
  <Child :list='list'></Child>
  </div>
</template>

<script>
import bus from "@/utils/bus";
import { $on, $off, $once, $emit } from "@/utils/utils";
import { personnelInfo } from "./options";
import Child from './components/Child.vue'

export default {
  components: {
    Child
  },
  data() {
    return {
      age: '22',
      list: []
    }
  },
  mounted() {
    // console.log(personnelInfo, "====222");
  },
  methods: {
    clickBtn() {
      const name = ~~(Math.random() * 1000)
      $emit(bus, 'changeName', name)
    }
  }
}

</script>

<style scoped>
</style>