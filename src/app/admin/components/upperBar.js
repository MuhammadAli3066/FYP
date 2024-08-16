import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { getSessionUser } from '@/app/lib/session';
import { getUserByUserID } from '@/app/lib/db';
export default async function UpperBar() {

    const user = await getSessionUser()
    let userName
    if (user) {
      const data = await getUserByUserID(user)
      userName = data[0].userName
    }

    return (

        <div className='flex justify-end items-center w-full h-20 bg-blue-600'>
            <div className='flex justify-center items-center w-40'>
                <FontAwesomeIcon icon={faEnvelope} className="text-white mr-6 h-5 w-5 cursor-pointer hover:text-green-300" />

                <FontAwesomeIcon icon={faBell} className=" text-white mr-6 h-5 w-5 cursor-pointer hover:text-red-600" />
            </div>
            {user?<div className='flex justify-between items-center text-white text-sm mr-5 '>
            {userName}
          <img src='/images/account.png' alt='no Pic' className=" h-6 w-6 ml-3"/>
          </div>:<div></div>}
        </div>


    )
}