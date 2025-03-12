import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CadenClark = () => {
  const items = [
    { id: 1, title: "Caden Clark Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Caden Clark Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Caden Clark Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Caden Clark Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Caden Clark Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Caden Clark</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn.wsn.com/filters:format(webp)/fit-in/1200x630/1727245998/cf-montreal-vs-san-jose-2024-09-28.jpg' 
            alt='Caden Clark' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Credit: Alamy Stock Photo
          Copyright: Credit: The Canadian Press / Alamy Stock Photo</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Caden Christopher Clark</li>
            <li><strong>Date of Birth:</strong> May 27, 2003 (Medina, Minnesota, United States)</li>
            <li><strong>Position:</strong> Attacking Midfielder, Winger</li>
            <li><strong>Height:</strong> 1.80 m (5 ft 11 in)</li>
            <li><strong>Current Team:</strong> CF Montréal</li>
            <li><strong>Youth Team:</strong> Minnesota Thunder, Barça Residency Academy</li>
            <li><strong>Senior Career:</strong> New York Red Bulls, RB Leipzig, Minnesota United</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Caden Clark: A Young Talent with a Bright Future</h2>
          <p>
            Caden Clark, a native of Medina, Minnesota, is an exciting attacking midfielder who has already made a name for himself in Major League Soccer and internationally. A product of the Barça Residency Academy, Clark moved to New York Red Bulls where he showcased his immense potential. After a brief stint in Germany with RB Leipzig, he returned to the Red Bulls on loan, proving himself further. Now, he's back in North America with CF Montréal, ready to shine.
          </p>
          <p>
            Known for his creativity, vision, and technical ability, Clark is expected to play a pivotal role in CF Montréal's midfield, bringing flair and determination to the team's attack.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Caden Clark Merchandise</h1>
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

export default CadenClark;
