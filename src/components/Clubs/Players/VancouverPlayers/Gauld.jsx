import React from 'react';

const RyanGauld = () => {
  const items = [
    { id: 1, title: "Ryan Gauld Vancouver Whitecaps Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Ryan Gauld Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Ryan Gauld Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Vancouver Whitecaps Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Ryan Gauld Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Ryan Gauld</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.rangersnews.uk/uploads/24/2024/03/GettyImages-1717990663-1140x760.jpg' 
            alt='Ryan Gauld' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jordan Jones 
| 
Credit: Getty Images
Copyright: 2023 Jordan Jones</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> December 16, 1995 (Aberdeen, Scotland)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 5 ft 6 in (1.68 m)</li>
            <li><strong>Current Team:</strong> Vancouver Whitecaps</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Dundee United (2012–2014): 42 appearances, 7 goals</li>
                <li>Sporting CP B (2014–2019): 73 appearances, 8 goals</li>
                <li>Sporting CP (2014–2019): 2 appearances, 0 goals</li>
                <li>Vitória de Setúbal (2016–2017, loan): 5 appearances, 0 goals</li>
                <li>Aves (2017–2018, loan): 18 appearances, 1 goal</li>
                <li>Farense (2018–2019, loan): 12 appearances, 2 goals</li>
                <li>Hibernian (2019, loan): 5 appearances, 0 goals</li>
                <li>Farense (2019–2021): 54 appearances, 18 goals</li>
                <li>Vancouver Whitecaps (2021–present): 108 appearances, 33 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Ryan Gauld</h2>
          <p>
            Ryan Gauld is a Scottish attacking midfielder, currently playing for Vancouver Whitecaps in Major League Soccer. Known for his technical ability and vision, Gauld began his career at Dundee United before making a move to Sporting CP in Portugal, where he spent several years playing for the B team and had multiple loan spells. He later moved to Farense, where he gained more first-team experience. In 2021, he joined Vancouver Whitecaps, where he has become an integral part of the team’s attack.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Ryan Gauld Merchandise</h1>
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

export default RyanGauld;
