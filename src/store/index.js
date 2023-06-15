import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

// 受够了手动storeToRefs？来试试这个vite插件吧 https://juejin.cn/post/7097893752030625828
const store = createPinia()
store.use(piniaPluginPersist)

export default store