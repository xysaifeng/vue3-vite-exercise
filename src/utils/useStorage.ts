import mediator from "./mediator";
import { ref } from 'vue'
const createMediator = () => mediator.intall({})

export const useStorage = (key: string) => {
  const str = ref(null)
  const sub = createMediator()
  sub.subscribe(key, v => str.value = v)
  return str
}