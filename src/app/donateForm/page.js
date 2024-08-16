import Navbar from '../nav'
import Footer from '../footer'
import Form from './component/form'

export default async function Contact() {
  return (
    <main className="flex min-h-screen flex-col font-mono" >
      <Navbar/>
      <div className='flex flex-col justify-center items-center py-4'>
        <h1>DONATION FORM</h1>
      <Form/>
      </div>
      <Footer/>
    </main>
  )
}