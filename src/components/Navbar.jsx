import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo11.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[150px] flex justify-between items-center px-20 bg-[#020617] z-50'> {/* Dodan z-50 za viši z-index */}
      <div>
        <Link to='/'>
          <img src={Logo} alt='Logo Image' style={{ width: '189px', cursor: 'pointer' }} />
        </Link>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex'>
          <li className='text-white font-sans text-lg'>
            <Link to='/blog'>
              BLOG
            </Link>
          </li>
          <li className='text-white font-sans text-lg'>
            <Link to='/shop'>
              SHOP
            </Link>
          </li>
          <li className='text-white font-sans text-lg'>
            <Link to='/contact'>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden text-white z-50 cursor-pointer'> {/* Dodan z-50 za viši z-index */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#84cc16] flex-col justify-center items-center text-black z-40`}> {/* Dodan z-40 za viši z-index */}
        <li className='py-6 text-4xl text-black font-sans'>
          <Link onClick={handleClick} to='/'>
            HOME
          </Link>
        </li>
        <li className='py-6 text-4xl text-black font-sans'>
          <Link onClick={handleClick} to='/blog'>
            BLOG
          </Link>
        </li>
        <li className='py-6 text-4xl text-black font-sans'>
          <Link onClick={handleClick} to='/shop'>
            SHOP
          </Link>
        </li>
        <li className='py-6 text-4xl text-black font-sans'>
          <Link onClick={handleClick} to='/contact'>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;