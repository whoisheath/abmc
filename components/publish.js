// publish to a topic on button press
import { useState } from 'react'

export default function Publish() {
  const [topic, setTopic] = useState('')
  const [qos, setQos] = useState(0)
  const [message, setMessage] = useState('')

  const updateTopic = (e) => {
    setTopic(e.target.value)
  }

  const updateQos = (e) => {
    setQos(e.target.value)
  }

  const updateMessage = (e) => {
    setMessage(e.target.value)
  }

  const handlePublish = (e) => {
    e.preventDefault()

    console.log(topic, qos, message)

    let publishedMessageList = document.getElementById('publishedMessageList')

    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    li1.appendChild(document.createTextNode(`Topic: ${topic}`))
    li2.appendChild(document.createTextNode(`Message: ${message}`))
    li1.setAttribute('class', 'm-2 pl-2 text-gray-900')
    li2.setAttribute('class', 'm-2 pl-2 text-gray-500')
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.setAttribute('class', 'bg-gray-200')
    publishedMessageList.appendChild(ul)
  }

  return (
    <div>
      <form
        className="grid gap-5 grid-cols-2 grid-rows-heathRows"
        onSubmit={handlePublish}
      >
        <div>
          <label
            htmlFor="topic"
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
          <label
            htmlFor="qos"
            className="block text-sm font-medium text-gray-700"
          >
            QoS
          </label>
          <select
            id="qos"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onChange={updateQos}
          >
            <option defaultValue>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="col-span-2 w-full place-self-center">
          <label
            htmlFor="Message"
            className="text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Message
          </label>
          <div>
            <textarea
              id="Message"
              rows="3"
              className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              onChange={updateMessage}
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              What message would you like to send?
            </p>
          </div>
        </div>
        <div className="place-self-center col-span-2">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Publish
          </button>
        </div>
      </form>
      <div className="mt-5">
        <h3 className="text-gray-700">Published Messages:</h3>
        <ul id="publishedMessageList"></ul>
      </div>
    </div>
  )
}
