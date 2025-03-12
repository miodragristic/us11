import React from 'react';

const LewisMorgan = () => {
  const items = [
    { id: 1, title: "Lewis Morgan Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Lewis Morgan Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Lewis Morgan Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "New York Red Bulls Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Lewis Morgan Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Lewis Morgan</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://worldfootballindex.com/wp-content/uploads/2022/06/Lewis-Morgan-New-York-Red-Bulls.jpg' 
            alt='Lewis Morgan' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: VAUGHN RIDLEY 
| 
Credit: Getty Images
Copyright: 2022 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> September 30, 1996 (Greenock, Scotland)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
            <li><strong>Current Team:</strong> New York Red Bulls</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>St Mirren (2014–2018): 79 appearances, 16 goals</li>
                <li>Celtic (2018–2020): 14 appearances, 0 goals</li>
                <li>St Mirren (loan, 2018): 15 appearances, 5 goals</li>
                <li>Sunderland (loan, 2019): 17 appearances, 1 goal</li>
                <li>Inter Miami (2020–2021): 57 appearances, 7 goals</li>
                <li>New York Red Bulls (2022–): 66 appearances, 27 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Scotland U21: 9 appearances, 2 goals</li>
                <li>Scotland: 6 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Lewis Morgan</h2>
          <p>
            Lewis Morgan is a Scottish winger known for his pace and dribbling skills. Born in Greenock, Scotland, he began his professional career with St Mirren, where he gained recognition for his performances. After a brief stint at Celtic, Morgan made an impact at Sunderland on loan, before moving to Inter Miami in Major League Soccer. Currently, he plays for New York Red Bulls, where he continues to be an important part of their attacking lineup.
          </p>
          <p>
            Morgan has also represented Scotland at the U21 level and in the senior team, contributing with his speed and creativity on the wings.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Lewis Morgan Merchandise</h1>
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

export default LewisMorgan;
