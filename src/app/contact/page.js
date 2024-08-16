
import Link from 'next/link'
import Navbar from '../nav'
import Footer from '../footer'

export default async function Contact() {
  return (
    <main className="flex min-h-screen flex-col font-mono" >
      <Navbar/>
      <div className='flex flex-col justify-center items-center'>
      <br></br>
      <br></br>
      <h1 className='text-center font-bold text-3xl'>Contact Us</h1>
      <br></br>
      <p>Saviour Head Office, Street No: A, Sector: H-52, Islamabad.</p>
       <p> Tel: 0333-0476538</p> 
        <p>Fax: 051-000000</p>
        <p>Web: www.saviour.gov.pk</p>
        <p>email: info@saviour.gov.pk</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </main>
  )
}