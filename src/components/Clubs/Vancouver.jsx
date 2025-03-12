import React from 'react';
import Vancouver from '../../assets/posters/Vancouver.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Stuart Armstrong', image: 'https://cdn.apollo.audio/one/media/66cd/e06b/1378/6a05/a100/31d9/2X9CRE7.jpg', link: './armstrong' },
    { name: 'Andrés Cubas', image: 'https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1656311673001-MA3KT4Y0MCW73OO1XEM1/2022-06-26+Andres+Cubas.jpg', link: './cubas' },
    { name: 'Ryan Gauld', image: 'https://cdn1.rangersnews.uk/uploads/24/2024/03/GettyImages-1717990663-1140x760.jpg', link: './gauld' },
    { name: 'Ranko Veselinović', image: 'https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1632715707355-3BU3N34LO87LMCPZSM95/2021-09-10+Ranko+Veselinovi%C4%87.jpg?format=750w', link: './veselinovic' },
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

const VancouverWhitecaps = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './VancouverWhitecapsJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './VancouverWhitecapsTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './VancouverWhitecapsMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Vancouver Whitecaps</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Vancouver}
            alt='Vancouver Whitecaps'
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
            <li><strong>Full Name:</strong> Vancouver Whitecaps FC</li>
            <li><strong>Nickname(s):</strong> The Caps</li>
            <li><strong>Founded:</strong> 2009</li>
            <li><strong>Stadium:</strong> BC Place, Vancouver, British Columbia</li>
            <li><strong>Capacity:</strong> 22,120</li>
            <li><strong>Owner:</strong> Vancouver Whitecaps FC</li>
            <li><strong>Head Coach:</strong> Jesper Sørensen</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Growing Force in MLS</h2>
          <p>
            Vancouver Whitecaps FC is a Major League Soccer club based in Vancouver, British Columbia, founded in 2009. The team plays their home games at BC Place, a venue that offers one of the best atmospheres in the league.
          </p>
          <p>
            The Whitecaps are known for their fast-paced style of play and their commitment to developing homegrown talent. With key players like Ryan Gauld, Lucas Cavallini, and Cristian Dájome, the team is steadily making a name for itself as a rising force in MLS.
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

export default VancouverWhitecaps;
