import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo11.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[150px] flex justify-between items-center px-20 bg-black z-50 font-bold'>
      {/* Logo */}
      <div>
        <Link to='/'>
          <img src={Logo} alt='Logo Image' style={{ width: '189px', cursor: 'pointer' }} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex'>
      <ul className='flex'>
  <li className='relative text-white font-sans text-lg px-4 group'>
    <Link to='/blog' className='relative'>
      BLOG
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  <li className='relative text-white font-sans text-lg px-4 group'>
    <Link to='/shop' className='relative'>
      TEAMS
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  <li className='relative text-white font-sans text-lg px-4 group'>
    <Link to='/supplements' className='relative'>
      SUPPLEMENTS
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  <li className='relative text-white font-sans text-lg px-4 group'>
    <Link to='/games' className='relative'>
      GAMING
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
  <li className='relative text-white font-sans text-lg px-4 group'>
    <Link to='/contact' className='relative'>
      CONTACT
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
</ul>

      </div>

      {/* Hamburger Icon for Mobile */}
      <div onClick={handleClick} className='md:hidden text-white z-50 cursor-pointer'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#020617] flex-col justify-center items-center text-white z-40`}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/'>
            HOME
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/blog'>
            BLOG
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/shop'>
            TEAMS
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/supplements'>
            SUPPLEMENTS
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/games'>
            GAMING
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/contact'>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
