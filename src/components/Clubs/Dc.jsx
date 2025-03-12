import React from 'react';
import DC from '../../assets/posters/DC.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Christian Benteke', image: 'https://cdn.mos.cms.futurecdn.net/e8Zxx3N6t3F7Wieg7mQfuM.jpg', link: './Benteke' },
    // { name: 'Dominique Badji', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dc/det2dl7m2vkyqsege7yt.jpg', link: './TaxiFountas' },
    // { name: 'Jackson Hopkins', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dc/fn1nle8cbcz4yb6lqnkq.jpg', link: './FelipeMartins' },
    { name: 'Gabriel Pirani', image: 'https://wtop.com/wp-content/uploads/2024/06/GettyImages-2150745016-scaled.jpg', link: './Pirani' },
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

const DCUnited = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './DCUnitedJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './DCUnitedTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './DCUnitedMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>D.C. United</h1>
        <div className='mb-6'>
          {/* Add an image of D.C. United here */}
          <img
            src={DC}
            alt='D.C. United'
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
            <li><strong>Full Name:</strong> D.C. United</li>
            <li><strong>Nickname(s):</strong> The Black-and-Red</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Audi Field, Washington, D.C.</li>
            <li><strong>Capacity:</strong> 20,000</li>
            <li><strong>Owner:</strong> Jason Levien and Steve Kaplan</li>
            <li><strong>Head Coach:</strong> Troy Lesesne</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>One of the MLS Powerhouses</h2>
          <p>
            D.C. United is one of the most storied franchises in Major League Soccer. Founded in 1996, the club has been home to some of the league's brightest stars and has won multiple MLS Cup championships. 
          </p>
          <p>
            With passionate supporters and a strong presence in Washington D.C., D.C. United is a team with a proud history. Led by former England international Wayne Rooney as head coach, the team continues to fight for dominance in MLS, with key players like Christian Benteke and Taxi Fountas leading the charge.
          </p>
          <p>
            The team plays at Audi Field, a state-of-the-art venue in the heart of D.C. and remains a fan favorite throughout the league.
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

export default DCUnited;
