import React from 'react';

const RobinJansson = () => {
  const items = [
    { id: 1, title: "Robin Jansson Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Jansson Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Robin Jansson Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Orlando City Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Robin Jansson Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Robin Jansson</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.sheffieldwednesday.news/uploads/8/2024/07/GettyImages-2160330033-1024x683.jpg' 
            alt='Robin Jansson' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Alex Menendez 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> November 15, 1991 (Trollhättan, Sweden)</li>
            <li><strong>Position:</strong> Centre-back</li>
            <li><strong>Height:</strong> 6 ft 1 in (1.86 m)</li>
            <li><strong>Current Team:</strong> Orlando City</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>BK Häcken (2010–2011): 0 appearances, 0 goals</li>
                <li>FC Trollhättan (loan, 2011): 1 appearance, 0 goals</li>
                <li>Bengtsfors IF (2012–2015): 64 appearances, 55 goals</li>
                <li>IK Oddevold (2016–2018): 46 appearances, 2 goals</li>
                <li>AIK (2018–2019): 25 appearances, 2 goals</li>
                <li>Orlando City (2019–present): 164 appearances, 5 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Sweden: 1 appearance, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Robin Jansson</h2>
          <p>
            Robin Jansson is a Swedish centre-back known for his leadership and defensive skills. Starting his career at the youth level in Sweden, he played for several clubs, including AIK and Orlando City. Jansson has been an integral part of Orlando City's defense and has earned his place in the Swedish national team. His experience and determination make him a key player for both his club and country.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Robin Jansson Merchandise</h1>
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

export default RobinJansson;
