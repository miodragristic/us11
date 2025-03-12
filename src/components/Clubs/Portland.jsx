import React from 'react';
import Portland from '../../assets/posters/Portland.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    // { name: 'Antony', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-por/lz1h9xkmvhmqdhkd9lnx.jpg', link: './DiegoValeri' },
    { name: 'Kamal Miller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OBTzPwXJxDw2RoBTT0Dar4Hkhlwac4hafA&s', link: './KamalMiller' },
    // { name: 'Felipe Mora', image: 'https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1632710776237-Z8UPMDW3BSKVDP5UYYSD/2021-09-10+Marcos+de+Oliveira+and+Felipe+Mora+Goal+Reaction+%28Ranko+Veselinovi%C4%87+Own+Goal%29.jpg', link: './FelipeMora' },
    { name: 'Diego Chará', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvPs48qADU-UwzRq223yrcFLu4lA2db6cfQ&s', link: './chara' },
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

const PortlandTimbers = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './PortlandTimbersJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './PortlandTimbersTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './PortlandTimbersMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Portland Timbers</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Portland}
            alt='Portland Timbers'
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
            <li><strong>Full Name:</strong> Portland Timbers</li>
            <li><strong>Nickname(s):</strong> The Timbers</li>
            <li><strong>Founded:</strong> 2009</li>
            <li><strong>Stadium:</strong> Providence Park, Portland, Oregon</li>
            <li><strong>Capacity:</strong> 25,218</li>
            <li><strong>Owner:</strong> Merritt Paulson</li>
            <li><strong>Head Coach:</strong> Phil Neville</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion and Tradition</h2>
          <p>
            The Portland Timbers are one of the most passionate teams in Major League Soccer, with a loyal fanbase known as the "Timber Army." Since joining the league in 2009, the Timbers have made a name for themselves as one of the most successful and exciting teams in MLS.
          </p>
          <p>
            Playing at Providence Park, the team thrives in an electric atmosphere where fans support their team with unmatched energy. With standout players like Diego Valeri, Sebastián Blanco, and Felipe Mora, the Timbers are perennial contenders in the Western Conference and have claimed an MLS Cup in 2015.
          </p>
          <p>
            Known for their attacking style of play, the Timbers have become a symbol of pride for the city of Portland and a force to be reckoned with in Major League Soccer.
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

export default PortlandTimbers;
