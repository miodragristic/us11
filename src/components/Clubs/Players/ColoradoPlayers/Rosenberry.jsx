import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const KeeganRosenberry = () => {
  const items = [
    { id: 1, title: "Keegan Rosenberry Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Keegan Rosenberry Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Keegan Rosenberry Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Keegan Rosenberry Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Keegan Rosenberry Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Keegan Rosenberry</h1>

        {/* Keegan Rosenberry Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://burgundywave.com/wp-content/uploads/2023/09/EDP30279.jpg' 
            alt='Keegan Rosenberry' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: EM Dash Photography 
          Copyright: EM Dash Photography</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Keegan Rosenberry</li>
            <li><strong>Born:</strong> December 11, 1993 (Harrisburg, Pennsylvania, USA)</li>
            <li><strong>Position:</strong> Defender (Right Back)</li>
            <li><strong>Current Team:</strong> Colorado Rapids</li>
            <li><strong>Previous Clubs:</strong> Philadelphia Union</li>
            <li><strong>Achievements:</strong> MLS All-Star (2017), Key Contributor for Rapids Defense</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Keegan Rosenberry: The Defensive Rock</h2>
          <p>
            Keegan Rosenberry is a reliable and consistent right-back, known for his defensive solidity and ability to contribute offensively. 
            After starting his professional career with the Philadelphia Union, Rosenberry joined the Colorado Rapids, where he has become a cornerstone of their defense.
          </p>
          <p>
            With his tactical awareness and leadership, Rosenberry has earned recognition as one of the top defenders in Major League Soccer. 
            His commitment and versatility continue to inspire both teammates and fans alike.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Keegan Rosenberry Merchandise</h1>
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

export default KeeganRosenberry;
