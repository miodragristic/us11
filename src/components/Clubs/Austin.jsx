import React from 'react';
import AustinPoster from '../../assets/posters/Austinposter.png'; // Preimenuj varijablu za poster
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Uvozimo Link za navigaciju unutar aplikacije

const TrendingPlayers = () => {
  const players = [
    // { name: 'Sebastián Driussi', image: 'https://cdn1.primerafutbol.com/uploads/18/2025/01/GettyImages-1258342953-1140x760.jpg', link: '/driussi' },
    { name: 'Alex Ring', image: 'https://www.sportti.com/kuvapankki2014/alexander_ring_austin.jpg', link: '/ring' },
    { name: 'Ethan Finlay', image: 'https://s.hdnux.com/photos/01/37/10/55/24939376/3/rawImage.jpg', link: '/finlay' },
    { name: 'Gyasi Zardes', image: 'https://austinmonthly.wppcdn.com/wp-content/uploads/2023/02/ATXFC_20221120_ZardesPortraits_JG108141-1246x700.jpg', link: '/zardes' },
  ];

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className='text-6xl font-bold text-[#020617] mb-8 text-center'>Trending Players</h2>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {players.map((player) => (
          <Link 
            key={player.name} 
            to={player.link}  // Koristimo Link za navigaciju unutar aplikacije
            className='group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl'
          >
            <img 
              src={player.image} 
              alt={player.name} 
              className='h-64 w-full object-cover mb-4 rounded-lg' 
              style={{ objectPosition: 'center 2%' }} 
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Austin = () => {
  const items = [
    { id: 1, title: 'Jerseys', imageUrl: 'path/to/jersey-image.jpg', link: 'https://www.amazon.com/jerseys-austin-fc', price: '$79.99' },
    { id: 2, title: 'T-Shirts', imageUrl: 'path/to/tshirt-image.jpg', link: 'https://www.amazon.com/tshirts-austin-fc', price: '$29.99' },
    { id: 3, title: 'Merchandise', imageUrl: 'path/to/merch-image.jpg', link: 'https://www.amazon.com/merchandise-austin-fc', price: '$49.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Austin FC</h1>
        <div className='mb-6'>
          <img
            src={AustinPoster} 
            alt='Austin FC' 
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
            <li><strong>Full Name:</strong> Austin FC</li>
            <li><strong>Nickname(s):</strong> The Verde</li>
            <li><strong>Founded:</strong> 2018</li>
            <li><strong>Stadium:</strong> Q2 Stadium, Austin, Texas</li>
            <li><strong>Capacity:</strong> 20,500</li>
            <li><strong>Owners:</strong> Anthony Precourt</li>
            <li><strong>Head Coach:</strong> Josh Wolff</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rising in the Soccer Scene</h2>
          <p>
            Austin FC is a professional soccer club based in Austin, Texas, founded in 2018. The club has quickly established itself as a competitive force in Major League Soccer, backed by a passionate local fan base.
          </p>
          <p>
            The team is known for its commitment to community engagement and creating a vibrant matchday experience. With a strong focus on player development, Austin FC aims to build a sustainable soccer culture in the region.
          </p>
          <p>
            As Austin FC continues to grow, the club is poised to make a significant impact in the league and inspire the next generation of soccer players.
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

export default Austin;
