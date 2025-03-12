import React from 'react';
import Rb from '../../assets/posters/Rb.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Emil Forsberg', image: 'https://nypost.com/wp-content/uploads/sites/2/2023/11/GettyImages-1781603559.jpg', link: './forsberg' },
    { name: 'Lewis Morgan', image: 'https://worldfootballindex.com/wp-content/uploads/2022/06/Lewis-Morgan-New-York-Red-Bulls.jpg', link: './morgan' },
    // { name: 'Dante Vanzeir', image: 'https://www.ligaportal.at/international/images/sid/202315/0ca391f3ea127efd9aae3f089d8eb83f2d68a47e.jpg', link: './CristianCasseres' },
    { name: 'Eric Maxim Choupo-Moting', image: 'https://afrosportnow.com/wp-content/uploads/2023/12/GettyImages-1446328647-scaled.jpg', link: './moting' },
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

const NYRedBulls = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './NYRedBullsJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './NYRedBullsTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './NYRedBullsMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>New York Red Bulls</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Rb}
            alt='New York Red Bulls'
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
            <li><strong>Full Name:</strong> New York Red Bulls</li>
            <li><strong>Nickname(s):</strong> The Red Bulls</li>
            <li><strong>Founded:</strong> 1994</li>
            <li><strong>Stadium:</strong> Red Bull Arena, Harrison, New Jersey</li>
            <li><strong>Capacity:</strong> 25,000</li>
            <li><strong>Owner:</strong> Red Bull GmbH</li>
            <li><strong>Head Coach:</strong> Sandro Schwarz</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion and Performance</h2>
          <p>
            The New York Red Bulls are one of Major League Soccer's most recognizable franchises, with a legacy rooted in their commitment to excellence on and off the pitch. Founded in 1994 as the MetroStars, the team was rebranded in 2006 under the ownership of Red Bull GmbH, and has since become one of the league's most successful and iconic clubs.
          </p>
          <p>
            Red Bull Arena in Harrison, New Jersey, has been their home since 2010, providing an electric atmosphere for fans and players alike. The team boasts passionate supporters and a competitive spirit that has led to several playoff appearances and an MLS Supporters' Shield.
          </p>
          <p>
            With standout players like Lewis Morgan, Patryk Klimala, and Cristian Cásseres Jr., the Red Bulls continue to be a powerhouse in MLS and a club with a rich history of success.
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

export default NYRedBulls;
