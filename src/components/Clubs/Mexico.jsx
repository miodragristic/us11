import React from 'react';
import Mexico from '../../assets/posters/Mexico.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Hirving Lozano', image: 'https://images.supersport.com/media/e2dcgfwj/hirving-lozano-220924-celebrates-g-1050.jpg?width=1920&quality=90&format=webp', link: './lozano' },
    { name: 'Raul Jimenez', image: 'https://images.supersport.com/media/ydyjkhh4/raul-jimenez-220922-training-g-1050.jpg?width=828&quality=90&format=webp', link: './jimenez' },
    { name: 'Edson Álvarez', image: 'https://westhamblog.co.uk/wp-content/uploads/2024/06/mexico-v-brazil-international-friendly-scaled.jpg', link: './edsonalvarez' },
    { name: 'Orbelín Pineda', image: 'https://www.365scores.com/es/news/wp-content/uploads/2024/06/GettyImages-1477262240-1024x683.jpg', link: './pineda' },
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

const MexicoNationalTeam = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './MexicoJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './MexicoTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './MexicoMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Mexico National Team</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Mexico}
            alt='Mexico National Team'
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

        {/* Team Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Team Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Mexico National Football Team</li>
            <li><strong>Nickname(s):</strong> El Tri</li>
            <li><strong>Founded:</strong> 1927</li>
            <li><strong>Stadium:</strong> Estadio Azteca, Mexico City, Mexico</li>
            <li><strong>Manager:</strong> Javier Aguirre</li>
            <li><strong>FIFA Ranking:</strong> #12 (as of 2023)</li>
            <li><strong>Confederation:</strong> CONCACAF</li>
            <li><strong>World Cup Appearances:</strong> 16 (as of 2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Excellence</h2>
          <p>
            The Mexico National Football Team, known as El Tri, is one of the most successful and respected teams in the world. With a rich history dating back to 1927, Mexico has been a dominant force in CONCACAF and a regular contender in World Cups.
          </p>
          <p>
            The team's legendary players such as Hirving Lozano, Raul Jimenez, and Edson Alvarez have earned Mexico a reputation for attacking football and passionate performances. Their qualification for every World Cup since 1994 highlights their consistency and talent.
          </p>
          <p>
            Mexico has always been a favorite to go far in international tournaments, and their performances on the global stage continue to captivate millions of fans.
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

export default MexicoNationalTeam;
