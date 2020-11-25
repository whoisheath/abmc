import Nav from '../components/nav'
import ConnectionForm from '../components/connect-form'
import Publish from '../components/publish'
import Subscribe from '../components/subscribe'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="grid gap-10 grid-cols-2 grid-rows-2 bg-white overflow-hidden shadow rounded-lg w-4/6 m-auto h-auto pb-5">
        <div className="col-span-2">
          <ConnectionForm />
        </div>
        <div className="justify-self-center m-5">
          <h1 className="text-center mb-5">Publish a Message</h1>
          <Publish />
        </div>
        <div className="justify-self-center m-5">
          <h1 className="text-center mb-5">Subscribe to a Topic</h1>
          <Subscribe />
        </div>
      </div>
    </div>
  )
}
