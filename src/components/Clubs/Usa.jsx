import React from 'react';
import US from '../../assets/posters/usa.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Christian Pulisic', image: 'https://media.bleacherreport.com/image/upload/v1642803493/c6tcjkzmqnb1iphp4dik.jpg', link: './pulisic' },
    { name: 'Giovanni Reyna', image: 'https://static01.nyt.com/athletic/uploads/wp/2020/05/08030603/Reyna-USA-scaled.jpg', link: './reyna' },
    { name: 'Weston McKennie', image: 'https://cdn1.intermiami.news/uploads/52/2024/07/GettyImages-2160612538-1140x752.jpg', link: './mckennie' },
    { name: 'Tyler Adams', image: 'https://cdn1.leedsunited.news/uploads/5/2022/11/GettyImages-1244973081-1024x682.jpg', link: './adams' },
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

const USNationalTeam = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './USJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './USTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './USMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>USA National Team</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={US}
            alt='USA National Team'
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
          <h2 className='text-2xl font-semibold mb-2'>Team Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> United States Men's National Team</li>
            <li><strong>Nickname(s):</strong> The Yanks, The Stars and Stripes</li>
            <li><strong>Founded:</strong> 1913</li>
            <li><strong>Stadium:</strong> Various (Home games across the United States)</li>
            <li><strong>Manager:</strong> Mauricio Pochettino</li>
            <li><strong>FIFA Ranking:</strong> #15 (as of 2023)</li>
            <li><strong>Confederation:</strong> CONCACAF</li>
            <li><strong>World Cup Appearances:</strong> 11</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Stars and Stripes on the World Stage</h2>
          <p>
            The United States Men's National Team (USMNT) is one of the most well-known soccer teams in the world, with a rich history of participation in major tournaments like the FIFA World Cup and CONCACAF Gold Cup. Despite being traditionally seen as an underdog in the world of soccer, the USMNT continues to grow in stature and has produced some of the most exciting young talent in the game.
          </p>
          <p>
            With players like Christian Pulisic, Giovanni Reyna, and Weston McKennie, the team has some of the brightest stars in world soccer. The USMNT is committed to playing an exciting, fast-paced style of soccer, with an emphasis on developing young, homegrown talent.
          </p>
          <p>
            Whether it's in World Cup qualification or international friendlies, the USMNT continues to engage its passionate fan base across the country and strives to make its mark on the world stage.
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

export default USNationalTeam;
