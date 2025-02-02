import React from 'react'; 
import { Link } from 'react-router-dom'; // Import for Link
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; 
import SanDiegoLogo from '../../assets/posters/SD.png';
 

const MLSBlog = () => {
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
                                <img className='block lg:hidden h-8 w-auto' src={SanDiegoLogo} alt='MLS' />
                                <img className='hidden lg:block h-8 w-auto' src={SanDiegoLogo} alt='MLS' />
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
                    MLS: Past, Present, and Future
                </h1>
                <div className='mb-4'>
                <img 
                    src='https://images.unsplash.com/photo-1653014741491-ff4c23be99be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                    alt='San Diego' 
                    className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                    style={{ maxHeight: '400px', objectFit: 'cover' }} 
                />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024</span>
                    </div>
                    <div className='mt-4 text-center'>
                        <a href="../../download-page" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                            Download eBook
                        </a>
                    </div>
                </div>

                <h2 className='text-3xl font-semibold text-[#020617] mb-8'>The Beginnings</h2>
                <p className='mb-4'>
                    Major League Soccer (MLS) began in 1996 as part of FIFA's condition for the U.S. hosting the 1994 World Cup. The league started with just 10 teams, struggling to establish itself in a country where soccer was far from the dominant sport. Early matches were played in large, mostly empty stadiums, and the league's financial struggles were well-documented. Innovations like the "shootout" to settle draws were introduced to appeal to American sports fans but often alienated traditional soccer audiences.
                </p>
                <p className='mb-4'>
                    Despite these challenges, key players like Landon Donovan, Cobi Jones, and international stars such as Carlos Valderrama and Roberto Donadoni gave MLS credibility and visibility during its formative years. The league’s survival hinged on the support of committed owners and the growing popularity of soccer among youth in the U.S.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-8'>The Present: A Global Attraction</h2>
                <p className='mb-4'>
                    Fast forward to 2024, and MLS has become one of the fastest-growing soccer leagues in the world. With 29 teams, including new franchises like San Diego FC, the league is a significant player in global soccer. Soccer-specific stadiums, robust fan bases, and lucrative broadcasting deals have replaced the early days of uncertainty. International superstars like Lionel Messi, David Beckham, Thierry Henry, and Zlatan Ibrahimović have elevated the league’s profile.
                </p>
                <p className='mb-4'>
                    Teams now boast a mix of experienced international stars and homegrown talents developed through robust academy systems. The Designated Player Rule, introduced in 2007, allows teams to sign marquee players like Messi or Hirving Lozano without breaching salary caps, ensuring a blend of global appeal and local development.
                </p>

               
                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>The Future: Ambition and Growth</h2>
                <p className='mb-4'>
                    The future of MLS looks brighter than ever. The league plans to expand to 30 teams by 2026, coinciding with the FIFA World Cup being hosted in North America. Clubs are investing heavily in facilities, youth academies, and analytics to stay competitive.
                </p>
                <p className='mb-4'>
                    Technological innovations, such as improved VAR systems and enhanced fan engagement tools, aim to make the game more appealing. Sustainability initiatives, like eco-friendly stadiums, are also becoming a priority.
                </p>
                <p className='mb-4'>
                    However, challenges remain. MLS must balance its identity as a developmental league and a competitive destination for top talent. Maintaining parity while allowing clubs to grow financially and competitively will be a delicate task.
                </p>

                <h2 className='text-2xl font-semibold text-[#020617] mb-7'>Conclusion</h2>
                <p className='mb-4'>
                    MLS has transformed from a fledgling league into a global soccer force, with ambitious plans for the future. As it continues to grow, the league is poised to play a pivotal role in the global soccer landscape while fostering a uniquely American soccer culture. Fans and players alike eagerly anticipate what’s next for Major League Soccer.
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

export default MLSBlog;

