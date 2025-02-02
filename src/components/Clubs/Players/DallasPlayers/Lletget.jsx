import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const SebastianLletget = () => {
  const items = [
    { id: 1, title: "Sebastian Lletget Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Sebastian Lletget Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Sebastian Lletget Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Sebastian Lletget Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Sebastian Lletget Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Sebastian Lletget</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cloudfront-us-east-1.images.arcpublishing.com/dmn/5IRRAYDKIBHDPJUIDYYBVVEGQQ.jpg' 
            alt='Sebastian Lletget' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: John Dorton/ISI Photos 
| 
Credit: Getty Images
Copyright: 2022 John Dorton/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Sebastian Francisco Lletget</li>
            <li><strong>Born:</strong> September 3, 1992 (San Francisco, California, USA)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> FC Dallas</li>
            <li><strong>Previous Clubs:</strong> West Ham United, LA Galaxy, New England Revolution</li>
            <li><strong>International Career:</strong> USMNT (33 caps, 8 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Sebastian Lletget: A Dynamic Midfielder</h2>
          <p>
            Sebastian Lletget is an American professional soccer player known for his creativity and versatility in the midfield. After joining West Ham United at a young age, he made a name for himself in MLS with LA Galaxy, where he became a key player for several seasons.
          </p>
          <p>
            Lletget has represented the United States at various age levels and was an integral part of the USMNT, scoring key goals in qualifiers and international tournaments. In 2022, he joined FC Dallas, continuing to contribute to the team’s midfield as a leader and playmaker.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Sebastian Lletget Merchandise</h1>
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

export default SebastianLletget;
