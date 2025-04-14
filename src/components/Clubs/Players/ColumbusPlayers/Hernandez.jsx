import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CuchoHernandez = () => {
  const items = [
    { id: 1, title: "Cucho Hernández Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Cucho Hernández Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Cucho Hernández Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Cucho Hernández Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Cucho Hernández Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cucho Hernández</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://as01.epimg.net/img/especiales/futbol/2023/top10mls/cucho/frame3h.jpg' 
            alt='Cucho Hernández' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Andrew Katsampes/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Andrew Katsampes/ISIPhotos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Juan Camilo Hernández Suárez (Cucho Hernández)</li>
            <li><strong>Born:</strong> April 20, 1999 (Pereira, Colombia)</li>
            <li><strong>Position:</strong> Striker/Winger</li>
            <li><strong>Current Team:</strong> Columbus Crew</li>
            <li><strong>Previous Clubs:</strong> Deportivo Pereira, Granada, Watford, Huesca, Mallorca, Getafe</li>
            <li><strong>Achievements:</strong> MLS Cup Winner (2024), Leagues Cup Winner (2024), MLS Best XI, Colombia National Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Cucho Hernández: The Colombian Sensation</h2>
          <p>
            Cucho Hernández is a powerful and skillful forward who has made a significant impact in both European and MLS football. 
            Starting his career at Deportivo Pereira in Colombia, he quickly rose through the ranks and made a name for himself in Spain and England.
          </p>
          <p>
            After joining Columbus Crew in 2022, Hernández continued to showcase his exceptional talent, becoming one of the top strikers in MLS. 
            Known for his pace, technical ability, and goalscoring prowess, Cucho helped Columbus win the 2024 Leagues Cup, scoring two crucial goals in the final.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cucho Hernández Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
>
  Buy Now
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuchoHernandez;
