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
                    Inter Miami: A New Attempt to Claim the Title
                </h1>
                <div className='mb-4'>
                    <img 
                        src={InterLogo}
                        alt='Inter' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                        style={{ maxHeight: '400px', objectFit: 'cover' }} 
                    />
                    {/* Author and Date */}
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024</span>
                    </div>
                    <div className='mt-4 text-center'>
                        <Link to="/Inter">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                                Visit Inter Miami
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Blog Article */}
                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                    The Biggest Stars of MLS in One Team
                </h2>
                <p className='mb-4'>
                    Inter Miami CF, a club renowned for its ambitions and star-studded lineup, is entering a new season with a clear goal: winning the MLS championship. However, as the previous season demonstrated, the road to the top in MLS is anything but simple, no matter how impressive the team.
                    Without a doubt, Inter Miami boasts the biggest stars in the league. The arrival of Lionel Messi has not only raised fans' expectations but also elevated the team's level of play. With him on the squad, Inter Miami has already secured the Leagues Cup, but the MLS title remains the ultimate priority. Alongside Messi, the team features Luis Suárez, Sergio Busquets, Jordi Alba, and other teammates who bring invaluable experience to the field.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Transfer Window: New Signings
                </h3>
                <p className='mb-4'>
                    Inter Miami showcased its seriousness in strengthening the squad during this transfer window. Among the notable moves was the transfer of forward Leonardo Campana to New England Revolution for a record $2.5 million in guaranteed general allocation money. Additionally, the club extended Luis Suárez’s contract, securing his presence in the attack for the upcoming season.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Brighton Secures Talented Prospect Diego Gómez
                </h3>
                <p className='mb-4'>
                    Brighton & Hove Albion continue their impressive recruitment drive with the acquisition of Diego Gómez from Inter Miami. Signed for a reported fee of £12 million, the 21-year-old Paraguayan midfielder is the latest addition to the Seagulls’ ever-growing roster of South American talent.

                    This signing pushes Brighton's total spending this season beyond the £200 million mark—a record for the club. The investment is a testament to Brighton’s ambition to establish themselves as a top Premier League side while continuing to compete in European competitions.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Challenges in MLS
                </h3>
                <p className='mb-4'>
                    Although Inter Miami enters the season as a title favorite, MLS is a unique league where star-studded rosters and individual talents do not always guarantee success. The league is known for its parity and unpredictability, with teams like FC Cincinnati, LAFC, and Philadelphia Union capable of springing surprises.
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Conclusion
                </h3>
                <p className='mb-4'>
                    Inter Miami embarks on the new season with enormous ambitions but also an awareness of the challenges ahead. Fans hope this season will bring the club its first MLS title and lay the foundation for future success.
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
