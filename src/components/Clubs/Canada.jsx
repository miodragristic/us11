import React from 'react';
import Can from '../../assets/posters/Can.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Alphonso Davies', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYIXN4JFnQwUL4DziZK-Ad-SC6wC7re21IA&s', link: './davis' },
    { name: 'Jonathan David', image: 'https://icdn.strettynews.com/wp-content/uploads/2022/12/fbl-wc-2022-match27-cro-can.jpg', link: './david' },
    { name: 'Cyle Larin', image: 'https://lastwordonsports.com/football/wp-content/uploads/sites/4/2022/11/CanMNT-Striker-Cyle-Larin-scores-the-first-goal-against-the-USMNT-at-Tim-Hortons-Field.jpg', link: './larin' },
    { name: 'Stephen Eustáquio', image: 'https://worldfootballindex.com/wp-content/uploads/2022/01/Stephen-Eusta%CC%81quio-Canada.jpg', link: './eustaquio' },
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

const CanadaNationalTeam = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: './CanadaJerseys', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: './CanadaTShirts', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: './CanadaMerchandise', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Canada National Team</h1>
        <div className='mb-6'>
          {/* Add an image here if needed */}
          <img
            src={Can}
            alt='Canada National Team'
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

        {/* Team Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Team Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Canada Men's National Team</li>
            <li><strong>Nickname(s):</strong> The Canucks</li>
            <li><strong>Founded:</strong> 1912</li>
            <li><strong>Stadium:</strong> BMO Field, Toronto, Ontario (Home stadium)</li>
            <li><strong>Manager:</strong> Jesse Marsch</li>
            <li><strong>FIFA Ranking:</strong> #43 (as of 2023)</li>
            <li><strong>Confederation:</strong> CONCACAF</li>
            <li><strong>World Cup Appearances:</strong> 2 (1986, 2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A New Era for Canadian Soccer</h2>
          <p>
            The Canada Men's National Team has emerged as one of the most exciting teams in CONCACAF, with a new generation of talented players leading the charge. Under the guidance of manager **John Herdman**, the team has qualified for the 2022 FIFA World Cup, marking their first appearance since 1986.
          </p>
          <p>
            The team has a strong foundation for the future. Their attacking style of play, combined with a solid defensive structure, makes them one of the most dangerous teams in North America.
          </p>
          <p>
            The team's qualification for the World Cup has sparked a new sense of optimism and pride across the country, as Canadian soccer continues to grow in popularity and stature.
          </p>
        </div>

        {/* Trending Players Section */}
        <TrendingPlayers />

        {/* Shop Section */}
        {/* Shop Section */}
      <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
>
  Buy Now
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanadaNationalTeam;
