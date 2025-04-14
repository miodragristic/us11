import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ArnaudSouquet = () => {
  const items = [
    { id: 1, title: "Chicago Fire Arnaud Souquet Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Arnaud Souquet Chicago Fire Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Chicago Fire Arnaud Souquet Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Arnaud Souquet Signed Chicago Fire Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Arnaud Souquet Chicago Fire Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Arnaud Souquet</h1>

        {/* Arnaud Souquet Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://northlandsoccer.com/wp-content/uploads/2023/07/20230727_194734_MNUFC_v_ChicagoFire_LeaguesCup_0022_LAKE0653.jpg' 
            alt='Arnaud Souquet' 
            style={{ objectPosition: 'center 25%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Michael Lake / Lake Photography 
| 
Credit: Michael Lake / Lake Photography
Copyright: ©2023 Michael Lake / Lake Photography</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Arnaud Souquet</li>
            <li><strong>Born:</strong> February 12, 1992 (Paris, France)</li>
            <li><strong>Position:</strong> Right Back</li>
            <li><strong>Current Team:</strong> Chicago Fire</li>
            <li><strong>Previous Clubs:</strong> Montpellier HSC, KAA Gent, OGC Nice</li>
            <li><strong>Achievements:</strong> Ligue 1 Team of the Week (multiple times), Belgian Pro League Champion</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Journey of Arnaud Souquet</h2>
          <p>
            Arnaud Souquet is a seasoned defender known for his tactical awareness, consistent performances, and ability to contribute offensively from the backline. 
            Having played in top leagues across Europe, Souquet brings a wealth of experience to the Chicago Fire. 
          </p>
          <p>
            Since joining the Fire in 2023, Souquet has been a crucial part of the team’s defense, displaying leadership and versatility. 
            His international experience and technical skills make him a key asset in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Arnaud Souquet Merchandise</h1>
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

export default ArnaudSouquet;
