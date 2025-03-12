import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const HanyMukhtar = () => {
  const items = [
    { id: 1, title: "Hany Mukhtar Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Hany Mukhtar Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Hany Mukhtar Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Hany Mukhtar Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Hany Mukhtar Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Hany Mukhtar</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/hany-mukhtar.jpg' 
            alt='Hany Mukhtar' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Hany Abubakr Mukhtar</li>
            <li><strong>Date of Birth:</strong> March 21, 1995 (Berlin, Germany)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 1.73 m (5 ft 8 in)</li>
            <li><strong>Current Team:</strong> Nashville SC</li>
            <li><strong>Youth Team:</strong> FC Stern Marienfelde, Hertha BSC</li>
            <li><strong>Senior Career:</strong> Hertha BSC, Benfica, Red Bull Salzburg, Brøndby, Nashville SC</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Hany Mukhtar: A Playmaker for Nashville SC</h2>
          <p>
            Hany Mukhtar, a creative attacking midfielder from Berlin, Germany, has carved out a reputation for himself as one of the most talented players in Major League Soccer. After beginning his career with Hertha BSC and later moving to Benfica, Mukhtar went on a series of successful loans, most notably at Red Bull Salzburg and Brøndby, before finding a permanent home at Nashville SC.
          </p>
          <p>
            Known for his dribbling skills, vision, and ability to score, Mukhtar is a key player for Nashville SC and has already proven himself as a leader in the team's attack. With numerous appearances and goals for both club and country, Hany Mukhtar is regarded as one of MLS's brightest stars.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Hany Mukhtar Merchandise</h1>
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

export default HanyMukhtar;
