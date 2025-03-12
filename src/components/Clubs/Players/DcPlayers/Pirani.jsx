import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const GabrielPirani = () => {
  const items = [
    { id: 1, title: "Gabriel Pirani Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Gabriel Pirani Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Gabriel Pirani Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Gabriel Pirani Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Gabriel Pirani Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Gabriel Pirani</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://wtop.com/wp-content/uploads/2024/06/GettyImages-2150745016-scaled.jpg' 
            alt='Gabriel Pirani' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Sarah Stier 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Gabriel Cordeiro Pirani</li>
            <li><strong>Born:</strong> April 12, 2002 (Penápolis, Brazil)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Current Team:</strong> D.C. United</li>
            <li><strong>Previous Clubs:</strong> Santos, Cuiabá, Fluminense</li>
            <li><strong>Youth Career:</strong> Santos (2013–2021)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Gabriel Pirani: A Brazilian Playmaker</h2>
          <p>
            Gabriel Pirani is a Brazilian attacking midfielder known for his vision and creativity on the ball. Having spent his youth years at Santos, he quickly rose through the ranks and made a name for himself in Brazilian football. Pirani has since represented top clubs in Brazil before making his way to Major League Soccer with D.C. United.
          </p>
          <p>
            After making his professional debut with Santos, Pirani had loan spells at Cuiabá and Fluminense, further developing his skills. In 2023, he joined D.C. United on loan before making the move permanent in 2024, continuing his journey in MLS.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Gabriel Pirani Merchandise</h1>
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

export default GabrielPirani;
