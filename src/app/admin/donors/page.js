import SideBar from '../components/sideBar'
import UpperBar from '../components/upperBar'
import GetDonors from './getDonors'

export default function Donors() {
  
  return (
    <main className="flex font-mono " >

      <SideBar />
      <div className='flex flex-col w-4/5'>
        <UpperBar />
        <GetDonors/>
      </div>

    </main>
  )
}
