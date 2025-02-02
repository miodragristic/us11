import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AshleyWestwood = () => {
  const items = [
    { id: 1, title: "Charlotte FC Ashley Westwood Green Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Ashley Westwood Charlotte FC Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Charlotte FC Ashley Westwood Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Ashley Westwood Signed Charlotte FC Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Ashley Westwood Charlotte FC Green Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Ashley Westwood</h1>

        {/* Ashley Westwood Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.qcnews.com/wp-content/uploads/sites/109/2024/05/GettyImages-2152987244.jpg' 
            alt='Ashley Westwood' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: David Jensen 
| 
Credit: Getty Images
Copyright: 2024 David Jensen</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Ashley Westwood</li>
            <li><strong>Born:</strong> April 1, 1990 (Nantwich, England)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Current Team:</strong> Charlotte FC</li>
            <li><strong>Previous Clubs:</strong> Burnley FC, Aston Villa, Nantwich Town (loan), Crewe Alexandra</li>
            <li><strong>Achievements:</strong> English Premier League Experience</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Ashley Westwood</h2>
          <p>
            Ashley Westwood is a highly experienced defensive midfielder, known for his vision, passing ability, and leadership on the pitch. He started his career at Crewe Alexandra before making his name at Aston Villa and later Burnley, where he earned several seasons of Premier League experience.
          </p>
          <p>
            In 2023, Westwood moved to Charlotte FC, bringing his wealth of knowledge to the MLS. His solid performances have made him a key figure in Charlotte's midfield, helping stabilize the team's play in the U.S. league.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Ashley Westwood Merchandise</h1>
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

export default AshleyWestwood;
