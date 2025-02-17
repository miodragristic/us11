import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const MarcoReus = () => {
  const items = [
    { id: 1, title: "Marco Reus Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Marco Reus Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Marco Reus Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Marco Reus Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Marco Reus Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Marco Reus</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148' 
            alt='Marco Reus' 
            style={{ objectPosition: 'center 0%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Kaelin Mendez 
          Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Marco Reus</li>
            <li><strong>Date of Birth:</strong> 31 May 1989 (Dortmund, West Germany)</li>
            <li><strong>Position:</strong> Attacking Midfielder, Winger, False Nine</li>
            <li><strong>Height:</strong> 1.80 m (5 ft 11 in)</li>
            <li><strong>Current Team:</strong> LA Galaxy</li>
            <li><strong>Youth Team:</strong> Post SV Dortmund, Borussia Dortmund</li>
            <li><strong>Senior Career:</strong> Borussia Mönchengladbach, Borussia Dortmund, LA Galaxy</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Marco Reus: From Dortmund to LA Galaxy</h2>
          <p>
            Marco Reus is widely recognized as one of the most talented attacking players in the world, known for his blistering pace, technical ability, and playmaking skills. He spent over a decade at Borussia Dortmund, becoming one of the team's most iconic players and a fan favorite.
          </p>
          <p>
            After years of success in the Bundesliga, Reus made the move to LA Galaxy in 2024, continuing his career in Major League Soccer. With his experience and leadership, he has brought a wealth of talent to his new team, and fans are excited to see him shine in the U.S.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Marco Reus Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a href={item.link} className='text-blue-600 hover:underline'>Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarcoReus;
