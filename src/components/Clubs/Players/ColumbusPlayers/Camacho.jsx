import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const RudyCamacho = () => {
  const items = [
    { id: 1, title: "Rudy Camacho Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Rudy Camacho Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Rudy Camacho Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Rudy Camacho Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Rudy Camacho Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Rudy Camacho</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/rudy-camacho.jpg' 
            alt='Rudy Camacho' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Rudy Adrien Camacho</li>
            <li><strong>Born:</strong> March 5, 1991 (L'Arbresle, France)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Current Team:</strong> Columbus Crew</li>
            <li><strong>Previous Clubs:</strong> Montreal Impact, Waasland-Beveren, Sedan</li>
            <li><strong>Achievements:</strong> MLS Cup Winner (2024), Defensive Player of the Year (2021)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rudy Camacho: The Defensive Leader</h2>
          <p>
            Rudy Camacho is a French professional footballer known for his solid defending and leadership qualities. Starting his career in France, Camacho built his reputation in Belgium before making his way to Major League Soccer with CF Montréal and later Columbus Crew.
          </p>
          <p>
            After years in Belgium, Camacho joined Montreal Impact in 2018, where he quickly became a crucial player. His performances earned him the club's Defensive Player of the Year award in 2021. In 2023, he moved to Columbus Crew, where he helped lead them to an MLS Cup victory.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Rudy Camacho Merchandise</h1>
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

export default RudyCamacho;
