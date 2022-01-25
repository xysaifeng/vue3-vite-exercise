
const eventRegistryMap = new WeakMap()
console.log('eventRegistryMap: ', eventRegistryMap);

function getRegistry(instance) {
  let events = eventRegistryMap.get(instance)
  if (!events) {
    eventRegistryMap.set(instance, (events = Object.create(null)))
  }
  return events
}

// $on(bus, 'tabs_activename', (msg) => {
export function $on(instance, event, fn) {
  // console.log('instance, event: 111111111', instance, event, );
  if (Array.isArray(event)) {
    event.forEach((e) => $on(instance, e, fn))
  } else {
    const events = getRegistry(instance)
    // console.log('events:222 ', events[event]);
    ;(events[event] || (events[event] = [])).push(fn)
  }
  return instance
}

export function $once(instance, event, fn) {
  const wrapped = (...args) => {
    $off(instance, event, wrapped)
    fn.call(instance, ...args)
  }
  wrapped.fn = fn
  $on(instance, event, wrapped)
  return instance
}

export function $off(instance, event, fn) {
  const vm = instance
  // all
  if (!event) {
    eventRegistryMap.set(instance, Object.create(null))
    return vm
  }
  // array of events
  if (Array.isArray(event)) {
    event.forEach((e) => $off(instance, e, fn))
    return vm
  }
  // specific event
  const events = getRegistry(instance)
  const cbs = events[event]
  if (!cbs) {
    return vm
  }
  if (!fn) {
    events[event] = undefined
    return vm
  }
  events[event] = cbs.filter((cb) => !(cb === fn || cb.fn === fn))
  return vm
}

//  $emit(bus, 'tabs_activename', this.activeName)
export function $emit(instance, event, ...args) {
  instance && instance.$emit && instance.$emit(event, ...args);
  const cbs = getRegistry(instance)[event]
  console.log('cbs: ', cbs);
  if (cbs) {
    cbs.map((cb) => cb.apply(instance, args))
  }
  return instance
}
