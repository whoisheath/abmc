// publish to a topic on button press
import { useState } from 'react'

export default function Publish() {
  const [topic, setTopic] = useState()

  const updateTopic = (e) => {
    setTopic(e.target.value)
  }

  return (
    <div>
      <form className="grid gap-5 grid-cols-2 grid-rows-heathRows">
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
          >
            <option defaultValue>0</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div className="col-span-2 place-self-center">
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
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
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
    </div>
  )
}
