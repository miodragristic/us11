import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const OlivierGiroud = () => {
  const items = [
    { id: 1, title: "Olivier Giroud Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Olivier Giroud Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Olivier Giroud Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Olivier Giroud Signed Boots", imageUrl: 'https://example.com/boots1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Olivier Giroud Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Olivier Giroud</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg?VersionId=.zVbe1A5VQJ_HQsT0MUZseBycBDhlb1p' 
            alt='Olivier Giroud' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Michael Owens/USSF 
          Copyright: 2024 USSF</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Olivier Jonathan Giroud</li>
            <li><strong>Date of Birth:</strong> 30 September 1986 (Chambéry, France)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Height:</strong> 1.93 m (6 ft 4 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> Froges, Grenoble</li>
            <li><strong>Senior Teams:</strong> Grenoble, Istres, Tours, Montpellier, Arsenal, Chelsea, AC Milan, Los Angeles FC</li>
            <li><strong>International Career:</strong> France (137 caps, 57 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Olivier Giroud: A Towering Forward</h2>
          <p>
            Olivier Giroud is one of the most accomplished strikers of his generation. Known for his aerial prowess, technical ability, and knack for scoring crucial goals, Giroud has had a stellar career in both domestic and international football.
          </p>
          <p>
            Having played for top clubs like Arsenal, Chelsea, and AC Milan, Giroud is now showcasing his talents in Major League Soccer with Los Angeles FC. As the all-time leading goal scorer for the French national team, his legacy is cemented as one of football's greats.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Olivier Giroud Merchandise</h1>
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

export default OlivierGiroud;
