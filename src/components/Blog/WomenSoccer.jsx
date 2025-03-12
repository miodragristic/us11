import React from 'react'; 
import { Link } from 'react-router-dom'; // Dodaj import za Link
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; 
import InterLogo from '../Blog/Interlogo.png'; 


const Imga = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
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
                                    <a href='/about' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                        About
                                    </a>
                                    <a href='/contact' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
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
                <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10'>
                    Women in Soccer: Breaking Barriers and Inspiring Generations
                </h1>
                <div className='mb-4'>
                    <img 
                        src='https://images.unsplash.com/photo-1532290278496-3d29b25b691a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                        alt='Inter' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                        style={{ maxHeight: '400px', objectFit: 'cover' }} 
                    />
                    {/* Author and Date */}
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024</span>
                    </div>
 
                </div>

                {/* Blog Article */}
                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                    The U.S. Women's National Team: A Legacy of Excellence
                </h2>
                <p className='mb-4'>
                    Soccer, the world's most beloved sport, has historically been dominated by men. However, over the past few decades, women have not only claimed their place on the field but have also redefined the game, breaking barriers and inspiring generations. One of the most shining examples of this progress is the unparalleled success and influence of the U.S. Women's National Team (USWNT) and the growth of women's soccer in the United States.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    The USWNT: A Legacy of Excellence
                </h3>
                <p className='mb-4'>
                    The USWNT has long been a powerhouse in women’s soccer, setting the gold standard for success, resilience, and advocacy both on and off the field. With four FIFA Women’s World Cup titles (1991, 1999, 2015, and 2019) and four Olympic gold medals, their achievements have elevated the sport to new heights globally. Players like Mia Hamm, Abby Wambach, Megan Rapinoe, and Alex Morgan have become household names, celebrated for their skill, determination, and leadership.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    The NWSL: A Growing Hub for Talent
                </h3>
                <p className='mb-4'>
                    The National Women’s Soccer League (NWSL) has been instrumental in developing and showcasing female soccer talent in the U.S. Founded in 2012, the league has grown steadily, attracting world-class players from across the globe. Clubs like Portland Thorns FC, OL Reign, and San Diego Wave FC regularly draw passionate crowds, demonstrating the growing appetite for women’s soccer.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Soccer Across the U.S.
                </h3>
                <p className='mb-4'>
                    Women’s soccer thrives at all levels in the United States, from youth leagues to collegiate programs. The NCAA women’s soccer competition, for instance, has been a breeding ground for future stars, including many USWNT players. This robust pipeline ensures that the sport continues to grow and maintain its competitive edge on the global stage.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    A Global Impact
                </h3>
                <p className='mb-4'>
                    The influence of U.S. women’s soccer extends far beyond national borders. The success of the USWNT and the NWSL has inspired the development of women’s leagues and programs worldwide. Nations like England, Spain, and Australia are investing heavily in their women’s teams, creating a more competitive and exciting landscape for the sport.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Conclusion
                </h3>
                <p className='mb-4'>
                    The story of women in soccer, particularly in the United States, is one of triumph over adversity. From the dominance of the USWNT to the rapid growth of the NWSL, the achievements in women’s soccer serve as a testament to what’s possible when talent meets opportunity and determination.
                </p>
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
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
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
