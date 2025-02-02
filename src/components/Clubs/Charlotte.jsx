import React from 'react';
import Charlotte from '../../assets/posters/charlotte.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Ashley Westwoods', image: 'https://www.qcnews.com/wp-content/uploads/sites/109/2024/05/GettyImages-2152987244.jpg', link: './westwoods' },
    { name: 'Karol Świderski', image: 'https://www.goal.pl/wp-content/uploads/2024/10/karol-swiderski-1.jpg', link: './swiderski' },
    { name: 'Tim Ream', image: 'https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2175381685-1024x721.jpg', link: './ream' },
    { name: 'Liel Abada', image: 'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_900/v1/media/gmg/XYANLDQB2NDYPCMTNDRVN75J64.jpg?_a=DAJAUVWIZAAA', link: './abada' },
  ];

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className='text-6xl font-bold text-[#020617] mb-8 text-center'>Trending Players</h2>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {players.map((player) => (
          <a 
            key={player.name} 
            href={player.link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl'
          >
            <img 
              src={player.image} 
              alt={player.name} 
              className='h-64 w-full object-cover mb-4 rounded-lg' 
              style={{ objectPosition: 'center 2%' }} // Pomicanje slike
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

const CharlotteFC = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: 'https://www.amazon.com/jerseys-charlotte-fc', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: 'https://www.amazon.com/tshirts-charlotte-fc', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: 'https://www.amazon.com/merchandise-charlotte-fc', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Charlotte FC</h1>
        <div className='mb-6'>
          <img 
            src={Charlotte} 
            alt='Charlotte FC' 
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
            <li><strong>Full Name:</strong> Charlotte Football Club</li>
            <li><strong>Nickname(s):</strong> The Crown</li>
            <li><strong>Founded:</strong> December 17, 2019</li>
            <li><strong>Stadium:</strong> Bank of America Stadium, Charlotte, North Carolina</li>
            <li><strong>Capacity:</strong> 74,867</li>
            <li><strong>Owners:</strong> David Tepper</li>
            <li><strong>Head Coach:</strong> Christian Lattanzio</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rising Star in MLS</h2>
          <p>
            Charlotte FC is a relatively new football club, having joined MLS in 2022. The team quickly gained a passionate fanbase and is known for its vibrant atmosphere during matches.
          </p>
          <p>
            With a focus on building a competitive squad, Charlotte FC has attracted talented players and experienced coaches. The club's ambition is to not only compete in the league but also to establish itself as a strong presence in American soccer.
          </p>
          <p>
            Charlotte's location and the growing interest in soccer in the region make it an exciting place for both players and fans alike. The future looks bright as they aim for success both on and off the pitch.
          </p>
        </div>

        {/* Trending Players Section */}
        <TrendingPlayers />

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img src={item.imageUrl} alt={item.title} className='object-contain w-full h-full group-hover:scale-105 transition duration-300' />
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                <p className='text-lg font-semibold'>{item.price}</p>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2'>
                  Buy on Amazon <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharlotteFC;
