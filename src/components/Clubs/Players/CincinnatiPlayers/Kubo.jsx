import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const YuyaKubo = () => {
  const items = [
    { id: 1, title: "FC Cincinnati Yuya Kubo Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Yuya Kubo FC Cincinnati Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "FC Cincinnati Yuya Kubo Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Yuya Kubo Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Yuya Kubo FC Cincinnati Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Yuya Kubo</h1>

        {/* Yuya Kubo Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/yuya_kubo.jpg' 
            alt='Yuya Kubo' 
            style={{ objectPosition: 'center 40%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Photo Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong>Yuya Kubo</li>
            <li><strong>Born:</strong> January 24, 1994 (Yamaguchi, Japan)</li>
            <li><strong>Position:</strong> Midfielder / Forward</li>
            <li><strong>Current Team:</strong> FC Cincinnati</li>
            <li><strong>Achievements:</strong> Key Contributor to FC Cincinnati's Supporters' Shield Win (2023)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Versatile Star</h2>
          <p>
            Yuya Kubo is a versatile player who has been a crucial part of FC Cincinnati's success. Known for his ability to play in multiple positions, 
            Kubo brings creativity and energy to the field.
          </p>
          <p>
            A former Japanese international, Kubo has experience playing in European leagues before joining MLS. In the 2023 season, he was instrumental 
            in helping Cincinnati secure the Supporters' Shield.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Yuya Kubo Merchandise</h1>
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

export default YuyaKubo;
