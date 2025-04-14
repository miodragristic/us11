import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const GiacomoVrioni = () => {
  const items = [
    { id: 1, title: "Giacomo Vrioni Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Giacomo Vrioni Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Giacomo Vrioni Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Giacomo Vrioni Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Giacomo Vrioni Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Giacomo Vrioni</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/giacomo-vrioni.jpg' 
            alt='Giacomo Vrioni' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Giacomo Vrioni</li>
            <li><strong>Date of Birth:</strong> 15 January 1998 (San Severino Marche, Italy)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 1.88 m (6 ft 2 in)</li>
            <li><strong>Current Team:</strong> CF Montréal</li>
            <li><strong>Youth Team:</strong> Sampdoria</li>
            <li><strong>Senior Career:</strong> Sampdoria, Juventus, New England Revolution, CF Montréal</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Giacomo Vrioni: From Italy to CF Montréal</h2>
          <p>
            Giacomo Vrioni, an emerging forward from Albania, has seen a dynamic career progression, moving from Sampdoria to Juventus and then a series of loans to clubs like WSG Tirol and New England Revolution. Vrioni has made a name for himself in Europe before transitioning to CF Montréal in 2025.
          </p>
          <p>
            His strong performances in Austria and the United States have made him an exciting addition to the MLS. His ability to score goals and his work ethic on the field have earned him a spot in CF Montréal, where he is expected to be a key figure in their attack.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Giacomo Vrioni Merchandise</h1>
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

export default GiacomoVrioni;
