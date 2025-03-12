import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const SamuelPiette = () => {
  const items = [
    { id: 1, title: "Samuel Piette Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Samuel Piette Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Samuel Piette Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Samuel Piette Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Samuel Piette Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Samuel Piette</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/11/Canada-Mens-Soccer-Team-Player-Samuel-Piette-in-2019.jpg' 
            alt='Samuel Piette' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Vaughn Ridley 
| 
Credit: Getty Images
Copyright: 2019 Vaughn Ridley</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Samuel Piette</li>
            <li><strong>Date of Birth:</strong> 12 November 1994 (Le Gardeur, Quebec, Canada)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Height:</strong> 1.71 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> CF Montréal</li>
            <li><strong>Youth Team:</strong> Lionceaux Le Gardeur, Olympique de Repentigny, FC Boisbriand</li>
            <li><strong>Senior Career:</strong> Fortuna Düsseldorf, Deportivo La Coruña B, CF Montréal</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Samuel Piette: From Quebec to CF Montréal</h2>
          <p>
            Samuel Piette, born in Le Gardeur, Quebec, is a Canadian defensive midfielder known for his tenacious playing style. He developed through the ranks of Canadian youth teams before making his senior debut in Europe. After stints in Germany and Spain, he returned to Canada and became a cornerstone of CF Montréal's midfield.
          </p>
          <p>
            Piette has been a key player for both his club and country, with impressive performances for the Canadian national team, often being called up for crucial matches. His career continues to thrive at CF Montréal, where he plays a vital role in both defense and midfield.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Samuel Piette Merchandise</h1>
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

export default SamuelPiette;
