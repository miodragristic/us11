import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const RobinLod = () => {
  const items = [
    { id: 1, title: "Robin Lod Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Robin Lod Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Robin Lod Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Robin Lod Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Robin Lod Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Robin Lod</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.sportti.com/wp-content/uploads/2024/02/robin_lod_2023_minnesota.jpg' 
            alt='Robin Lod' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jeremy Olson/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Jeremy Olson/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Robin Lod</li>
            <li><strong>Date of Birth:</strong> 17 April 1993 (Helsinki, Finland)</li>
            <li><strong>Position:</strong> Midfielder, Winger</li>
            <li><strong>Height:</strong> 1.80 m (5 ft 11 in)</li>
            <li><strong>Current Team:</strong> Minnesota United</li>
            <li><strong>Youth Teams:</strong> Suurmetsän Urheilijat, HJK</li>
            <li><strong>Senior Teams:</strong> Klubi 04, HJK, VPS (loan), Panathinaikos, Sporting Gijón, Minnesota United</li>
            <li><strong>International Career:</strong> Finland U18, U21, Senior Finland National Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Robin Lod: A Key Player for Club and Country</h2>
          <p>
            Robin Lod is a versatile Finnish midfielder and winger who has been an integral part of Minnesota United since joining in 2019. Known for his creativity and technical skills, Lod has contributed significantly with goals and assists for his club.
          </p>
          <p>
            His international career highlights include 74 caps for Finland, showcasing his importance in the national team setup. From his early days at HJK to his time in Greece and Spain, Lod has consistently demonstrated his ability to perform at the highest levels.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Robin Lod Merchandise</h1>
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

export default RobinLod;
