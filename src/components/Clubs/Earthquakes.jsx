import React from 'react';
import SJ from '../../assets/posters/SJ.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Cristian Espinoza', image: 'https://www.bssnews.net/assets/news_photos/2023/05/07/image-124146-1683436293.jpg', link: './espinoza' },
    { name: 'Cristian Arango', image: 'https://images.supersport.com/media/30sd15ex/cristian-arango-1200g.jpg?width=1920&quality=90&format=webp', link: './arango' },
    { name: 'Carlos Gruezo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrAixITzt_8NqTyu6Ya42MbQGtaqqyO40sg&s', link: './gruezo' },
    // { name: 'Amahl Pellegrino', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-sje/wwkldep6icahfxxj2bzs.jpg', link: './TannerBeason' },
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

const SanJoseEarthquakes = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './SanJoseEarthquakesJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './SanJoseEarthquakesTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './SanJoseEarthquakesMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>San Jose Earthquakes</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={SJ}
            alt='San Jose Earthquakes'
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
            <li><strong>Full Name:</strong> San Jose Earthquakes</li>
            <li><strong>Nickname(s):</strong> The Quakes</li>
            <li><strong>Founded:</strong> 1994</li>
            <li><strong>Stadium:</strong> PayPal Park, San Jose, California</li>
            <li><strong>Capacity:</strong> 18,000</li>
            <li><strong>Owner:</strong> Earthquakes Soccer, LLC</li>
            <li><strong>Head Coach:</strong> Bruce Arena</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rich Legacy in Silicon Valley</h2>
          <p>
            Founded in 1994, San Jose Earthquakes is one of Major League Soccer's most iconic teams, boasting a passionate fanbase in the heart of Silicon Valley. Known for their fast-paced, attacking style of play, the Quakes are always a team to watch.
          </p>
          <p>
            With a home at PayPal Park, the club has grown both on and off the field, building a strong squad with players like Cristian Espinoza, Jeremy Ebobisse, and Jackson Yueill. The Quakes are committed to competing for MLS championships and continuing their proud tradition in the league.
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

export default SanJoseEarthquakes;
