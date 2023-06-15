export interface MediatorProps {
  uuid?: number,
  publish?: (topic: string, ...args: unknown[]) => void,
  subscribe?: (topic: string, callback: (...args: unknown[]) => void) => void,

}

const mediator = (function () {
  let topics: string[] = [], uuid = 0;

  function subscribe(topic: string, callback: (...args: unknown[]) => void) {
    console.log('topic: ', topic, topics[topic]);

    uuid++
    topics[topic] = topics[topic] ? [...topics[topic], { callback, uuid }] : [{ callback, uuid }]
  }

  function publish(topic: string, ...args: unknown[]) {
    console.log('topic: ', topic, topics[topic]);
    if (topics[topic]) {
      topics[topic].map(e => e.callback(...args))
    }
  }

  return {
    intall: function (obj: MediatorProps) {
      obj.uuid = uuid
      obj.subscribe = subscribe
      obj.publish = publish
      return obj
    }
  }
})()

export default mediator