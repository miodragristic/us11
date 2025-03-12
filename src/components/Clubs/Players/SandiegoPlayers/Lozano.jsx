import React from 'react';

const HirvingLozano = () => {
  const items = [
    { id: 1, title: "Hirving Lozano San Diego FC Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Hirving Lozano Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Hirving Lozano Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "San Diego FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Hirving Lozano Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Hirving Lozano</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.supersport.com/media/e2dcgfwj/hirving-lozano-220924-celebrates-g-1050.jpg?width=1920&quality=90&format=webp' 
            alt='Hirving Lozano' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>CCreator: Omar Vega 
| 
Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> July 30, 1995 (Mexico City, Mexico)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.75 m)</li>
            <li><strong>Current Team:</strong> San Diego FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Pachuca (2014–2017): 120 appearances, 31 goals</li>
                <li>PSV (2017–2019): 60 appearances, 34 goals</li>
                <li>Napoli (2019–2023): 120 appearances, 23 goals</li>
                <li>PSV (2023–2025): 33 appearances, 10 goals</li>
                <li>San Diego FC (2025–present): 0 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Hirving Lozano</h2>
          <p>
            Hirving Lozano, also known as "Chucky", is a highly skilled Mexican winger known for his pace, dribbling ability, and clinical finishing. He has played for top clubs in Europe, including PSV Eindhoven and Napoli, before moving to San Diego FC. Lozano has been a key player for the Mexican national team and is regarded as one of the best wingers in world football.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Hirving Lozano Merchandise</h1>
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

export default HirvingLozano;
