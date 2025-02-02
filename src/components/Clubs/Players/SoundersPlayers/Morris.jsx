import React from 'react';

const JordanMorris = () => {
  const items = [
    { id: 1, title: "Jordan Morris Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Jordan Morris Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Jordan Morris Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Seattle Sounders FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Jordan Morris Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Jordan Morris</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-2090010997/crop/MM5DENBQGA5DCNRQGE5G433XMU5DKNRWHIYTAMA=/GettyImages-2090010997.jpg?auto=webp&format=pjpg&width=3840&quality=60' 
            alt='Jordan Morris' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Steph Chambers 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> October 26, 1994 (Seattle, Washington, United States)</li>
            <li><strong>Position:</strong> Winger, Forward</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> Seattle Sounders FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Seattle Sounders FC U23 (2014): 4 appearances, 1 goal</li>
                <li>Seattle Sounders FC (2016–present): 196 appearances, 66 goals</li>
                <li>Swansea City (2021): 4 appearances, 0 goals (loan)</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Jordan Morris</h2>
          <p>
            Jordan Morris is a talented forward and winger, known for his pace and versatility on the field. Born and raised in Seattle, Morris made a name for himself at Stanford University before being drafted by Seattle Sounders FC. He has been a key player for the Sounders, contributing to their successes in Major League Soccer. Morris also represents the United States national team, making significant appearances in both international friendlies and competitions.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Jordan Morris Merchandise</h1>
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

export default JordanMorris;
