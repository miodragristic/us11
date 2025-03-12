import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CristianOlivera = () => {
  const items = [
    { id: 1, title: "Cristian Olivera Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Cristian Olivera Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Cristian Olivera Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Cristian Olivera Signed Boots", imageUrl: 'https://example.com/boots1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Cristian Olivera Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cristian Olivera</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2153266577-1140x760.jpg' 
            alt='Cristian Olivera' 
            style={{ objectPosition: 'center 10%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Bill Barrett/ISI Photos 
| 
Credit: Getty Images
Copyright: 2024 Bill Barrett/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Cristian Gonzalo Olivera Ibarra</li>
            <li><strong>Date of Birth:</strong> 17 April 2002 (Montevideo, Uruguay)</li>
            <li><strong>Position:</strong> Right Winger</li>
            <li><strong>Height:</strong> 1.70 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> Los Angeles FC</li>
            <li><strong>Youth Teams:</strong> Arapey Mendoza, Potencia, Flores Palma, Danubio (AUFI), Cerrito, Danubio, Defensor Sporting, Rentistas</li>
            <li><strong>Senior Teams:</strong> Rentistas, Almería, Peñarol (loan), Boston River (loan), Los Angeles FC</li>
            <li><strong>International Career:</strong> Uruguay U15, U17, U23, Senior Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Cristian Olivera: Rising Star from Uruguay</h2>
          <p>
            Cristian Olivera is an exciting young talent from Uruguay, known for his pace, dribbling, and creativity on the right wing. Starting his career at Rentistas, he quickly caught the attention of top clubs with his performances in domestic leagues and on the international stage.
          </p>
          <p>
            After stints with Almería, Peñarol, and Boston River, Olivera joined Los Angeles FC, where he continues to make an impact in Major League Soccer. His journey reflects determination and skill, making him a player to watch in the years to come.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cristian Olivera Merchandise</h1>
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

export default CristianOlivera;
