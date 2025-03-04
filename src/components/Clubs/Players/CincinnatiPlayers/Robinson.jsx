import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const MilesRobinson = () => {
  const items = [
    { id: 1, title: "FC Cincinnati Miles Robinson Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Miles Robinson FC Cincinnati Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "FC Cincinnati Miles Robinson Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Miles Robinson Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Miles Robinson FC Cincinnati Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Miles Robinson</h1>

        {/* Miles Robinson Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cnycentral.com/resources/media/f1b98a83-5413-4c14-9dad-1bbf564db28e-GettyImages21568536601.jpg' 
            alt='Miles Robinson' 
            style={{ objectPosition: 'center 40%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Tim Nwachukwu 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Miles Gordon Robinson</li>
            <li><strong>Born:</strong> March 14, 1997 (Arlington, Massachusetts, USA)</li>
            <li><strong>Position:</strong> Defender</li>
            <li><strong>Current Team:</strong> FC Cincinnati</li>
            <li><strong>Achievements:</strong> Gold Cup Champion (2021), MLS All-Star (2021, 2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Defensive Powerhouse</h2>
          <p>
            Miles Robinson is one of the most talented defenders in Major League Soccer, known for his speed, strength, and ability to read the game. 
            A key figure for both FC Cincinnati and the U.S. Men's National Team, Robinson continues to impress with his consistent performances.
          </p>
          <p>
            Since joining FC Cincinnati, Robinson has been instrumental in stabilizing the backline, helping the team secure critical victories in the 2023 season. 
            He is celebrated for his work ethic and commitment both on and off the field.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Miles Robinson Merchandise</h1>
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

export default MilesRobinson;
