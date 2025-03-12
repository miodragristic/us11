import React from 'react';

const TomasOstrak = () => {
  const items = [
    { id: 1, title: "Tomáš Ostrák St. Louis SC Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Tomáš Ostrák Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Tomáš Ostrák Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "St. Louis SC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Tomáš Ostrák Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Tomáš Ostrák</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://s3.amazonaws.com/assets.thisisasn.com/production/attacheds/13170/original/Chris_Durkin_-_ASN_TOP_-_ISI_-_2019_U-20_WC_vs_Ecuador_-_Adam_Nurkiewicz.jpg?1569464355' 
            alt='Tomáš Ostrák' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Herbert Bucco 
| 
Credit: Herbert Bucco
Copyright: (c) Herbert Bucco</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> February 5, 2000 (Frýdek-Místek, Czech Republic)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.76 m)</li>
            <li><strong>Current Team:</strong> St. Louis City SC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>1. FC Köln (2019–2022): 5 appearances, 0 goals</li>
                <li>TSV Hartberg (2019–2020, loan): 6 appearances, 0 goals</li>
                <li>MFK Karviná (2020–2021, loan): 26 appearances, 1 goal</li>
                <li>St. Louis City 2 (2022): 7 appearances, 1 goal</li>
                <li>St. Louis City SC (2023–present): 14 appearances, 2 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Tomáš Ostrák</h2>
          <p>
            Tomáš Ostrák is a Czech professional footballer who plays as a midfielder for St. Louis City SC in Major League Soccer (MLS). Born in Frýdek-Místek, Czech Republic, Ostrák started his career at 1. FC Köln, but spent a significant portion of his early career on loan at clubs like TSV Hartberg and MFK Karviná. Known for his technical ability and midfield versatility, he made his mark in MLS with St. Louis City SC, contributing to both the midfield and the attack.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Tomáš Ostrák Merchandise</h1>
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

export default TomasOstrak;
