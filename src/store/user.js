import { defineStore } from 'pinia'
import { useAppStore } from './app';

// console.log('useAppStore: ', useAppStore);


const sleep = (time = 2000) => {
  return new Promise(r => {
    setTimeout(() => {
      r()
    }, time);
  })
}

export const useUserStore = defineStore({
  id: 'user',// id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
      age: 10,
      account: '',
      password: '',
      arr: ['a', 'b']
    }
  },
  actions: {
    updateName(name) { // 可以接收n个参数
      console.log(arguments, '---s');
      // console.log(this, '---update');

      // 更新state1
      this.name = name
      // 更新state2
      // Object.assign(this, data)

    },
    updateInfo(info) {
      // console.log('info: ', info);
      this.account = info.a;
      this.password = info.p;
      return this.fullName
    },
    async login(a, p) {
      const res = await sleep()
      const info = { a, p }
      // action 间的相互调用，直接用 this 访问即可。
      this.updateInfo(info)
      const appStore = useAppStore()
      appStore.setName(info)
      return info
    },

    subscribeAction(name, age, manualError) {
      return new Promise((resolve, reject) => {
        if (manualError) {
          reject('手动报错！')
        } else {
          this.name = name
          this.age = age
          resolve(`${this.name}今年${this.age}岁了！`)
        }
      })
    }
  },
  getters: {
    fullName(state) { // 只有一个参数
      // console.log(arguments, '----');
      // console.log(this===state, '===this'); // true
      // return this.name + '丰'
      return state.name + '丰'
    }
  },
  // 接着在对应的 store 里开启 persist 即可。
  // 开启数据缓存
  persist: {
    // 数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。
    enabled: true,
    // 可以在 strategies 里自定义 key 值，并将存放位置由 sessionStorage 改为 localStorage。

    strategies: [
      {
        key: 'my-user',
        storage: localStorage,
        // 也可以持久化部分 state
        paths: ['name', 'account']
      }
    ]
  }
})