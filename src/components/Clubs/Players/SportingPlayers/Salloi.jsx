import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DanielSalloi = () => {
  const items = [
    { id: 1, title: "Dániel Sallói Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Dániel Sallói Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Dániel Sallói Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Dániel Sallói Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Dániel Sallói Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Dániel Sallói</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://nb1.hu/wp-content/uploads/2023/10/Salloi-1-scaled-e1703882279292.jpg' 
            alt='Dániel Sallói' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Bill Barrett/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Bill Barrett/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Dániel Sallói</li>
            <li><strong>Date of Birth:</strong> 19 July 1996 (Siófok, Hungary)</li>
            <li><strong>Position:</strong> Striker, Winger</li>
            <li><strong>Height:</strong> 1.85 m (6 ft 1 in)</li>
            <li><strong>Current Team:</strong> Sporting Kansas City</li>
            <li><strong>Previous Teams:</strong> Újpest FC, Swope Park Rangers (loan), Gyirmót (loan)</li>
            <li><strong>International Career:</strong> Hungary U18, U21, and Senior Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Dániel Sallói: A Versatile Attacker</h2>
          <p>
            Dániel Sallói is a Hungarian footballer renowned for his attacking prowess and versatility as both a striker and a winger. After starting his youth career at Újpest FC, he joined Sporting Kansas City's academy in 2014 and quickly rose through the ranks.
          </p>
          <p>
            Sallói has become a cornerstone for Sporting Kansas City, scoring crucial goals and contributing to the team's attacking success. His performances have earned him call-ups to the Hungarian national team, where he continues to showcase his skills on the international stage.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Dániel Sallói Merchandise</h1>
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

export default DanielSalloi;
