import React from 'react';
import Stl from '../../assets/posters/Stl.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'João Klauss', image: 'https://assets.goal.com/images/v3/getty-145494572/crop/MM5DCMZWGY5DONRYHJXG653FHIYDUMJVGA======/GettyImages-145494572.jpg?auto=webp&format=pjpg&width=3840&quality=60', link: './klauss' },
    { name: 'Tomáš Ostrák', image: 'https://geissblog.koeln/wp-content/uploads/2025/01/carstensen_leihe.webp', link: './ostrak' },
    { name: 'Chris Durkin', image: 'https://s3.amazonaws.com/assets.thisisasn.com/production/attacheds/13170/original/Chris_Durkin_-_ASN_TOP_-_ISI_-_2019_U-20_WC_vs_Ecuador_-_Adam_Nurkiewicz.jpg?1569464355', link: './durkin' },
    { name: 'Marcel Hartel', image: 'https://cdn.prod.www.11freunde.de/images/b5d24b92-98da-4fc7-b44f-58c371297bb0_w1200_r1_fpx52_fpy50.jpg', link: './hartel' },
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

const StLouisCitySC = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './StLouisCityJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './StLouisCityTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './StLouisCityMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>St. Louis City SC</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Stl} 
            alt='St. Louis City SC'
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
            <li><strong>Full Name:</strong> St. Louis City SC</li>
            <li><strong>Nickname(s):</strong> The City</li>
            <li><strong>Founded:</strong> 2023</li>
            <li><strong>Stadium:</strong> CITYPARK, St. Louis, Missouri</li>
            <li><strong>Capacity:</strong> 22,500</li>
            <li><strong>Owner:</strong> St. Louis CITY SC</li>
            <li><strong>Head Coach:</strong> Olof Mellberg</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Era in St. Louis Soccer</h2>
          <p>
            St. Louis City SC is the newest addition to Major League Soccer, having joined the league in 2023. With a state-of-the-art stadium in CITYPARK and a passionate fan base, the team is setting the stage for an exciting new chapter in MLS.
          </p>
          <p>
            Known for its attacking style of play and a strong commitment to local talent, St. Louis City SC is ready to make a mark on the league. With players like Jared Stroud, Indiana Vassilev, and Klaus, the team is poised for success as they embark on their inaugural season.
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

export default StLouisCitySC;
