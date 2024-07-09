import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import InterLogo from '../Blog/Interlogo.png';

const Imga = () => {
    return (
      <div className='w-full min-h-screen bg-[#84cc16]'>
        {/* Navbar */}
        <nav className='bg-gray-800 py-4'>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  aria-controls='mobile-menu'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  {/* Icon when menu is closed */}
                  {/* Icon when menu is open */}
                </button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                {/* Logo */}
                <div className='flex-shrink-0'>
                  <img className='block lg:hidden h-8 w-auto' src={InterLogo} alt='Inter Miami' />
                  <img className='hidden lg:block h-8 w-auto' src={InterLogo} alt='Inter Miami' />
                </div>
                {/* Navigation links */}
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    <a href='/' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Home
                    </a>
                    <a href='/shop' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Shop
                    </a>
                    <a href='/' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      About
                    </a>
                    <a href='/' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Blog Content */}
        <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4 mt-16 lg:mt-10'>Inter Miami: A Global Attraction</h1>
          <div className='mb-4'>
            <img src={InterLogo} alt='Inter Miami' className='w-full h-auto rounded-lg shadow-md' style={{ maxHeight: '400px' }} />
          </div>
          <div className='text-[#020617]'>
            <p className='mb-4'>
              Inter Miami CF, a club based in Miami, has quickly emerged as a global football powerhouse, captivating fans around the world with its unique blend of talent, ambition, and location. Situated in one of the most iconic cities globally, Inter Miami benefits from a vibrant cultural backdrop and a passionate fan base eager to witness top-tier football.
            </p>
            <p className='mb-4'>
              Founded by football legend David Beckham, Inter Miami represents more than just a team; it symbolizes the evolution of soccer in the United States. With an array of international stars in its roster and a commitment to excellence both on and off the field, the club has set high standards for sporting achievement and community engagement.
            </p>
            <p className='mb-4'>
              Match days at Inter Miami's stadium have become synonymous with electric atmospheres and sold-out crowds, underscoring the club's growing influence in American sports culture. As it continues to expand its global footprint and attract new supporters worldwide, Inter Miami remains at the forefront of soccer's evolution in North America.
            </p>
            <p className='mb-4'>
              Whether you're a local fan or tuning in from abroad, Inter Miami offers a compelling narrative of ambition, diversity, and sporting excellence. Stay connected with us as we explore the captivating journey of Inter Miami CF, from its inception to its current status as a global football phenomenon.
            </p>
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

export default Imga;

