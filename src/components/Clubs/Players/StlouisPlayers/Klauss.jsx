import React from 'react';

const JoaoKlauss = () => {
  const items = [
    { id: 1, title: "João Klauss St. Louis City Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed João Klauss Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "João Klauss Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "St. Louis City Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "João Klauss Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>João Klauss</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-145494572/crop/MM5DCMZWGY5DONRYHJXG653FHIYDUMJVGA======/GettyImages-145494572.jpg?auto=webp&format=pjpg&width=3840&quality=60' 
            alt='João Klauss' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: AFP 
| 
Credit: AFP via Getty Images
Copyright: 2012 AFP</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 1, 1997 (Criciúma, Brazil)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 3 in (1.90 m)</li>
            <li><strong>Current Team:</strong> St. Louis City</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>TSG Hoffenheim II (2017–2020): 24 appearances, 5 goals</li>
                <li>HJK (2018, loan): 33 appearances, 21 goals</li>
                <li>LASK (2019–2020, loan): 42 appearances, 15 goals</li>
                <li>TSG Hoffenheim (2020–2022): 4 appearances, 0 goals</li>
                <li>Standard Liège (2021–2022, loan): 33 appearances, 7 goals</li>
                <li>Sint-Truiden (2022, loan): 8 appearances, 2 goals</li>
                <li>St. Louis City 2 (2022): 4 appearances, 4 goals</li>
                <li>St. Louis City (2023–present): 46 appearances, 15 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About João Klauss</h2>
          <p>
            João Klauss de Mello, known simply as João Klauss, is a Brazilian professional footballer who plays as a forward for St. Louis City in Major League Soccer (MLS). Klauss began his career in Brazil, playing for top clubs such as Internacional, Juventude, and Grêmio. He later moved to Europe, where he had loan spells at HJK, LASK, and Standard Liège, among others. Known for his physical presence and goal-scoring ability, Klauss made his mark in MLS with St. Louis City, becoming an important player in their attacking lineup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop João Klauss Merchandise</h1>
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

export default JoaoKlauss;
