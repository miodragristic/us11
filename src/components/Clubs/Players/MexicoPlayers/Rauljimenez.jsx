import React from 'react';

const RaulJimenez = () => {
  const items = [
    { id: 1, title: "Raúl Jiménez Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Raúl Jiménez Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Raúl Jiménez Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Fulham Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Raúl Jiménez Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Raúl Jiménez</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.supersport.com/media/ydyjkhh4/raul-jimenez-220922-training-g-1050.jpg?width=828&quality=90&format=webp' 
            alt='Raúl Jiménez' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Omar Vega 
| 
Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> May 5, 1991 (Tepeji, Hidalgo, Mexico)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 3 in (1.90 m)</li>
            <li><strong>Current Team:</strong> Fulham</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Fulham (2023–present): 46 appearances, 15 goals</li>
                <li>Wolverhampton Wanderers (2019–2023): 97 appearances, 27 goals</li>
                <li>Benfica (2015–2019): 80 appearances, 18 goals</li>
                <li>Atlético Madrid (2014–2015): 21 appearances, 1 goal</li>
                <li>América (2011–2014): 96 appearances, 36 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Raúl Jiménez</h2>
          <p>
            Raúl Jiménez is a Mexican professional footballer known for his physical presence and clinical finishing. He began his career at América in Mexico, where he quickly gained recognition for his goal-scoring ability. Jiménez later moved to Europe, playing for Atlético Madrid, Benfica, and Wolverhampton Wanderers, where he became one of the Premier League's most dangerous forwards. Jiménez is also a key player for the Mexican national team, contributing significantly to their success in international tournaments.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Raúl Jiménez Merchandise</h1>
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

export default RaulJimenez;
