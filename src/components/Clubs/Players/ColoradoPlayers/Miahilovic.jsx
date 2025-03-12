import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DjordjeMihailovic = () => {
  const items = [
    { id: 1, title: "Djordje Mihailovic Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Djordje Mihailovic Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Djordje Mihailovic Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Djordje Mihailovic Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Djordje Mihailovic Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Djordje Mihailovic</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cf-images.us-east-1.prod.boltdns.net/v1/static/6057277724001/81fbb3c7-8451-4448-94bc-6b9fefe1fd24/fcb23ad0-8a30-46c2-8c37-6406f1dc0142/1280x720/match/image.jpg' 
            alt='Djordje Mihailovic' 
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
            <li><strong>Full Name:</strong> Djordje Mihailovic</li>
            <li><strong>Born:</strong> November 9, 1998 (Chicago, Illinois, USA)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> Colorado Rapids</li>
            <li><strong>Previous Clubs:</strong> Chicago Fire</li>
            <li><strong>Achievements:</strong> MLS All-Star (2023), USMNT Player</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Djordje Mihailovic: The Creative Playmaker</h2>
          <p>
            Djordje Mihailovic is an exceptional attacking midfielder known for his creativity, vision, and playmaking ability. 
            He plays for Colorado Rapids, where he has become one of the key players. 
            Known for his precise passing and smart positioning, Mihailovic continues to impress in MLS.
          </p>
          <p>
            His technical skills, vision, and leadership make him one of the brightest talents in the league, contributing to his club and the U.S. Men's National Team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Djordje Mihailovic Merchandise</h1>
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

export default DjordjeMihailovic;

