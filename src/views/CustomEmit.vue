<template>
  <div>
    <div>{{age}}</div>
  <div><button @click="clickBtn">click</button></div>
  </div>
</template>

<script>
import bus from "@/utils/bus";
import { $on, $off, $once, $emit } from "@/utils/utils";
import { personnelInfo } from "./options";

export default {
  data() {
    return {
      age: '22'
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