import React from 'react';
import Chicago from '../../assets/posters/Chicago.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Arnaud Souquet', image: 'https://northlandsoccer.com/wp-content/uploads/2023/07/20230727_194734_MNUFC_v_ChicagoFire_LeaguesCup_0022_LAKE0653.jpg', link: './souquet' },
    { name: 'Carlos Terán', image: 'https://caracoltv.brightspotcdn.com/dims4/default/0358532/2147483647/strip/false/crop/1024x681+0+0/resize/1200x798!/format/webp/quality/75/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F2c%2F44%2F5de36e4749e094e38acb5ff81555%2Fgettyimages-1359085143.jpg', link: './teran' },
    { name: 'Chris Mueller', image: 'https://wgntv.com/wp-content/uploads/sites/5/2023/02/gettyimages-1416710153-594x594-1.jpg', link: './mueller' },
    { name: 'Brian Gutiérrez', image: 'https://cdn1.unitedinfocus.com/uploads/14/2023/06/GettyImages-1493904261-scaled.jpg', link: './gutierrez' },
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

const ChicagoFire = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: 'https://www.amazon.com/jerseys-chicago-fire', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: 'https://www.amazon.com/tshirts-chicago-fire', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: 'https://www.amazon.com/merchandise-chicago-fire', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Chicago Fire FC</h1>
        <div className='mb-6'>
          <img 
            src={Chicago} 
            alt='Chicago Fire' 
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
            <li><strong>Full Name:</strong> Chicago Fire Football Club</li>
            <li><strong>Nickname(s):</strong> The Fire</li>
            <li><strong>Founded:</strong> 1997</li>
            <li><strong>Stadium:</strong> Soldier Field, Chicago, Illinois</li>
            <li><strong>Capacity:</strong> 61,500</li>
            <li><strong>Owner:</strong> Joe Mansueto</li>
            <li><strong>Head Coach:</strong> Gregg Berhalter</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion</h2>
          <p>
            Chicago Fire FC is a proud member of Major League Soccer, known for its passionate fan base and rich history. Founded in 1997, the club has a strong connection to the city of Chicago, and it strives to uphold the values of teamwork and community.
          </p>
          <p>
            Over the years, the Fire have been home to many talented players and have achieved significant success, including winning the MLS Cup and multiple U.S. Open Cups. The club continues to build its legacy with exciting matches and community involvement.
          </p>
          <p>
            The Fire aims to captivate both local fans and the broader soccer community by showcasing high-quality soccer and engaging activities throughout the season.
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

export default ChicagoFire;
