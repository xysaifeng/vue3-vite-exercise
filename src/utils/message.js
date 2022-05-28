
const config = {
  offset: (~~window.innerHeight / 2) - 48,
  showClose: true
}

const handler = {
  get: function(target,propkey ) {
    return str => target[propkey]({
      ...config,
      message:str,
    })
  }
}
export const messages = new Proxy(ElMessage, handler)