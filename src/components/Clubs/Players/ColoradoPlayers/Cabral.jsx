import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const KevinCabral = () => {
  const items = [
    { id: 1, title: "Kévin Cabral Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Kévin Cabral Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Kévin Cabral Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Kévin Cabral Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Kévin Cabral Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Kévin Cabral</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/kevin-cabral.jpg' 
            alt='Kévin Cabral' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Mike Janosz/ISI Photos/USSF 
| 
Credit: Getty Images for USSF
Copyright: 2023 USSF</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Kévin Cabral</li>
            <li><strong>Born:</strong> July 10, 1999 (Paris, France)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Current Team:</strong> Colorado Rapids</li>
            <li><strong>Previous Clubs:</strong> Valenciennes, LA Galaxy</li>
            <li><strong>Achievements:</strong> Former PSG youth player, MLS standout</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Kévin Cabral: The French Winger</h2>
          <p>
            Kévin Cabral is a talented winger known for his pace, dribbling, and creativity on the field. 
            After rising through the youth ranks at Paris Saint-Germain, Cabral played professionally for Valenciennes and LA Galaxy, before joining Colorado Rapids in 2023. 
            His dynamic playing style and flair have made him a fan favorite wherever he has played.
          </p>
          <p>
            With an eye for goals and assists, Cabral continues to be a key player for Colorado Rapids, bringing energy and excitement to their attacking play.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Kévin Cabral Merchandise</h1>
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

export default KevinCabral;
