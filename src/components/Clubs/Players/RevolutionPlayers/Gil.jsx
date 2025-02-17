import React from 'react';

const CarlesGil = () => {
  const items = [
    { id: 1, title: "Carles Gil Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Carles Gil Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Carles Gil Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Carles Gil Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Carles Gil Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Carles Gil</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://lastwordonsports.com/soccer/wp-content/uploads/sites/14/2022/09/carles.jpg' 
            alt='Carles Gil' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Tim Bouwer/ISI Photos 
| 
Credit: Getty Images
Copyright: 2022 Tim Bouwer/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Carles Gil de Pareja Vicent</li>
            <li><strong>Date of Birth:</strong> 22 November 1992 (Valencia, Spain)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 1.71 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> New England Revolution</li>
            <li><strong>Youth Team:</strong> Valencia</li>
            <li><strong>Senior Career:</strong> Valencia B, Elche (loan), Aston Villa, Deportivo La Coruña, New England Revolution</li>
            <li><strong>International Career:</strong> Spain U21 (1 cap)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Carles Gil: The Creative Maestro</h2>
          <p>
            Carles Gil is a Spanish attacking midfielder known for his exceptional playmaking abilities, vision, and technical skills. Starting his career at Valencia, he later showcased his talent in leagues across Spain, England, and the United States. Currently representing New England Revolution, Gil has become a vital player for the team, contributing goals and assists consistently.
          </p>
          <p>
            With experience in top leagues and international recognition at the U21 level, Gil remains one of the most impactful midfielders in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Carles Gil Merchandise</h1>
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

export default CarlesGil;
