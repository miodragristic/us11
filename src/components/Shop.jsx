import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaShoppingCart } from 'react-icons/fa';

const Shop = () => {
  const clubs = [
    'Inter Miami',
    'Atlanta United',
    'Austin FC',
    'Chicago Fire',
    'FC Cincinnati',
    'Colorado Rapids',
    'Columbus Crew',
    'DC United',
    'FC Dallas',
    'Houston Dynamo',
    'Sporting Kansas City',
    'LA Galaxy',
    'LAFC',
    'Minnesota United',
    'CF Montreal',
    'Nashville SC',
    'New England Revolution',
    'NYCFC',
    'New York Red Bulls',
    'Orlando City',
    'Philadelphia Union',
    'Portland Timbers',
    'Real Salt Lake',
    'San Jose Earthquakes',
    'Seattle Sounders',
    'Toronto FC',
    'Vancouver Whitecaps',
    'St. Louis City SC',
  ];

  const generateShopItems = (clubName) => {
    return [
      {
        id: 1,
        title: `${clubName} Home Jersey`,
        price: '$89.99',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://www.amazon.com/example-link-1',
      },
      {
        id: 2,
        title: `${clubName} Away Jersey`,
        price: '$89.99',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://www.amazon.com/example-link-2',
      },
      {
        id: 3,
        title: `${clubName} T-Shirt`,
        price: '$29.99',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://www.amazon.com/example-link-3',
      },
      {
        id: 4,
        title: `${clubName} Scarf`,
        price: '$19.99',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://www.amazon.com/example-link-4',
      },
      {
        id: 5,
        title: `${clubName} Hat`,
        price: '$24.99',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://www.amazon.com/example-link-5',
      },
      {
        id: 6,
        title: `${clubName} Shorts`,
        price: '$34.99',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://www.amazon.com/example-link-6',
      },
    ];
  };

  return (
    <div name='shop' className='w-full min-h-screen bg-[#84cc16] pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Welcome to Our Shop</h1>
        {clubs.map((club) => (
          <div key={club} className='mb-12'>
            <h2 className='text-2xl font-bold text-[#020617] mb-4'>{club}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {generateShopItems(club).map((item) => (
                <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
                  <div className='relative overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1'>
                    <img src={item.imageUrl} alt={item.title} className='object-cover w-full h-full group-hover:scale-105 transition duration-300' />
                  </div>
                  <div className='p-4'>
                    <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                    <p className='text-gray-600 text-sm mb-2'>{item.price}</p>
                    <a href={item.link} target='_blank' rel='noopener noreferrer' className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
                      Buy Now <FaShoppingCart className='inline-block ml-2' />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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

export default Shop;
