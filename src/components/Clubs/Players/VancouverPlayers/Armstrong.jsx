import React from 'react';

const StuartArmstrong = () => {
  const items = [
    { id: 1, title: "Stuart Armstrong Vancouver Whitecaps Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Stuart Armstrong Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Stuart Armstrong Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Vancouver Whitecaps Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Stuart Armstrong Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Stuart Armstrong</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1656311673001-MA3KT4Y0MCW73OO1XEM1/2022-06-26+Andres+Cubas.jpg' 
            alt='Stuart Armstrong' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Christopher Vose 
          Copyright: Christopher Vose</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 30, 1992 (Inverness, Scotland)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> Vancouver Whitecaps</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Dundee United (2010–2015): 126 appearances, 18 goals</li>
                <li>Celtic (2015–2018): 98 appearances, 23 goals</li>
                <li>Southampton (2018–2024): 191 appearances, 21 goals</li>
                <li>Vancouver Whitecaps (2024–present): 6 appearances, 1 goal</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Stuart Armstrong</h2>
          <p>
            Stuart Armstrong is a Scottish midfielder currently playing for Vancouver Whitecaps in Major League Soccer. He began his professional career with Dundee United, where he made over 120 appearances and scored 18 goals. His success earned him a move to Celtic, where he won multiple domestic titles and continued to impress with his technical ability. In 2018, Armstrong joined Southampton in the English Premier League, where he established himself as a key figure. After several years in the Premier League, he moved to Vancouver Whitecaps in 2024 to continue his career in MLS.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Stuart Armstrong Merchandise</h1>
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

export default StuartArmstrong;
