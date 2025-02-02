import React from 'react'; 
import { Link } from 'react-router-dom'; // Import for Link
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; 
import SanDiegoLogo from '../../assets/posters/SD.png';

const SanDiegoBlog = () => {
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
                                <img className='block lg:hidden h-8 w-auto' src={SanDiegoLogo} alt='San Diego MLS' />
                                <img className='hidden lg:block h-8 w-auto' src={SanDiegoLogo} alt='San Diego MLS' />
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
                    San Diego: A New MLS Team Ready for Big Challenges
                </h1>
                <div className='mb-4'>
                    <img 
                        src={SanDiegoLogo}
                        alt='San Diego' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                        style={{ maxHeight: '400px', objectFit: 'cover' }} 
                    />
                    {/* Author and Date */}
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024</span>
                    </div>
                    <div className='mt-4 text-center'>
                        <Link to="/SanDiego">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                                Visit San Diego
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Blog Article */}
                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                    Hirving Lozano: The Star and Face of the Club
                </h2>
                <p className='mb-4'>
                    Although the club is new and still searching for its identity, it has already made a big move by signing Hirving Lozano as a Designated Player (DP). Lozano, known as a legend of Napoli and PSV, brings significant experience and recognition to the team. His arrival not only reflects the club's ambitions but also demonstrates a strategic approach to attracting the Mexican community in San Diego, which makes up a significant part of the local population.
                </p>
                <p className='mb-4'>
                    Lozano will be the leader on the field, and expectations are high—he is tasked with passing on his extensive experience to younger players and helping the team achieve its first successes in the league.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Coach and Roster: A Young Team with Great Potential
                </h3>
                <p className='mb-4'>
                    Mikey Varas has been chosen as the head coach, known for his work with the youth teams of the US national team. Although he lacks experience as a head coach in the MLS, his knowledge of American soccer and talent development could be crucial for building the team.
                </p>
                <p className='mb-4'>
                    San Diego's roster includes young and promising players, as well as several experienced internationals:
                </p>
                <ul className='list-disc list-inside mb-4'>
                    <li>Duran Ferree (GK) - currently on loan at Nordsjælland until January 2025.</li>
                    <li>Paddy McNair (DF) - on loan from West Bromwich Albion.</li>
                    <li>Hamady Diop (DF) and Jasper Löffelsend (DF) - young talents with great potential.</li>
                    <li>Aníbal Godoy (MF) - an experienced midfielder from Panama.</li>
                    <li>Tomás Ángel (FW) - a promising striker from Colombia.</li>
                </ul>

                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Conclusion
                </h3>
                <p className='mb-4'>
                    San Diego is entering the MLS with ambitions to become not only competitive but also a recognizable team. Given the strong support of the local community and the signing of international stars like Lozano, the future of this club looks bright. The first matches will show how prepared they are to face the challenges of the highest level of American soccer.
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

export default SanDiegoBlog;

