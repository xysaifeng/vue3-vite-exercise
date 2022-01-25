<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onBeforeUnmount, onMounted, ref, useAttrs } from "@vue/runtime-core";
import HelloWorld from "./components/HelloWorld.vue";
import { $on, $off, $once, $emit } from "@/utils/utils";
import bus from "@/utils/bus";

const title = ref("v3");
setTimeout(() => {
  title.value = "888";
}, 2000);



onMounted(() => {
  $on(bus, "changeName", (msg) => {
    title.value = msg;
  });
});
onBeforeUnmount(() => {
})


</script>

<template>
  <div>
    app -- {{title}}
  </div>
  <ul class="nav-box">
    <li class="nav"><router-link to="/">home</router-link></li>
    <li class="nav">
      <router-link to="/custom-emit">custom-emit</router-link>
    </li>
  </ul>
  <router-view :title="title"></router-view>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
