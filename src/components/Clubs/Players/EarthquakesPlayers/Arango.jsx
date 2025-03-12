import React from 'react';

const CristianArango = () => {
  const items = [
    { id: 1, title: "Cristian Arango Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Cristian Arango Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Cristian Arango Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "San Jose Earthquakes Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Cristian Arango Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cristian Arango</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.supersport.com/media/30sd15ex/cristian-arango-1200g.jpg?width=1920&quality=90&format=webp' 
            alt='Cristian Arango' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Icon Sportswire 
| 
Credit: Icon Sportswire via Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 9, 1995 (Medellín, Colombia)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
            <li><strong>Current Team:</strong> San Jose Earthquakes</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Envigado (2012–2016): 71 appearances, 7 goals</li>
                <li>Valencia B (2015–2016): 26 appearances, 8 goals (loan)</li>
                <li>Millonarios (2017): 12 appearances, 3 goals</li>
                <li>Benfica (2017–2019): 0 appearances, 0 goals</li>
                <li>Aves (2017–2018): 19 appearances, 1 goal (loan)</li>
                <li>Tondela (2018–2019): 16 appearances, 1 goal (loan)</li>
                <li>Millonarios (2019–2021): 53 appearances, 21 goals</li>
                <li>Los Angeles FC (2021–2022): 51 appearances, 30 goals</li>
                <li>Pachuca (2023): 11 appearances, 5 goals</li>
                <li>Real Salt Lake (2023–2024): 41 appearances, 23 goals</li>
                <li>San Jose Earthquakes (2025–present): 0 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Cristian Arango</h2>
          <p>
            Cristian Arango is a Colombian forward who began his career with Envigado in his home country before moving to Europe to play for Valencia B and later Benfica. He gained significant recognition during his time with Millonarios in Colombia, where he became a key player. After successful stints with Los Angeles FC, Pachuca, and Real Salt Lake, Arango brings his skill and experience to San Jose Earthquakes, where he is expected to make a major impact.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cristian Arango Merchandise</h1>
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

export default CristianArango;
