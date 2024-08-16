import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../nav'
import Footer from '../footer'

export default async function Jobs() {
    return (
        <main className="flex min-h-screen flex-col font-mono" >
            <Navbar />

            <div className='mainDiv flex flex-col justify-center items-center w-screen bg-[url("/images/section.jpg")] bg-cover h-screen'>
                <p className="p-2 text-black sm:text-base bg-gray-200 rounded-lg text-center m-2 flex flex-col justify-center items-center">"We make a living by what we get, but we make a life by what we give."<span>- Winston Churchill</span> </p>
                <Link href='/donateForm' class="text-sm p-2 px-10 text-white rounded-2xl m-2 bg-blue-500 hover:bg-blue-700">DONATE</Link>
            </div>
            <div className='flex justify-center items-center w-full mt-4'>
                <div className='w-2/6 bg-blue-600 h-52 m-2 flex justify-center items-center'>
                    <Image src="/images/box1.jpg" alt="Image Description" width={100} height={100} />
                    <div className='text-xl flex flex-col justify-center items-center ml-4 font-bold text-white'>
                        DONATE
                        <span className='text-lg'>
                            US
                        </span>
                        <Link href='#' className='text-sm bg-yellow-500 rounded-full px-4'>Proceed</Link>
                    </div>
                </div>
                <div className='w-2/6 bg-orange-600 h-52 m-2 flex justify-center items-center'>
                    <Image src="/images/box2.jpeg" alt="Image Description" width={150} height={150} />
                    <div className='text-xl flex flex-col justify-center items-center ml-4 font-bold text-white'>
                        THALESEMIA FREE
                        <span className='text-lg'>
                            PAKISTAN
                        </span>
                        <Link href='#' className='text-sm bg-blue-500 rounded-full px-4'>View</Link>
                    </div>
                </div>
                <div className='w-2/6 bg-yellow-600 h-52 m-2 flex justify-center items-center'>
                    <Image src="/images/box3.jpg" alt="Image Description" width={300} height={300} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full mt-4'>
                <h2 className='text-3xl font-bold' >
                    OUR DISTINGUISHED PARTNERS
                </h2>
                <div className='w-full p-4 flex justify-evenly items-center'>
                    <Image src="/images/partner1.jfif" alt="Image Description" width={100} height={50} />
                    <Image src="/images/partner2.jfif" alt="Image Description" width={100} height={50} />
                    <Image src="/images/partner3.jfif" alt="Image Description" width={100} height={50} />
                    <Image src="/images/partner4.jfif" alt="Image Description" width={100} height={50} />
                    <Image src="/images/partner5.jfif" alt="Image Description" width={100} height={50} />
                    <Image src="/images/partner6.jfif" alt="Image Description" width={100} height={50} />
                </div>
                <div className='w-full p-4 flex flex-col justify-center items-center'>
                    <div className='flex justify-evenly items-center w-full'>
                        <div className='w-2/6 bg-gray-600 bg-opacity-5 rounded-lg h-52 m-2 flex flex-col justify-center items-center'>
                            <Image src="/images/project1.png" alt="Image Description" width={100} height={50} />
                            <h2 className='text-lg my-4'>
                                SHELTER HOME
                            </h2>
                        </div>
                        <div className='w-2/6 bg-gray-600 bg-opacity-5 rounded-lg h-52 m-2 flex flex-col justify-center items-center'>
                            <Image src="/images/project2.png" alt="Image Description" width={100} height={50} />
                            <h2 className='text-lg my-4'>
                                SWEET HOME
                            </h2>
                        </div>
                        <div className='w-2/6 bg-gray-600 bg-opacity-5 rounded-lg h-52 m-2 flex flex-col justify-center items-center'>
                            <Image src="/images/project3.png" alt="Image Description" width={100} height={50} />
                            <h2 className='text-lg my-4'>
                                PAKISTAN THALASEMIA CENTER
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
