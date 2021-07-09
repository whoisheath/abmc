import Nav from '../components/nav'
import ConnectionForm from '../components/connect-form'
import Publish from '../components/publish'
import Subscribe from '../components/subscribe'
import ReceivedMessages from '../components/received-messages'

export default function IndexPage() {
  return (
    <div className="h-screen overflow-scroll">
      <Nav />
      <div className="grid grid-cols-heathCols">
        <div className="grid gap-10 grid-cols-2 grid-rows-steppe bg-white overflow-hidden shadow rounded-lg m-3 h-auto pb-5 mb-5">
          <div className="col-span-2">
            <ConnectionForm />
          </div>
          <div className="m-5">
            <h1 className="text-center mb-5">Publish a Message</h1>
            <Publish />
          </div>
          <div className="m-5">
            <h1 className="text-center mb-5">Subscribe to a Topic</h1>
            <Subscribe />
          </div>
        </div>
        <div>
          <ReceivedMessages />
        </div>
      </div>
    </div>
  )
}
