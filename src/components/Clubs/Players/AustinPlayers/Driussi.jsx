import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Driussi = () => {
  const items = [
    { id: 1, title: "Austin FC Sebastián Driussi Green Home Jersey 2023", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Sebastián Driussi Austin FC Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Austin FC Sebastián Driussi Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Sebastián Driussi Signed Austin FC Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Sebastián Driussi Austin FC Green Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Sebastián Driussi</h1>

        {/* Driussi Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.primerafutbol.com/uploads/18/2025/01/GettyImages-1258342953-1140x760.jpg' 
            alt='Sebastián Driussi' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Icon Sportswire 
| 
Credit: Icon Sportswire via Getty Images
Copyright: ©Icon Sportswire (A Division of XML Team Solutions) All Rights Reserved</p>
          </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Sebastián Driussi</li>
            <li><strong>Born:</strong> February 9, 1996 (San Justo, Argentina)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Austin FC</li>
            <li><strong>Previous Clubs:</strong> River Plate, Zenit Saint Petersburg</li>
            <li><strong>Achievements:</strong> Copa Libertadores champion with River Plate</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Driussi</h2>
          <p>
            Sebastián Driussi is a talented Argentine forward known for his versatility, technical skill, and goal-scoring ability. Starting his professional career at River Plate, he played a key role in the team’s success, including winning the Copa Libertadores.
          </p>
          <p>
            After a successful stint with Zenit Saint Petersburg in Russia, Driussi joined Austin FC in 2021. Since then, he has become one of the standout players in Major League Soccer, earning recognition for his consistent performances and leadership on the field.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Driussi's Merchandise</h1>
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

export default Driussi;
