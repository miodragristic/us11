import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DejanJoveljic = () => {
  const items = [
    { id: 1, title: "Dejan Joveljić Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Dejan Joveljić Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Dejan Joveljić Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Dejan Joveljić Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Dejan Joveljić Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Dejan Joveljić</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://sportklub.n1info.rs/wp-content/uploads/2023/05/15/1684130316-Dejan-Joveljic-scaled-e1684130362116-550x360.jpg' 
            alt='Dejan Joveljić' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Harry How 
| 
Credit: Getty Images
Copyright: 2022 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Dejan Joveljić</li>
            <li><strong>Date of Birth:</strong> 7 August 1999 (Bijeljina, Republika Srpska, Bosnia and Herzegovina)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Height:</strong> 1.80 m (5 ft 11 in)</li>
            <li><strong>Current Team:</strong> LA Galaxy</li>
            <li><strong>Youth Teams:</strong> Sloga United, Red Star Belgrade</li>
            <li><strong>Senior Teams:</strong> Red Star Belgrade, Eintracht Frankfurt, Anderlecht (loan), Wolfsberger AC (loan), LA Galaxy</li>
            <li><strong>International Career:</strong> Serbia (U16, U17, U18, U19, U21, Senior Team)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Dejan Joveljić: The Serbian Star in MLS</h2>
          <p>
            Dejan Joveljić is a talented Serbian striker who has risen through the ranks to become one of the key players for LA Galaxy in Major League Soccer. Known for his clinical finishing, movement off the ball, and ability to score in crucial moments, Joveljić has quickly earned the admiration of fans and teammates alike.
          </p>
          <p>
            His journey began at Red Star Belgrade, where he showcased his potential before moving to Europe with stints at Eintracht Frankfurt, Anderlecht, and Wolfsberger AC. With LA Galaxy, Joveljić has continued to impress, contributing significantly to the team's attacking prowess.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Dejan Joveljić Merchandise</h1>
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

export default DejanJoveljic;
