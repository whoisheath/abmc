import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div class="bg-white overflow-hidden shadow rounded-lg w-4/6 m-auto h-auto">
        <div class="px-4 py-5 sm:p-6">
          <h1>ABMC</h1>
        </div>
        <div>
          <form className="w-3/6 m-auto">
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Host
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="broker.losant.com"
              />
            </div>
            <label
              for="port"
              className="block text-sm font-medium text-gray-700"
            >
              Port
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="port"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="1883"
              />
            </div>
            <label
              for="clientId"
              className="block text-sm font-medium text-gray-700"
            >
              Client ID
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="clientId"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="clientId-xpgvp4ziNe"
              />
            </div>
            <label
              for="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="username"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="whoisheath"
              />
            </div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="password"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
            <label
              for="keepAlive"
              className="block text-sm font-medium text-gray-700"
            >
              Keep Alive
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="keepAlive"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="60"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
