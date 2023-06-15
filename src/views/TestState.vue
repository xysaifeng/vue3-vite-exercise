<template>
  <div>
    <h1>pinia 使用</h1>
    <div>{{ userStore.name }}</div>
    <div>{{ name }}</div>
    <div>全名：{{ userStore.fullName }}</div>
    <hr />
    <div>
      account：{{ userStore.account }} --
      <span>{{ appStroe.appName }}</span>
    </div>
    <div>pwd： {{ userStore.password }}</div>
    <div>
      loop:
      <ul>
        <li v-for="item in userStore.arr" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      <!-- 可以像下面这样直接修改 state 但是不建议 -->
      <el-button @click="userStore.name = 'jack'">直接修改name</el-button>
      <!-- 建议通过 actions 去修改 state，action 里可以直接通过 this 访问。 -->
      <el-button @click="update">actions修改name</el-button>
      <el-button @click="clear">clear</el-button>
      <el-button @click="modifyState">手动触发actioins</el-button>
    </div>
    <div>
      <el-button @click="clickWithError">actions修改 clickWithError</el-button>
      <el-button @click="clickWithOk">actions修改 clickWithOk</el-button>
    </div>
  </div>
</template>

<script setup name="TestState">
import { useAppStore } from "@/store/app";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { computed, onMounted, onUnmounted, watchEffect } from "vue-demi";
const userStore = useUserStore();
const appStroe = useAppStore();
// console.log("userStore: ", userStore);

onMounted(() => {
  // console.log('=======onMounted');
  userStore.login("zhangsanfeng", "123456");
});

watchEffect(() => {
  // console.log(userStore.arr, '--------md');
});

// 获取name
// 2.可以结合 computed 获取。
// const name = computed(() => userStore.name)

// 3.state 也可以使用解构，但使用解构会使其失去响应式，这时候可以用 pinia 的 storeToRefs。
// name被修改了视图会更新
const { name } = storeToRefs(userStore);
// console.log("name: ", name);
// name被修改了视图不会更新
// const {name} = userStore
// console.log('name: ', name);

const update = () => {
  userStore.updateName("李四", "礼物", "李留");
  // userStore.updateName({
  //   name: '李四'
  // })
};

const clear = () => {
  // 初始化store // 灰常方便
  // 通过调用store 上的$reset方法将状态重置为初始状态
  userStore.$reset();
};

// 修改state还可以通过使用 $patch 方法
const modifyState = () => {
  // 1.直接修改name
  // userStore.name = 'tom1'
  // 2.手动更改状态, 需要修改多个数据，建议用 $patch 批量更新，传入一个对象
  // https://uniapp.dcloud.io/tutorial/vue3-pinia.html#%E4%BB%8B%E7%BB%8D
  // userStore.$patch({
  //   name: 'tom2',
  //   // arr: userStore.arr.push(2,3) // ok，不过返回的是userStore.arr的长度
  //   // arr: [1,2,3], // ok
  //   arr: [...userStore.arr, 1,2,3], // ok
  // })
  // 3.，还是$patch，传入函数，第一个参数就是 state
  // https://segmentfault.com/a/1190000041554023
  userStore.$patch(function (state) {
    // 只有一个参数
    // console.log(arguments);
    state.name = "tom3";
    state.arr = [...state.arr, 1, 2, 3];
  });
};

// 通过 store.$subscribe() 的方法，监听订阅state
// 该方法的第一个参数接受一个回调函数，该函数可以在 state 变化时触发
const subscribe = userStore.$subscribe(
  function (mutation, state) {
    // console.log(arguments, '----');
    console.log(mutation, "---mutation");
    console.log(state, "---state");
  },
  {
    // flush: false,
    // watch: false
  }
);

// 可以发现，打印结果的mutation对象主要包含三个属性
// events : 是这次state改变的具体数据，包括改变前的值和改变后的值等等数据
// storeId ：是当前store的id
// type：type表示这次变化是通过什么产生的，主要有三个分别是
// “direct” ：通过 action 变化的
// ”patch object“ ：通过 $patch 传递对象的方式改变的
// “patch function” ：通过 $patch 传递函数的方式改变的
// 第二个参是个配置对象：
// detached: false， 正常情况下，当 订阅所在的组件被卸载时，订阅将被停止删除，如果设置detached值为 true 时，即使所在组件被卸载，订阅依然可以生效。
// 其他属性主要还有 immediate、deep、flush 等等，和 vue3 watch的对应参数效果一样。

// 停止监听
// 调用mainStore.$subscribe返回的值（即上方示例的 subscribe 变量）可以停止订阅
// subscribe()

// https://juejin.cn/post/7068113574043844622#heading-16
// 监听订阅action
// 通过 store.$onAction()，可以监听action的动作及结果等
// 该函数可以接收一个回调函数作为参数，回调函数的参数中有五个属性，具体如下
// const unsubscribe = userStore.$onAction(function({name, store, args, after, onError}) {
//   // name: action函数名称
//   // store: store实例，这里是userStore实例
//   // args: action函数参数数组
//   // after: 钩子函数，在action函数执行完成返回或resolvers后执行
//   // onError: 钩子函数，在action函数报错执行或rejects后执行
//   // console.log(arguments, '---sa');
//   // after(function() {
//   //   console.log(arguments, '----a2');
//   // })
// })

const unsubscribe = userStore.$onAction(function ({
  name,
  store,
  args,
  after,
  onError,
}) {
  console.log(name, " = action name");
  console.log("参数数组 = ", args);
  console.log("store实例 = ", store);
  after(function (result) {
    // console.log(arguments, "----a2");
    console.log("action函数执行完成后返回： ", result);
  });
  onError((error) => {
    console.log("error: ", error);
  });
});

// 同样，可以通过调用 mainStore.$onAction 返回的值来手动停止订阅，在上面代码的例子中，即是
// unsubscribe() //  手动停止订阅

// store.$onAction 默认在所在组件卸载时会被自动删除，可以通过传递第二个参数 true，
// 来将action订阅和所在组件分开（即组件卸载时，订阅依然有效）
//  userStore.$onAction(callback, true)

const clickWithError = () => {
  userStore.subscribeAction("甜甜", 18, true);
};

const clickWithOk = () => {
  userStore.subscribeAction("甜甜3", 18, false);
};

onBeforeUnmount(() => {
  console.log("%c ---------onBeforeUnmount", "color: red;font-size: 18px;");
});
</script>

<style lang="scss" scoped></style>
