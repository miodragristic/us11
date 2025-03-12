import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DenisBouanga = () => {
  const items = [
    { id: 1, title: "Denis Bouanga Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Denis Bouanga Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Denis Bouanga Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Denis Bouanga Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Denis Bouanga Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Denis Bouanga</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.rangersnews.uk/uploads/24/2023/03/GettyImages-1246857078-1140x760.jpg' 
            alt='Denis Bouanga' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Matthew Ashton - AMA 
| 
Credit: Getty Images
Copyright: 2023 AMA Sports Photo Agency</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Denis Athanase Bouanga</li>
            <li><strong>Date of Birth:</strong> 11 November 1994 (Le Mans, France)</li>
            <li><strong>Position:</strong> Winger, Forward</li>
            <li><strong>Height:</strong> 1.76 m (5 ft 9 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> SO Maine, Le Mans</li>
            <li><strong>Senior Teams:</strong> AS Mulsanne-Téloché, Lorient B, Lorient, Strasbourg (loan), Tours (loan), Nîmes, Saint-Étienne, Los Angeles FC</li>
            <li><strong>International Career:</strong> Gabon (45 caps, 11 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Denis Bouanga: A Dynamic Forward</h2>
          <p>
            Denis Bouanga is a versatile winger and forward known for his pace, technical skills, and goal-scoring ability. With a career spanning across top leagues in France and the United States, he has consistently been a key player for his teams.
          </p>
          <p>
            Bouanga has been a standout player for Los Angeles FC in Major League Soccer, where he has established himself as a prolific scorer. On the international stage, he represents Gabon and has been a crucial part of their national team setup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Denis Bouanga Merchandise</h1>
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

export default DenisBouanga;
