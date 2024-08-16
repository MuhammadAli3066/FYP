import SideBar from '../components/sideBar';
import UpperBar from '../components/upperBar';

export default function Achievements() {
  return (
    <main className="flex font-mono">
      <SideBar />
      <div className='flex flex-col w-4/5'>
        <UpperBar />
        <div className="px-4 flex items-center flex-col">
        <h3 className="mt-4 md:text-2xl text-xl font-medium w-4/5 text-center rounded-lg bg-blue-600 text-white">ACHIEVEMENTS</h3>

          <div className='flex flex-col items-start justify-start w-full mt-4'>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Total Donations Received</h2>
            <p className="text-gray-700">We are grateful for the incredible support from our donors. So far, we have received:</p>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold text-blue-600 mr-2">$1,200,000</span>
              <span className="text-gray-600">raised for various causes.</span>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Number of Successful Campaigns</h2>
            <p className="text-gray-700">Together, we've organized numerous successful campaigns addressing critical issues:</p>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold text-green-600 mr-2">50+</span>
              <span className="text-gray-600">campaigns completed.</span>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Impactful Projects Funded</h2>
            <p className="text-gray-700">Our community has made a positive impact on various projects:</p>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold text-purple-600 mr-2">30+</span>
              <span className="text-gray-600">projects funded successfully.</span>
            </div>
          </section>

          </div>
          {/* Add more sections based on your achievements */}

        </div>
      </div>
    </main>
  );
}
