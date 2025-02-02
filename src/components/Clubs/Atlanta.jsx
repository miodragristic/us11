import React from 'react';
import AtlantaPoster from '../../assets/posters/Atlantaposter.png'; // Adjust the path as needed
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Alexey Miranchuk', image: 'https://gray-wgcl-prod.gtv-cdn.com/resizer/v2/2WGWYC52NZAUTKQLETZRJDSRGU.jpg?auth=70a049cd83c40d2b50f4dd4a91edf89a30633b4a5093f1c100380a48b6a9ae13&width=1600&height=900&smart=true', link: './miranchuk' },
    { name: 'Derrick Williams', image: 'https://thepeachreview.com/wp-content/uploads/2024/11/Derrick-Williams_2-ATLUTD.jpg', link: './williams' },
    { name: 'Edwin Mosquera', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5a88ffa2-c8ac-415e-814a-4a11dfde286d_2837x1897.jpeg', link: './mosquera' },
    { name: 'Jamal Thiaré', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c480357-382f-40b7-8355-34ac16169374_4092x2728.jpeg', link: './thiare' },
  ];

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className='text-6xl font-bold text-[#020617] mb-8 text-center'>Trending Players</h2>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {players.map((player) => (
          <a
            key={player.name}
            href={player.link} // Opens in the same tab
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

const Atlanta = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: 'https://www.amazon.com/jerseys-atlanta-united', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: 'https://www.amazon.com/tshirts-atlanta-united', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: 'https://www.amazon.com/merchandise-atlanta-united', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Atlanta United FC</h1>
        <div className='mb-6'>
          <img
            src={AtlantaPoster}
            alt='Atlanta United'
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
            <li><strong>Full Name:</strong> Atlanta United Football Club</li>
            <li><strong>Nickname(s):</strong> The Five Stripes</li>
            <li><strong>Founded:</strong> April 16, 2014</li>
            <li><strong>Stadium:</strong> Mercedes-Benz Stadium, Atlanta, Georgia</li>
            <li><strong>Capacity:</strong> 73,000</li>
            <li><strong>Owners:</strong> Arthur Blank</li>
            <li><strong>Head Coach:</strong> Gonzalo Pineda</li>
          </ul>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rise on the Football Horizon</h2>
          <p>
            Atlanta United FC is a professional soccer club based in Atlanta, Georgia. Known for its passionate fan base and strong performances, Atlanta United has become a staple in MLS, achieving significant milestones, including winning the MLS Cup in 2018.
          </p>
        </div>

        <TrendingPlayers />

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
                <a href={item.link} className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2'>
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

export default Atlanta;

