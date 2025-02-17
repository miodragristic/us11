import React from 'react';
import Lafc from '../../assets/posters/Lafc.png'
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Denis Bouanga', image: 'https://cdn1.rangersnews.uk/uploads/24/2023/03/GettyImages-1246857078-1140x760.jpg', link: './bouanga' },
    { name: 'Olivier Giroud', image: 'https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg?VersionId=.zVbe1A5VQJ_HQsT0MUZseBycBDhlb1p', link: './giroud' },
    { name: 'Hugo Lloris', image: 'https://cdn1.thespurs.news/uploads/36/2024/02/GettyImages-2003725135-1140x760.jpg', link: './lloris' },
    { name: 'Cristian Olivera', image: 'https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2153266577-1140x760.jpg', link: './olivera' },
  ];

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className='text-6xl font-bold text-[#020617] mb-8 text-center'>Trending Players</h2>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {players.map((player) => (
          <a
            key={player.name}
            href={player.link}
            className='group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl'
          >
            <img
              src={player.image}
              alt={player.name}
              className='h-64 w-full object-cover mb-4 rounded-lg'
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

const LAFC = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './LAFCJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './LAFCTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './LAFCMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Los Angeles FC</h1>
        <div className='mb-6'>
          {/* Add an image of LAFC here */}
          <img
            src={Lafc}
            alt='LAFC'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
          />
        </div>

              {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
              <div className='flex gap-4 mb-8 justify-center'>
          <a 
            href="https://example.com/buy-ticket" 
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKETS
          </a>
          <a 
            href="https://example.com/find-hotel" 
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        {/* Club Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Los Angeles FC</li>
            <li><strong>Nickname(s):</strong> LAFC, The Black & Gold</li>
            <li><strong>Founded:</strong> 2014</li>
            <li><strong>Stadium:</strong> BMO Stadium, Los Angeles, California</li>
            <li><strong>Capacity:</strong> 22,000</li>
            <li><strong>Owner:</strong> LAFC Ownership Group</li>
            <li><strong>Head Coach:</strong> Steve Cherundolo</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Era in Los Angeles</h2>
          <p>
            Los Angeles FC is one of the newest teams in Major League Soccer, founded in 2014. Despite being a relatively new club, LAFC has already made a huge impact in the league, attracting international talent, a passionate fanbase, and producing some of the most exciting soccer in MLS.
          </p>
          <p>
            The club plays at the state-of-the-art BMO Stadium in downtown Los Angeles, a venue that reflects the team’s modern approach to the game. With world-class players like Carlos Vela and Diego Rossi, LAFC is always a contender for MLS Cup titles.
          </p>
          <p>
            LAFC's mission is to represent Los Angeles both on and off the field, embracing the city's diversity, culture, and passion for soccer. The team's relentless attacking play and commitment to high-quality soccer make them one of the most exciting teams to watch in MLS.
          </p>
        </div>

        {/* Trending Players Section */}
        <TrendingPlayers />

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map((item) => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className='object-contain w-full h-full group-hover:scale-105 transition duration-300'
                />
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                <p className='text-lg font-semibold'>{item.price}</p>
                <a
                  href={item.link}
                  className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2'
                >
                  Buy Now <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LAFC;
