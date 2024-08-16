import { getSessionUser } from './lib/session'
import Link from 'next/link'
import { getUserByUserID } from './lib/db'

export default async function Navbar(){
    const user = await getSessionUser()
    let userName
    if (user) {
      const data = await getUserByUserID(user)
      userName = data[0].userName
    }
    return <>
        <nav class="flex justify-between items-center bg-blue-500 h-12 w-screen p-9">
        <div className='text-white text-xl flex justify-between items-center'>
        <img src='/images/logo.png' alt='no Pic' className=" h-12 w-12 border-2 rounded-full mr-3 "/>
          Bait-ul-mal
        </div>
        <div>
          <Link href='/home' class="text-sm p-2 text-white hover:bg-blue-600 rounded m-2">HOME</Link>
          <Link href='/about' class="text-sm p-2 text-white hover:bg-blue-600 rounded m-2 ">ABOUT US</Link>
          <Link href='/faq' class="text-sm p-2 text-white hover:bg-blue-600 rounded m-2">FAQ</Link>
          <Link href='/contact' class="text-sm p-2 text-white hover:bg-blue-600 rounded m-2">CONTACT</Link>
        </div>
        <div className='flex  justify-between items-center'>
          {user?<div className='flex justify-between items-center text-white text-sm mr-5 '>
            {userName}
          <img src='/images/account.png' alt='no Pic' className=" h-6 w-6 ml-3"/>
          </div>:<div></div>}
          {user ?
            <Link href='/logout' class="flex justify-between items-center p-2 text-white hover:bg-blue-600 hover:text-white rounded m-2">LOGOUT
            <img src='/images/arrow.png' alt='no Pic' className=" h-4 w-4 ml-2 animate-pulse"/>
            </Link>
            :
            <div className='flex justify-between items-center'>
            <Link href='/register' class="text-sm p-2 text-white hover:bg-blue-600 hover:text-white rounded m-2">REGISTER</Link>
            <Link href='/login' class="text-sm flex justify-between items-center p-2 text-white hover:bg-blue-600 hover:text-white rounded m-2">LOGIN
            <img src='/images/private.png' alt='no Pic' className=" h-7 w-7 mx-2 animate-pulse"/>
            </Link>
            </div>}
        </div>
      </nav>
    </>
}