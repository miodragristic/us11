import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const GabrielPec = () => {
  const items = [
    { id: 1, title: "Gabriel Pec Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Gabriel Pec Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Gabriel Pec Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Gabriel Pec Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Gabriel Pec Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Gabriel Pec</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.vamofutebol.com/uploads/5/2024/12/GettyImages-2185864981-1140x760.jpg' 
            alt='Gabriel Pec' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Shaun Clark 
| 
Credit: Getty Images
Copyright: 2024 Shaun Clark</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Gabriel Fortes Chaves</li>
            <li><strong>Date of Birth:</strong> 11 February 2001 (Petrópolis, Brazil)</li>
            <li><strong>Position:</strong> Winger, attacking midfielder</li>
            <li><strong>Height:</strong> 1.74 m (5 ft 9 in)</li>
            <li><strong>Current Team:</strong> LA Galaxy</li>
            <li><strong>Youth Team:</strong> Vasco da Gama</li>
            <li><strong>Senior Career:</strong> Vasco da Gama, LA Galaxy</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Gabriel Pec: A Rising Star in MLS</h2>
          <p>
            Gabriel Pec is a dynamic Brazilian winger and attacking midfielder known for his creativity, dribbling, and goal-scoring ability. Having developed his skills at Vasco da Gama's renowned academy, Pec quickly made a name for himself in Brazilian football before making the leap to Major League Soccer with LA Galaxy.
          </p>
          <p>
            Since joining the Galaxy, Pec has continued to shine, becoming a fan favorite with his flair and decisive contributions on the field. With a bright future ahead, he is set to make a significant impact in MLS and beyond.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Gabriel Pec Merchandise</h1>
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

export default GabrielPec;
