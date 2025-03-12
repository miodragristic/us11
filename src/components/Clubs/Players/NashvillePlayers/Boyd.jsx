import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const TylerBoyd = () => {
  const items = [
    { id: 1, title: "Tyler Boyd Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Tyler Boyd Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Tyler Boyd Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Tyler Boyd Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Tyler Boyd Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Tyler Boyd</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/tyler-boyd.jpg' 
            alt='Tyler Boyd' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Tyler Dominic Boyd</li>
            <li><strong>Date of Birth:</strong> December 30, 1994 (Tauranga, New Zealand)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 1.83 m (6 ft 0 in)</li>
            <li><strong>Current Team:</strong> Nashville SC</li>
            <li><strong>Youth Team:</strong> Melville United</li>
            <li><strong>Senior Career:</strong> Waikato FC, Wellington Phoenix, Vitória de Guimarães, Tondela, Ankaragücü, Beşiktaş, Sivasspor, Çaykur Rizespor, LA Galaxy, Nashville SC</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Tyler Boyd: The Versatile Winger</h2>
          <p>
            Tyler Boyd is a talented winger who was born in Tauranga, New Zealand. Known for his speed and technical ability, Boyd has played for various clubs across Europe, including Vitória de Guimarães, Beşiktaş, and LA Galaxy, before moving to Nashville SC.
          </p>
          <p>
            Boyd's playing style is characterized by his flair and creativity on the ball, making him a threat in one-on-one situations and a valuable asset for his current team, Nashville SC.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Tyler Boyd Merchandise</h1>
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

export default TylerBoyd;
