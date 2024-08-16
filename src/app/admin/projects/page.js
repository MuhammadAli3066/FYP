import SideBar from '../components/sideBar';
import UpperBar from '../components/upperBar';

export default function Projects() {
  return (
    <main className="flex font-mono">
      <SideBar />
      <div className='flex flex-col w-4/5'>
        <UpperBar />
        <div className="px-4 flex items-center flex-col">
           <h3 className="mt-4 md:text-2xl text-xl font-medium w-4/5 text-center rounded-lg bg-blue-600 text-white">EXPLORE OUR PROJECTS</h3>

          <div className='flex flex-col items-start justify-start w-full mt-4'>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Clean Water Initiative</h2>
            <p className="text-gray-700">
              Help provide clean and safe drinking water to communities in need. Your contribution will support the installation of water purification systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Educational Empowerment</h2>
            <p className="text-gray-700">
              Contribute to educational projects that empower children and adults alike. Support initiatives such as school construction, scholarship programs, and educational resources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Community Health Clinics</h2>
            <p className="text-gray-700">
              Improve access to healthcare by funding community health clinics. Your donation will help provide medical services, vaccinations, and health education.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Environmental Conservation</h2>
            <p className="text-gray-700">
              Join efforts to preserve and protect the environment. Support projects focused on reforestation, wildlife conservation, and sustainable practices.
            </p>
          </section>
          </div>

          {/* Add more sections based on the projects your website features */}

        </div>
      </div>
    </main>
  );
}
