import React from 'react';

const AlbertRusnak = () => {
  const items = [
    { id: 1, title: "Albert Rusnák Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Albert Rusnák Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Albert Rusnák Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Seattle Sounders FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Albert Rusnák Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Albert Rusnák</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://sports.mynorthwest.com/wp-content/uploads/2024/06/Seattle-Sounders-Albert-Rusnak-controls-ball-Getty-900.jpg' 
            alt='Albert Rusnák' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Steph Chambers 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> July 7, 1994 (Vyškov, Czech Republic)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.75 m)</li>
            <li><strong>Current Team:</strong> Seattle Sounders FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Manchester City (2013–2015): 0 appearances, 0 goals</li>
                <li>Oldham Athletic (2013, loan): 3 appearances, 0 goals</li>
                <li>Birmingham City (2014, loan): 4 appearances, 0 goals</li>
                <li>Cambuur (2014, loan): 17 appearances, 4 goals</li>
                <li>Groningen (2015–2017): 71 appearances, 10 goals</li>
                <li>Real Salt Lake (2017–2021): 140 appearances, 41 goals</li>
                <li>Seattle Sounders FC (2022–present): 96 appearances, 18 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Albert Rusnák</h2>
          <p>
            Albert Rusnák is an attacking midfielder from Slovakia who currently plays for Seattle Sounders FC in Major League Soccer. Known for his vision, creativity, and technical ability, Rusnák has enjoyed a successful career, particularly during his time at Real Salt Lake, where he became a central figure. Prior to that, he had stints in European football, including with Groningen in the Netherlands. Rusnák has also represented Slovakia at various youth levels and as a senior international.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Albert Rusnák Merchandise</h1>
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

export default AlbertRusnak;
