import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const HugoLloris = () => {
  const items = [
    { id: 1, title: "Hugo Lloris Goalkeeper Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Hugo Lloris Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Hugo Lloris Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Hugo Lloris Signed Gloves", imageUrl: 'https://example.com/gloves1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Hugo Lloris Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Hugo Lloris</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.thespurs.news/uploads/36/2024/02/GettyImages-2003725135-1140x760.jpg' 
            alt='Hugo Lloris' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Hugo Hadrien Dominique Lloris</li>
            <li><strong>Date of Birth:</strong> 26 December 1986 (Nice, France)</li>
            <li><strong>Position:</strong> Goalkeeper</li>
            <li><strong>Height:</strong> 1.88 m (6 ft 2 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> Cedac Cimiez, Nice</li>
            <li><strong>Senior Teams:</strong> Nice II, Nice, Lyon, Tottenham Hotspur, Los Angeles FC</li>
            <li><strong>International Career:</strong> France (145 caps, 0 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Hugo Lloris: A Goalkeeping Legend</h2>
          <p>
            Hugo Lloris is one of the most respected goalkeepers in modern football, known for his leadership, reflexes, and composure under pressure. After an illustrious career in Europe, including a decade-long spell at Tottenham Hotspur, he now plays for Los Angeles FC in Major League Soccer.
          </p>
          <p>
            As the former captain of the French national team, Lloris led France to victory in the 2018 FIFA World Cup and was a key figure in their runner-up finish in the 2022 tournament. His experience and skill continue to make him a vital player at both club and international levels.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Hugo Lloris Merchandise</h1>
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

export default HugoLloris;
