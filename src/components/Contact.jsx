import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import ProfileImage from '../assets/Mio.png'; // Replace with the path to your image

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-rgb(255 255 255);'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 py-8 pt-40 flex flex-col justify-center h-full font-sans'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>
          Contact MIKASO
        </h1>
        <h2 className='text-2xl sm:text-4xl font-sans text-[#020617] mb-8'>
          Sports Writer & Blogger
        </h2>
        <p className='text-[#020617] max-w-[700px] mb-8'>
          I am Mio Ristic Mikaso, a passionate sports writer and blogger dedicated to bringing you the latest insights and updates in the world of sports. Feel free to reach out to me for any inquiries or collaboration opportunities.
        </p>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Profile Image */}
          <div className='w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-200 mb-8 md:mb-0 md:mr-8'>
            <img src={ProfileImage} alt='Miodrag Ristic' className='object-cover w-full h-full' />
          </div>
          {/* Contact Info */}
          <div className='text-[#020617]'>
            <p className='text-2xl font-bold mb-4'>Email</p>
            <a href='mailto:miodrag.ristic@example.com' className='text-xl text-blue-500 hover:text-blue-600'>
            us11footballclub@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              TikTok <FaTiktok size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;


