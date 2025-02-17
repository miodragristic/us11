import React from 'react';
import Columbus from '../../assets/posters/Columbus.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    // { name: 'Rudy Camacho', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-clb/l2djl0j1qg9jgrt9z8kx.jpg', link: './LucasZelarayan' },
    // { name: 'Cucho Hernández', image: 'https://as01.epimg.net/img/especiales/futbol/2023/top10mls/cucho/frame3h.jpg', link: './CuchoHernandez' },
    { name: 'Diego Rossi', image: 'https://images.supersport.com/media/5wfgo22m/diego-rossi-celebrating-2024-g-1200.jpg?width=1920&quality=90&format=webp', link: './Rossi' },
    { name: 'Darlington Nagbe', image: 'https://wallpapers.com/images/hd/darlington-nagbe-mls-medically-cleared-cy1tf00pgqbg7a3o.jpg', link: './Nagbe' },
   
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

const ColumbusCrew = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './ColumbusJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './ColumbusTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './ColumbusMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Columbus Crew</h1>
        <div className='mb-6'>
          <img
            src={Columbus}
            alt='Columbus Crew'
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
            <li><strong>Full Name:</strong> Columbus Crew SC</li>
            <li><strong>Nickname(s):</strong> The Black & Gold</li>
            <li><strong>Founded:</strong> 1994</li>
            <li><strong>Stadium:</strong> Lower.com Field, Columbus, Ohio</li>
            <li><strong>Capacity:</strong> 20,000</li>
            <li><strong>Owner:</strong> Haslam Sports Group</li>
            <li><strong>Head Coach:</strong> Wilfried Nancy</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Rich Tradition in MLS</h2>
          <p>
            Columbus Crew SC has been a staple of Major League Soccer since its founding in 1994. The team has a long and storied history, with multiple MLS Cup championships and a passionate fan base that is one of the most dedicated in the league.
          </p>
          <p>
            Known for their exciting attacking style and commitment to developing talent, Columbus Crew is a club with both a rich history and a bright future ahead. With star players like Lucas Zelarayán and Cucho Hernández leading the charge, the Crew continue to be a force to be reckoned with in MLS.
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

export default ColumbusCrew;
