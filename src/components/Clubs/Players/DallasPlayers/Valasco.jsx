import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AlanVelasco = () => {
  const items = [
    { id: 1, title: "Alan Velasco Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Alan Velasco Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Alan Velasco Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Alan Velasco Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Alan Velasco Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Alan Velasco</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cloudfront-us-east-1.images.arcpublishing.com/dmn/2DQN4PVO6NFAZPMIM57CMRA74E.jpg' 
            alt='Alan Velasco' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Maddie Meyer - FIFA 
| 
Credit: FIFA via Getty Images
Copyright: 2019 FIFA</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Alan Agustín Velasco</li>
            <li><strong>Born:</strong> July 27, 2002 (Quilmes, Argentina)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Current Team:</strong> FC Dallas</li>
            <li><strong>Previous Clubs:</strong> Independiente</li>
            <li><strong>International Career:</strong> Argentina U17 (5 caps, 1 goal)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Alan Velasco: Rising Star from Argentina</h2>
          <p>
            Alan Velasco is an exciting Argentine winger who has already made a name for himself at a young age. Starting his career at Independiente, he quickly rose through the ranks before making a high-profile move to FC Dallas in 2022. Known for his pace, dribbling ability, and eye for goal, Velasco brings creativity and flair to the pitch.
          </p>
          <p>
            Having represented Argentina at youth levels, Velasco's international potential is also on the rise. His skill set has attracted significant attention, and his $7 million transfer fee reflects his promise in the world of football.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Alan Velasco Merchandise</h1>
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

export default AlanVelasco;
