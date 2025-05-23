import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const TeemuPukki = () => {
  const items = [
    { id: 1, title: "Teemu Pukki Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Teemu Pukki Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Teemu Pukki Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Teemu Pukki Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Teemu Pukki Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Teemu Pukki</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.sportti.com/wp-content/uploads/2024/03/teemu_pukki_2024maalis_minnesota.jpg' 
            alt='Teemu Pukki' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Icon Sportswire 
| 
Credit: Icon Sportswire via Getty Images
Copyright: ©Icon Sportswire (A Division of XML Team Solutions) All Rights Reserved</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Teemu Eino Antero Pukki</li>
            <li><strong>Date of Birth:</strong> 29 March 1990 (Kotka, Finland)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Height:</strong> 1.80 m (5 ft 11 in)</li>
            <li><strong>Current Team:</strong> Minnesota United</li>
            <li><strong>Youth Teams:</strong> KoNa, KTP</li>
            <li><strong>Senior Teams:</strong> KTP, Sevilla, Sevilla Atlético, HJK, Schalke 04, Celtic, Brøndby, Norwich City, Minnesota United</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Teemu Pukki: A Prolific Goalscorer</h2>
          <p>
            Teemu Pukki is a Finnish striker celebrated for his consistent goal-scoring ability and technical skills. His career spans top clubs across Europe, including Sevilla, Schalke 04, Celtic, and Norwich City. He is currently a key player for Minnesota United in Major League Soccer.
          </p>
          <p>
            Pukki's international career with Finland is equally impressive, having been a pivotal figure in their qualification for major tournaments. Renowned for his finishing and intelligent movement, he has left a significant mark in every league he has played in.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Teemu Pukki Merchandise</h1>
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

export default TeemuPukki;
