import {defineStore} from 'pinia'


export const useAppStore = defineStore({
  id: 'app',
  state() {
    return {
      appName: ''
    }
  },
  actions: {
    setName(info) {
      // console.log('app name: ', info);
      this.appName = info.a
    }
  }
})