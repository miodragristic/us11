import React from 'react';
import SDLogo from '../../assets/posters/SD.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Hirving Lozano', image: 'https://images.supersport.com/media/e2dcgfwj/hirving-lozano-220924-celebrates-g-1050.jpg?width=1920&quality=90&format=webp', link: './lozano' },
    { name: 'Marcus Ingvartsen', image: 'https://arnason.synology.me/billedearkiv/billeder/140px/2023/08/20230827_6318/917310_sgf8ym.jpg', link: './ingvartsen' },
    { name: 'Paddy McNair', image: 'https://cdn1.rangersnews.uk/uploads/24/2024/05/GettyImages-2137821648-1140x793.jpg', link: './mcnair' },
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

const SanDiegoFC = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './SanDiegoFCJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './SanDiegoFCTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './SanDiegoFCMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>San Diego FC</h1>
        <div className='mb-6'>
          <img
            src={SDLogo}
            alt='San Diego FC'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
          />
        </div>

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

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> San Diego FC</li>
            <li><strong>Nickname(s):</strong> The Waves</li>
            <li><strong>Founded:</strong> 2023</li>
            <li><strong>Stadium:</strong> Snapdragon Stadium, San Diego, California</li>
            <li><strong>Capacity:</strong> 35,000</li>
            <li><strong>Owner:</strong> Mohamed Mansour</li>
            <li><strong>Head Coach:</strong> Mikey Varas</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Era in San Diego</h2>
          <p>
            San Diego FC is the latest addition to Major League Soccer, bringing top-level soccer to the vibrant city of San Diego. With a focus on community engagement and world-class talent, the club aims to make a significant impact on and off the pitch.
          </p>
          <p>
            Playing at the state-of-the-art Snapdragon Stadium, the club is ready to provide fans with unforgettable experiences. Star player Hirving Lozano leads the charge, promising exciting performances and inspiring the next generation of soccer players.
          </p>
        </div>

        <TrendingPlayers />

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

export default SanDiegoFC;

