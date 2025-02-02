import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Finlay = () => {
  const items = [
    { id: 1, title: "Austin FC Ethan Finlay Green Home Jersey 2023", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Ethan Finlay Austin FC Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Austin FC Ethan Finlay Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Ethan Finlay Signed Austin FC Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Ethan Finlay Austin FC Green Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Ethan Finlay</h1>

        {/* Finlay Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://s.hdnux.com/photos/01/37/10/55/24939376/3/rawImage.jpg' 
            alt='Ethan Finlay' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
          <p>Creator: Carmen Mandato 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Ethan Finlay</li>
            <li><strong>Born:</strong> August 6, 1990 (Duluth, Minnesota, USA)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Current Team:</strong> Austin FC</li>
            <li><strong>Previous Clubs:</strong> Columbus Crew, Minnesota United</li>
            <li><strong>Achievements:</strong> MLS All-Star (2015), U.S. Men’s National Team caps</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Finlay</h2>
          <p>
            Ethan Finlay is a dynamic winger known for his pace, work ethic, and attacking versatility. Beginning his professional career with the Columbus Crew in 2012, he quickly became a fan favorite, earning an MLS All-Star selection in 2015.
          </p>
          <p>
            After a successful stint with Minnesota United, Finlay joined Austin FC in 2022, bringing veteran leadership and skill to the squad. His contributions have been instrumental in shaping the team’s competitive spirit in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Finlay's Merchandise</h1>
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

export default Finlay;
