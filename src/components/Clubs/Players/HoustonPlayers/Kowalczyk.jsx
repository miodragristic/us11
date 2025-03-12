import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const SebastianKowalczyk = () => {
  const items = [
    { id: 1, title: "Sebastian Kowalczyk Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Sebastian Kowalczyk Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Sebastian Kowalczyk Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Sebastian Kowalczyk Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Sebastian Kowalczyk Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Sebastian Kowalczyk</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://daf17zziboaju.cloudfront.net/wp-content/uploads/2024/11/07072140/2WMMX2H-1.jpg' 
            alt='Sebastian Kowalczyk' 
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
            <li><strong>Full Name:</strong> Sebastian Oskar Kowalczyk</li>
            <li><strong>Born:</strong> August 22, 1998 (Szczecin, Poland)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> Houston Dynamo</li>
            <li><strong>Previous Clubs:</strong> Pogoń Szczecin</li>
            <li><strong>Youth Career:</strong> Salos Szczecin, Pogoń Szczecin</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Sebastian Kowalczyk: A Rising Midfielder</h2>
          <p>
            Sebastian Kowalczyk is a talented Polish midfielder who began his professional career with Pogoń Szczecin. He played for the club in both their senior and reserve teams, and his performances earned him a move to Major League Soccer in 2023, where he joined Houston Dynamo.
          </p>
          <p>
            Known for his work ethic and playmaking abilities, Kowalczyk brings creativity and vision to the midfield. After making an impact in the Polish Ekstraklasa, he continues to showcase his potential in MLS, contributing to Houston Dynamo's midfield and making an impression in his first season.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Sebastian Kowalczyk Merchandise</h1>
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

export default SebastianKowalczyk;
