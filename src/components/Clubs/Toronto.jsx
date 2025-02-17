import React from 'react';
import Toronto from '../../assets/posters/Toronto.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Federico Bernadeski', image: 'https://milanreports.com/wp-content/uploads/2023/08/Downloader.la-64ce27c1e1eb7.jpg', link: './bernadeski' },
    { name: 'Lorenzo Insigne', image: 'https://dynamo.kiev.ua/media/posts/2023/01/11/charlotte-fc-v-toronto-fc.jpg', link: './insigne' },
    { name: 'Kevin Long', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fQLbiFBhOvoE0UYSOPxxi_VERQ0zX3o9MA&s', link: './kevinlong' },
    { name: 'Jonathan Osorio', image: 'https://cdn1.deepdaledigest.com/uploads/10/2022/11/GettyImages-1411935788-750x500.jpg', link: './osorio' },
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

const TorontoFC = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './TorontoFCJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './TorontoFCTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './TorontoFCMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Toronto FC</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Toronto}
            alt='Toronto FC'
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
            <li><strong>Full Name:</strong> Toronto FC</li>
            <li><strong>Nickname(s):</strong> The Reds</li>
            <li><strong>Founded:</strong> 2005</li>
            <li><strong>Stadium:</strong> BMO Field, Toronto, Ontario</li>
            <li><strong>Capacity:</strong> 30,000</li>
            <li><strong>Owner:</strong> Maple Leaf Sports & Entertainment</li>
            <li><strong>Head Coach:</strong> Robin Fraser</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Success</h2>
          <p>
            Toronto FC is one of the most successful clubs in Major League Soccer history, having won the MLS Cup in 2017 and establishing itself as a powerhouse in the league. Founded in 2005, the team has quickly become a fan favorite, known for its exciting style of play and success on the field.
          </p>
          <p>
            Playing at the state-of-the-art BMO Field, Toronto FC boasts a loyal and passionate fan base.
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

export default TorontoFC;
