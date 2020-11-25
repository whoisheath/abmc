// subscribe to a topic
// input box for topic and qos
// subcribe button to add to list

// mqttjs topic subscribe object:
// {'test1': {qos: 0}, 'test2': {qos: 1}}

import { useState } from 'react'

export default function Subscribe() {
  const [topic, setTopic] = useState('')
  const [qos, setQos] = useState(0)
  const [subList, setSublist] = useState([])

  const updateTopic = (e) => {
    setTopic(e.target.value)
  }

  const updateQos = (e) => {
    setQos(e.target.value)
  }

  const updateSublist = (topic) => {
    setSublist(subList.concat(topic))
  }

  const handleSubscribe = (e) => {
    let topicObj = {}
    let qosObj = {}
    qosObj['qos'] = qos
    topicObj[`${topic}`] = qosObj

    updateSublist(topic)

    console.log(subList)

    e.preventDefault()
  }

  return (
    <div>
      <form
        className="grid gap-5 grid-cols-2 grid-rows-heathRows"
        onSubmit={handleSubscribe}
      >
        <div>
          <label
            for="topic"
            className="block text-sm font-medium text-gray-700"
          >
            Topic
          </label>
          <div className="mt-1">
            <input
              onChange={updateTopic}
              type="text"
              id="topic"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="losant/deviceID/state"
            />
          </div>
        </div>
        <div>
          <label for="qos" class="block text-sm font-medium text-gray-700">
            QoS
          </label>
          <select
            onChange={updateQos}
            id="qos"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option defaultValue>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div id="subList"></div>
        <div className="place-self-center col-span-2">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Subscribe
          </button>
        </div>
      </form>
      <div id="subList" className="mt-5">
        <h3>Subscribed Topics:</h3>
        <ul></ul>
      </div>
    </div>
  )
}
