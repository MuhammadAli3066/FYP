
import Link from 'next/link'
import Navbar from '../nav'
import Footer from '../footer'

export default async function Contact() {
  return (
    <main className="flex min-h-screen flex-col font-mono" >
      <Navbar/>
      <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h1>Contact </h1>
      </div>
      <Footer/>
    </main>
  )
}