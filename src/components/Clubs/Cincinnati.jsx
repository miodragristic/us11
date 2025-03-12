import React from 'react';
import Cincinnati from '../../assets/posters/Cincinnati.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Luciano Acosta', image: 'https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2158493614-750x600.jpg', link: './acosta' },
    // { name: 'Yuya Kubo', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-cin/uytbwhct3jfeq9zktz2i.jpg', link: './kubo' },
    // { name: 'Nick Hagglund', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-cin/xge6f8ofdoow2lgndvtm.jpg', link: './hagglund' },
    { name: 'Miles Robinson', image: 'https://cnycentral.com/resources/media/f1b98a83-5413-4c14-9dad-1bbf564db28e-GettyImages21568536601.jpg', link: './milesrobinson' },
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
              style={{ objectPosition: 'center 2%' }} 
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

const FCCincinnati = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: 'https://www.amazon.com/jerseys-cincinnati-fc', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: 'https://www.amazon.com/tshirts-cincinnati-fc', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: 'https://www.amazon.com/merchandise-cincinnati-fc', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>FC Cincinnati</h1>
        <div className='mb-6'>
          <img 
            src={Cincinnati} 
            alt='FC Cincinnati' 
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
            <li><strong>Full Name:</strong> FC Cincinnati</li>
            <li><strong>Nickname(s):</strong> The Orange and Blue</li>
            <li><strong>Founded:</strong> 2015</li>
            <li><strong>Stadium:</strong> TQL Stadium, Cincinnati, Ohio</li>
            <li><strong>Capacity:</strong> 26,000</li>
            <li><strong>Owner:</strong> Carl H. Lindner III</li>
            <li><strong>Head Coach:</strong> Pat Noonan</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rising Force in MLS</h2>
          <p>
            FC Cincinnati has quickly become one of the most exciting teams in Major League Soccer. Established in 2015, the club has embraced the passionate soccer culture of the Cincinnati area and built a growing fan base. The team plays at the state-of-the-art TQL Stadium, offering an incredible matchday atmosphere.
          </p>
          <p>
            With standout players like Luciano Acosta and Brenner, FC Cincinnati is making its mark both in the league and in the city. The club continues to strive for success, with hopes of clinching the MLS Cup in the near future.
          </p>
          <p>
            Whether it's their fast-paced style of play or their deep community roots, FC Cincinnati is a team that embodies the spirit of Major League Soccer.
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

export default FCCincinnati;
