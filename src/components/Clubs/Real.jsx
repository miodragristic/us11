import React from 'react';
import Real from '../../assets/posters/Real.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    // { name: 'Axel Kei', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-real/yztd1gjeqfcgknmkmxfq.jpg', link: './AlbertRusnak' },
    // { name: 'Diogo Gonçalves', image: 'https://www.shutterstock.com/editorial/image-editorial/MfT5Q441N2z0Ue42MzI5NTA=/match-between-real-salt-lake-portland-timbers-220nw-14733382i.jpg', link: './DamirKreilach' },
    { name: 'Pablo Ruiz', image: 'https://bookingagentinfo.com/wp-content/uploads/2023/12/Pablo-Ruiz-1.jpg', link: './PabloRuiz' },
    { name: 'Diego Luna', image: 'https://www.abc4.com/wp-content/uploads/sites/4/2024/07/GettyImages-2157934329.jpg', link: './luna' },
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

const RealSaltLake = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './RealSaltLakeJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './RealSaltLakeTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './RealSaltLakeMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Real Salt Lake</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Real}
            alt='Real Salt Lake'
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
            <li><strong>Full Name:</strong> Real Salt Lake</li>
            <li><strong>Nickname(s):</strong> RSL</li>
            <li><strong>Founded:</strong> 2005</li>
            <li><strong>Stadium:</strong> Rio Tinto Stadium, Sandy, Utah</li>
            <li><strong>Capacity:</strong> 20,213</li>
            <li><strong>Owner:</strong> Dell Loy Hansen</li>
            <li><strong>Head Coach:</strong> Pablo Mastroeni</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Proud Legacy in Utah</h2>
          <p>
            Real Salt Lake has been a significant part of Major League Soccer since 2005. Known for their solid defense and passionate fanbase, RSL has enjoyed significant success, including an MLS Cup victory in 2009 and a strong presence in the playoffs over the years.
          </p>
          <p>
            The club plays at the stunning Rio Tinto Stadium in Sandy, Utah, where their dedicated supporters fill the stands and create an incredible atmosphere. With standout players like Albert Rusnák and Damir Kreilach, RSL has maintained a competitive edge in the MLS.
          </p>
          <p>
            The club prides itself on developing homegrown talent and maintaining a competitive roster to challenge for top honors in Major League Soccer.
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

export default RealSaltLake;
