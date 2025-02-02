import React from 'react';

const CristianRoldan = () => {
  const items = [
    { id: 1, title: "Cristian Roldan Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Cristian Roldan Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Cristian Roldan Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Seattle Sounders FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Cristian Roldan Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cristian Roldan</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVBB6pHSdOyooVNbUjLO6ekf3Vpk7q5fBfg&s' 
            alt='Cristian Roldan' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Abbie Parr 
| 
Credit: Getty Images
Copyright: 2021 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> June 3, 1995 (Artesia, California, United States)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 8 in (1.72 m)</li>
            <li><strong>Current Team:</strong> Seattle Sounders FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Washington Crossfire (2013–2014): 13 appearances, 6 goals</li>
                <li>Seattle Sounders FC 2 (2015): 1 appearance, 0 goals</li>
                <li>Seattle Sounders FC (2015–present): 276 appearances, 36 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Cristian Roldan</h2>
          <p>
            Cristian Roldan is a talented midfielder who currently plays for Seattle Sounders FC in Major League Soccer. A product of the Washington Huskies, Roldan’s versatility and work rate have made him a key player for the Sounders and the United States national team. Known for his leadership on the field, he has been an essential part of Seattle's success, winning multiple MLS titles and earning international caps for the USMNT.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cristian Roldan Merchandise</h1>
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

export default CristianRoldan;
