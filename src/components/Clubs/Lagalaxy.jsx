import React from 'react';
import Galaxy from '../../assets/posters/Galaxy.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: './Reus' },
    { name: 'Riqui Puig', image: 'https://cdn1.lagalaxy.news/uploads/54/2023/08/GettyImages-1499684145-1920x1280.jpg', link: './Puig' },
    { name: 'Gabriel Pec', image: 'https://cdn1.vamofutebol.com/uploads/5/2024/12/GettyImages-2185864981-1140x760.jpg', link: './Pec' },
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

const LAGalaxy = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './LAGalaxyJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './LAGalaxyTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './LAGalaxyMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>LA Galaxy</h1>
        <div className='mb-6'>
          {/* Add an image of LA Galaxy here */}
          <img
            src={Galaxy}
            alt='LA Galaxy'
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
            <li><strong>Full Name:</strong> LA Galaxy</li>
            <li><strong>Nickname(s):</strong> The Galaxy</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Dignity Health Sports Park, Carson, California</li>
            <li><strong>Capacity:</strong> 27,000</li>
            <li><strong>Owner:</strong> AEG (Anschutz Entertainment Group)</li>
            <li><strong>Head Coach:</strong> Greg Vanney</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Stars in Los Angeles</h2>
          <p>
            LA Galaxy, one of the most iconic teams in Major League Soccer, has built a legacy of excellence and star power since its founding in 1996. Known for attracting international talent like David Beckham, Zlatan Ibrahimović, and now Chicharito, the Galaxy have set the standard for success in MLS.
          </p>
          <p>
            The team plays at the Dignity Health Sports Park, one of the best soccer-specific stadiums in the country. The Galaxy are renowned for their attacking playstyle and have consistently been a contender for MLS Cup titles.
          </p>
          <p>
            With stars like Chicharito and Douglas Costa, the LA Galaxy continue to make waves in the league and are always looking to add more trophies to their storied history.
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

export default LAGalaxy;
