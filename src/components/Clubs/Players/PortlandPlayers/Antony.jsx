import React from 'react';

const Antony = () => {
  const items = [
    { id: 1, title: "Antony Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Antony Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Antony Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Portland Timbers Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Antony Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Antony Alves Santos</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/antony.jpg' 
            alt='Antony Alves Santos' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team Portland Timbers | Copyright: 2025 Team Portland Timbers</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> September 8, 2001 (Brazil)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
            <li><strong>Current Team:</strong> Portland Timbers</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Joinville (2018–2023): 10 appearances, 0 goals</li>
                <li>Corinthians (loan, 2021): 3 appearances, 0 goals</li>
                <li>Arouca (loan, 2021–2023): 54 appearances, 8 goals</li>
                <li>Arouca (2023): 0 appearances, 0 goals</li>
                <li>Portland Timbers (2023–present): 19 appearances, 45 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Antony Alves Santos</h2>
          <p>
            Antony Alves Santos, known simply as Antony, is a dynamic winger with a knack for scoring goals and creating opportunities for his teammates. Having started his career with Joinville, Antony gained significant experience while on loan at Corinthians and Arouca before joining the Portland Timbers. With his impressive pace, dribbling skills, and finishing ability, Antony has quickly made his mark in Major League Soccer (MLS).
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Antony Alves Santos Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
>
  Buy Now
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Antony;
