import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const KarolSwiderski = () => {
  const items = [
    { id: 1, title: "Charlotte FC Karol Świderski Green Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Karol Świderski Charlotte FC Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Charlotte FC Karol Świderski Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Karol Świderski Signed Charlotte FC Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Karol Świderski Charlotte FC Green Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Karol Świderski</h1>

        {/* Karol Świderski Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.goal.pl/wp-content/uploads/2024/10/karol-swiderski-1.jpg' 
            alt='Karol Świderski' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Credit: Alamy Stock Photo
          Copyright: Credit: ZUMA Press, Inc. / Alamy Stock Photo</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Karol Świderski</li>
            <li><strong>Born:</strong> January 23, 1997 (Rawicz, Poland)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Charlotte FC</li>
            <li><strong>Previous Clubs:</strong> PAOK FC,  Hellas Verona (loan), Jagiellonia Białystok	</li>
            <li><strong>Achievements:</strong> Super League Greece Champion, Greek Cup Winner</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Karol Świderski</h2>
          <p>
            Karol Świderski is a dynamic forward known for his goal-scoring ability and technical skills. He started his career in Poland before making a significant impact at PAOK FC in Greece.
          </p>
          <p>
            Świderski's performances at PAOK earned him a transfer to Charlotte FC in 2022, where he continues to showcase his talents in Major League Soccer. Additionally, he is a key player for the Poland national team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Karol Świderski Merchandise</h1>
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

export default KarolSwiderski;
