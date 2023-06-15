import mediator from './mediator'

const keys: string[] = []

const createMediator = () => mediator.intall({})

const sub = createMediator()

export const $localStorage = {
  getItem(key: string) {
    return window.localStorage.getItem(key)
  },

  setItem(key: string, value: any) {
    // 防止重复发布事件
    if (!keys.includes(key)) keys.push(key)
    // 被修改就发布事件
    sub.publish(key, value)
    window.localStorage.setItem(key, value)
  },

  clear() {
    // 
    keys.map(key => sub.publish(key, undefined))

    keys.length = 0
    window.localStorage.clear()
  },

  removeItem(key: string) {
    keys.splice(keys.indexOf(key), 1)
    // 被移除就发布 undefined
    sub.publish(key, undefined)
    window.localStorage.removeItem(key)
  },

  key: window.localStorage.key,

  length: window.localStorage.length
}

