import React from 'react';

const CristianEspinoza = () => {
  const items = [
    { id: 1, title: "Cristian Espinoza Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Cristian Espinoza Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Cristian Espinoza Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "San Jose Earthquakes Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Cristian Espinoza Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cristian Espinoza</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.bssnews.net/assets/news_photos/2023/05/07/image-124146-1683436293.jpg' 
            alt='Cristian Espinoza' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Carmen Mandato 
| 
Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 3, 1995 (Buenos Aires, Argentina)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 5 ft 7 in (1.70 m)</li>
            <li><strong>Current Team:</strong> San Jose Earthquakes</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Huracán (2013–2016): 90 appearances, 9 goals</li>
                <li>Villarreal (2016–2020): 0 appearances, 0 goals</li>
                <li>Alavés (loan, 2016): 6 appearances, 0 goals</li>
                <li>Valladolid (loan, 2017): 10 appearances, 0 goals</li>
                <li>Boca Juniors (loan, 2017–2018): 15 appearances, 2 goals</li>
                <li>San Jose Earthquakes (loan, 2019): 30 appearances, 2 goals</li>
                <li>San Jose Earthquakes (2020–present): 130 appearances, 27 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Cristian Espinoza</h2>
          <p>
            Cristian Espinoza is a talented winger from Buenos Aires, Argentina, currently playing for San Jose Earthquakes. After starting his career at Huracán, Espinoza moved to Villarreal but struggled for game time. He had successful loan spells at Alavés, Valladolid, and Boca Juniors, before joining San Jose Earthquakes in 2019, where he has since become a key player. Known for his pace and dribbling ability, Espinoza is an attacking threat on the wing and continues to be a standout performer in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cristian Espinoza Merchandise</h1>
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

export default CristianEspinoza;
