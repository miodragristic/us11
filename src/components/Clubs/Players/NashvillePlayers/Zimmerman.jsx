import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const WalkerZimmerman = () => {
  const items = [
    { id: 1, title: "Walker Zimmerman Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Walker Zimmerman Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Walker Zimmerman Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Walker Zimmerman Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Walker Zimmerman Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Walker Zimmerman</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/20220429-The18-Image-Walker-Zimmerman-GettyImages-1316150108.jpeg?itok=dewBb8Ju' 
            alt='Walker Zimmerman' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Brett Carlsen 
| 
Credit: Getty Images
Copyright: 2021 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Walker Dwain Zimmerman</li>
            <li><strong>Date of Birth:</strong> May 19, 1993 (Lawrenceville, Georgia, United States)</li>
            <li><strong>Position:</strong> Center-back</li>
            <li><strong>Height:</strong> 1.90 m (6 ft 3 in)</li>
            <li><strong>Current Team:</strong> Nashville SC</li>
            <li><strong>Youth Team:</strong> GSA Phoenix</li>
            <li><strong>College Career:</strong> Furman Paladins (39 apps, 11 goals)</li>
            <li><strong>Senior Career:</strong> FC Dallas, Los Angeles FC, Nashville SC</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Walker Zimmerman: The Rock in Defense</h2>
          <p>
            Walker Zimmerman is a dominant center-back who has established himself as a key player for both Nashville SC and the United States Men's National Team. Standing at 6'3", Zimmerman is known for his aerial ability, leadership at the back, and defensive prowess.
          </p>
          <p>
            His strong performances in both domestic and international competitions have earned him recognition as one of the best defenders in MLS, with numerous appearances for the national team, including participation in the 2022 FIFA World Cup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Walker Zimmerman Merchandise</h1>
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

export default WalkerZimmerman;
