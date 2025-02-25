import React from 'react'; 
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; 
import SanDiegoLogo from '../../assets/posters/SD.png';

const SanDiegoFirstWin = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            <nav className='bg-gray-800 py-4'>
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex items-center justify-between h-16'>
                        <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                            <div className='flex-shrink-0'>
                                <img className='h-8 w-auto' src={SanDiegoLogo} alt='San Diego FC Logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-10'>
                    San Diego FC Achieves First Historic MLS Win!
                </h1>
                <div className='mb-4'>
                    <img 
                        src={SanDiegoLogo}
                        alt='San Diego FC Celebrating' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                    />
                    <div className='mt-2 text-sm text-gray-600'>
                        <span>By Mio Ristic | February 25, 2025</span>
                    </div>
                </div>
                <p className='mb-4'>
                    In an electrifying debut that will be remembered for years to come, San Diego FC made history by securing their first-ever victory in Major League Soccer (MLS). The team faced off against the reigning champions, LA Galaxy, in a match that showcased both skill and determination. The final score? A resounding 2-0 in favor of San Diego FC.
                </p>
                
                <h2 className='text-3xl font-semibold text-[#020617] mb-6'>
                    The Match Highlights
                </h2>
                <p className='mb-4'>
                    The game took place at Dignity Health Sports Park, where the atmosphere was charged with excitement from the start. Fans of both teams were eager to witness history in the making. San Diego FC, having just joined the league as its 30th team, was keen to prove they could compete at the highest level.
                </p>
                <p className='mb-4'>
                    The first goal of the match came in the 52nd minute when Danish international Anders Dreyer capitalized on a critical error from LA Galaxy's goalkeeper, Novak Mićović. Dreyer’s opportunistic play not only put San Diego FC ahead but also marked the club's first goal in MLS history.
                </p>
                <p className='mb-4'>
                    Just 16 minutes later, Dreyer struck again, doubling the lead and solidifying his place in the team's history. This goal showcased his exceptional skill and composure in front of the net, leaving the Galaxy's defense scrambling.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-6'>
                    A New Era for San Diego FC
                </h2>
                <p className='mb-4'>
                    Head coach Mikey Varas expressed his pride in the team's performance, emphasizing that this victory is just the beginning. "Our goal from day one has been to compete at the highest level," Varas said. "This win is a testament to the hard work and dedication of our players and staff. We’re here to win and make our mark in the league."
                </p>
                <p className='mb-4'>
                    This historic win is not only significant for the team but also for the city of San Diego, which has long been a soccer town. The victory over a formidable opponent like LA Galaxy sends a clear message: San Diego FC is here to compete.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-6'>
                    A Record-Setting Weekend in MLS
                </h2>
                <p className='mb-4'>
                    San Diego FC’s debut victory is part of a larger trend in the league, as MLS kicked off the 2025 season with a record-setting weekend. A total of 46 goals were scored across 15 matches, surpassing the previous record of 41 goals from 2019. This exciting start bodes well for the future of the league and highlights the growing competitiveness of MLS.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-6'>
                    Looking Ahead
                </h2>
                <p className='mb-4'>
                    San Diego FC's next challenge will come on March 1, when they host St. Louis City SC at the Snapdragon Stadium. Fans are eagerly anticipating this match, hoping for another thrilling performance from their team.
                </p>
                <p className='mb-4'>
                    As San Diego FC embarks on this new journey in Major League Soccer, one thing is clear: the team has the potential to make waves in the league and bring joy to soccer fans across the region.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-6'>
                    Conclusion
                </h2>
                <p className='mb-4'>
                    With their first win in the books, San Diego FC has set the stage for an exciting season ahead. The players, coaches, and fans are united in their quest for success, and if this match is any indication, the future looks bright for the club. Here’s to many more victories and historic moments in the seasons to come!
                </p>
            </div>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                            YouTube <FaYoutube size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer'>
                            TikTok <FaTiktok size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SanDiegoFirstWin;
