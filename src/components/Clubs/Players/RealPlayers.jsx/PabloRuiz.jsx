import React from 'react';

const PabloRuiz = () => {
  const items = [
    { id: 1, title: "Pablo Ruiz Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Pablo Ruiz Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Pablo Ruiz Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Real Salt Lake Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Pablo Ruiz Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Pablo Enrique Ruiz</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://bookingagentinfo.com/wp-content/uploads/2023/12/Pablo-Ruiz-1.jpg' 
            alt='Pablo Ruiz' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Ringo Chiu 
| 
Credit: Shutterstock
Copyright: Copyright (c) 2023 Ringo Chiu/Shutterstock. No use without permission.</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> December 20, 1998 (Comodoro Rivadavia, Argentina)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 8 in (1.72 m)</li>
            <li><strong>Current Team:</strong> Real Salt Lake</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>San Luis (2017–2018): 10 appearances, 0 goals</li>
                <li>Real Salt Lake (2018–present): 91 appearances, 4 goals</li>
                <li>Real Monarchs (2018–2019, loan): 11 appearances, 0 goals</li>
                <li>Pinzgau Saalfelden (2019, loan): 15 appearances, 9 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Pablo Enrique Ruiz</h2>
          <p>
            Pablo Ruiz is an Argentine midfielder who started his career in his home country before joining Real Salt Lake in Major League Soccer. Known for his creative playmaking abilities, Ruiz has been a regular contributor for Real Salt Lake since his arrival. Additionally, he spent time on loan at clubs like Real Monarchs and Pinzgau Saalfelden, where he honed his skills. Ruiz has also represented Argentina at the U17 level, showcasing his talent early in his career.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Pablo Ruiz Merchandise</h1>
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

export default PabloRuiz;
