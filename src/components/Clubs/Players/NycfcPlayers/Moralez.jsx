import React from 'react';

const MaxiMoralez = () => {
  const items = [
    { id: 1, title: "Maxi Moralez Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Maxi Moralez Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Maxi Moralez Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "New York City FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Maxi Moralez Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Maximiliano Moralez</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn.eleco.com.ar/media/2022/12/deportes_32.jpg' 
            alt='Maximiliano Moralez' 
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
            <li><strong>Full Name:</strong> Maximiliano Nicolás Moralez</li>
            <li><strong>Date of Birth:</strong> 27 February 1987 (Granadero Baigorria, Argentina)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 5 ft 3 in (1.60 m)</li>
            <li><strong>Current Team:</strong> New York City FC</li>
            <li><strong>Youth Career:</strong> Racing</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Racing (2005–2007, 2008 loan, 2023): 105 appearances, 17 goals</li>
                <li>FC Moscow (2007–2009): 6 appearances</li>
                <li>Vélez Sársfield (2009–2011): 72 appearances, 20 goals</li>
                <li>Atalanta (2011–2015): 142 appearances, 18 goals</li>
                <li>León (2016–2017): 34 appearances, 6 goals</li>
                <li>New York City FC (2017–2022, 2023–): 183 appearances, 27 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> Argentina U20 (2007): 16 appearances, 5 goals; Argentina (2011): 1 appearance</li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Maxi Moralez</h2>
          <p>
            Maximiliano Moralez, widely known as "Maxi," is an experienced attacking midfielder from Argentina. Known for his creativity, vision, and technical prowess, Moralez has had a long and illustrious career playing in various top leagues worldwide.
          </p>
          <p>
            After successful stints in Argentina, Italy, and Mexico, Maxi became a key player for New York City FC in Major League Soccer, contributing significantly to the team's success over the years. Despite his smaller stature, he has consistently been a giant on the field.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Maxi Moralez Merchandise</h1>
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

export default MaxiMoralez;
