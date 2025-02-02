import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const GeovaneJesus = () => {
  const items = [
    { id: 1, title: "Geovane Jesus Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Geovane Jesus Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Geovane Jesus Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Geovane Jesus Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Geovane Jesus Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Geovane Jesus</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/geovane-jesus.jpg' 
            alt='Geovane Jesus' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Geovane de Jesus Rocha</li>
            <li><strong>Born:</strong> July 31, 2001 (Riacho de Santana, Bahia, Brazil)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Current Team:</strong> FC Dallas</li>
            <li><strong>Previous Clubs:</strong> Palmeiras, Cruzeiro</li>
            <li><strong>Achievements:</strong> Campeonato Brasileiro Série B Champion (2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Geovane Jesus: A Rising Star</h2>
          <p>
            Geovane Jesus is a Brazilian defender known for his quickness and defensive versatility. After starting his career at Palmeiras and Cruzeiro, he joined FC Dallas in 2023, making an immediate impact in MLS.
          </p>
          <p>
            In his time with Cruzeiro, he played an integral role in their promotion to Série A, helping the club win the Série B title in 2022. Now with FC Dallas, Geovane looks to continue his rise in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Geovane Jesus Merchandise</h1>
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

export default GeovaneJesus;
