import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
          <a className='flex justify-between items-center w-full text-white' href='http://www.youtube.com/@us11fc' target="_blank" rel="noopener noreferrer">
            YouTube <FaYoutube size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-600'>
          <a className='flex justify-between items-center w-full text-white' href='https://www.instagram.com/us11fc/' target="_blank" rel="noopener noreferrer">
            Instagram <FaInstagram size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-white' href='https://www.facebook.com/profile.php?id=61565465891580' target="_blank" rel="noopener noreferrer">
            Facebook <FaFacebook size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
          <a className='flex justify-between items-center w-full text-white' href='/' target="_blank" rel="noopener noreferrer">
            TikTok <FaTiktok size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
          <a className='flex justify-between items-center w-full text-white' href='https://x.com/US11FC' target="_blank" rel="noopener noreferrer">
            X <FaTwitter size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
          <a className='flex justify-between items-center w-full text-white' href='https://www.linkedin.com/company/us11' target="_blank" rel="noopener noreferrer">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
