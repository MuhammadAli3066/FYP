import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faTools, faProjectDiagram, faTrophy, faDonate,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default async function SideBar() {
  return (

    <div className='flex flex-col justify-start py-10 items-center w-1/5 h-screen bg-blue-600'>

      <div className='text-white text-xl flex justify-between items-center'>
        <img src='/images/logo.png' alt='no Pic' className=" h-8 w-9 border-2 rounded-lg mr-3 " />
       <Link href={'/admin/'} className='hover:underline'> Bait-Ul-Mal</Link>
      </div>

      <div className='flex flex-col w-full justify-center items-center mt-6'>
        <Link href='/admin/admins' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
          <FontAwesomeIcon icon={faUser} className="mr-4 h-4 w-4 " />
          Admins
        </Link>

        <Link href='/admin/donors' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
          <FontAwesomeIcon icon={faHeart} className="mr-4 h-4 w-4 " />
          Donors
        </Link>

        <Link href='/admin/services' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
          <FontAwesomeIcon icon={faTools} className="mr-4 h-4 w-4 " />
          Services
        </Link>

        <Link href='/admin/projects' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
          <FontAwesomeIcon icon={faProjectDiagram} className="mr-4 h-4 w-4 " />
          Projects
        </Link>

        <Link href='/admin/achievements' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
          <FontAwesomeIcon icon={faTrophy} className="mr-4 h-4 w-4 " />
          Achievements
        </Link>

        <Link href='/admin/donationDetails' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
          <FontAwesomeIcon icon={faDonate} className="mr-4 h-4 w-4 " />
          Donations
        </Link>

      </div>
      <div className='flex flex-col w-full justify-center items-center mt-6 mb-6'>
        <Link href='/userDetails' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>

          <FontAwesomeIcon icon={faFacebook} className="mr-4 h-4 w-4 " />
          Facebook
        </Link>
        <Link href='/userDetails' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>

          <FontAwesomeIcon icon={faInstagram} className="mr-4 h-4 w-4 " />
          Instagram
        </Link>
        <Link href='/userDetails' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
        <FontAwesomeIcon icon={faTwitter} className="mr-4 h-4 w-4 " />
          Twitter

        </Link>
        <Link href='/userDetails' className='text-white py-2 w-full hover:bg-blue-400 flex items-center px-5'>
        <FontAwesomeIcon icon={faLinkedin} className="mr-4 h-4 w-4 " />
          Linkedin

        </Link>
      </div>

      <Link href='/logout' className='text-black text-sm w-4/5 rounded-lg flex items-center justify-center bg-white hover:bg-blue-300 flex items-center px-5'>
      <FontAwesomeIcon icon={faSignOutAlt} className="mr-4 h-3 w- " />
        LOGOUT

      </Link>

    </div>


  )
}