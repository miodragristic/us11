import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from 'react-icons/fa';
import Lionel from '../assets/lionel1.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#84cc16]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full font-sans'>
        <div className='flex flex-col justify-center md:w-2/3'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#020617]'>
            Welcome to US11
          </h1>
          <h2 className='text-4xl sm:text-7xl font-sans text-[#020617]'>
            Your Home for US Soccer and MLS!
          </h2>
          <p className='text-[#020617] py-4 max-w-[700px]'>
            At US11, we are passionate about bringing you the latest news, insights, and updates from the world of US soccer and Major League Soccer (MLS). Don't forget to visit our shop, where you can find high-quality jerseys at great prices. Show your support for your favorite teams with our official merchandise. From the latest kits to classic designs, we have something for every fan. Welcome to the hub of soccer excellence. Welcome to US11!
          </p>
          {/* Shop button visible on large screens */}
          <div className='hidden md:flex'>
            <Link to='/shop' className='text-white bg-[#020617] group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105'>
              SHOP
              <HiArrowNarrowRight className='ml-3' />
            </Link>
          </div>
        </div>
        {/* Lionel image */}
        <div className='hidden md:block absolute bottom-0 right-0 mb-0 mr-0'>
          <img src={Lionel} alt='Lionel' className='w-[440px]' />
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

export default Home;
