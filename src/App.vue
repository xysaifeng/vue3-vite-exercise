<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onBeforeUnmount, onMounted, ref, useAttrs } from "@vue/runtime-core";
import HelloWorld from "./components/HelloWorld.vue";
import { $on, $off, $once, $emit } from "@/utils/utils";
import bus from "@/utils/bus";

// import { ElConfigProvider } from 'element-plus'
// import { ElMessage } from 'element-plus'
// console.log('ElMessage: ', ElMessage);


const zIndex =  3000;
const size = 'small';

const title = ref("v3");
setTimeout(() => {
  title.value = "888";
}, 2000);

onMounted(() => {
  // console.log(Object.getOwnPropertyDescriptors(import.meta), '=====');
  const changeName = "changeName";
  // const changeName = ''

  const cb = (msg) => {
    title.value = msg;
  };

  // $on(bus, changeName, cb);
  $once(bus, changeName, cb);

  // const vm = $off(bus, changeName,cb );
  // console.log(vm, '======vm');
});
onBeforeUnmount(() => {});
</script>

<template>
  <el-config-provider :size="size" :zIndex="zIndex">
    <!-- <div>app -- {{ title }}</div> -->
    <ul class="nav-box">
      <li class="nav"><router-link to="/">home</router-link></li>
      <li class="nav">
        <router-link to="/custom-emit">custom-emit</router-link>
      </li>
      <li class="nav">
        <router-link to="/sheet">sheet</router-link>
      </li>
      <li class="nav">
        <router-link to="/scss-demo">scss-demo</router-link>
      </li>
    </ul>
    <router-view :title="title"></router-view>
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.nav-box {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
}
.nav {
  padding: 10px;
}
</style>
