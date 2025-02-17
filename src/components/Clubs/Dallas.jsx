import React from 'react';
import Dallas from '../../assets/posters/Dallas.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    // { name: 'Geovane Jesus', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dal/ll2qsmq5tkwxyaasdiil.jpg', link: './geovanejesus' },
    // { name: 'Lalas Abubakar', image: 'https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop/f_auto/mls-dal/yckl7vbzz9bnvpy8pss9.jpg', link: './lalasabubakar' },
    { name: 'Sebastian Lletget', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/dmn/5IRRAYDKIBHDPJUIDYYBVVEGQQ.jpg', link: './lletget' },
    // { name: 'Alan Velasco', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/dmn/2DQN4PVO6NFAZPMIM57CMRA74E.jpg', link: './velasco' },
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

const FCDallas = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './FCDallasJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './FCDallasTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './FCDallasMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>FC Dallas</h1>
        <div className='mb-6'>
          {/* Add an image of FC Dallas here */}
          <img src={Dallas}
            alt='FC Dallas'
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
            <li><strong>Full Name:</strong> FC Dallas</li>
            <li><strong>Nickname(s):</strong> The Hoops</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Toyota Stadium, Frisco, Texas</li>
            <li><strong>Capacity:</strong> 20,500</li>
            <li><strong>Owner:</strong> Hunt Sports Group</li>
            <li><strong>Head Coach:</strong> Eric Quill</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Proud Legacy in Texas</h2>
          <p>
            FC Dallas is one of Major League Soccer's most respected clubs, with a legacy of developing talented players and a history of strong performances. Founded in 1996, FC Dallas has built a foundation of youth development, fielding some of the league’s most exciting homegrown players.
          </p>
          <p>
            The team is known for its fast-paced style of play, combining technical skill with aggressive counter-attacks. FC Dallas plays its home games at Toyota Stadium in Frisco, Texas, offering a fantastic matchday atmosphere.
          </p>
          <p>
            With stars like Jesus Ferreira and Paul Arriola, the club continues to challenge for top honors in MLS while staying true to its developmental philosophy.
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

export default FCDallas;
