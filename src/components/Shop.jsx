import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaShoppingCart } from 'react-icons/fa';
import Inter from '../assets/logos/Inter_Miami_CF_logo.svg.png';
import Atlanta from '../assets/logos/Atlanta_MLS.svg.png';
import Austin from '../assets/logos/Austin_FC_logo.svg.png';
import Montreal from '../assets/logos/CF_Montreal_logo_2023.svg.png';
import Cincinnati from '../assets/logos/FC_Cincinnati_primary_logo_2018.svg.png';
import Charlotte from '../assets/logos/Charlotte_FC_logo.svg.png';
import Chicago from '../assets/logos/Chicago_Fire_logo,_2021.svg.png';
import Colorado from '../assets/logos/Colorado_Rapids_logo.svg.png';
import Columbus from '../assets/logos/Columbus_Crew_logo_2021.svg.png';
import DCUnited from '../assets/logos/D.C._United_logo_(2016).svg.png';
import FCDallas from '../assets/logos/FC_Dallas_logo.svg.png';
import Houston from '../assets/logos/Houston_Dynamo_FC_logo.svg.png';
import KansasCity from '../assets/logos/Sporting_Kansas_City_logo.svg.png';
import LAGalaxy from '../assets/logos/Los_Angeles_Galaxy_logo.svg.png';
import LAFC from '../assets/logos/Los_Angeles_Football_Club.svg.png';
import Minnesota from '../assets/logos/Minnesota_United_FC_(MLS)_Primary_logo.svg.png';
import Nashville from '../assets/logos/Nashville_SC_logo,_2020.svg.png';
import NewEngland from '../assets/logos/New_England_Revolution_(2021)_logo.svg.png';
import NYCFC from '../assets/logos/New_York_City_FC.svg.png';
import NYRB from '../assets/logos/New_York_Red_Bulls_logo.svg.png';
import Orlando from '../assets/logos/Orlando_City_2014.svg.png';
import Philadelphia from '../assets/logos/Philadelphia_Union_2018_logo.svg.png';
import Portland from '../assets/logos/Portland_Timbers_logo.svg.png';
import RealSaltLake from '../assets/logos/Real_Salt_Lake_2010.svg.png';
import SanJose from '../assets/logos/San_Jose_Earthquakes_2014.svg.png';
import Seattle from '../assets/logos/Seattle_Sounders_logo.svg.png';
import Toronto from '../assets/logos/Toronto_FC_Logo.svg.png';
import Vancouver from '../assets/logos/Vancouver_Whitecaps_FC_logo.svg.png';
import StLouis from '../assets/logos/St._Louis_City_SC_logo.svg.png';
import SanDiego from '../assets/logos/San_Diego_FC_logo.svg.png';
import USANational from '../assets/logos/United_States_Soccer_Federation_logo_2016.svg.png';
import CanadaNational from '../assets/logos/Canada-Badge-Outline.png';
import MexicanNational from '../assets/logos/Mexico_national_football_team_crest.svg.png';

const generateShopItems = () => {
  return [
    { id: 1, title: "Inter Miami", imageUrl: Inter, link: "./Inter" },
    { id: 2, title: "Atlanta United", imageUrl: Atlanta, link: "./Atlanta" },
    { id: 3, title: "Austin FC", imageUrl: Austin, link: "./Austin" },
    { id: 4, title: "Charlotte", imageUrl: Charlotte, link: "./Charlotte" },
    { id: 5, title: "Chicago Fire", imageUrl: Chicago, link: "./Chicago" },
    { id: 6, title: "FC Cincinnati", imageUrl: Cincinnati, link: "./Cincinnati" },
    { id: 7, title: "Colorado Rapids", imageUrl: Colorado, link: "./Colorado" },
    { id: 8, title: "Columbus Crew", imageUrl: Columbus, link: "./Columbus" },
    { id: 9, title: "D.C. United", imageUrl: DCUnited, link: "./Dc" },
    { id: 10, title: "FC Dallas", imageUrl: FCDallas, link: "./Dallas" },
    { id: 11, title: "Houston Dynamo", imageUrl: Houston, link: "./Houston" },
    { id: 12, title: "Sporting Kansas City", imageUrl: KansasCity, link: "./Sporting" },
    { id: 13, title: "LA Galaxy", imageUrl: LAGalaxy, link: "./LAGalaxy" },
    { id: 14, title: "LAFC", imageUrl: LAFC, link: "./LAFC" },
    { id: 15, title: "Minnesota United", imageUrl: Minnesota, link: "./Minnesota" },
    { id: 16, title: "CF Montreal", imageUrl: Montreal, link: "./Montreal" },
    { id: 17, title: "Nashville SC", imageUrl: Nashville, link: "./Nashville" },
    { id: 18, title: "New England Revolution", imageUrl: NewEngland, link: "./Ne" },
    { id: 19, title: "NYCFC", imageUrl: NYCFC, link: "./NYCFC" },
    { id: 20, title: "New York Red Bulls", imageUrl: NYRB, link: "./NYRB" },
    { id: 21, title: "Orlando City", imageUrl: Orlando, link: "./Orlando" },
    { id: 22, title: "Philadelphia Union", imageUrl: Philadelphia, link: "./Philadelphia" },
    { id: 23, title: "Portland Timbers", imageUrl: Portland, link: "./Portland" },
    { id: 24, title: "Real Salt Lake", imageUrl: RealSaltLake, link: "./Real" },
    { id: 25, title: "San Jose Earthquakes", imageUrl: SanJose, link: "./Earthquakes" },
    { id: 26, title: "Seattle Sounders", imageUrl: Seattle, link: "./Seattle" },
    { id: 27, title: "Toronto FC", imageUrl: Toronto, link: "./Toronto" },
    { id: 28, title: "Vancouver Whitecaps", imageUrl: Vancouver, link: "./Vancouver" },
    { id: 29, title: "St. Louis City SC", imageUrl: StLouis, link: "./St" },
    { id: 30, title: "San Diego", imageUrl: SanDiego, link: "./Sandiego" },
    { id: 31, title: "USA National Team", imageUrl: USANational, link: "./Usa" },
    { id: 32, title: "Canada National Team", imageUrl: CanadaNational, link: "./Canada" },
    { id: 33, title: "Mexico National Team", imageUrl: MexicanNational, link: "./Mexico" },
  ];
};

const Shop = () => {
  const items = generateShopItems();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div name='shop' className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Trending Teams</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img src={item.imageUrl} alt={item.title} className='object-contain w-full h-full group-hover:scale-105 transition duration-300' />
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                <a href={item.link} rel='noopener noreferrer' className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
                  Visit <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <div className='mt-8 flex justify-center'>
          <button 
            onClick={scrollToTop} 
            className='text-white bg-[#020617] group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105'>
            Back to top
          </button>
        </div>
      </div>
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

export default Shop;

