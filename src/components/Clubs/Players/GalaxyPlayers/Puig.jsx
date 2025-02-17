import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const RiquiPuig = () => {
  const items = [
    { id: 1, title: "Riqui Puig Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Riqui Puig Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Riqui Puig Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Riqui Puig Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Riqui Puig Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Riqui Puig</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.lagalaxy.news/uploads/54/2023/08/GettyImages-1499684145-1920x1280.jpg' 
            alt='Riqui Puig' 
            style={{ objectPosition: 'center 30%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Bill Barrett/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Bill Barrett/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Ricard Puig Martí</li>
            <li><strong>Date of Birth:</strong> 13 August 1999 (Matadepera, Spain)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 1.69 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> LA Galaxy</li>
            <li><strong>Youth Team:</strong> Jàbac Terrassa, Barcelona</li>
            <li><strong>Senior Career:</strong> Barcelona, LA Galaxy</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Riqui Puig: Barcelona to LA Galaxy</h2>
          <p>
            Riqui Puig is a talented Spanish midfielder known for his skillful dribbling and vision on the field. After rising through the ranks at FC Barcelona, Puig made a name for himself with his dynamic playmaking ability. 
          </p>
          <p>
            In 2022, Puig moved to LA Galaxy, where he has quickly become a key player in the midfield. With his technical abilities and flair, Puig continues to impress in Major League Soccer and is considered one of the brightest young stars in the league.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Riqui Puig Merchandise</h1>
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

export default RiquiPuig;
