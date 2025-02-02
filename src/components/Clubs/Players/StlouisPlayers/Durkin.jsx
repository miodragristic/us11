import React from 'react';

const ChrisDurkin = () => {
  const items = [
    { id: 1, title: "Chris Durkin St. Louis City Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Chris Durkin Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Chris Durkin Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "St. Louis City Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Chris Durkin Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Chris Durkin</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://s3.amazonaws.com/assets.thisisasn.com/production/attacheds/13170/original/Chris_Durkin_-_ASN_TOP_-_ISI_-_2019_U-20_WC_vs_Ecuador_-_Adam_Nurkiewicz.jpg?1569464355' 
            alt='Chris Durkin' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Adam Nurkiewicz 
| 
Credit: Adam Nurkiewicz/isiphotos.com
Copyright: Adam Nurkiewicz/isiphotos.com</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> February 8, 2000 (Hampton, Virginia, United States)</li>
            <li><strong>Position:</strong> Defensive midfielder</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> St. Louis City SC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Richmond Kickers (2015): 1 appearance, 0 goals</li>
                <li>D.C. United (2016–2020): 36 appearances, 1 goal</li>
                <li>Richmond Kickers (2016–2017, loan): 14 appearances, 0 goals</li>
                <li>Sint-Truiden (2019–2020, loan): 13 appearances, 1 goal</li>
                <li>Sint-Truiden (2020–2022): 55 appearances, 1 goal</li>
                <li>D.C. United (2022–2023): 60 appearances, 4 goals</li>
                <li>St. Louis City (2024–present): 28 appearances, 1 goal</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Chris Durkin</h2>
          <p>
            Chris Durkin is an American professional footballer who plays as a defensive midfielder for St. Louis City SC in Major League Soccer (MLS). Born in Hampton, Virginia, Durkin began his career with Richmond Kickers before moving to D.C. United and spending time on loan at Sint-Truiden. Known for his work ethic and defensive presence, he has become a key figure in St. Louis City's midfield.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Chris Durkin Merchandise</h1>
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

export default ChrisDurkin;
