// subscribe to a topic
// input box for topic and qos
// subcribe button to add to list

// mqttjs topic subscribe object:
// {'test1': {qos: 0}, 'test2': {qos: 1}}

import { useState } from 'react'
import abmcMQTT from '../utils/abmcClient'

export default function Subscribe() {
  const [subTopic, setTopic] = useState('')
  const [subQos, setSubQos] = useState(0)
  const [subList, setSublist] = useState({})
  const [subbedTopics] = useState([])

  const updateTopic = (e) => {
    setTopic(e.target.value)
  }

  const updateQos = (e) => {
    setSubQos(e.target.value)
  }

  const updateSublist = (newObj) => {
    setSublist(Object.assign(subList, newObj))
  }

  const updateSubbedTopics = (topicString) => {
    subbedTopics.push(topicString)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()

    const topicToSubTo = subTopic
    const qosToSubTo = subQos

    updateSubbedTopics(`${subTopic}`)

    const qosObj = {
      qos: qosToSubTo,
    }

    let subObj = {}

    subObj[`${topicToSubTo}`] = qosObj

    updateSublist(subObj)

    let subbedTopicList = document.getElementById('topicList')

    let li = document.createElement('li')
    li.appendChild(document.createTextNode(subTopic))
    li.setAttribute('class', 'm-5 pl-5 text-gray-500')
    subbedTopicList.appendChild(li)

    abmcMQTT.client.subscribe(topicToSubTo, qosObj)
  }

  return (
    <div>
      <form
        className="grid gap-5 grid-cols-2 grid-rows-heathRows"
        onSubmit={handleSubscribe}
      >
        <div>
          <label
            htmlFor="topicSub"
            className="block text-sm font-medium text-gray-700"
          >
            Topic
          </label>
          <div className="mt-1">
            <input
              onChange={updateTopic}
              type="text"
              id="topicSub"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="losant/deviceID/state"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="qosSub"
            className="block text-sm font-medium text-gray-700"
          >
            QoS
          </label>
          <select
            onChange={updateQos}
            id="qosSub"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
        <p className="place-self-center col-span-2 text-sm text-gray-500">
          <span className="text-gray-900">Note:</span> Subscribing to a new
          topic will end your current connection, and restart a new connection
        </p>
      </form>
      <div id="subList" className="mt-5">
        <h3 className="text-gray-700">Subscribed Topics:</h3>
        <ul id="topicList" className="overflow-scroll"></ul>
      </div>
    </div>
  )
}
