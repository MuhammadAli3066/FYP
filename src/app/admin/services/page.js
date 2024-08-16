import SideBar from '../components/sideBar';
import UpperBar from '../components/upperBar';

export default function Services() {
  return (
    <main className="flex font-mono">
      <SideBar />
      <div className='flex flex-col w-4/5'>
        <UpperBar />
        <div className="px-4 flex items-center flex-col">
        <h3 className="mt-4 md:text-2xl text-xl font-medium w-4/5 text-center rounded-lg bg-blue-600 text-white">OUR SERVICES</h3>
          <div className='flex flex-col items-start justify-start w-full mt-4'>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Online Donations</h2>
            <p className="text-gray-700">
              We provide a secure platform for online donations. Make a difference by supporting your favorite causes from the comfort of your home.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Campaign Creation</h2>
            <p className="text-gray-700">
              Start your own fundraising campaign. Share your story and mobilize your community to support a cause that matters to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Funding</h2>
            <p className="text-gray-700">
              We facilitate project funding for impactful initiatives. Connect with donors who are passionate about making a positive change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Donor Management</h2>
            <p className="text-gray-700">
              Manage your donors efficiently with our donor management tools. Keep track of contributions, communicate updates, and express gratitude.
            </p>
          </section>
          </div>

          {/* Add more sections based on the services your website offers */}

        </div>
      </div>
    </main>
  );
}
