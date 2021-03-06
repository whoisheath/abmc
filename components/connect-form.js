import { useState } from 'react'
import abmcMQTT from '../utils/abmcClient'
import Swal from 'sweetalert2'

const ConnectionForm = () => {
  const [host, setHost] = useState()
  const [port, setPort] = useState()
  const [clientId, setClientId] = useState()
  const [keepAlive, setKeepAlive] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const updateHost = (e) => {
    setHost(e.target.value)
  }
  const updatePort = (e) => {
    setPort(e.target.value)
  }
  const updateClientId = (e) => {
    setClientId(e.target.value)
  }
  const updateKeepAlive = (e) => {
    setKeepAlive(e.target.value)
  }
  const updateUsername = (e) => {
    setUsername(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  let options = {
    username: username,
    password: password,
    clientId: clientId,
    keepalive: keepAlive || 60,
    reconnectPeriod: 0,
  }

  let uri = `ws://${host}:${port}`

  const connect = (e) => {
    try {
      abmcMQTT(uri, options)
    } catch (e) {
      console.error(e)
      Swal.fire({
        icon: 'error',
        title: 'Issue Connecting to MQTT Broker',
        text: 'Check your MQTT Connection Configuration'
      })
    }
    
    e.preventDefault()
  }

  const disconnect = (e) => {
    e.preventDefault()

    abmcMQTT.client.end()

    console.log('stopped')
  }

  return (
    <div className="pt-5">
      <div>
        <form
          className="w-3/6 m-auto grid gap-5 grid-cols-2 grid-rows-4"
          onSubmit={connect}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Host
            </label>
            <div className="mt-1">
              <input
                onChange={updateHost}
                type="text"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="broker.losant.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="port"
              className="block text-sm font-medium text-gray-700"
            >
              Port
            </label>
            <div className="mt-1">
              <input
                onChange={updatePort}
                type="number"
                id="port"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="1883"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="clientId"
              className="block text-sm font-medium text-gray-700"
            >
              Client ID
            </label>
            <div className="mt-1">
              <input
                onChange={updateClientId}
                type="text"
                id="clientId"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="clientId-xpgvp4ziNe"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="keepAlive"
              className="block text-sm font-medium text-gray-700"
            >
              Keep Alive
            </label>
            <div className="mt-1">
              <input
                onChange={updateKeepAlive}
                type="number"
                id="keepAlive"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="60"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                onChange={updateUsername}
                type="text"
                id="username"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="whoisheath"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                onChange={updatePassword}
                type="password"
                id="password"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="•••••••••"
              />
            </div>
          </div>
          <div className="place-self-center col-span-2">
            <button
              type="submit"
              className="inline-flex items-center mx-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Connect
            </button>
            <button
              onClick={disconnect}
              className="inline-flex items-center mx-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Stop
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConnectionForm
