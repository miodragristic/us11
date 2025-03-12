import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const BrianGutierrez = () => {
  const items = [
    { id: 1, title: "Chicago Fire Brian Gutiérrez Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Brian Gutiérrez Chicago Fire Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Chicago Fire Brian Gutiérrez Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Brian Gutiérrez Signed Chicago Fire Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Brian Gutiérrez Chicago Fire Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Brian Gutiérrez</h1>

        {/* Brian Gutiérrez Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.unitedinfocus.com/uploads/14/2023/06/GettyImages-1493904261-scaled.jpg' 
            alt='Brian Gutiérrez' 
            style={{ objectPosition: 'center 40%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Andrew Katsampes/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Andrew Katsampes/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Brian Gutiérrez</li>
            <li><strong>Born:</strong> June 17, 2003 (Berwyn, Illinois, USA)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Current Team:</strong> Chicago Fire</li>
            <li><strong>Achievements:</strong> Chicago Fire MVP 2023, 22 Under 22 List (2023)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Brian Gutiérrez</h2>
          <p>
            Brian Gutiérrez is a rising star in Major League Soccer, known for his creativity and vision as an attacking midfielder. 
            A product of the Chicago Fire Academy, he made his professional debut in 2020 and has since become a key player for the team.
          </p>
          <p>
            In the 2023 season, Gutiérrez led the Fire in assists and earned the team's MVP award. As a U.S. youth international, he is 
            poised to represent his country on the global stage in the coming years.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Brian Gutiérrez Merchandise</h1>
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

export default BrianGutierrez;
