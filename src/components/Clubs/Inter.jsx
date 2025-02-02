import React from 'react';
import InterLogo from '../Blog/Interlogo.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: './messi' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: './suarez' },
    { name: 'Sergio Busquets', image: 'https://cdn1.intermiami.news/uploads/52/2024/05/GettyImages-2153690433-1140x760.jpg', link: './busquets' },
    { name: 'Jordi Alba', image: 'https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2181071294-750x500.jpg', link: './alba' },
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
              style={{ objectPosition: 'center 2%' }} // Shifting the image down
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};


const Inter = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: 'https://www.amazon.com/jerseys-inter-miami', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: 'https://www.amazon.com/tshirts-inter-miami', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: 'https://www.amazon.com/merchandise-inter-miami', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Inter Miami CF</h1>
        <div className='mb-6'>
          <img 
            src={InterLogo} 
            alt='Inter Miami' 
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
            <li><strong>Full Name:</strong> Club Internacional de Fútbol Miami</li>
            <li><strong>Nickname(s):</strong> The Herons, Vice City</li>
            <li><strong>Short Name:</strong> Inter Miami</li>
            <li><strong>Founded:</strong> January 29, 2018</li>
            <li><strong>Stadium:</strong> Chase Stadium, Fort Lauderdale, Florida</li>
            <li><strong>Capacity:</strong> 21,550</li>
            <li><strong>Owners:</strong> David Beckham, Jorge Mas, Jose Mas</li>
            <li><strong>President:</strong> David Beckham</li>
            <li><strong>Head Coach:</strong> Javier Mascherano</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rise on the Football Horizon</h2>
          <p>
            Inter Miami CF is a football club that was founded relatively recently, in 2018. The main figure behind its establishment is David Beckham, whose popularity helped the club become a topic of interest not only in America and England but also around the world.
          </p>
          <p>
            In its early years, Inter Miami did not achieve significant success, but through hard work and dedication, they managed to strive for much more, and today they are one of the strongest teams in MLS. The arrival of Lionel Messi, one of the greatest footballers of all time, further improved their status, but we must not forget other legends who continue to play key roles in this club.
          </p>
          <p>
            For Barcelona fans, watching Inter Miami can be particularly exciting, as legendary players meet young talents. Miami is home to a large number of Latino Americans, which the club has leveraged to focus on the Latino audience. By bringing in players from Spain and South America, Inter Miami brings real football magic to one of the most beautiful cities in the world.
          </p>
          <p>
            We believe this is just the beginning, and that the club will continue to grow and improve, following its path to the top of the football world.
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

export default Inter;



