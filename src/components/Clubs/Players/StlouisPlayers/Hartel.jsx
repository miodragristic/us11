import React from 'react';

const MarcelHartel = () => {
  const items = [
    { id: 1, title: "Marcel Hartel St. Louis City Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Marcel Hartel Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Marcel Hartel Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "St. Louis City Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Marcel Hartel Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Marcel Hartel</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn.prod.www.11freunde.de/images/b5d24b92-98da-4fc7-b44f-58c371297bb0_w1200_r1_fpx52_fpy50.jpg' 
            alt='Marcel Hartel' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Icon Sportswire 
| 
Credit: Icon Sportswire via Getty Images
Copyright: ©Icon Sportswire (A Division of XML Team Solutions) All Rights Reserved</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> January 19, 1996 (Cologne, Germany)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.76 m)</li>
            <li><strong>Current Team:</strong> St. Louis City SC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>1. FC Köln II (2015–2017): 37 appearances, 6 goals</li>
                <li>1. FC Köln (2016–2017): 8 appearances, 0 goals</li>
                <li>Union Berlin (2017–2019): 54 appearances, 4 goals</li>
                <li>Arminia Bielefeld (2019–2021): 55 appearances, 1 goal</li>
                <li>FC St. Pauli (2021–2024): 98 appearances, 24 goals</li>
                <li>St. Louis City (2024–present): 9 appearances, 3 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Marcel Hartel</h2>
          <p>
            Marcel Hartel is a talented German midfielder who currently plays for St. Louis City SC in Major League Soccer (MLS). Known for his versatility and technical skill, Hartel has played for several prominent teams in Europe including Union Berlin, Arminia Bielefeld, and FC St. Pauli. With his strong passing ability and leadership on the field, Hartel continues to make an impact in MLS with St. Louis City.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Marcel Hartel Merchandise</h1>
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

export default MarcelHartel;
