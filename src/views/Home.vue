<template>
  <div>
    <div>home</div>
    <p>
      <el-button @click="close" plain>modify</el-button>
      <!-- <el-button type='primary' @click="modify" :icon="Menu">click</el-button> -->
      <el-button type="primary" @click="modify" :icon="Menu">click</el-button>
      <el-icon>
        <Menu></Menu>
      </el-icon>
      <el-date-picker type="date" v-model="date"></el-date-picker>
    </p>
    <p>
      <!-- <CustomEmit></CustomEmit> -->
      <!-- <Test></Test> -->
      <TestDrawer v-model:visible="visible" :list="list" />
    </p>
    <p>
      <el-select v-model="value" filterable placeholder="Select" :filter-method='fm'>
        <el-option
          v-for="(item, i) in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        <span>{{ item.label }} {{(i+1) * (10+i)}}</span>
        </el-option>
      </el-select>
    </p>
  </div>
</template>

<script setup>
import TestDrawer from "./components/TestDrawer.vue";
import { $off } from "@/utils/utils";
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
  // elIcon,
  Menu,
} from "@element-plus/icons-vue";

const state = reactive({
  visible: false,
  list: null,
});
const { visible, list } = toRefs(state);

// import {
//   // ElButton,
//   // ElMessageBox,
//   // ElMessage,
//   // ElDatePicker,
//   // ElIcon
// } from 'element-plus'

import {
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRef,
  toRefs,
  useAttrs,
  useSlots,
  watch,
} from "vue";
const { proxy } = getCurrentInstance();
// console.log('proxy: ', proxy.$route);

// console.log('proxy.$route:222 ', proxy.$nextTick);

// import CustomEmit from './CustomEmit.vue'

const close = () => {
  //  messages.closeAll('jeelsl')
  messages.closeAll("jeelsl");
};
const modify = () => {
  state.list = {
    name: "tom",
    age: 12,
  };

  setTimeout(() => {
    state.visible = true;
  }, 500);

  // console.log('btn clicked');
  // personnelInfo.name = "jack";
  // personnelInfo = {}
  // messages.error('jeelsl2')
  // console.log('messages: ', messages);
  // ElMessage.success('jeelsl')

  // ElMessageBox.confirm(
  //   'proxy will permanently delete the file. Continue?',
  //   'Warning',
  //   {
  //     confirmButtonText: 'OK',
  //     cancelButtonText: 'Cancel',
  //     type: 'warning',
  //   }
  // )
  //   .then(() => {
  //     ElMessage({
  //       type: 'success',
  //       message: 'Delete completed',
  //     })
  //   })
  //   .catch(() => {
  //     ElMessage({
  //       type: 'info',
  //       message: 'Delete canceled',
  //     })
  //   })
};

const date = ref("");

onMounted(() => {
  // console.log(personnelInfo, "====mmm");
  // console.log(import.meta.env);
  // console.log(process.env.NODE_ENV, '====process.env.NODE_ENV'); // development
});

const value = ref("");

const o = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
]
const options = ref(o);

function fm(query) {
  console.log('query: ', query);
  // console.log(options.value);
  if(!query) return (options.value = o)
  options.value = options.value.filter(item => item.label.includes(query))
  console.log('options.value: ', options.value);

}
</script>

<style lang="scss" scoped></style>
