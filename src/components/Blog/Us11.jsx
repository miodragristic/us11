import React from 'react'; 
import { Link } from 'react-router-dom'; // Dodaj import za Link
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; 
import Us11 from '../../assets/11.png'; 


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
                                <img className='block lg:hidden h-8 w-auto' src={Us11} alt='Inter Miami' />
                                <img className='hidden lg:block h-8 w-auto' src={Us11} alt='Inter Miami' />
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
                    Welcome to US11: Your Hub for Everything Soccer
                </h1>
                <div className='mb-4'>
                    <img 
                        src={Us11}
                        alt='Us11' 
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
                    Stay Informed with Our Blogs
                </h2>
                <p className='mb-4'>
                    At US11, we live and breathe soccer. Our mission is simple: to connect, inform, and inspire soccer enthusiasts across the United States, Canada, and beyond. From the electrifying matches of Major League Soccer (MLS) and the U.S. Men’s National Team (USMNT) to the dynamic landscapes of USL, NISA, and youth development programs, we cover it all.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Stay Informed with Our Blogs
                </h3>
                <p className='mb-4'>
                    Our blog is your go-to source for all things soccer. Whether you’re looking for the latest news, in-depth analysis, or a trip down memory lane with retro content, we’ve got you covered.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Youth Development and Support
                </h3>
                <p className='mb-4'>
                    We believe in nurturing the next generation of soccer stars. At US11, we’re committed to helping young players achieve their dreams by offering guidance on training programs and supplements to enhance performance.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Gaming Meets Soccer
                </h3>
                <p className='mb-4'>
                    For gamers who love soccer, US11 is your ultimate companion. From tracking the latest trends in soccer games like FIFA to celebrating retro classics, we bring the virtual and real worlds of soccer together.
                </p>
                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Shop the Best Soccer Merchandise
                </h3>
                <p className='mb-4'>
                    We’ve curated an exclusive collection of soccer gear for fans and players alike. At US11, you’ll find jerseys, posters, and t-shirts from your favorite clubs.
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
