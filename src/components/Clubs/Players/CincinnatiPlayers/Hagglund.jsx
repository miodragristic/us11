import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const NickHagglund = () => {
  const items = [
    { id: 1, title: "FC Cincinnati Nick Hagglund Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Nick Hagglund FC Cincinnati Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "FC Cincinnati Nick Hagglund Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Nick Hagglund Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Nick Hagglund FC Cincinnati Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Nick Hagglund</h1>

        {/* Nick Hagglund Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/nick_hagglund.jpg' 
            alt='Nick Hagglund' 
            style={{ objectPosition: 'center 40%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Photo Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Nick Hagglund</li>
            <li><strong>Born:</strong> September 14, 1992 (Cincinnati, Ohio, USA)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Current Team:</strong> FC Cincinnati</li>
            <li><strong>Achievements:</strong> Local Hero and Key Player in FC Cincinnati's Defense</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Hometown Hero</h2>
          <p>
            Nick Hagglund is a Cincinnati native and a cornerstone of FC Cincinnati's defense. Known for his aerial prowess and leadership on the field, 
            Hagglund has been a fan favorite since joining the team.
          </p>
          <p>
            With years of MLS experience, he has helped solidify Cincinnati's backline and played a pivotal role in the team's successful 2023 season, 
            contributing to their Supporters' Shield triumph.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Nick Hagglund Merchandise</h1>
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

export default NickHagglund;
